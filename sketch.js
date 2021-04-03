var ball
var ground
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myWorld, myEngine
function setup() {
  createCanvas(800,400);
  myEngine=Engine.create()
  myWorld=myEngine.world;
  var options={
    isStatic:true

  }
  ground=Bodies.rectangle(400,390,800,20,options)
  World.add (myWorld,ground)
  var options1={
   restitution:1

  }
  ball=Bodies.circle(200,100,20,options1)
  World.add (myWorld,ball)





}

function draw() {
  background(0);  
  Engine.update(myEngine)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(CENTER)
ellipse(ball.position.x, ball.position.y, 20*2, 20*2)
  
}