// 난수 발생
let red = Math.floor((Math.random() * 256));
let green = Math.floor((Math.random() * 256));
let blue = Math.floor((Math.random() * 256));
console.log(red);

// `rgb(red, green, blue)`

let color = ["lemonchiffon", "skyblue", "pink", "aliceblue"];
let current = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = color[current];
    current = color.length;
}

// 5초마다 changeBackgroundColor 함수를 호출
setInterval(changeBackgroundColor, 5000);
