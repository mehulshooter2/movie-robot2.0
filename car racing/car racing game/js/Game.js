class Game{
    constructor(){
    }
    getState(){
        var gameStateref = database.ref("gameState");
        gameStateref.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref("/").update({
            gameState : state
        })
    }
    
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
   
            form = new Form();
            form.display();
        }

        car1 = createSprite(100,400,20,20);
        car2 = createSprite(200,400,20,20);
        car3 = createSprite(300,400,20,20);
        car4 = createSprite(400,400,20,20);

        cars = [car1,car2,car3,car4]
        
    }
    play(){
        form.hide();
        Player.getPlayerinfo();

        if(allPlayers !== undefined){
            var index = 0;
            var y;
            var x = 100;

            for(var plr in allPlayers ){
                index = index +1;
                x = x+100;
                y = displayHeight-allPlayers[plr].distance

                cars[index-1].x=x;
                cars[index-1].y=y;


                if(index === player.index){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 20;
            player.update();
        }
        drawSprites();
    }
}
