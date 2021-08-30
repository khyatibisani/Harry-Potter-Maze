var maze1,maze2,maze3,maze4,maze5,maze6, maze7;
var hermione, hermioneImage;
var dragon, dragonImage;

function preload(){
   dragonImage = loadAnimation("dragon.png","dragon1.png","dragon2.png","dragon3.png","dragon4.png","dragon5.png","dragon6.png");

   hermioneImage = loadImage("hermioneMaze.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  maze1=createSprite(180, 190, 100, 200);
  maze1.shapeColor = "green";
  
  maze2=createSprite(300, 240, 200, 95);
  maze2.shapeColor = "green";
  
  maze3=createSprite(450, 220, 100, 50);
  maze3.shapeColor = "green";
  
  maze4=createSprite(450, 340, 100, 200);
  maze4.shapeColor = "green";
  
  maze5=createSprite(550, 400, 300, 80);
  maze5.shapeColor = "green";
  
  maze6=createSprite(700, 280, 80, 320);
  maze6.shapeColor = "green";
  
  maze7=createSprite(770, 160, 100, 80);
  maze7.shapeColor = "green";

  hermione=createSprite(180,190,20,20);
  hermione.addImage(hermioneImage);
  

  dragonImage.frameDelay = 50;
  dragon=createSprite(340,320,20,20);
  dragon.scale=0.5;
  dragon.rotation=1050;
  dragon.addAnimation("dragon",dragonImage);
  dragon.debug=true;
 
}

function draw() {
  background("lightblue");  
  drawSprites();
}

function spawnDragonFire(){
  if(frameCount % 240===0){
    // dragon.chageAnimation
    // dragon.setCollider("circle",big_x_offset,big_y_offset,width,height); 
  }
  else{
    // dragon.setCollider("circle",small_x_offset,small_y_offset,width,height); 
  }
}