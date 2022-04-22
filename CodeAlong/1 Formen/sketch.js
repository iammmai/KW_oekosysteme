// Die Setup wird 1mal am Anfang ausgefuehrt.
// Hier definiert ihr Anfangskonfigurationen wie z.B. die Groesse des Canvas
window.setup = function () {
  createCanvas(800, 800);
};

window.preload = function () {};

let x = 100;
let y = 100;
// Die Draw-Funktion wird in einer Endlos-Schleife ausgefuehrt. Hier definiert ihr den Groessteil eures Sketches.
window.draw = function () {
  background(color(255, 8, 45));

  fill(color(119, 21, 232));
  rect(100, 100, 50, 50);

  fill(color(119, 21, 232));
  rect(200, 100, 50, 50);

  x = x + 1;
  y = y + 1;
  fill(color(119, 21, 232));
  ellipse(x, y, 50, 50);
};
