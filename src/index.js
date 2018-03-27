class main{
    static init(){
        //初始化舞台
        Laya.init(800,600);
        Laya.stage.bgColor="#ffffff";
        Laya.stage.scaleMode = Laya.Stage.SCREEN_NONE;
        //导入素材
        //静态方法里this指向类
        Laya.loader.load("res/atlas/comp.atlas",Laya.Handler.create(this,this.onLoaded),null,Laya.Loader.ATLAS);
    }
    static onLoaded(){
        // var game = new Game();
        // //game.start();
        // Laya.stage.addChild(game);
        var gameStart = new GameStart();
        Laya.stage.addChild(gameStart);
    }
}
main.init();


