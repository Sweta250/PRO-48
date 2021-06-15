const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var options={
    restitution:0.5

  }
 
  ball=Bodies.circle(200,200,20,options)
  World.add(world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  but1=createImg("right.png")
  but1.position(220,30)
  but1.size(50,50)
  but1.mouseClicked(hforce)

  but2=createImg("up.png")
  but2.position(20,30)
  but2.size(50,50)
  but2.mouseClicked(vforce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}
  function hforce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
  }

  function vforce(){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
  }