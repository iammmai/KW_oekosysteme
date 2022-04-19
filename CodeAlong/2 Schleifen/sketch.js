// Globale Valiablen
const NUM_SQUARES = 20;
const CANVAS_SIZE = 800;
const SMALL_SQUARE_SIZE = 30;
const BIG_SQUARE_SIZE = 60;

// Die Setup wird 1mal am Anfang ausgefuehrt.
// Hier definiert ihr Anfangskonfigurationen wie z.B. die Groesse des Canvas
window.setup = function () {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
};

// Die Draw-Funktion wird in einer Endlos-Schleife ausgefuehrt. Hier definiert ihr den Groessteil eures Sketches.
window.draw = function () {
  background(220);
};

// hier definieren wir uns eine Funktion, die ein gruenes Rechteck zeichnet
function drawGreenSquare(x, y, size) {
  fill(color(30, 156, 63));
  noStroke();
  rect(x, y, size, size);
}

function drawSquare(x, y, size, col) {
  fill(col);
  noStroke();
  rect(x, y, size, size);
}
