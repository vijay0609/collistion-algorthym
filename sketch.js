var fixrect;
var movrect;


function setup() {
  createCanvas(800,400);
  fixrect = createSprite(400, 200, 50, 50);
  fixrect.shapeColor = "green"

  movrect = createSprite(200, 100, 50, 50);
  movrect.shapeColor = "green"
  
}

function draw() {
  background(0); 
  movrect.x = World.mouseX ;
  movrect.y = World.mouseY 
  if (movrect.x - fixrect.x < fixrect.width/2 + movrect.width/2
    && fixrect.x-movrect.x< fixrect.width/2 + movrect.width/2
    &&   movrect.y - fixrect.y < fixrect.height/2 + movrect.height/2
    && fixrect.y-movrect.y< fixrect.height/2 + movrect.height/2         ){
// they have collided
    fixrect.shapeColor = "blue";
    movrect.shapeColor = "blue";

  }
    else
    {
// not collided
    fixrect.shapeColor = "gold";
    movrect.shapeColor = "gold"
    }
    
  
  

  drawSprites();
}