// let canvasWidth = window.innerWidth; 
// let canvasHeight = window.innerHeight - 30;
let canvasWidth = 640;
let canvasHeight = 480;
let dots = [];
let dotradius = 15;
let dotpacity = 127;
let dotcount = 100;
let bgColor = 50;
let video; // will store webcam feed here
let vScale = 16; //how much smaller we make the video

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(bgColor);
  noStroke();
  // populate initial dots for moving
  for (let i = 0; i < dotcount; i++) {
    dots[i] = new Particle(random(0,canvasWidth),random(0,canvasHeight));
  }
  // insert video
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw() {
  //fetch video data
  video.loadPixels();
  let pixelcolor;
  // render and update dots
  for (let i = 0; i < dots.length; i++) {
    px = floor(dots[i].x / vScale);
    py = floor(dots[i].y / vScale);
    pixelcolor = video.get(px, py);
    fill(pixelcolor[0], pixelcolor[1], pixelcolor[2], dotpacity);
    ellipse(dots[i].x, dots[i].y, dotradius, dotradius);
    dots[i].update();
  }
}

function mousePressed() {
  background(bgColor); // reset bg on click
}
