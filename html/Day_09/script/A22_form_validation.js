"use strict";       // 자유로운 JavaScript를 Java처럼 문법을 엄격히 처리해 달라는 것

// 이벤트 소스 얻어오기
document.getElementById("join").addEventListener('click', joinCheck);
document.getElementById("userid").addEventListener('keyup', idCheck);
document.getElementById("email2").addEventListener('change', emailCheck);

// 이벤트 핸들러
function idCheck() {
    let userid = document.getElementById("userid");
    let idcheck = document.getElementById("idcheck");
    if (userid.value.trim().length < 3 || userid.value.trim().length > 5) {
        idcheck.style.color = "red";
        idcheck.innerText = "아이디는 영문, 숫자 포함 3-5글자로 입력해 주세요.";
        return;
    }
    idcheck.innerText = "";
}

function joinCheck() {
    // 1) 이름 길이 체크
    let username = document.getElementById("username");         // 태그만 가져온 상태 -> 값 추출 필요
    if (username.value.trim().length < 3 || username.value.trim().length > 5) {         // 값 추출 - 공백 삭제 -
        alert("이름은 실명으로 3-5글자로 입력해 주세요.");
        username.select();
        return;
    }

    // 2) 아이디 길이 체크
    let userid = document.getElementById("userid");
    if (userid.value.trim().length < 3 || userid.value.trim().length > 5) {
        alert("아이디는 영문, 숫자 포함 3-5글자로 입력해 주세요.");
        userid.select();
        return;
    }

    // 3) 비밀번호 길이 체크
    let userpwd = document.getElementById("userpwd");
    // userpwdcheck.value = "";     // 비동기통신으로 각각 체크할 때에는 있는 게 좋음
    if (userpwd.value.trim().length < 3 || userpwd.value.trim().length > 5) {
        alert("비밀번호는 영문, 숫자 포함 3-5글자로 입력해 주세요.");
        userpwd.select();
        return;
    }

    // 4) 패스워드 확인 체크
    let userpwdcheck = document.getElementById("userpwdcheck");
    if (userpwd.value.trim() != userpwdcheck.value.trim()) {
        alert("비밀번호는 비밀번호 확인 값과 일치해야 합니다.");
        userpwdcheck.value = "";
        userpwdcheck.focus();
        return;
    }



    // 5-1) 전화번호 맨 앞자리 얻어 오기
    let phone1 = document.getElementById("phone1").value;       // 문자열 얻어냄

    // 5-2) 전화번호 중간 자리 얻어 오기
    let phone2 = document.getElementById("phone2");             // 태그 얻어냄
    if (isNaN(phone2.value) || phone2.value.trim().length != 3) {
        alert("전화번호를 정확히 입력해 주세요.");
        phone2.select();
        return;
    }

    // 5-3) 전화번호 마지막 자리 얻어 오기
    let phone3 = document.getElementById("phone3");             // 태그 얻어냄
    if (isNaN(phone3.value) || phone3.value.trim().length != 4) {
        alert("전화번호를 정확히 입력해 주세요.");
        phone3.select();
        return;
    }

    let phone = phone1 + phone2.value + phone3.value;


    // 이메일 처리하는 부분은 다른 함수로 전이
    // 6-1) 이메일 앞자리 얻어 오기
    let email1 = document.getElementById("email1");
    if (email1.value.trim().length == 0) {
        alert("이메일을 정확히 입력해 주세요.");
        email1.select();
        return;
    }

    // 6-3) 이메일 뒷자리 얻어 오기
    let email3 = document.getElementById("email3");
    if (email3.value.trim().length == 0) {
        alert("이메일을 정확히 입력해 주세요.");
        email3.select();
        return;
    }

    let email = email1.value + '@' + email3.value;


    // 7) 주소 + 상세 주소 부분 얻어 오기
    let addr1 = document.getElementById("addr1").value;
    let addr2 = document.getElementById("addr2");

    if (addr2.value.trim().length == 0) {
        alert("상세 주소를 입력해 주세요.");
        addr2.focus();
        return;
    }

    let address = `${addr1} ${addr2.value}`;


    // 8) 사이트를 알게 된 경로
    // let p = document.querySelectorAll("input[type='checkbox'].path:checked");
    let p = document.querySelectorAll("input[name='path']:checked");
    let path = '';
    p.forEach(function (item) {
        path += item.value + " ";
    })



    // 9) 수신 여부 확인
    // let receive = document.querySelector("input[type='radio'].receive:checked").value;
    let receive = document.querySelector("input[name='receive']:checked").value;


    // 10) 카카오톡 수신 동의 확인
    let kakao = document.querySelector("input[name='kakaotalk']:checked");
    let kakaoreceive = false;
    if (kakao == null) {
        kakaoreceive = false;
    } else {
        kakaoreceive = true;
    }


    // 최종 결과물을 출력하는 코드
    let finalResult = '<ul>';
    finalResult += `<li>이름: ${username.value}</li>`
    finalResult += `<li>아이디: ${userid.value}</li>`
    finalResult += `<li>비밀번호: ${userpwd.value}</li>`
    finalResult += `<li>연락처: ${phone}</li>`
    finalResult += `<li>이메일: ${email}</li>`
    finalResult += `<li>주소: ${address}</li>`
    finalResult += `<li>사이트를 알게 된 경로: ${path}</li>`
    finalResult += `<li>이메일 수신: ${receive}</li>`
    finalResult += `<li>카카오톡 수신 동의: ${kakaoreceive ? "동의" : "미동의"}</li>`
    finalResult += '</ul>'

    document.getElementById("final").innerHTML = finalResult;
}


// 이메일 중간 부분의 상태가 변화되면 발생하는 처리 함수
function emailCheck() {
    // 6-2) 이메일 중간 자리 얻어 오기
    let email2 = document.getElementById("email2");

    // 사용자가 이메일을 다른 사이트 선택한 경우, 그 값을 email3에 넣는다.
    if (email2.value.length != 0) {
        document.getElementById("email3").value = email2.value;
    } else {
        document.getElementById("email3").value = "";
    }
}
