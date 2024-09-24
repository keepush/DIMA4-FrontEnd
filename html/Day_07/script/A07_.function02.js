// 매개변수의 위치에 ... 연산자 사용하기
function add(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);         // 배열로 받아침
    console.log('배열로 받은 데이터 개수: ' + c.length)     // c로 받은 데이터 개수 출력
    console.log(arguments);     // 전달된 데이터의 개수를 갖고 있는 내부 property

    return a + b;
}

// let result = add(10, 20);
// console.log("합계의 결과 " + result);

let result = add(10, 20, 30, 40, 50);
// console.log("합계의 결과-2 " + result);

// ----------------- 2) 함수를 반환하는 함수
function temp() {
    return function () {
        console.log(2 * 3);
    }
}

let x = temp();
x();        // 6 출력

temp()();   // 6


// ----------------- 3) 함수를 반환하는 함수 - 2
function temp2(a, b) {
    let result = a * b;
    console.log(result);

    return function () {
        return result;
    }
}

console.log(temp2(2, 3)());