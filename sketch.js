function setup() {
  createCanvas(800,400);
  lego = createSprite(14,155,166,100);
  block = createSprite(12,50,21,10)
 brick = createSprite(450,300,76,70);
  duos = createSprite(91,300,62,59);
brick.velocityX=-1


}

function draw() {
  background(73,255,16);
  block.x=mouseX
  block.y=mouseY
  if(collision(brick,duos)){
    
    brick.visible=false
    duos.visible=false
  }else{
    brick.visible=true
    duos.visible=true
  }
if(collision(block,lego)){
block.shapeColor='gold'
lego.shapeColor='gold'

}else{
  block.shapeColor='pink'
lego.shapeColor='pink'
}

  drawSprites();
}

