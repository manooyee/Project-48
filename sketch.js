const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var man
var manImage, fallingmanImage;
var backgroundImage = "white"
var bgImage;
var bgImage2;
var money, moneyImage;
var logo, logoImage;
var wall;

var Dollars = []

var gameState = 0

var score= 0;

function preload(){
   manImage = loadImage("images/man.png");
   fallingmanImage = loadImage("images/fallingman.png");

   moneyImage = loadImage("images/money.png");
   bgImage = loadImage("images/building.png");
   bgImage2 = loadImage("images/background2.png");

   logoImage = loadImage("images/logo.png");
}

function setup() {
  createCanvas(600,displayHeight);
  engine = Engine.create();
    world = engine.world;

  man = new Man(300,50);


  ground = new Ground(300,displayHeight*2,600,10);

  sillTop = new Ground(300,150,82,10);
  Sill = new Ground(199,317,82,10);

  sill = new Ground(302,570,82,10);
  sill9 = new Ground(505,570,82,10);

  sill1 = new Ground(92,827,82,10);
  sill2 = new Ground(402,827,82,10);

  sill3 = new Ground(199,1070,82,10); 
  sill4 = new Ground(505,1070,82,10);


  sill5 = new Ground(302,1330,82,10);
  sill8 = new Ground(92,1330,82,10);
  
  sill6 = new Ground(92,1585,82,10);    
  sill7 = new Ground(505,1583,82,10);


  logo = createSprite(250,170,50,50);
  logo.addImage(logoImage);
  logo.scale = 0.5


  


}

function draw() {
  background(backgroundImage);
  Engine.update(engine);

  if(gameState === 0){
    backgroundImage = bgImage;
  
    textSize(20);
    fill("black");
    stroke(20);
    text("Game description: You have droped your wallet down",15,330); 
    text("a building with tons of money in it. In order to save",15,350); 
    text("your must jump down the building",15,370);

    text("Goal: Collect your money and land safely on the ground",100,440);

    text("Rules: To grab your money, you must be touching it.",15,510);
    text("Use window sills to slow down your", 15,530);
    text("momentum to collect your money", 15,550);

    text("PRESS SPACE TO START", 100, 700);



    if(keyDown("SPACE")){
      logo.destroy();
      gameState = 1
    }
  }


  if(gameState === 1){
   
   
    background("white")
    image(bgImage2,0,0,600,displayHeight*2)
     man.display();


      
     if(frameCount%30 === 0){
      Dollars.push(new Money(random(100,500),150));
     }
  
     for (var k = 0; k < Dollars.length; k++) {
      Dollars[k].display();
      if(isTouching(man, Dollars[k])){
        Dollars[k].invisible();
        console.log("touching");
       }
     }   

     ground.display();
     sillTop.display();
     sill.display();
     Sill.display();
     sill1.display();
     sill2.display();
     sill3.display();
     sill4.display();
     sill5.display();
     sill6.display();
     sill7.display();
     sill8.display();
     sill9.display();

  
   
  }

  if(isTouching(man,ground)){
    background("white");
    textSize(20)
    text("Money Colleted:"+score, 300, displayHeight*2);
  }


 //console.log(man.body.position.x);
 //console.log(money.body.position.x);
 //console.log(man.width);
 //console.log(money.width);

  drawSprites();
}
function keyPressed(){
  if(keyCode === 37){
    Matter.Body.applyForce(man.body,man.body.position,{x:-0.07, y:0})
  }

  if(keyCode === 39){
    Matter.Body.applyForce(man.body,man.body.position,{x:0.07, y:0})
  }

}


