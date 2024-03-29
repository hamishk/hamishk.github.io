let canvasWidth = window.innerWidth; 
let canvasHeight = window.innerHeight - 30;
let dots = [];
let minradius = 2;
let minpacity = 15;
let dotdensity = 7.5 // arbitrary scale of [dots / (x * y)] *10,000  
let dotcount = canvasWidth * canvasHeight * dotdensity / 10000;
let sliders =[]; // need access as global
let bgCol = 0;
let startTime;
let countDown;
let hasCountdownFinished = false;
let saveTheWhalesButton;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  startTime = millis();
  countDown = 30000; // 30 seconds
  for (let i = 0; i < dotcount; i++) {
    let xOffset = getOffset(1.2, canvasWidth);
    let yOffset = getOffset(3, canvasHeight);
    dots[i] = new Particle(canvasWidth/2 + xOffset, canvasHeight/2 + yOffset);
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
    let radius = max(minradius, random(-50,4));
    ellipse(dots[i].x, dots[i].y, radius, radius);
    dots[i].update();
  }
  if (!hasCountdownFinished) {
    let timer = countDown - (millis() - startTime);
    if (timer > 0) {
      // Draw a rectangle over the previous timer text
      fill(bgCol);
      noStroke();
      rect(width - 100, 0, 100, 50);  // Adjust the size and position according to needs
            
      // Now draw the new timer text
      textSize(32);
      fill(0, 0, 255);
      text(int(timer / 1000), width - 50, 50); // top right of the canvas
    } else {
      hasCountdownFinished = true;
      saveTheWhalesButton = createButton('Save The Whales');
      saveTheWhalesButton.position(width - 150, 20);
      saveTheWhalesButton.mousePressed(() => window.location.href = 'http://www.deepseadairy.com');
    }
  }
}

function getOffset(exponent, windowBound) {
  // generates a pixel offset from the center of the screen
  let baseOffset = random(0,1)**exponent; // bias distribution via exponent (higher = more cluster)
  if (random(0,1) > .5) {baseOffset = -baseOffset}; // flip the sign of the offset half the time
  pixelOffset = baseOffset * windowBound / 2; // normalize against the actual screen size
  return pixelOffset;
}

function mousePressed() {
  background(bgCol);
}
