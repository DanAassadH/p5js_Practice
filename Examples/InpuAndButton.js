let input, button, greeting;

function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(120, 165);

  button = createButton('submit');
  button.position(input.x + input.width, 165);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Enter some Text');
  greeting.position(120, 115);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 20; i++) {
    push();
    fill(random(255), 125, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}

function draw(){

    // push and pop example
    ellipse(0, 50, 33, 33); // Left circle

    push(); // Start a new drawing state
    strokeWeight(10);
    fill(204, 153, 0);
    translate(50, 0);
    ellipse(0, 50, 33, 33); // Middle circle
    pop(); // Restore original state
    
    ellipse(100, 50, 33, 33); // Right circle
}