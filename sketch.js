const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var Ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    Ground = new ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    Ground.display();
}