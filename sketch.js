
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var mango
var boy, boyprint, stone, tree,treePrint

var ground;
function preload()
{
	boyprint = loadImage("boy.png") 
	treePrint = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	//boy = createSprite(200,500,40,40);
	//boy.addImage(boyprint)
	//boy.scale= 0.15
	stone = new Stone(100,390)
	//stone.scale=0.1
	constraint1 = new Slingshot(stone.body,{x:100,y:415})
	
	ground =  new Ground(400,597,800,120)
	
	//tree = createSprite(668,350,20,20)
	//tree.addImage(treePrint)
	//tree.scale = 0.4
	
	mango = new Mango(560,180)
	mango1 = new Mango(600,200)
	mango2 = new Mango(560,330)
	mango3 = new Mango(700,300)
	mango4 = new Mango(750,150)
	mango5 = new Mango(680,200)
	mango6 = new Mango(780,300)

	var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 800,
            showAngleIndicator: true
        }
    });

	Render.run(render);

	

}


function draw() {
	Engine.update(engine)
  background(0);
  imageMode(RADIUS);
  image(treePrint,400,100,500,500);
  image(boyprint,110,330,100,300)
  

  text("x: "+mouseX+" y: "+mouseY,mouseX,mouseY)
  

 

  stone.display()
  constraint1.display()
  mango.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  ground.display()
  
  detectollision(stone,mango);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);

  
 
  drawSprites();
 
}
function mouseReleased(){
    constraint1.fly();
    
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function keyPressed(){
    
    if(keyCode === 32){
        gameState="onSling"
        constraint1.attach(stone.body);
    }
}


function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	//console.log(distance);
	if(distance<=lmango.radius+lstone.radius){ 
		Matter.Body.setStatic(lmango.body,false)
	}
}




