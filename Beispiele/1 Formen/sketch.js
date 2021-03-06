// Globale Valiablen
let img;

// Die Setup wird 1mal am Anfang ausgefuehrt.
// Hier definiert ihr Anfangskonfigurationen wie z.B. die Groesse des Canvas
window.setup = function () {
  createCanvas(800, 800);
};

window.preload = function () {
  img = loadImage("cat.png");
};

// Die Draw-Funktion wird in einer Endlos-Schleife ausgefuehrt. Hier definiert ihr den Groessteil eures Sketches.
window.draw = function () {
  background(220);

  // Die Funktion ellipse(x, y, w, h) wird mit den Parametern x,y - Koordinaten und Breite, Hoehe aufgerufen
  fill(color(255, 0, 0));
  ellipse(50, 50, 55, 55);

  // rect(x,y,w,h) erstellt ein Rechteck
  fill(color(0, 0, 255));
  rect(100, 50, 55, 55);

  drawGreenSquare(200, 50);
  image(img, 300, 50);
};

// hier definieren wir uns eine Funktion, die ein gruenes Rechteck zeichnet
function drawGreenSquare(x, y) {
  fill(color(0, 255, 0));
  noStroke();
  rect(x, y, 55, 55);
}
