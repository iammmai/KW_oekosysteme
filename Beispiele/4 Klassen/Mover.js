import { CANVAS_SIZE } from "./sketch.js";

export class Mover {
  constructor(x, y, r, c) {
    this.loc = new p5.Vector(x, y);
    this.vel = new p5.Vector(0, random(5));
    this.rad = r;
    this.col = c;
  }

  display() {
    ellipseMode(RADIUS);
    fill(this.col);
    noStroke();
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

  move() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  }

  checkEdges() {
    if (this.loc.x < this.rad || this.loc.x > CANVAS_SIZE - this.rad) {
      this.vel.x *= -1;
    } else if (this.loc.y < this.rad || this.loc.y > CANVAS_SIZE - this.rad) {
      this.vel.y *= -1;
    }
  }
}

// weitere Aufgaben:
// aendere die Mover klasse, sodass die Movers unterschiedliche Farben haben koennen
// bzw. unterschiedlich gross sind
// Zusatz: wenn man mit der Maus klickt soll an der Stelle ein Mover erstellt werden
// https://p5js.org/reference/#/p5/mousePressed
