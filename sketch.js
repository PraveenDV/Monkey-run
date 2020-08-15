var playeranimation,obstacleimg,bananaimg,obstaclegrp,bananagrp,monkey,ground,invisibleground;

var score;

var PLAY;
var HIT;
var gamestate=PLAY;

function preload(){
 banaimg=loadImage("banana.png");
 obstacleimg=loadImage("stone.png");
 playeranimaton=loadAnimation("Monkey01.png","Monkey02.png","Monkey03.png","Monkey.png","Monkey04.png","Monkey05.png","Monkey06.png","Monkey07.png","Monkey08.png","Monkey09.png","Monkey10.png");
}
    
function setup() {
  createCanvas(600, 200);
  monkey=createSprite(10,170,10,10);
  monkey.addAnimation(playeranimation);
  monkey.scale=0.12;
  
  ground=createSprite(200,180,5,5);
  
  bananagrp=createGroup();
  obstaclegrp=createGroup();
  
  score=0;
  
  PLAY=1;
  HIT=0;
  
}

function draw() {
  background(220);
  
  textSize(20);
  fill("blue");
  text("Score:"+score,500,50);
  

  if(gamestate===1){
    if(keyDown("space")&& monkey.y>=159){
      monkey.velocityY=-12;
    }
    monkey.velocityY=monkey.velocityY+0.8;
    
    if(ground.x<0){
      ground.width=ground.width/2;
    }
    
    spawnfood();
    spawnobstacles();
    
    switch(score){
      case 10: monkey.scale=0.12;
        break;
      case 20: monkey.scale=0.14;
        break;
      case 30: monkey.scale=0.16;
      break;
      case 40: monkey.scale=0.18;
        break;
    }
    
    if(monkey.isTouching(obstaclegrp)){
      gamestate=0;
    }
    
    
  }
    
    if(gamestate===0){
      monkey.scale=monkey.scale-0.02;
    }
  
}

function spawnfood(){
  if(frameCount%300===0){
    var banana=createSprite(600,Math.round(random(100,130)),10,10);
    banana.addImage(bananaimg);
    banana.scale=0.12;
    banana.velocityX=-4;
    banana.lifetime=160;
    
    bananagrp.add(banana);
  }
    
}

function spawnobstacles(){
  if(frameCount%300===0){
  var obstacle=createSprite(600,180,10,10);
  obstacle.addImage(obstacleimg);
  obstacle.scale=0.2;
  obstacle.velocityX=-4;
  obstacle.lifetime=160;
    
  obstaclegrp.add(obstacle);
}
  
}