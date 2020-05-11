const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;   

var engine, world;
var stick1, stick2, stick3, stick4, ground1;
function setup() {
  var canvas = createCanvas(800,400);
  Engine = engine.create();
  world = engine.world  ;
  stick1 = new stick(300, 195, 20, 100);
  stick2 = new stick(350, 195, 20, 100);
  stick3 = new stick(400, 195, 20, 100);
  stick4 = new stick(50, 95, 100, 20);
  ground1 = new ground(400, 390, 800, 10);
}

function draw(){
  background(0);  
  Engine.update(engine);
  ground1.display();
  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  
}
