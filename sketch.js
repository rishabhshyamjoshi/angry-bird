const { Engine,
        World,
        Bodies,
        Mouse, 
        MouseConstraint, 
        Constraint
      } = Matter;
var engine,world;
var ground,box,bird;
var mConstraint;


function setup(){
  var canvas =  createCanvas(600,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,300,800,30);
  box1 = new Sling(100,200,2,2);
  box = new Box(350,100,40,75);
  bird = new Bird(50,100,35);

  var mouse = Mouse.create(canvas.elt);
 
  var options = {
    mouse : mouse

  }
  mConstraint =  MouseConstraint.create(engine,options);
  World.add(world, mConstraint);

  var options={
    bodyA:bird.body,
    bodyB:box1.body,
    stiffness:0.04,
    length:6
  }
  var chain = Constraint.create(options);
  World.add(world,chain);

}

function draw(){
background(0);
Engine.update(engine);

box.display();
box1.display();
ground.display(); 
bird.display(); 

fill(255);
line(bird.body.position.x,bird.body.position.y,box1.body.position.x,box1.body.position.y);
}









