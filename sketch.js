var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,69,69);
}

function draw() 
{
  background(30);
  box.velocityY = -2;
  box.bounceOff(canvas);
  drawSprites();
}

