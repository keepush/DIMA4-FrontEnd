document.getElementById("submit").addEventListener('click', Check);

function Check() {
    // 이름 체크
    let name = document.getElementById("name");
    if (name.value.trim().length === 0) {
        alert("이름을 입력하세요");
        name.focus(); // select() 대신 focus()를 사용
        return;
    }

    // 전화번호 체크
    let phone1 = document.getElementById("phone1").value;
    let phone2 = document.getElementById("phone2").value;
    let phone = phone1 + phone2;

    if (isNaN(phone2) || phone2.length !== 8) {
        alert("-를 제외한 정확한 길이의 숫자만 입력해 주세요.");
        document.getElementById("phone2").focus(); // select() 대신 focus()를 사용
        return;
    }

    // 이메일 체크
    let email = document.getElementById("email").value;
    if (!email.includes('@')) {
        alert("정확한 이메일 타입으로 입력해 주세요");
        document.getElementById("email").focus(); // select() 대신 focus()를 사용
        return;
    }

    // 완성 출력
    let job = document.getElementById("job").value;
    let service = document.querySelector("input[type='radio'].service:checked").value;
    let tools = document.querySelectorAll("input[name='tools']:checked");
    let toolsList = '';
    tools.forEach(function (item) {
        toolsList += item.value + " ";
    });

    let etc = document.getElementById("etc").value;

    let result = "<h2>설문 결과</h2><ul>";
    result += `<li>이름: ${name.value}</li>`;
    result += `<li>전화번호: ${phone}</li>`;
    result += `<li>Email: ${email}</li>`;
    result += `<li>직업: ${job}</li>`;
    result += `<li>가장 많이 사용하는 구글 서비스: ${service}</li>`;
    result += `<li>기능 강화가 필요한 도구: ${toolsList.trim()}</li>`; // toolsList 사용
    result += `<li>남기실 말씀: ${etc}</li>`;
    result += '</ul>';

    document.getElementById("result").innerHTML = result;
}

// 임의의 색 만들기
function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

// 입력 상자 색 지정
let textboxes = document.querySelectorAll('input[type="text"]');
textboxes.forEach(input => {
    input.addEventListener('mouseover', () => {
        input.style.backgroundColor = getRandomColor();
        input.style.opacity = '0.5';
    });

    input.addEventListener('mouseout', () => {
        input.style.backgroundColor = 'white';
        input.style.opacity = '1';
    });
});

let alletc = document.getElementsByTagName("textarea")[0];
alletc.addEventListener('mouseover', () => {
    alletc.style.backgroundColor = getRandomColor();
    alletc.style.opacity = '0.5';
});
alletc.addEventListener('mouseout', () => {
    alletc.style.backgroundColor = 'white';
    alletc.style.opacity = '1';
});