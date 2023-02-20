const canvas = document.getElementById("c1");
const ctx = canvas.getContext("2d");
let = myColor = "red";
document.getElementById("color").oninput = function () {
  myColor = this.value;
};
// lines
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = "5";
ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "20";
ctx.moveTo(200, 50);
ctx.lineTo(300, 50);
ctx.lineTo(300, 100);
ctx.lineCap = "round";
//ctx.lineCap = "square";
//ctx.lineCap = "butt";
ctx.stroke();

//clear
ctx.clearRect(0, 0, 400, 200);
// treugolinik
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200, 150);
//ctx.lineTo(50, 150);
ctx.lineWidth = "5";
ctx.lineCap = "butt";
ctx.fillStyle = "yellow";
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.clearRect(0, 0, 400, 200);

////////////////////////////////
// paint
//ctx.fillRect(x - 5, y - 5, 10, 10);
/*canvas.onmousedown = function (event) {
  canvas.onmousemove = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.fillStyle = myColor;
    ctx.fill();
    ctx.fillRect(x - 5, y - 5, 10, 10);
  };
  canvas.onmouseup = function () {
    canvas.onmousemove = null;
  };
};*/

//CIRCLE
const pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "red";
ctx.fillStyle = "yellow";
ctx.arc(150, 100, 75, 0, 2 * pi, false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = "green";
ctx.fillStyle = "pink";
ctx.arc(270, 100, 75, 0, 2 * pi, false);
ctx.stroke();
ctx.fill();
//ctx.arc(x,y,radius,angleStart,angleEnd,anticlockwise;angle -radian)

ctx.clearRect(0, 0, 400, 200);

canvas.onmousemove = function (event) {
  var x = event.offsetX;
  ctx.clearRect(0, 0, 400, 200);
  ctx.beginPath();
  let y = event.offsetY;
  let radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
  ctx.arc(200, 100, radius, 0, 2 * pi, false);
  ctx.stroke();
  ctx.fill();
};
