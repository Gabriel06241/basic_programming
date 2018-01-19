var number_lines = document.getElementById('number_lines');
var button = document.getElementById('btnclickme');

button.addEventListener("click", drawingByClick );

var d = document.getElementById('drawing');
var lienzo = d.getContext("2d");
var width = d.width;

function drawLine(color, xi, yi, xf, yf)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

function drawCircle(x, y, r, ai, af, fill, colorfill)
{
  lienzo.beginPath();
  lienzo.fillStyle = colorfill;
  lienzo.arc(x, y, r, ai * Math.PI, af * Math.PI);
  if (fill) { lienzo.fill(); }
  lienzo.stroke();
  lienzo.closePath();
}

function drawingByClick()
{

  var lines = number_lines.value;
  var l = 0;
  var yi, xf;
  var colorcito = "red";
  var espacio = width / lines;

  for (l = 0; lines > l; ++l)
  {
    yi = espacio * l;
    xf = espacio * l;
    drawLine(colorcito, 0, yi, xf, 300);
    drawCircle(150, 150, 30, 0, 2, 0, "");
    drawCircle(150, 150, 10, 0, 2, 1, "gray");
    //drawLine(colorcito, 300, yi, xf, 0);
    //console.log("Linea " + l);
  }

  drawLine(colorcito, 1, 1, 1, 299);
  drawLine(colorcito, 1, 299, 299, 299);
}
