class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 0;
    }

    getCount(){
        var playerCountref = database.ref("playerCount");
        playerCountref.on("value",(data)=>{
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    static getPlayerinfo(){
        var playerInfoRef = database.ref("players");
            playerInfoRef.on("value",(data)=>{
                allPlayers = data.val()
            })
    }

    update(){
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })
    }
}