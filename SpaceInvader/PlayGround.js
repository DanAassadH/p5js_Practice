let ship;
let aliens = [];
let bullets = [];
let shipScore = 0;

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  // bullet = new bullet(width/2, height/2);
  for (let i = 0; i < 7; i++) {
    aliens[i] = new Alien(i * 80 + 80, 60);
  }
}

function draw() {
  background(51,23,56);

  textSize(16);
  fill("violet");
  text(shipScore, 120, 17);
  text("your score = ", 20, 18);


  ship.show();
  ship.move();

  for (let i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    for (let j = 0; j < aliens.length; j++) {
      if (bullets[i].hits(aliens[j])) {
        //aliens[j].kill();
        bullets[i].boom();
        aliens.splice(j , 1);
        shipScore ++ ;
       

        if(shipScore == 7 ){

            noLoop();
            fill(105,120,220);
            rect( 181, 181, 150, 65);
            textSize(16);
            fill("violet");
            
            text("you won ", 145  , 170);
            button = createButton("restart");
            button.position(155, 185);
            button.mousePressed(restart);
        }
      }
    }
  }

  let edge = false;

  for (let i = 0; i < aliens.length; i++) {
    aliens[i].show();
    aliens[i].move();
    if (aliens[i].x > width || aliens[i].x < 0) {
      edge = true;
    }
  }

  if (edge) {
    for (let i = 0; i < aliens.length; i++) {
      aliens[i].shiftDown();
    }
  }

  for (let i = bullets.length - 1; i >= 0; i--) {
    if (bullets[i].toDelete) {
      bullets.splice(i, 1);
    }
  }
}

function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}

function keyPressed() {
  if (key === ' ') {
    let bullet = new Bullet(ship.x, height - 50);
    bullets.push(bullet);
  }

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}

/******************restart button **************************************  */

function restart() {

    this.hide();

    for (let i = 0; i < 7; i++) {
        aliens[i] = new Alien(i * 80 + 80, 60);
      }

   bullets = [];
   shipScore = 0;
   loop();
  }