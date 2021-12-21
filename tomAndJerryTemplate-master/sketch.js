var jerry;
var tom;
var jerry1,jerry2,jerry3;
var tom1,tom2,tom3;
var imagemjardin;

function preload() {
    //load the images here
    imagemjardin = loadImage("imagens/garden.png");
    jerry1 = loadAnimation("imagens/mouse1.png")
    jerry2 = loadAnimation("imagens/mouse2.png","imagens/mouse3.png")
    jerry3 = loadAnimation("imagens/mouse4.png")
    tom1 = loadAnimation("imagens/cat1.png");
    tom2 = loadAnimation("imagens/cat2.png", "imagens/cat3.png");
    tom3 = loadAnimation("imagens/cat4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600);
    jerry = createSprite(200,600);

    jerry.scale = 0.15;
    tom.scale = 0.2;   
    
    tom.addAnimation("tom1", tom1)
    jerry.addAnimation("jerry1",jerry1)

}

function draw() {

    background(imagemjardin);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry)){
        tom.velocityX = 0;
        tom.addAnimation("tom3",tom3);
        tom.scale = 0.2;
        tom.changeAnimation("tom3")
        jerry.addAnimation("jerry3",jerry3);
        jerry.changeAnimation("jerry3");
    }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("jerry2",jerry2);
    jerry.changeAnimation("jerry2");
    jerry.frameDeLay = 25;
    tom.velocityX = -5;
    tom.addAnimation("tom2",tom2);
    tom.changeAnimation("tom2");
    
    }

}
