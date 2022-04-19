import { CANVAS_SIZE } from "./sketch.js";
export class Mover {
  constructor(x, y, r) {
    this.loc = new p5.Vector(x, y);
    this.vel = new p5.Vector(2, 2);
    this.rad = r;
    this.col = color(200, 54, 72);
  }

  display() {
    // TODO
  }

  move() {
    // TODO
  }

  checkEdges() {
    // TODO
  }
}
// weitere Aufgaben:
// aendere die Mover klasse, sodass die Movers unterschiedliche Farben haben koennen
// bzw. unterschiedlich gross sind
// Zusatz: wenn man mit der Maus klickt soll an der Stelle ein Mover erstellt werden
// https://p5js.org/reference/#/p5/mousePressed
