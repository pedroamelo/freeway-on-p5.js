//car code | Cars = [car1, car2, car3];

let xCars = [600, 600, 600, 600, 600, 600];
let yCars = [40, 98, 148,210, 262, 312];
let carsSpeed = [2, 4, 3, 3, 6, 4.5];
let carWidth = 50;
let carHeight = 40;


function showCars() {
  for (let i = 0; i < imagecars.length; i++) {
  image (imagecars[i], xCars[i], yCars[i] , carWidth, carHeight);
  }
}

function moveCars() {
  for (let i = 0; i < xCars.length; i++) {
  xCars[i] -= carsSpeed[i];
  }
}

function resetCars() {
  for (let i = 0; i < xCars.length; i++) {
  if (xCars[i] < -45) {
    xCars[i] = 600;
  }
 }
}