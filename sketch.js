var ground,box1,box2,box3,paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){}

function setup() {
	background=("white");
	createCanvas(1000, 500);

	paperSprite=createSprite(200,630,10);
	paperSprite.shapeColor=color("pink");

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1 = Bodies.rectangle(780+100, 600+45-20, 200,20 , {isStatic:true} ); 
	World.add(world, box1);
	box1.shapeColor=("red");

	box2 = createSprite(975, 327, 10,225);
	World.add(world, box2);
	box2.shapeColor=("red");

	box3 = createSprite(785, 327, 10,225);
	World.add(world, box3);
	box3.shapeColor=("red");
	
	paper = new Paper(200,130,10);
	paper.scale = 0.2

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  if(keyDown(UP_ARROW)) {
	 Matter.Body.applyForce(paper.Body,paper.Body.position,{x:3,y:-3}); 
	}

	paper.display();
  
  drawSprites();
 
}

