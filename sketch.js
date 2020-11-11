
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var boy;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=new Boy(600,630,200,200)
 tree=new Tree(1200,400,700,700)
 ground= new Ground(800,690,1200,20)
 stone=new Stone(550,590,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree.display();

 boy.display()
stone.display()
  ground.display();
  drawSprites();
  
}



