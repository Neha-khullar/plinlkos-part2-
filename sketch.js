const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//arrays 
var particles =[];
var plinkos=[];
var divisions = [];
// height 
var divisionHeight=300;

 // variable of score , turn and particle
  var score=0;
  var particle;
  var turn;


function setup() {
   var canvas=createCanvas(1000,1000);
   engine = Engine.create();
    world = engine.world;
    ground = new  Ground(width/2,height,width,20);

    for( var  k = 0 ; k<= width;k=k+ 80){
      divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
         }

    
        for(var j= 75; j <= width; j=j+50) {
          plinkos.push(new Plinko(j,75));
        }
        for(var j= 50; j <= width-10 ; j=j+50) {
          plinkos.push(new Plinko(j,175));
        }

        for(var j= 75; j <= width; j=j+50) {
          plinkos.push(new Plinko(j,275));
        }
        for(var j= 50; j <= width-10; j=j+50) {
          plinkos.push(new Plinko(j,375));
        }
     
}


function draw() {
  background(0); 
  textSize(35);
  fill ("white");
  text ("SCORE:"+score,850,40); 
text ("500",10,735);
 text ("500",92,735);
text ("500",165,735);
 text ("500",250,735);
 text ("100",330,735);
text ("100",405,735);
 text ("100",488,735);
 text ("100",570,735);
 text ("200",653,735);
 text ("200",735,735);
text ("200",814,735);
text ("200",890,735);
   Engine.update(engine);
    ground. display();
    
// for loop k= i 
    for(var k=0;k<plinkos.length;k++){
      plinkos[k].display();
    
    }

     
  
if (particle != null)
{
  particle.display();

  if (particle.body.position.y>760)
  {
   if(particle.body.position.x<300)
   {
    score=score+500;
    particle=null;
    if(count>=5) gameState = "end";
   }
   else if (particle.body.position.x<600&&particle.body.position.x>301){
    score=score+100;
    particle=null;
    if(count>=5) gameState = "end";
   }
   else if (particle.body.position.x<900&&particle.body.position.x>601){
    score=score+200;
    particle=null;
    if(count>=5) gameState = "end";
   }
  }
}
for(var k=0;k<divisions.length;k++){
  divisions[k].display();

}
}








function mousePressed()
{
  if(gameState!=="end");
{
count++;
particle=new Particle(mouseX,10,10,10);
  
  }
}




























































