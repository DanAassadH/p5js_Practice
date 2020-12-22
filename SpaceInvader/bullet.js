class Bullet{
    constructor(x , y) {
        this.x = x;
        this.y = y;
        this.height = 10;
        this.width = 5;
       
      }

show() {
    fill(240, 50, 150);
    noStroke();
    rect(this.x -2 , this.y - 65, this.width, this.height);
  }

  move()
  {
      this.y -= 2;
  }

}