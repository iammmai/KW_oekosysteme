// Globale Valiablen
const NUM_SQUARES = 20;
const CANVAS_SIZE = 800;
const SMALL_SQUARE_SIZE = 30;
const BIG_SQUARE_SIZE = 60;

// Die Setup wird 1mal am Anfang ausgefuehrt.
// Hier definiert ihr Anfangskonfigurationen wie z.B. die Groesse des Canvas
function setup() {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
}

// Die Draw-Funktion wird in einer Endlos-Schleife ausgefuehrt. Hier definiert ihr den Groessteil eures Sketches.
function draw() {
  background(220);

  // for (let i = 0; i < NUM_SQUARES; i++) {
  //   drawGreenSquare(i * 100, 50, BIG_SQUARE_SIZE);
  // }

  for (let j = 0; j < CANVAS_SIZE / SMALL_SQUARE_SIZE; j++) {
    for (let k = 0; k < CANVAS_SIZE / SMALL_SQUARE_SIZE; k++) {
      // drawGreenSquare(
      //   j * (SMALL_SQUARE_SIZE + 5),
      //   k * (SMALL_SQUARE_SIZE + 5),
      //   SMALL_SQUARE_SIZE
      // );
      drawSquare(
        j * (SMALL_SQUARE_SIZE + 5),
        k * (SMALL_SQUARE_SIZE + 5),
        SMALL_SQUARE_SIZE,
        color(j * 15, k * 10, 200)
      );
    }
  }
}

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
