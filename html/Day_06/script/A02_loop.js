/*
    반복문 / 제어문
    1) 반복문: while do-while for문
        - for문(3종류)
        -continue, break
    2) 제어문: if switch~case문
*/

// 1) 첫 번째 for문
let ary = [1, 2, 3, 4, 5];
for (let i = 0; i < ary.length; ++i) {
    console.log(ary[i]);
}

// 두 번째 for문
console.log("---------- for-in 반복문: 변수에는 인덱스가 추출됨 ----------");
for (let j in ary) {
    console.log(ary[j]);
}

// 세 번째 for문
console.log("---------- for-of 반복문: 변수에 값이 추출됨 ----------");
let cities = ['서울', '도쿄', '뉴욕', '상하이'];
for (let city of cities) {
    console.log(city);
}

// 연습 문제
console.log("---------- 1~50까지 반복하여, 3이나 5의 배수인 경우에만 출력하기 ----------")
for (let i = 0; i <= 50; ++i) {
    if (i % 3 == 0 || i % 5 == 0) {
        console.log(i);
    }
}

// 연산 시 주의
console.log("---------- NaN과 문자열의 산술 연산 ----------");

let x = "10";
let result = 10 / x; // 자동으로 parsing하여 연산
console.log(`문자열 "10"을 산술 연산한 결과: ${result}`);

console.log("------------------------------");
let y = "10!";
let result2 = 10 / y; // 숫자가 아닌 문자가 포함되어 연산 X
console.log(`문자열 "10!"을 산술 연산한 결과: ${result2}`); // 출력 결과: NaN (Not a Number)

console.log("------------------------------");
let z = "10!";
if (isNaN(z)) { console.log("연산 불가능"); } // 문자가 포함되어 있으면 true
else {
    let result3 = 10 / z;
    console.log(`문자열 ${z}를 산술 연산한 결과: ${result3}`);
}

console.log("---------- 0이 입력되는 경우? / 아무것도 입력되지 않은 ''의 경우? ----------");
/*
    - alert("경고문구"): 경고문구가 출력되고 "확인" 버튼 출력
    - prompt(), prompt("메세지"), prompt("메세지", 초기값):
        -> 확인) 입력한 값이 변수에 대입 / 취소) null이 변수에 대입
    - confirm("문구"): 문구가 출력되고 확인 / 취소 출력
*/
let q = prompt("숫자 입력", "6");
if (isNaN(q)) { console.log("연산 불가능"); } // 문자가 포함되어 있으면 true
else {
    let result4 = 10 / q;
    console.log(`문자열 ${q}를 산술 연산한 결과: ${result4}`);
}
console.log("< 0이나 공백이 입력될 경우의 출력 결과: Infinity >")

// confirm(): true / false로 반환
console.log("---------- confirm ----------");
let cf = confirm("처리를 진행할까요?");
console.log(cf);