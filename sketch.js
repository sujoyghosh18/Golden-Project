function preload(){
    //char1 = loadAnimation("1.png","2.png","3.png");
    
    //obstacle1 = loadImage("images/ob1.png");
    //obstacle2 = loadImage("images/ob2.png");
    //obstacle3 = loadImage("images/ob3.png");
    //obstacle4 = loadImage("images/ob4.png");
    //obstacle5 = loadImage("images/ob5.png");
    //obstacle6 = loadImage("images/ob6.png");

    //backdropimg = loadImage("images/backdrop.png");
    backdropgroundimg = loadImage("images/backdrop_ground_f.png");
    groundImage = loadImage("images/sky f.jpg");

    waterImage = loadImage("images/water_1.png");

    characterImg = loadImage("images/1.png")
    
  }
  
  function setup() {
    createCanvas(1200, 500);
    
    ground = createSprite(600,200,1000,240);
    ground.addImage("ground",groundImage);
    ground.velocityX=-2;
    //ground.x = ground.width /2;
    ground.scale=2;
  
    //backdrop = createSprite(500,120,200,200);
    //backdrop.addImage(backdropimg);

    water = createSprite(800,height - 42,100,100);
    water.addImage(waterImage);
    water.velocityX = -2;
    water.scale=1;

    backdrop_ground = createSprite(800,height - 90,200,200);
    backdrop_ground.addImage(backdropgroundimg);
    //backdrop_ground.velocityX=-2;
    backdrop_ground.scale=2;

    character = createSprite(80,height - 135,10,10);
    character.addImage(characterImg);
  }
  
  function draw() {
    
    background(180);
    //displaying score
   
      
      
      if (backdrop_ground.x < 400){
        backdrop_ground.x = backdrop_ground.width/2;
      }
      
      if (ground.x < 0){
        ground.x = ground.width/2;
      }
      
      if (water.x < 0){
        water.x = water.width/2;
      }
     
  
    drawSprites();
  }