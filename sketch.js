var bow , arrow,  background, purpleB, pinkB, mintB ,blueB ,arrowGroup;
var bowImage, arrowImage, mint_balloonImage, purple_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  purple_balloonImage = loadImage("purple_balloon0.png");
  mint_balloonImage = loadImage("mint_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 1
  
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1.3;
  
  score = 0  
  purpleB= new Group();
  mintB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();  
}

function draw() {
 background(0);
  scene.velocityX = -3 

  if (scene.x < 0){
    scene.x = scene.width/2;
  }
  
  bow.y = World.mouseY
  
  if (keyDown("space")) {
    createArrow();  
  }
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      purpleBalloon();
    } else if (select_balloon == 2) {
      mintBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(purpleB)) {
    purple.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  if (arrowGroup.isTouching(mintB)) {
    mintB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
  }

  drawSprites();
  text("Score: "+ score, 300,50);
}

function purpleBalloon() {
  var purple = createSprite(0,Math.round(random(20, 370)), 10, 10);
  purple.addImage(purple_balloonImage);
  purple.velocityX = 3;
  purple.lifetime = 150;
  purple.scale = 0.2;
  purpleB.add(purple);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.2;
  blueB.add(blue);
}

function mintBalloon() {
  var mint = createSprite(0,Math.round(random(20, 370)), 10, 10);
  mint.addImage(mint_balloonImage);
  mint.velocityX = 3;
  mint.lifetime = 150;
  mint.scale = 0.2;
  mintB.add(mint);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 2
  pinkB.add(pink);
}


 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}
