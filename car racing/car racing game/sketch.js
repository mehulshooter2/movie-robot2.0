var database;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-180,displayHeight-250); 

  game = new Game();
  game.getState();
  game.start();

}

function draw(){ 
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play()
  }

}
