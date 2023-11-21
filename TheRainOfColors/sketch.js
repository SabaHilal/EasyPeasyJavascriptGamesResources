const { Engine, World, Bodies } = Matter ;
var drop
var rain = [];
var x,y,w,h = 0;
var backgroundImg;

  function preload(){
    backgroundImg = loadImage("sky.png"); 
  }
  function setup() {
      engine = Engine.create();
      world = engine.world;
      var canvas = createCanvas(1200,600);
           
  }

  function newDrop() {
      for (var i=0; i<20; i++){
        x = random (0,1200);
        y = random(-20,100);
        h = random (3,7);
        rain.push(new Drop(x,y,h));
      }
  }

  function draw() {
      background(backgroundImg);  
      Engine.update(engine);
     newDrop();
     for (var j = 0; j < rain.length ; j++) {
     rain[j].display();

      if (rain[j].isOffScreen()){
       rain.splice(j,1);
      }
  
    } 

  }
