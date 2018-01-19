var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var drawArea = document.getElementById('draw');
var papel = drawArea.getContext("2d");

var colorLine = document.getElementById("colorLine");
var btnClear = document.getElementById('btnClear');

btnClear.addEventListener("click", clearDrawArea);
drawArea.style.cursor = "pointer";
document.addEventListener("keyup", dibujarFlechas);
drawArea.addEventListener("mousedown", statusClick, false);
drawArea.addEventListener("mouseup", statusUnClick, false);

var x, y;
var status = false;

drawLine(colorLine, x-1, y-1, x+1, y+1, papel);

function drawLine(color, xi, yi, xf, yf, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 5;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarFlechas(event) {
  var colorcito = colorLine.value;
  var desplazamiento = 5;
  switch (event.keyCode) {
    case teclas.LEFT:
      drawLine(colorcito, x, y, x - desplazamiento, y, papel);
      x -= desplazamiento;
      break;
    case teclas.UP:
      drawLine(colorcito, x, y, x, y - desplazamiento, papel);
      y -= desplazamiento;
      break;
    case teclas.RIGHT:
      drawLine(colorcito, x, y, x + desplazamiento, y, papel);
      x += desplazamiento;
      break;
    case teclas.DOWN:
      drawLine(colorcito, x, y, x, y + desplazamiento, papel);
      y += desplazamiento;
      break;
  }
}

function dibujarMouse(event) {
  drawLine(colorLine.value, x, y, event.x, event.y, papel);
  x = event.x;
  y = event.y;
}

function statusClick(event) {
  drawArea.addEventListener("mousemove", dibujarMouse, false);
}

function statusUnClick(event) {
  x = event.x;
  y = event.y;
  drawArea.removeEventListener("mousemove", dibujarMouse, false);
}

function clearDrawArea() {
  papel.clearRect(0, 0, drawArea.width, drawArea.height);
}
