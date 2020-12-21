let guy;
let guyImage;
let goldImage;
let bgImage;
let golds =  [];

// function preload(){

//     //bgImage = loadImage('img/background.jpg.jpg');
//  //   guyImage = loadImage('background.jpg');
// }

function setup() {
    createCanvas(800, 550);
    guy = new Guy
  }

  function keyPressed(){
      if(key == ' ')
      {
        guy.jump();
      }
  }
  

  function draw(){
 
    if(random(1)<0.01){
        golds.push(new Gold());
      }

background(200);
  //  background(bgImage);


    guy.show();
    guy.move();

    for(let g of golds){
        g.move();
        g.show();
    }

  }