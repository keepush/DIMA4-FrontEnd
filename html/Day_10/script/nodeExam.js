
// 이벤트 타겟
let send = document.getElementById("send").addEventListener('click', plusFunc);


// 이벤트 핸들러
function plusFunc(event) {
    event.preventDefault();         // submit, reset 기본 기능을 삭제함

    let username = document.getElementById("username").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let result = document.getElementById("result");
    let data = `이름: ${username}, 전화번호: ${phone}, 이메일: ${email}<br>`;
    result.insertAdjacentHTML("beforeend", data);

    cleanUp();
}

function cleanUp() {
    document.getElementById("username").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    document.getElementById("username").focus();
}