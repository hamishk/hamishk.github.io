let canvasWidth = window.innerWidth; 
let canvasHeight = window.innerHeight - 20;
let dots = [];
let dotradius = 3;
let dotpacity = 15;
let dotdensity = 6.5 // arbitrary scale of [dots / (x * y)] *10,000  
let dotcount = canvasWidth * canvasHeight * dotdensity / 10000;
let sliders =[]; // need access as global
let bgCol = 0;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  for (let i = 0; i < dotcount; i++) {
    dots[i] = new Particle(random(0,canvasWidth),random(0,canvasHeight));
  }
  noStroke();
  background(bgCol); //don't redraw background
  sliders[0] = createSlider(0,255,dotradius);
  sliders[1] = createSlider(0,255,dotpacity);
}

function draw() {
  dotradius = sliders[0].value();
  dotpacity = sliders[1].value();
  for (let i = 0; i < dots.length; i++) {
    // fill(random(255), dotpacity);
    fill(random(255), max(dotpacity, random(-10000,255))); // allow for rare bright stars
    ellipse(dots[i].x, dots[i].y, dotradius, dotradius);
    dots[i].update();
  }
}

function mousePressed() {
  background(bgCol);
}
