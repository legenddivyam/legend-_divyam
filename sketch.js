var wall,bullet,speed,weight,thickness;


function preload(){


}
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200,thickness,height/2);
  bullet = createSprite(200, 200, 25, 5);
  

speed=random(55,90)
weight=random(400,1500)
thickness=random(22,83)
bullet.velocityX=speed


}

function draw() {
  background("skyblue"); 

wall.shapeColor=("white")
bullet.shapeColor=("white")

if(wall.x-bullet.x<(bullet.width+wall.width)/2)
{
  bullet.velocityX=0
damage=0.5 * weight * speed* speed/22500
if(damage>180)
{
wall.shapeColor=color(255,0,0)
}


if(damage<180)
{
  wall.shapeColor=color(0,255,0)
  
}




}

drawSprites() 
 



}



 

