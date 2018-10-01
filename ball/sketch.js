// Gonna make some balls bounce
let canvasWidth = window.innerWidth; 
let canvasHeight = window.innerHeight;
let balls = [];
let gravity = .7;
let terminalVelocity = 50;
let restituion = .95; // ratio of how much energy is conserved with each bounce
let bgColor = [50,50,50]; // grey
let bgColorChanges = 0;
let titleOverlay;
let ballCounter;
let nextLevelLink;
let fadeTitle = false; // title begins fading on first mouse press
let ballsNeeded = 30; // number of balls needed to reveal next level


function setup() {
  titleOverlay = createElement('h1',"Hamish Kerr's Professional Website"); // Fades after click
  ballCounter = createElement('h2',"0");  // Starts hidden; revealed after first click
  nextLevelLink = createA('/cosmos','Explore the galaxy'); // Go to next stage
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(bgColor);
  resizeIfNeeded();
  updateBalls();
  updateText();
}

function updateBalls() {
  for (let i = balls.length -1; i >= 0; i--) {
    balls[i].refresh(); // update ball positions
    if (balls[i].alpha <= 0) {
      balls.splice(i,1); // remove invisible balls
    } else {
      balls[i].show(); //render balls
    }
  }
}

function updateText() {
  updateCounter(balls.length);
  if (fadeTitle) updateTitle();
  if (balls.length >= ballsNeeded) showNextLevel();
}

function updateCounter(count) {
  ballCounter.html(count); // update the ball counter with the latest value 
}

function updateTitle() {
  if (titleOverlay.style('opacity') > 0) { 
    let newOpacity = titleOverlay.style('opacity') - 0.01; 
    titleOverlay.style('opacity',newOpacity); // fade 1% each frame while visible
  }
}

function showNextLevel() {
  nextLevelLink.style('display','block'); // reveal next level
}

function mousePressed() {
  balls.push(new Ball(mouseX,mouseY)); // make a new ball appear at the mouse location
  fadeTitle = true; // begin or continue fading title 
  ballCounter.style('display','block'); // make sure counter appears
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
