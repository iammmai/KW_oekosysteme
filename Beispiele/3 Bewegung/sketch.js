// Globale Valiablen

const CANVAS_SIZE = 800;
let x = 0;
let y = 0;
let xTrans = 1;
let yTrans = 1;

// Die Setup wird 1mal am Anfang ausgefuehrt.
// Hier definiert ihr Anfangskonfigurationen wie z.B. die Groesse des Canvas
function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
}

// Die Draw-Funktion wird in einer Endlos-Schleife ausgefuehrt. Hier definiert ihr den Groessteil eures Sketches.
function draw() {
  background(220);

  if (x > width) {
    xTrans = -1;
  }
  if (x < 0) {
    xTrans = 1;
  }

  if (y > height || y < 0) {
    yTrans = yTrans * -1;
  }

  x = x + xTrans;
  y = y + yTrans;
  drawEllipse(x, y, 50, color(x % 255, 25, 72));
}

function drawEllipse(x, y, size, col) {
  fill(col);
  noStroke();
  ellipse(x, y, size, size);
}
