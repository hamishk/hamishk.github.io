class Particle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x += random(-10,10);
    this.y += random(-10,10);

    this.x = constrain(this.x, 0, canvasWidth);
    this.y = constrain(this.y, 0, canvasHeight);
  }
  //should add a show function in here maybe
}
