class Guy {
    constructor() {

      this.size = 50;
      this.x = this.size;
      this.y = height - this.size;
      this.velocity = 0;
      this.gravity = 0.5;
     // this.fill('#fff');

    }
  
    jump() {
        // if condition for jump if guy is at bottom
        this.velocity = -15;

    } 
  
    hits(gold) {
        let x1 = this.x + this.size * 0.5;
        let y1 = this.y + this.size * 0.5;
        let x2 = gold.x + gold.size * 0.5;
        let y2 = gold.y + gold.size * 0.5;
        return collideCircleCircle(x1, y1, this.size , x2, y2, gold.size);
      }

   
    move() {
        this.y += this.velocity;
        this.velocity += this.gravity;
             //https://p5js.org/reference/#/p5/constrain
        this.y = constrain(this.y , 0 , height - this.size);     

    }
  
    show() {
      rect(this.x, this.y, this.size, this.size);

  
   
    }
  }