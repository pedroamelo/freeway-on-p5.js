//images loads

let road;
let character;
let car1;
let car2;
let car3;

//game sounds

let collision;
let score;
let music;

function preload() {
  road = loadImage ("images/estrada.png");
  character = loadImage ("images/ator-1.png");
  car1 = loadImage ("images/carro-1.png");
  car2 = loadImage ("images/carro-2.png");
  car3 = loadImage ("images/carro-3.png");
  imagecars = [car1, car2, car3, car1, car2, car3];
  
  collision = loadSound ("sounds/colidiu.mp3");
  score = loadSound ("sounds/pontos.wav");
  music = loadSound ("sounds/trilha.mp3");
}