var bullet, wall, thickness;
var speed, weight;


function setup() {
  createCanvas(1500,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83)
  bullet=createSprite(50, 200, 40,20);
  wall=createSprite(1500,200,thickness,200);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255,255,0);
 
}

function draw() {
  background(255,255,255);  
    
    if(bullet.x>1430){
    bullet.x=1470;
    deformation = 0.5 * weight *  speed * speed / (thickness*thickness*thickness);
    if(deformation>10){
         wall.shapeColor=color(255,0,0);
      bullet.x=1470;
    }
    if(deformation<11){
       wall.shapeColor=color(0,255,0);
      bullet.x=1470;
    }
  }
  drawSprites();
}






