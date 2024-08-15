
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  angleMode(DEGREES)
  textSize(24);

  let rows = 5;
  // What is the range of motion for a single wave (vertically)
  let waveMaxHeight = 150;
  // A base time value for our noise() function which we'll
  // use to move the waves overall
  let baseT = 0;

noStroke()
fill (255)
ellipse(640, 100, 150, 150)
fill (240)
ellipse(640, 100, 130, 130)


for(i=0; i<1000; i++ ){

  ellipse(i*2,drum*sin(i*1)+550,5); // first value is width  
  ellipse(i*2,vocal*sin(i*2)+500,5); // first value is width  
  ellipse(i*2,bass*sin(i*3)+450,5); // first value is width  


}


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


   let bar_spacing = height / 10;
   let bar_height = width / 12;
   let bar_pos_x = width / 2;
 

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
 
  let qq = words
  if (qq == 'ROW' ) {
 //displays 'words'
 fill(255, 255, 0);
 textAlign(CENTER);
 textSize(vocal);
 text(words, width/2, height/3);

  }
    
  
 
}


