import { Mover } from "./Mover.js";
// Globale Valiablen
export const CANVAS_SIZE = 800;
let movers = [];

// Die Setup wird 1mal am Anfang ausgefuehrt.
// Hier definiert ihr Anfangskonfigurationen wie z.B. die Groesse des Canvas
window.setup = function () {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
};

// Die Draw-Funktion wird in einer Endlos-Schleife ausgefuehrt. Hier definiert ihr den Groessteil eures Sketches.
window.draw = function () {
  background(220);
};
