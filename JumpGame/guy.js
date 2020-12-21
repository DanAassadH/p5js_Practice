class Guy {
    constructor() {

      this.size = 50;
      this.x = this.size;
      this.y = height - this.size;
      this.velocity = 0;
      this.gravity = 0.5;

    }
  
    jump() {
        this.velocity = -15;

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