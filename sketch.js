const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var score=0;

var sling1;
var polygon2;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //Bodies
 
  box1=new Box (330,369,30,40);
  box2=new Box (360,369,30,40);
  box3=new Box (390,369,30,40);
  box4=new Box (420,369,30,40);
  box5=new Box (450,369,30,40);
 
  box6=new Box (360,329,30,40);
  box7=new Box (390,329,30,40);
  box8=new Box (420,329,30,40);
  box9=new Box (390,289,30,40);
  ground1= new Ground(400,390,200,10)
 
 polygon2=new polygon(100,300,40);
 sling1= new SlingShot (polygon2.body,{x:300,y:50})


  

  

  /*image(img, 0, 0);
  image(img, 50, 0, 40, 20, 50, 50, 50, 50);*/

 Engine.run(engine);

}

function draw() {
  background(255,255,255);  
  text ("score:"+score,750,40)
  drawSprites();
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  polygon2.display();
  sling1.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  //slingshot1.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon2.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
  sling1.fly ();
  }
  function keyPressed(){
    if(keyCode === 32){
   sling1.attach(polygon2.body)
    }
  }