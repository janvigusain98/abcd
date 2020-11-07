var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobject1 = createSprite(100, 100, 50, 50);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;
  gameobject2 = createSprite(200, 100, 50, 50);
  gameobject2.shapeColor = "green";
 gameobject2.debug = true;

 gameobject4 = createSprite(400, 100, 50, 50);
  gameobject4.shapeColor = "green";
  gameobject4.debug = true;
  gameobject3 = createSprite(300, 100, 50, 50);
  gameobject3.shapeColor = "green";
 gameobject3.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching()){
movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
 }
 else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    return true;
  }
  else {
    return false;
  }
}