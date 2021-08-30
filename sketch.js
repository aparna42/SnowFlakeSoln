const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgimg;
//Created an array to store the falling snowflake objects
var snow = [];

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  bgimg = loadImage("snow2.jpg")
}

function draw() {
  background(bgimg);

  //Adding a new snow object into the snow array for every 50 frames
  if (frameCount % 50 === 0) {
    snow.push(new Snow(Math.round(random(100, 600)), (Math.round(random(-20, 0))), 40, 40));
  }

  //If there are elements inside the array, we display them using a for loop
  if (snow.length > 0) {
    //Writing code to display each snowflake from the array using a for loop and the index
    for (var i = 0; i < snow.length; i++) {
      snow[i].display();
    }
  }

  Engine.update(engine);


}