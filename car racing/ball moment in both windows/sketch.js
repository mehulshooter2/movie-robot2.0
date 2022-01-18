var ball;
var database;
var position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,20,20);
    ball.shapeColor = "red";

    database = firebase.database();

    var ballRefRead = database.ref("ball/position");
    ballRefRead.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    var ballRef = database.ref("ball/position");
    ballRef.set({
        "x" : position.x + x,
        "y" :position.y + y
    });
}

function readPosition(data){

    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}
