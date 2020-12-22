class Alien{
        constructor() {
            this.x = 5;
            this.y = 0;
            this.height = 20;
            this.width = 40;
           
          }

    show(xPos) {
        fill(40, 250, 150);
        noStroke();
        rect(this.x * xPos * 15, this.y + 50, this.width, this.height);
      }
    
}