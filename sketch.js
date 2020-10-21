
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	RightBlock=createSprite(500,610,20,100);
	RightBlock.shapeColor="red";

	LeftBlock=createSprite(250,610,20,100);
	LeftBlock.shapeColor="red";

    BottomBlock=createSprite(375,650,230,20);
	BottomBlock.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new Paper(500,100);
	ground= new Ground();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper1.display();
  ground.display();
  keyPressed();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



