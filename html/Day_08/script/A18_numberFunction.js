// Number 클래스 : 숫자를 다루는 클래스

// 1) 문자열을 숫자로 변환
console.log('------------------ Number()');
let data = "2.5";
let temp = Number(data);

console.log(temp, typeof temp);

let data2 = "2.5a7";
temp = Number(data2);           // NaN
console.log(temp);


// 2) 문자열을 숫자로 변환하는 다른 메소드 (변호나 가능한 부분까지 변환 실시)
console.log('------------------ parseInt(data)');
console.log(parseInt(data));            // 2
console.log(parseFloat(data));          // 2.5
console.log(parseFloat(data2));         // 2.5


// 3) 자바스크립트의 최대, 최솟값을 확인
console.log(`Float형 최댓값: ${Number.MAX_VALUE}`);
console.log(`Float형 최댓값: ${Number.MIN_VALUE}`);