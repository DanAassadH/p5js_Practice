function setup() {
    createCanvas(windowWidth, windowHeight);
    background('black');
    strokeWeight(5);
    frameRate(1); //Specifies the number of frames to be displayed every second.
  }
  
  function draw() {
    if (mouseIsPressed) {
      stroke('#abc123');
    } else {
      stroke(237, 34, 93);
    }
   line(mouseX - 6, mouseY, mouseX + 6, mouseY);
    line(mouseX, mouseY - 6, mouseX, mouseY + 6);
   

   


  }
  