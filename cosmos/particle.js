class Particle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x += random(-8,8);
    this.y += random(-8,8);
    this.x = constrain(this.x, 0, canvasWidth);
    this.y = constrain(this.y, 0, canvasHeight);
  }
  //should add a show function in here maybe
}
