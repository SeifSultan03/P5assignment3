let spritesheet;
let spritesheet2;
let spritesheet3;
let x = 200;
let sx = 0
let sy = 0
let sw = 80
let sh = 80
let u = 0, v = 0;
let animationLength = 9;
let currentFrame = 0;
let moving = 0;
let xDirection = 1;

function preload(){
  spritesheet = loadImage("assets/SpelunkyGuy.png")
  spritesheet2 = loadImage("assets/Green.png")
  spritesheet3 = loadImage("assets/Blue.png")
}
function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
}

function draw() {
  background(220);

  if (moving != 0){
    u = currentFrame % animationLength
  } else {
    u = 0;
  }

  translate(x, 100)
  scale(xDirection,1);
  image(spritesheet, 0,0, 80, 80, u*sw, v*sh, sw, sh)

  translate(0, 100)
  image(spritesheet2, 0,0, 80, 80, u*sw, v*sh, sw, sh)

  translate(0, 100)
  image(spritesheet3, 0,0, 80, 80, u*sw, v*sh, sw, sh)

  if (frameCount % 6 == 0)
    currentFrame++;

  x += moving;
}

function keyPressed(){
  if (keyCode == RIGHT_ARROW){
    moving = 1;
    xDirection = 1;
  } else if(keyCode == LEFT_ARROW){
    moving = -1
    xDirection = -1;
  }
}

function keyReleased(){
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW)
    moving = 0;
}
