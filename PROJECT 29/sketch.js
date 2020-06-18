var object1, object2, object3, object4, object5, object6, object7, object8;
var base1, base2;
var block,ground;
var launcher;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function setup() {
	createCanvas(1280, 550);

	engine = Engine.create();
	world = engine.world;

	
	block = new Block(100, 300);
	
	ground = new Ground(width/2, 540, width, 20);
	
	launcher = new Launcher(block.body, {x:100, y:300});

	base1 = new Base(450, 400);
	base2 = new Base(900, 200);

	//BASE 1
	object1 = new Obj1(450, 375);
	object2 = new Obj1(425, 375);
	object3 = new Obj1(400, 375);
	object4 = new Obj1(475, 375);
	object5 = new Obj1(500, 375);
	object6 = new Obj1(525, 375);
	object7 = new Obj1(550, 375);
	object8 = new Obj1(350, 375);
	object9 = new Obj1(375, 375);

	object10 = new Obj1(450, 350);
	object11 = new Obj1(425, 350);
	object12 = new Obj1(400, 350);
	object13 = new Obj1(475, 350);
	object14 = new Obj1(500, 350);
	object15 = new Obj1(375, 350);
	object16 = new Obj1(525, 350);

	object17 = new Obj1(450, 325);
	object18 = new Obj1(425, 325);
	object19 = new Obj1(475, 325);
	
	object20 = new Obj1(450, 300);

	// BASE 2
	objectB0 = new Obj2(900, 175);
	objectB1 = new Obj2(925, 175);
	objectB2 = new Obj2(950, 175);
	objectB3 = new Obj2(975, 175);
	objectB4 = new Obj2(875, 175);
	objectB5 = new Obj2(850, 175);
	objectB6 = new Obj2(825, 175);
	objectB7 = new Obj2(800, 175);
	objectB8 = new Obj2(1000, 150);

	objectB9 = new Obj2(900, 150);
	objectB10 = new Obj2(925, 150);
	objectB11 = new Obj2(950, 150);
	objectB12 = new Obj2(875, 150);
	objectB13 = new Obj2(850, 150);
	objectB14 = new Obj2(825, 150);
	objectB15 = new Obj2(975, 150);

	objectB16 = new Obj2(900, 125);
	objectB17 = new Obj2(925, 125);
	objectB18 = new Obj2(875, 125);

	objectB19 = new Obj2(900, 100);

	
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
background(100);
rectMode(CENTER);
block.display();
ground.display();
base1.display();
base2.display();

// BASE 1
object1.display();
object2.display();
object3.display();
object4.display();
object5.display();
object6.display();
object7.display();
object8.display();
object9.display();
object10.display();
object11.display();
object12.display();
object13.display();
object14.display();
object15.display();
object16.display();
object17.display();
object18.display();
object19.display();
object20.display();

// BASE 1
objectB0.display();
objectB1.display();
objectB2.display();
objectB3.display();
objectB4.display();
objectB5.display();
objectB6.display();
objectB7.display();
objectB8.display();
objectB9.display();
objectB10.display();
objectB11.display();
objectB12.display();
objectB13.display();
objectB14.display();
objectB15.display();
objectB16.display();
objectB17.display();
objectB18.display();
objectB19.display();

launcher.display();
drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(block.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
    launcher.fly();
}