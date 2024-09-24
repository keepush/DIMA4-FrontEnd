// 이벤트 소스
let check = document.getElementById("check");

// 이벤트 타겟
let userid = document.getElementById("userid");
let birthday = document.getElementById("birthday");

// 이벤트 소스와 이벤트 핸들러를 연결
check.addEventListener('click', validation);            // 체크 click 시, 함수 validation 연결

// 이벤트 핸들러
function validation() {
    let id = userid.value;
    if (id.includes(' ')) {
        alert("아이디는 한 단어로 입력하시오");
        userid.value = ""           // 데이터 날리는 것
        userid.focus();
        return;
    }
    if (!(id.length >= 5 && id.length <= 10)) {
        alert("5-10 글자로 정확히 입력하시오");
        userid.focus();
        userid.select();
        return;
    }

    let birth = birthday.value;
    if (birth.length != 8 || isNaN(birth)) {            // isNaN => 숫자가 아닌 문자가 포함되어 있다면
        alert("생년월일을 숫자 8자리로 입력하시오");
        birthday.focus();
        birthday.value = "";
        return;
    }

    alert("아이디: " + id + "\n생년월일: " + birth);
}