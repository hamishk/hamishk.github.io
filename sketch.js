// Gonna make some balls bounce
let canvasWidth = window.innerWidth; //600;
let canvasHeight = window.innerHeight; //400;
let balls = [];
let gravity = .6;
let terminalVelocity = 50;
let restituion = 1; // ratio of how much energy is conserved with each bounce
let bgColor = [50,50,50]; // grey
let bgColorChanges = 0;


function setup() {
	createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(bgColor);
  updateBalls();
}

function updateBalls() {
  for (let i = 0; i < balls.length; i ++) {
    balls[i].refresh();
    balls[i].show();
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX,mouseY));
}

function keyPressed() {
  bgColorChanges++;
  if (bgColorChanges % 10 == 0) {
    bgColor = [50,50,50]; // return to normal
  } else if (bgColorChanges % 5 == 0) {
    bgColor = [238,192,168]; // a nice salmon
  } else {
    bgColor = [random(0,255),random(0,255),random(0,255)]
  }

}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 20;
    this.color = [random(127,255),random(0,255),random(127,255)]; //
    this.xVel = random(-5,5); // ball starts with random x velocity
    this.yVel = -10; //random(0,-10); // ball starts with random y velocity
  }

  refresh() {
    this.refreshX();
    this.refreshY();
  }
  
  refreshX() {
    this.x = this.x + this.xVel;
    if (this.x >= canvasWidth || this.x <= 0) {
      this.xVel = -restituion * this.xVel; // bounce when hits a wall
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
  show() {
    stroke(this.color);
    noFill();
    strokeWeight(4);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
