



const r = 7
//const perimeter_of_circle = 2*PI*r;
const p = 2 * Math.PI * r;
document.write(p);

ctx.beginPath();
ctx.arc(200, 100, 20, 0, Math.Pi * 2)
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();





var ctx = canvas.getAnimation

//global variables
var ballRadius = 10;
var y = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

var paddleHeight = 10;
var paddleWidth = 75;
paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 5;
var brickColumnCount = 3;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 39;
var score = 0;
var lives = 3;
var brick = [];
for (c = 0; c < brickColumnCount; c++) {
    brick[c] = [];
    for (r = 0; c < brickColumnCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }
    }
}



document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)
document.addEventListener("mousemove", mouseMove, false)





const canvas = document.getElementById
let ctx = canvas.getContext("2d");

ctx.fillstyle = "blue";
ctx.fillRect(20, 20, 100, 80);


ctx.beginPath();
ctx.lineWidth = "5";
ctx.strokeStyle = "red";
ctx.moveto(0, 75);
ctx.lineTo(250, 75);
ctx.stroke()

















console.log("Hello World");

const canvas = document.getElementById('myCanvas');
//const buton = document.getElementById('btn');

function changeRed() {
    canvas.style.backgroundColor = "green";
}

document.getElementById('btn').addEventListener("click", changeRed); { }


