const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg



function preload(){
  bg=loadImage("images/GamingBackground.png")

}
function setup(){
  var canvas=createCanvas(1000,700);
  engine=Engine.create()
  world = engine.world;
 // monster=new Monster(500,200,90);
  

  ground=new Ground(0,350,1100,20);
  
  block1=new Block(300,330,40,40);
  block2=new Block(380,330,40,40);
  block3=new Block(460,330,40,40);

  block4=new Block(300,310,40,40)
  block5=new Block(300,290,40,40)
  block6=new Block(300,270,40,40)

  block7=new Block(380,310,40,40);
  block8=new Block(380,290,40,40);
  block9=new Block(380,270,40,40);
  block10=new Block(380,250,40,40);
  block11=new Block(380,230,40,40);

 // block12=new Block(460,310,40,40);

 hero=new Hero(50,60,80);
 fly = new Fly(hero.body,{x:50, y:20});

  monster=new Monster(500,270,100);


  
}
function draw(){
  fly.display();
  background(bg);
  Engine.update(engine);
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
 // block12.display();
 

 hero.display();
 monster.display();
  

  
    
  

}
function mouseDragged(){
 Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

