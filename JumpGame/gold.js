
// Google Chrome Dinosaur Game (Unicorn, run!)
// https://editor.p5js.org/codingtrain/sketches/v3thq2uhk

class Gold {
    constructor() {
      this.size = 75;
      this.x = width;
      this.y = height - this.size;
    }
  
    move() {
      this.x -= 8;
    }
  
    show() {
     // image(tImg, this.x, this.y, this.r, this.r);
  
      // fill(255, 50);
      // ellipseMode(CORNER);
       ellipse(this.x, this.y, this.size, this.size);
    }
  }