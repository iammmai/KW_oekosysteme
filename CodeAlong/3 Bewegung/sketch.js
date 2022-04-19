// Globale Valiablen

const CANVAS_SIZE = 800;
let x = 0;
let y = 0;
let xTrans = 1;
let yTrans = 1;

// Die Setup wird 1mal am Anfang ausgefuehrt.
// Hier definiert ihr Anfangskonfigurationen wie z.B. die Groesse des Canvas
window.setup = function () {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
};

// Die Draw-Funktion wird in einer Endlos-Schleife ausgefuehrt. Hier definiert ihr den Groessteil eures Sketches.
window.draw = function () {
  background(220);

};

function drawEllipse(x, y, size, col) {
  fill(col);
  noStroke();
  ellipse(x, y, size, size);
}
