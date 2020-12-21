
let detailY;

function setup() {


  let cnv = createCanvas(100, 100, WEBGL);
  cnv.position(200, 200);

  detailY = createSlider(2, 24, 6);
  detailY.position(10, height + 5);
  detailY.style('width', '80px');
}

function draw() {
  background(205, 105, 94);

  rotateY(millis() / 1000);
  ellipsoid(30, 40, 40, 12, detailY.value());
}


