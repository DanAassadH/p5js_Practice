let guy;
let guyImage;
let goldImage;
let bgImage;
let golds = [];
let snowflakes = [];


// function preload(){

//     //bgImage = loadImage('img/background.jpg.jpg');
//  //   guyImage = loadImage('background.jpg');
// }

function setup() {
  createCanvas(800, 550);
  guy = new Guy();
  fill(240);
  noStroke();
}

function keyPressed() {
  if (key == " ") {
    guy.jump();
  }
}

function draw() {
  if (random(10) < 0.1) {
    golds.push(new Gold());
  }

  background(200);
  //  background(bgImage);

  for (let g of golds) {
    g.move();
    g.show();

    /*--------------------Game End------------------------------ */

    if (guy.hits(g)) {
      noLoop();
     
      
      rect(81, 81, 100, 65);
   
      button = createButton("restart");
      button.position(100, 150);
      button.mousePressed(restart);

      // button = createButton('Scoreboard');
      // button.position(200, 150);

    }
  }

  guy.show();
  guy.move();


  let t = frameCount / 200; // increse number to make flakes fall straight
  // create a random number of snowflakes
  if (random(1) < 0.1) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
} /// end draw ///

/******************restart button **************************************  */

function restart() {
  golds = [];
  snowflakes = [];
  guy = new Guy();
  this.hide();
  loop();
}

/*************** snowflake logic ************************************* */

function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI); // figure out what this is doing
  this.size = random(5, 12); // increase or decrease snowflake

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2))); // change width/12 for a small stream

  this.update = function (time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5); // increase  0.5 to have rainlike effect

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function () {
    ellipse(this.posX, this.posY, this.size);
  };
}
