var sun;
var mer;
var ven;
var earth;
var mars;
var jup;
var sat;
var uranus;
var nep;
var sunImage;
var merImage;
var venImage;
var earthImage;
var marsImage;
var jupImage;
var satImage;
var uranusImage;
var nepImage;

var sunX;
var sunY;

var merX;
var merY;

var angle = 0;
var anglespeed = 0.2;
var sunRadius;


function setup() {
  createCanvas(800,800);
  
  sunImage=loadImage('sun.jpg');
  
  merImage=loadImage('mercury.jpg')
  
  venImage=loadImage('venus.jpg')
  
  earthImage=loadImage('earth.png')

  marsImage=loadImage('mars.jpg')

  jupImage=loadImage('jupiter.jpg')

  satImage=loadImage('sat.jpg')

  uranusImage=loadImage('uranus.jpg')

  nepImage=loadImage('nep.jpg')

  sunX = 0;
  sunY = 0;

  sun = createSprite(sunX,sunY,10,10);
    
    sun.scale = 0.3;sun.setCollider("circle", 0, 0, 300);
    sun.debug = true;

  
  mer = createSprite(70,50,20,20);
    mer.scale = 0.3;
   
    mer.setCollider("circle", 0, 0, 300);
    mer.debug = true;

 
  ven = createSprite(210,60,20,20);
    ven.scale = 0.1;
    
    ven.setCollider("circle", 0, 0, 200);
    ven.debug = true;

  
  earth = createSprite(150,-18,20,20);
    earth.depth = sun.depth-1;
    
    earth.setCollider("circle", 0, 0, 200);
    earth.debug = true;

 
   mars = createSprite(30,220);
   
    mars.scale = 0.5
    mars.setCollider("circle", 0, 0, 200);
    mars.debug = true;

  
   jup = createSprite(-180,210);
    
    jup.scale = 0.5
    jup.setCollider("circle", 0, 0, 200);
    jup.debug = true;

 
  sat = createSprite(340,-30);
    
    sat.scale = 0.5
    sat.setCollider("circle", 0, 0, 200);
    sat.debug = true;

  
   uranus = createSprite(220,350);
    
    uranus.scale = 0.5
    uranus.setCollider("circle", 0, 0, 200);
    uranus.debug = true;

 
   nep = createSprite(-340,-320);
    
    nep.scale = 0.5
    nep.setCollider("circle", 0, 0, 200);
    nep.debug = true;

     
    sun.addImage("sun",sunImage)
    
    mer.addImage("mer",merImage)
     
    ven.addImage("ven",venImage)

    earth.addImage("earth",earthImage)

    mars.addImage("mars",marsImage)

    jup.addImage("jup",jupImage)

    sat.addImage("sat",satImage)
       
    uranus.addImage("uranus",uranusImage)

    nep.addImage("nep",nepImage)



        merX = 200;
        merY = 200;


  
  
  
  
}
function preload(){
 
}

function draw() { 
  background("#222");

  
  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(angle);  
 
  
  if (sun.collide(mer)) {
    mer.destroy();
}
if (sun.collide(ven)) {
  ven.destroy();
}


if (sun.collide(earth)) {
  earth.destroy();
}

if (sun.collide(mars)) {
  mars.destroy();
}

if (sun.collide(jup)) {
  jup.destroy();
}

if (sun.collide(sat)) {
  sat.destroy();
}

if (sun.collide(uranus)) {
  uranus.destroy();
}

if (sun.collide(nep)) {
  nep.destroy();
}
angle = angle + anglespeed;

if(World.frameRate%1000) {
  sun.scale = sun.scale + 0.001;



}

  drawSprites();
}