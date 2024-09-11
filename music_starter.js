let BGimg;
let firstRun = true;
let FontImg;
let raindrops = []; // Array to hold raindrop objects
let FirstRun = true
let RCOR = 200  
let RCOG = 200
let RCOB = 200




var xCoord1 = 0; // These cords are used for lightning code
var yCoord1 = 0;
var xCoord2 = 0;
var yCoord2 = 0;

function setup() {
 createCanvas(1280, 720);
   drawBackground();
   xCoord2 = 0;
   yCoord2 = height / 2;
}
// 12034
// Define Raindrop class
class Raindrop { // Credits to ChatGPT for helping me get this to work 
  constructor(vocal, bass, other, counter) {
    this.x = random(width); // randomizes X Pos
    this.y = random(-100, -10); // Starts off screen 
    this.speed = map(vocal, 100, 0, 1, 25); // rain speeds up as vocals intensify
    this.length = map(bass, 0, 100, 0, 25); // random drop length
    this.color = color(20); // Same as background
    this.vocal = vocal; // Stores values, vocal
    this.other = other; //  other
    this.bass = bass; //  base
  }

  update() {
    this.y += this.speed; // defines rain's gravity
    if (this.y > height) { // if rain falls off screen
      this.y = random(-500, -100); // put it back to the start
      this.x = random(width); // in a new random position
      this.speed = map(this.vocal, 0, 100, 5, 25); // speed relative to vocals
    }
  }

  display() { // Could play with colour by storing it as a variable, once i figure out how lol, i think
    // let cNum = map(counter, 0, 12034, 200, 0)
  //  if (FirstRun = true) {
  //   let RainColor = color(200, 200, 200)
  //   FirstRun = false
  //  }
    strokeWeight(2)
    stroke(RCOR, RCOG, RCOB); // Set stroke color
   // strokeWeight(StrokeWeight); // How thick is the rain
    line(this.x, this.y, this.x, this.y + this.length); // Draw the rain
  }
}



    function draw_one_frame(words, vocal, drum, bass, other, counter) {
      const numRaindrops = map(vocal, 100, 0, 0, 500); // Number of raindrops
      console.log(counter)
      if (firstRun) {
        BGimg = loadImage('BGImg1.png');
        firstRun = false;
      }
    
      if (counter > 2000) {
        RCOR = 200
        RCOG = 160
        RCOB = 160
      }
      else if (counter > 4000) {

        RCOR = 200
        RCOG = 120
        RCOB = 120

      }
      else if (counter > 6000) {
        RCOR = 200
        RCOG = 80
        RCOB = 80
      }
      else if (counter > 8000) {
        RCOR = 200
        RCOG = 40
        RCOB = 40
      }
      else if (counter > 10000) {
        RCOR = 200
        RCOG = 0
        RCOB = 0
      }
    


      // else if (counter > 4000) {
      //   RainColor = color (200, 140, 140)
      // }

      // Clear the canvas and draw the background image
      background(20);
      imageMode(CORNER);
      image(BGimg, 0, 0);
    
      // Draw static elements
      noStroke();
      fill(255); // Moon
      ellipse(640, 120, 155, 155);
      fill(20); // Moon Shadow
      ellipse(625, 120, 145, 155);
      fill(230);
    
      // Draw waves based on audio data
      for (let i = 0; i < 1000; i++) {
        rect(i * 10, drum * sin(i * 5) + 550, 5);
        rect(i * 10, vocal * sin(i * 10) + 475, 5);
        rect(i * 10, bass * sin(i * 15) + 425, 5);
      }
    
      // Display text based on words
      if (words === 'ROW') {
        imageMode(CENTER);
        // Scale me
        let imgScale = map(vocal, 0, 100, 0.25, 0.85)
        let imgWidth = FontImg.width * imgScale;
        let imgHeight = FontImg.height * imgScale;
        image(FontImg, 640, 300, imgWidth, imgHeight)

        // fill(255, 255, 0); // Display words
        // textAlign(CENTER);
        // textSize(vocal);
        // text(words, width / 2, height / 3);


      }
    
      // Update and draw raindrops
      
      raindrops = raindrops.filter(drop => drop.y <= height); // Remove out-of-bounds raindrops
      while (raindrops.length < numRaindrops) {
        raindrops.push(new Raindrop(vocal, bass, other)); // Add new raindrops
      }
      
      // Update and display raindrops
      for (let drop of raindrops) {
        drop.update();
        drop.display();
      }
      
    

if (drum > 83) {
//color(255)


stroke(75,200,215)
      // lightning
      for (var i = 0; i < 25; i++) {
        xCoord1 = xCoord2; // starts at 0, after code loops, the new point is set to the old point of cord 2, and then is replaced and it repeats. So the first cord will always be under where the previous was drawn
        yCoord1 = yCoord2;
        xCoord2 = xCoord1 + int(random(-50, 105)); // Plots one point, a random distance away from the previous, trending right. 
        yCoord2 = yCoord1 + int(random(-50, 150)); // Plots one point, a random distance away from the previous, trending down. 
        strokeWeight(random(5, 10));
        strokeJoin(MITER);
        line(xCoord1, yCoord1, xCoord2, yCoord2);

        if ((xCoord2 > width) | (xCoord2 < 0) | (yCoord2 > height) | (yCoord2 < 0)) {
          xCoord2 = int(random(0, width));
          yCoord2 = 0;
          
        }
      }
    }

      // lightning
    function drawBackground() {
      for (var i = 0; i < 500; i++) {
        stroke(i - 255, 30, 50);
        line(0, i, width, i);
      }
}

    }
 
  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);

  
// fill(230, 230, 50)
  
// ellipse (200, 200, 200, 200)
// ellipse (500, 200, 200, 200)
// let mouthSize = map(vocal, 0, 100, 25, 150)

// rect (350, 500, 200, mouthSize)


// push()
// fill(255)
// stroke(0)
// rect (0, 160, 2570, 360)
// pop()