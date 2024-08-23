let BGimg;
let firstRun = true;
let FontImg;
let raindrops = []; // Array to hold raindrop objects

var xCoord1 = 0;
var yCoord1 = 0;
var xCoord2 = 0;
var yCoord2 = 0;

function setup() {
 createCanvas(2000, 2000);
   drawBackground();
   xCoord2 = 0;
   yCoord2 = height / 2;
}

// Define Raindrop class
class Raindrop { // Credits to ChatGPT for helping me get this to work 
  constructor(vocal, bass, other) {
    this.x = random(width); // randomizes X Pos
    this.y = random(-100, -10); // Starts off screen 
    this.speed = map(vocal, 0, 100, 1, 25); // rain speeds up as vocals intensify
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

  display() {
    let v=0
    while(v<255, v++){
      if(v >=255){
        v=0
      }
    }
    console.log(v)
    stroke(200+v, v, v); // Set stroke color
    // stroke(200, 0, 0); // Set stroke color
    strokeWeight(2); // How thick is the rain
    line(this.x, this.y, this.x, this.y + this.length); // Draw the rain
  }
}

    function draw_one_frame(words, vocal, drum, bass, other, counter) {
      const numRaindrops = map(vocal, 0, 100, 0, 500); // Number of raindrops
    
      if (firstRun) {
        BGimg = loadImage('BGImg1.png');
        firstRun = false;
      }
    
      // Clear the canvas and draw the background image
      background(20);
      imageMode (CORNER);
      image(BGimg, 0, 0);
    
      // Draw static elements
      noStroke();
      fill(255);
      ellipse(640, 120, 155, 155);
      fill(20);
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
color(255)
stroke(75,200,215)
      // lightning
      for (var i = 0; i < 25; i++) {
        xCoord1 = xCoord2;
        yCoord1 = yCoord2;
        xCoord2 = xCoord1 + int(random(-20, 35));
        yCoord2 = yCoord1 + int(random(-10, 75));
        strokeWeight(random(5, 10));
        strokeJoin(MITER);
        line(xCoord1, yCoord1, xCoord2, yCoord2);
    
        if ((xCoord2 > width) | (xCoord2 < 0) | (yCoord2 > height) | (yCoord2 < 0)) {
          // clear();
          // drawBackground();
          xCoord2 = int(random(0, width));
          yCoord2 = 0;
          // stroke(255, 255, random(0, 255));
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