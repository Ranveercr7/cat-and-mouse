var cat,catImg;
var mouse,mouseImg;
var garden,gardenImg;


function preload() {
    //load the images here
    catImg = loadImage("images/cat.png");
    mouseImg = loadImage("images/mouse.png");
    
	}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(130,500,50,50);
	cat.addAnimation("catrunning",catImg);
    cat.scale = 0.25;

	mouse = createSprite(300,200,40,40);
	mouse.addImage(mouseImg);
    mouse.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

    mouseBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
    World.add(world, mouseBody);
    
    Engine.run(engine);
	
	

}




function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    mouse.x= mouseBody.position.x 
  mouse.y= mouseBody.position.y 

  console.log(mouse.y);

  
  if(mouse.y > 470 && mousebody.position.y > 470){
	  Matter.Body.setStatic(mouseBody,true);
  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(starBody,false); 
}


if (keyCode === LEFT_ARROW) {
    cat.x = cat.x-20;
}
if (keyCode === RIGHT_ARROW) {
    cat.x = cat.x +20;
}


}
