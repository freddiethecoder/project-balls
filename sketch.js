
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var basket1,basket2,ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
options = {restitution:0.3,density:1.2}
ball = Bodies.circle(200,100,30,options)
World.add(world,ball)
ground = Bodies.rectangle(400,650,800,10,{isStatic:true})
World.add(world,ground)
basket2 = Bodies.rectangle(500,600,10,100,{isStatic:true})
World.add(world,basket2)
basket1 = Bodies.rectangle(700,600,10,100,{isStatic:true})
World.add(world,basket1)
	Engine.run(engine);

}


function draw() {

	Engine.update(engine)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  if (keyDown("space")) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:30,y:30})
  }
	
  
  ellipse(ball.position.x,ball.position.y,30,30)
  rect(ground.position.x,ground.position.y,800,10)
  rect(basket1.position.x,basket1.position.y,10,100)
  rect(basket2.position.x,basket2.position.y,10,100)
  drawSprites();
  
 
}



