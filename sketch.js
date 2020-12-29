const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, leftWall, rightWall;
var balls = [];
var plinkies = [];
var walls = [];

var wallHeight = 300;

var score = 0;
var particle;
var turn = 0;
var gameState;

function setup() {
	createCanvas(672, 1120);
	matterEngine = Engine.create();
	matterWorld = matterEngine.world;
	//Create the Bodies Here.
  drawBarriers();
  drawPlinkies();
  gameState = "playEnabled";
	Engine.run(matterEngine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(turn >= 5){
    gameState = "playDisabled"
    textSize(50)
    text("GAME OVER",width/2-150, height/2)
  }
  displayObjects();
  displayText();
  checkParticleX();
}

function drawPlinkies(){
  for(var k = 0; k <= width; k= k+80*1.2){
    walls.push(new Walls(k, height-wallHeight/2, 20, wallHeight))
  }
  for(var j = 50; j <= width; j = j+50*1.2){
    plinkies.push(new Plinkies(j, 100*1.2, 25))
  }
  for(var j = 20; j <= width; j = j+50*1.2){
    plinkies.push(new Plinkies(j, 150*1.2, 25))
  }
  for(var j = 50; j <= width; j = j+50*1.2){
    plinkies.push(new Plinkies(j, 200*1.2, 25))
  }
  for(var j = 20; j <= width; j = j+50*1.2){
    plinkies.push(new Plinkies(j, 250*1.2, 25))
  }
}

function drawBarriers(){
  ground = new Barriers(width/2, height-10, width, 20);
  leftWall = new Barriers(-5, height/2, 13, height);
  rightWall = new Barriers(width+3, height/2, 13, height);
}
function displayText(){
  textSize(30)
  fill("white");
  text("SCORE: "+score, 30, 50);
  text("100", 20, 800)
  text("100", 595, 800);
  text("200", 120, 800);
  text("200", 505, 800);
  text("300", 215, 800);
  text("300", 405, 800);
  text("500", 310, 800);
}

function displayObjects(){
  for(var i = 0; i < walls.length; i++){
    walls[i].show();
  }
  for(var i = 0; i < plinkies.length; i++){
    plinkies[i].show();
  }
  for(var i = 0; i < balls.length; i++){
    balls[i].show();
  }
  ground.show();
  leftWall.show();
  rightWall.show();
}
function checkParticleX(){
  for(var i = 0; i < balls.length; i++){
    balls[i].addScore(); 
  }
}

function mousePressed(){
  if(gameState!=="playDisabled"){
    turn++;
    particle = new Balls(mouseX, 10, 10);
    World.add(matterWorld, particle);
    balls.push(particle);
  }
}