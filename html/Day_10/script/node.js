// 이벤트 소스
let afterend = document.getElementById("afterend");
let afterbegin = document.getElementById("afterbegin");
let beforeend = document.getElementById("beforeend");
let beforebegin = document.getElementById("beforebegin");

// 이벤트 타깃
let list = document.getElementById("list");
let data = "추가 데이터";

afterend.addEventListener('click', afterendFunc);
afterbegin.addEventListener('click', afterbeginFunc);
beforeend.addEventListener('click', beforeendFunc);
beforebegin.addEventListener('click', beforebeginFunc);



function afterendFunc() {
    list.insertAdjacentHTML('afterend', data);
}

function afterbeginFunc() {
    list.insertAdjacentHTML('afterbegin', data);
}

function beforeendFunc() {
    list.insertAdjacentHTML('beforeend', data);
}

function beforebeginFunc() {
    list.insertAdjacentHTML('beforebegin', data);
}