class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 20;
    this.color = [random(127,255),random(0,255),random(127,255)];
    this.alpha = 255;
    this.xVel = random(-10,10); // ball starts with random x velocity
    this.yVel = -10; //random(0,-10); // ball starts with random y velocity
  }

  refresh() {
    this.refreshX();
    this.refreshY();
    this.fadeOnFloor();
  }
  
  refreshX() {
    this.x = this.x + this.xVel;
    if (this.x >= canvasWidth || this.x <= 0) {
      this.xVel = -restituion * this.xVel; // bounce when hits a wall
      if (this.x >= canvasWidth) {this.x = canvasWidth} else {this.x = 0}
        // make sure they stay in bounds
    }
  }

  refreshY() {
    this.yVel = this.yVel + gravity; // update y velocity based on gravity
    if (this.yVel >= terminalVelocity) {
      this.yVel = terminalVelocity; // limit terminal velocity
    }
    this.y = this.y + this.yVel; // update position based on velocity
    if (this.y > canvasHeight) {
      this.y = canvasHeight; // don't let the ball go outside the screen limits
    }
    if (this.y >= canvasHeight) {
      this.yVel = -restituion * this.yVel; // bounce when hits edge of screen 
    }
  }

  fadeOnFloor() {
    if (this.y == canvasHeight) {
      this.alpha -= 4;
    }
  }

  show() {
    stroke(this.color[0],this.color[1], this.color[2], this.alpha);
    noFill();
    strokeWeight(4);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
