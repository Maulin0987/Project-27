
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,boObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3, rope4,rope5;
var world;
;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(width/2,height/4,width/7,20);

	bobDiameter=40;
	//Create the Bodies Here.
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(720,400,bobDiameter);
	bobObject2=new Bob(760,400,bobDiameter);
	bobObject3=new Bob(800,400,bobDiameter);
	bobObject4=new Bob(840,400,bobDiameter);
	bobObject5=new Bob(880,400,bobDiameter);

	roof = new Roof(width/2, height/4, width/7, 20);

	rope1 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0); 
 	rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0); 
	rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  drawSprites(); 
}
function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45}); } 
} 

	function drawLine(constraint) { 
		bobPosition = constraint.bodyA.position 
		roofPosition = constraint.bodyB.position 
		roofBodyOffset = constraint.pointB; 
		roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
		roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
		line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY); 
	}


