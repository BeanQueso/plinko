const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var width = 480
var height = 680;
function setup() {
  createCanvas(480,680);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,660,480,20);
  
}

function draw() {  
  
  background(0);  
 
  ground.display();

      
}
for(var k; k<=width;k=k+80){
  divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
    }
