var car;
var wall;
var speed, weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(100,200,50,50);
  car.shapeColor = "white";
  

  wall = createSprite(1400,200,50,height/2);

  speed = random(45,100);
  weight = random(400,2000);
}

function draw() {

  background("black");  

  car.velocityX = speed;
  if(wall.x - car.x < car.width/2 + wall.width/2){
     car.velocityX = 0;

     var deformation = 0.5 * weight * speed * speed/22500;

     if(deformation<100){
       car.shapeColor = color(0,255,0);
     }
     if(deformation>100 && deformation<180){
       car.shapeColor = color(230,230,0);
     }
     if(deformation>180){
       car.shapeColor = color(255,0,0);
     }
  }
  drawSprites();
}