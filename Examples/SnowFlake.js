// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(220);
// }


let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(240);
  noStroke();
}

function draw() {
  background('#abc123');
  let t = frameCount / 50; // update time // increse number to make flakes fall straight

  // create a random number of snowflakes each frame // incresese number for more flakes
  for (let i = 0; i < random(2); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI); // figure out what this is doing
  this.size = random(2, 25); // increase or decrease snowflake

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2))); // change width/12 for a small stream

  this.update = function(time) {
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

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
