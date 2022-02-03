//character variables
let xChar = 85;
let yChar = 390;
let hit = false;
let myScore = 0;

function showCharacter() {
  image (character, xChar, yChar, 30, 30)
}

function moveCharacter() {
  if (keyIsDown(UP_ARROW)) {
    yChar -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (canMove()) {
      yChar += 3;
    }
  }
}

function checkCollision() {
  //collideRectCircle (x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagecars.length; i++) {
    hit = collideRectCircle(xCars[i], yCars[i], carWidth, carHeight, xChar, yChar, 15)
    if (hit) {
      //print ("Colide");
      myScore--;
      yChar = 390;
      collision.play();
    }
  }
}

function scorePoint() {
  if (yChar < 15) {
    yChar = 390;
    myScore++;
    score.play();
  }
  if (myScore < 0) {
    myScore = 0;
  }
  textAlign(CENTER);
  textSize(25);
  fill(255,240,60);
  text(myScore, width / 5, 28);
}

function canMove() {
  return yChar < 390;
}