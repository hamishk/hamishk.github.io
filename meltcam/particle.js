class Particle {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  update() {
    this.x += random(-20,20);
    this.y += random(-20,20);

    this.x = constrain(this.x, 0, canvasWidth);
    this.y = constrain(this.y, 0, canvasHeight);
  }
  //should add a show function in here maybe
}
