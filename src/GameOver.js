class GameOver extends GameOverUI{
    constructor(game){
        super();
        //接收Game类实例
        this.game = game;
        //点击重新开始
        this.replay.on(Laya.Event.CLICK,this,this.onReplay)
    }
    onReplay(){
        this.removeSelf();
        this.game.removeSelf();
        if(!gameStart){
            var gameStart = new GameStart();
            Laya.stage.addChild(gameStart);            
        }
    }
    scoreDisplay(score){
        this.data={};
        this.temp=score;
        for(var i=9;i>=0;i--){
            this.data["item"+i]={index:Math.floor(this.temp%10)};
            this.temp/=10;
        }
        this.count.dataSource=this.data;
    }
}