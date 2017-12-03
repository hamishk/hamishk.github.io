// Gonna make some balls bounce
let canvasWidth = window.innerWidth; 
let canvasHeight = window.innerHeight;
let balls = [];
let gravity = .7;
let terminalVelocity = 50;
let restituion = .95; // ratio of how much energy is conserved with each bounce
let bgColor = [50,50,50]; // grey
let bgColorChanges = 0;
let titleOverlay


function setup() {
  createElement('h1',"Hamish Kerr's Professional Website");
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(bgColor);
  resizeIfNeeded();
  updateBalls();
}

function updateBalls() {
  for (let i = balls.length -1; i >= 0; i--) {
    balls[i].refresh(); // update ball positions
    if (balls[i].alpha <= 0) {
      balls.splice(i,1); // remove invisible balls
    } else {
      balls[i].show(); //render all balls
    }
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

function resizeIfNeeded() {
  if (canvasWidth != window.innerWidth || canvasHeight != window.innerHeight) {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;
    resizeCanvas(canvasWidth,canvasHeight);
    console.log('resizing');
  }
}
