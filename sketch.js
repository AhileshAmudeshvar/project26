
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
let engine;
let world;

var ground;

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
   
  
  

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  
  pend=Constraint.create({
    pointA:{x:200,y:100},
    bodyB:ball,
    pointB:{x:0,y:0},
    stifness:0.70,
    length:80
  })
  World.add(world,pend)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  stroke("white")
  line(pend.pointA.x,pend.pointA.y,ball.position.x,ball.position.y)
  

  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


