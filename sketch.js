var backgroundImg;
var playerAnim;
var player, groundImg,ground,invisibleGround,enemy;
var plat1,plat1Img,plat2,plat3,plat4,plat5,plat6,plat7,plat8,plat9,plat10;
var inviplat,iplat2,iplat3,iplat4,iplat5,iplat6,iplat7,iplat8,iplat9,iplat10;
var dim;


function preload() {
    backgroundImg = loadImage("background.png");
playerAnim=loadAnimation("areeb1.png","areeb2.png");
groundImg=loadImage("ground.png");
plat1Img=loadImage("ground.png");
dim=loadImage("diamond.png");

}

function setup(){
    var canvas = createCanvas(displayWidth-20,displayHeight-200);
    player = createSprite(50,displayHeight-305,20,20);
    player.addAnimation("wiz",playerAnim);
    player.scale=0.06
    ground=createSprite(displayWidth/2-10,displayHeight-220,displayWidth-20,30);
    ground.addImage(groundImg);
    invisibleGround=createSprite(displayWidth/2-10,displayHeight-215,displayWidth-20,30);
    plat1=createSprite(displayWidth+50,displayHeight-270,displayWidth/2,30);
    plat1.addImage(plat1Img);
    inviplat=createSprite(displayWidth/2+130,displayHeight-275,displayWidth,30)
   inviplat.visible=false;
   plat2=createSprite(-800,displayHeight/2-50,displayWidth/2,30);
   plat2.addImage(groundImg);
   iplat2=createSprite(0,displayHeight/2-45,displayWidth/2+300,30);
   plat3=createSprite(displayWidth+800,displayHeight/4,displayWidth/2,30);
   plat3.addImage(groundImg);
   iplat3=createSprite(displayWidth-130,displayHeight/4+5,displayWidth/2,57);
iplat3.visible=false;
enemy=createSprite(displayWidth,displayHeight/2+75,20,20);
enemy.velocityX=-3
enemy.addImage(dim);
enemy.scale=0.3;
}
function draw(){
background(backgroundImg)
drawSprites();
invisibleGround.visible=false;
iplat2.visible=false;
player.collide(invisibleGround);
player.collide(inviplat);
player.collide(iplat2);
player.collide(iplat3);
enemy.collide(inviplat);
if(keyIsDown(RIGHT_ARROW)){
player.x=player.x+3



}
if(enemy.x<150){

enemy.velocityX=3;

}

if(enemy.x>displayWidth-100){

enemy.velocity.x=-3;

}
if(keyDown("d")){
    player.x=player.x+3
    
    }
if(keyIsDown(LEFT_ARROW)){
    player.x=player.x-3
}
if(keyDown("a")){
    player.x=player.x-3
    
    }
if(keyDown("space") && (player.isTouching(ground)||player.isTouching(plat1)||player.y>displayHeight/3)) {
    player.velocityY = -14;
    
  }
  player.velocityY = player.velocityY + 1;
  ground.depth=0;



}