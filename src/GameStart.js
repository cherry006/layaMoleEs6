class GameStart extends GameStartUI{
    constructor(){
        super();
        this.btnStart.on(Laya.Event.CLICK,this,this.onStart);
    }
    onStart(){
        this.removeSelf();
        if(!game){
            var game = new Game();
            Laya.stage.addChild(game);            
        }
        game.start();
    }
}