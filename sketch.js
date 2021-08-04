var maze1,maze2,maze3,maze4,maze5,maze6;

function setup() {
  createCanvas(windowWidth, windowHeight);

  maze1=createSprite(180, 190, 50, 200);
  maze1.shapeColor = "green";
  
  maze2=createSprite(300, 265, 200, 50);
  maze2.shapeColor = "green";
  
  maze3=createSprite(500, 190, 50, 150);
  maze3.shapeColor = "green";
  
  /*maze4=createSprite(700, 485, 300, 50);
  maze4.shapeColor = "green";
  
  maze5=createSprite(800, 485, 300, 50);
  maze5.shapeColor = "green";
  
  maze6=createSprite(900, 485, 300, 50);
  maze6.shapeColor = "green";*/
  
}

function draw() {
  background("black");  
  drawSprites();
}



