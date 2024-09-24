// event sourse
let btn = document.getElementById("btn");
// btn.onmouseenter = changecolor;
// btn.onmouseover = changecolor; // 이벤트 버블링(처리) 때문에 사용 자제
btn.onclick = changecolor;

// event target
let theBody = document.getElementById("theBody");

// event handler
let cnt = 0;
function changecolor() {
    let color = ["lemonchiffon", "skyblue", "pink", "aliceblue"];
    theBody.style.backgroundColor = color[cnt];
    cnt++;
    if (cnt >= color.length) cnt = 0;
}