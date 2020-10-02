var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);

  movingRect = createSprite(100, 100, 30, 40);
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red";
  movingRect.velocityX=2;
  movingRect.velocityY=0.5;
}

function draw() {
  background(0);
 
  
  console.log(movingRect.x - fixedRect.x);
  console.log((movingRect.width + fixedRect.width)/2);

  if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width)/2 
  && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width)/2 
  && movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height)/2 
  && fixedRect.y - movingRect.y <= (movingRect.height + fixedRect.height)/2)
 
  {
    fixedRect.shapeColor="green"
    movingRect.shapeColor="green";
  }else{
    fixedRect.shapeColor="red"
    movingRect.shapeColor="red";
 }
 if(movingRect.x - fixedRect.x <= (movingRect.width + fixedRect.width)/2 
 && fixedRect.x - movingRect.x <= (movingRect.width + fixedRect.width)/2) 
{movingRect.velocityX=movingRect.velocityX*-1}
if(movingRect.y - fixedRect.y <= (movingRect.height + fixedRect.height)/2 
&& fixedRect.y - movingRect.y <= (movingRect.height + fixedRect.height)/2) 
{movingRect.velocityY=movingRect.velocityY*-1}

drawSprites();
}