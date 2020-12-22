let ship;

function setup() {
  createCanvas(700, 500);
  ship = new Ship();
}

function draw() {
  background("#123c64");
  ship.show();
  ship.move();

}


/**----------------------------------------ship move functions on key-------------------------- */
function keyReleased() {
    if (key != ' ') {
      ship.setDir(0);
    }
  }


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
   
    ship.setDir(1);
  } 
  else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }

}
