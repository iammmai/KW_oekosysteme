import { Flock } from "./Flock.js";
import { Example } from "./BeispielWesen.js";
import { Boid } from "./Boid.js";

// Globale Valiablen
const CANVAS_SIZE = 800;
let flock;

// Die Setup wird 1mal am Anfang ausgefuehrt.
// Hier definiert ihr Anfangskonfigurationen wie z.B. die Groesse des Canvas
window.setup = function () {
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  flock = new Flock();
  // Add an initial set of boids into the system
  for (let i = 0; i < 100; i++) {
    let b = new Example(width / 2, height / 2);
    flock.addBoid(b);
  }
};

// Die Draw-Funktion wird in einer Endlos-Schleife ausgefuehrt. Hier definiert ihr den Groessteil eures Sketches.
window.draw = function () {
  background(220);
  flock.run();
};
