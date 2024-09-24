/*-------------------------
    문자열 관련 메소드
    문자열의 특징: sequence 데이터이면서 immutable한 타입

    1) charAt(index), at(index) : 전달된 인덱스 위치의 문자 1개 반환
    2) startsWith(str), endsWith(str), inclues(str), search(str)
    3) replace(m, n) : 문자열 m을 찾아 n으로 수정
    4) slice(index1, index2) : index1~(index2-1)까지 부분 문자열 반환
    5) substr() : 부분 문자열 반환. substr()은 ESS 이후에 사용을 권장하지 않음
*/

let data = 'abcdefg';
// charAt() / at()
console.log(data.charAt(3));
console.log(data.at(3));


// search()
data = 'Hello, world! Welcome to the Javascript';
console.log(data.startsWith('Hello'));      // boolean으로 반환
console.log(data.endsWith('!'));            // boolean으로 반환
console.log(data.includes('world'));        // boolean으로 반환
console.log(data.search('world'));          // 찾는 글자의 인덱스 반환


// replace(m, n)
let text = data.replace('Hello', 'Hi');
console.log('원본: ', data);
console.log('변경: ', text);


// slice(m, n)
console.log(data.slice(5, 10));     // ', wor' 반환
console.log(data.slice(-5, -1));    // 'ript' -1은 가장 마지막 데이터

// slice 사용 시 주의 사항 (앞 < 뒤), 에러도 없고, 데이터도 없다.
console.log(data.slice(10, 5));
console.log(data.slice(-1, -5));


// substring(m, n) : 부분문자열을 추출, 음수 사용 불가
console.log(data.substring(5, 10));     // ', wor' 출력
console.log(data.substring(10, 5));     // 앞 < 뒤로 하지 않아도 됨


// split(str) : 문자열의 토큰화, 반환 타입은 배열
let arr = data.split(' ');
console.log(typeof arr);        // obj
console.log(arr.length);        // 길이는 6


// trim() : 문자열 앞, 뒤의 공백 문자를 제거
data = '    Hello~      ';
console.log('문자열의 길이: ', data.length);
console.log('trim() 문자열의 길이: ', data.trim().length);