
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	roof1 = new Roof(400, 100, 500, 50)
	bob1 = new Bob(150, 700, 100)
    bob2 = new Bob(250, 700, 100)
    bob3 = new Bob(350, 700, 100)
	bob4 = new Bob(450, 700, 100)
	bob5 = new Bob(550, 700, 100)	
	
	rope1 = new Rope(bob1.body, roof1.body)
	rope2 = new Rope(bob2.body, roof1.body)
	rope3 = new Rope(bob3.body, roof1.body)
	rope4 = new Rope(bob4.body, roof1.body)
	rope5 = new Rope(bob5.body, roof1.body)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-130,y:-145});
  }
}