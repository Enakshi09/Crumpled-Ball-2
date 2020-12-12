const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, paper1, ground

function preload()
{
	DustbinImg=loadImage("dustbinImg.png")
	PaperImg=loadImage("paperIMG.png")
}

function setup() {
	createCanvas(900, 300);

	engine = Engine.create();
	world = engine.world;

    groundSprite=createSprite(width/2,265, width,10);
	groundSprite.shapeColor=color(0)

    ground = Bodies.rectangle(width/2, 265, width, 10 , {isStatic:true} );
	World.add(world, ground)
	
	dustbin1 = new Dustbin(752,210,20,100);
    dustbin2 = new Dustbin(646,210,20,100);
	dustbin3 = new Dustbin(700,250,124,20);
	dustbin4 = createSprite(700,200,500,50);
	dustbin4.addImage(DustbinImg)
	dustbin4.scale=0.5

	paper1 = new paper(100,250,35)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  Engine.update(engine)
  


  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper1.display();

  drawSprites();

 
}

function keyPressed() {
	if(keyCode===UP_ARROW) {

		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:150,y:-150})
	}
}

