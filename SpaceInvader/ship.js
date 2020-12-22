class Ship {
  constructor() {
    this.x = width / 2;
    this.y = height;
    this.height = 20;
    this.width = 40;

    this.xdir = 0;
   
  }

  show() {
    fill(240, 150, 150);
    noStroke();
    ellipse(this.x, this.y - 50, this.width, this.height);
  }

  move(direct) {
   // this.x  = this.x + direct;
   this.x += this.xdir * 5;
  }

  setDir(direct) {
    this.xdir  = direct;
  }
}
