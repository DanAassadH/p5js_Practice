let ship;
let alien = [];
let bullet = [];



/**----------------------------------------setup-------------------------- */


function setup() {
  createCanvas(700, 500);
  ship = new Ship();
 // bullet = new Bullet(width/2 , height);
  for (let i = 0; i < 8; i++) {
    alien[i] = new Alien();
  }


}


/**--------------------------------------- Draw  -------------------------- */
function draw() {
  background("#123c64");
  ship.show();
  ship.move();


  for (let i = 1; i < alien.length + 1; i++) {
    alien[i-1].show(i);
  }


  for (let i = 0; i < bullet.length; i++) {
    bullet[i].show();
    bullet[i].move();
  }



  
}

/**----------------------------------------ship move functions on key  Released -------------------------- */
function keyReleased() {
  if (key != " ") {
    ship.setDir(0);
  }
}

/**----------------------------------------ship move functions on key  Pressed -------------------------- */

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }

  if(key==' ')
  {
  //    bullet.move();
  const b = new Bullet(width/2 , height);
  bullet.push(b) ;

  }
}
