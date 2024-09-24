// 1) defer 없는 상태의 스크립트 코드가 실행되었을 때
let btn = document.getElementById("btn"); // HTML Object
let del = document.getElementById("del"); // HTML Object
let printStar = document.getElementById("printStar"); // HTML Object
let printStar2 = document.getElementById("printStar2"); // HTML Object
// console.log(btn);

btn.onclick = write;
del.onclick = remove;
printStar.onclick = print;
printStar2.onclick = star;

function write() {
    let result = document.getElementById("result");
    let data = "<h3 style='color:red;'>클릭</h3>";

    result.innerHTML = data;
};

function remove() {
    let result = document.getElementById("result");
    result.innerHTML = "";
}

function print() {
    let result = document.getElementById("result");
    let image = "<img src='../images/star.jpg' alt='별' width='300px' height='auto'>";

    result.innerHTML = image;
}

function star() {
    let result = document.getElementById("result");
    let data = '';
    for (let i = 0; i < 5; ++i) {
        for (let j = 0; j < (i + 1); ++j) // j = 별 / i = 줄 이므로, 0번째 줄에서 별 1개 -> j < (i + 1)
            data += "*";
        data += "<br>"
    }
    result.innerHTML = data; // 끝태그가 없으면 inner HTML 사용 불가능
}