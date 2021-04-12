
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ball = new Ball(100,400,10);
	ground = new Ground(400,480,800,20);
	
	dustbin1 = new Dustbin(600,470,100,20);
	dustbin2 = new Dustbin(550,440,20,80);
	dustbin3 = new Dustbin(650,440,20,80);		 
}


function draw() {

	background(255);
 
  Engine.update(engine);
  
  rectMode(CENTER);
  background(0);

  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:18,y:-10});
	}
}

