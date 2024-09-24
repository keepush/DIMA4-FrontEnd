/*
    1) 함수의 정의 (선언함수)
        function 함수명([파라미터 선언부]) {
            실행문;
            [return 데이터];
        }

    2) 호출(call)
        함수명([argument]);

    3) 함수의 정의 (표현함수)
        let 변수명 = function([파라미터 선언부]) {
            실행문;
            [return 데이터];
        }

    4) 호출(call)
        변수명([argument]);
*/

// 예제
function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

// let temp = plus;
// temp(10, 20);

function proxy(func, a, b) {
    return func(a, b);
}

let result = proxy(plus, 11, 21);
console.log(`결과: ${result}`);

let result2 = proxy(minus, 11, 21);
console.log(`결과: ${result2}`);

// DOM에 접근하는 함수
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let clock = document.getElementById('clock');

// 시스템 시간을 얻어오는 함수 (event handler)
function makeHour() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let data = `<span style="color:pink;">${hour}시 ${minute}분 ${second}초</span>`;
    clock.innerHTML = data;
}

// makeHour(); // 이벤트와 상관없이 시간을 화면에 출력함

let timer = '';
start.addEventListener('click', function () {
    timer = setInterval(function () {
        makeHour();
    }, 1000);
});
// interval()는 millisecond 기준

stop.addEventListener('click', function () {
    clearInterval(timer);
    alert("시간 멈춤");
})