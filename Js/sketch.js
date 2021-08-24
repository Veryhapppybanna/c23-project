const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computer_base
var player_base
var computarPlayer
var player

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  player_base=new PlayerBase(300,random(450,height - 300), 180,150);
  computer_base=new ComputarBase(300,random(450,height - 300), 180,150);
  player = new Player(285, player_base.body.position.y - 153, 50, 180);
  computarPlayer = new ComputerPlayer(285, player_base.body.position.y - 153, 50, 180);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   player_base.display();

   computer_base.display();

   //display Player and computerplayer
   computarPlayer.display();

   player.display()

}
