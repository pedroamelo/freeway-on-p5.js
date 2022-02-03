
function setup() {
  createCanvas(500, 400);
  music.loop();
}

function draw() {
  background(road);
  showCharacter();
  showCars();
  moveCars();
  resetCars();
  moveCharacter();
  checkCollision();
  scorePoint();
}