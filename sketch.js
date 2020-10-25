var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground,left

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	
	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2;

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	 leftrect1=createSprite(300,610,20,100)
	 leftrect1.shapeColor="red"
	 leftbody=Bodies.rectangle(320,610,20,100,{isStatic:true})
	 World.add(world,leftbody)
	 
	 rightrect1=createSprite(500,610,20,100)
	 rightrect1.shapeColor="red"
	 rightbody=Bodies.rectangle(480,610,20,100,{isStatic:true})
	 World.add(world,rightbody)
	 
	 bottomrect1=createSprite(400,650,200,20)
	 bottomrect1.shapeColor="red"
	 bottombody=Bodies.rectangle(400,635,200,20,{isStatic:true})
	 World.add(world,bottombody)

	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  
  
  drawSprites();

}
  function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.setStatic(packageBody,false)
	 }
   }
