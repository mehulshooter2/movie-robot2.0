class Form{
    constructor(){
        this.title = createElement("h1")
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting  = createElement("h3");
    }
    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
    display(){
        this.title.html("car racing game")
        this.title.position(displayWidth/2-50,20);
    
        this.input.position(displayWidth/2,displayHeight/2-50);
        this.button.position(displayWidth/2+20,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount

            player.update()
            player.updateCount(playerCount)

            this.greeting.html("hello ! "+player.name);
            this.greeting.position(displayWidth/2,100);
        })
    }
}
