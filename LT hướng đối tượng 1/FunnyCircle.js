function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

//hàm random chỉ số màu
function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}

function createCircle(x,y) {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random() * 80); //random bán kính hình tròn từ 0-80
    let color = getRandomColor();
    // let x = Math.random() * window.innerWidth; //random vị trí của hình tròn theo chỉ số cửa sổ window
    // let y = Math.random() * window.innerHeight;
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function draw() {
    let x = 10
    let y = 10
    createCircle(x,y)
}

function createMultiCircle() {
    for (let i = 1; i < 25; i++) {
        createCircle();
    }
}

createMultiCircle()
