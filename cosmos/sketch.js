let canvasWidth = window.innerWidth; 
let canvasHeight = window.innerHeight - 30;
let dots = [];
let minradius = 2;
let minpacity = 15;
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
  sliders[0] = createSlider(0,10,minradius);
  sliders[1] = createSlider(0,255,minpacity);
}

function draw() {
  minradius = sliders[0].value();
  minpacity = sliders[1].value();
  for (let i = 0; i < dots.length; i++) {
    // fill(random(255), minpacity);
    let opacity = max(minpacity, random(-10000,255));
    fill(random(255), opacity); // allow for rare bright stars
    let radius = max(minradius, random(-50,5));
    ellipse(dots[i].x, dots[i].y, radius, radius);
    dots[i].update();
  }
}

function mousePressed() {
  background(bgCol);
}
