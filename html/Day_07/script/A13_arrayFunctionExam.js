// 1) ary 안에 1-100 사이의 정수 10개를 발생시켜 추가한다.
// 2) 그 중에 홀수인 데이터의 위치를 찾아서 새로운 배열을 생성한다.
let ary = [];
for (let i = 0; i < 10; ++i) {
    ary.push(Math.ceil(Math.random() * 100));
}
console.log(ary);

let idx = [];
for (let i = 0; i < ary.length; ++i) {
    if (ary[i] % 2 != 0) {
        idx.push(i)
    }
}
console.log(idx);


// ary.forEach((item, index) => {
//     if (!(item % 2)) idx.push(index);
// });
