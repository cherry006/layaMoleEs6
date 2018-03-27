class Game extends GameUI{
    constructor(){
        super();
        this.moles=new Array;
        this.moleNum=9;
        this.hitCallback=Laya.Handler.create(this,this.setCount,null,false);        
        //this.start();
    }
    start(){
        for(var i=0;i<9;i++){
            var box = this.getChildByName("item"+i)
            var mole = new Mole(box.getChildByName("normal"),box.getChildByName("hit"),box.getChildByName("score"),this.hitCallback,21);
            this.moles.push(mole);            
        }
        Laya.timer.loop(2000,this,this.show);
        this.hammer = new Hammer();
        this.addChild(this.hammer);
        this.hammer.start();
        //初始分数
        this.score = 0;     
        //进度条
        this.progress.value=1;
    }
    show(){       
        //进度条
        this.progress.value -= (1/10); 
        if(this.progress.value == 0){
            this.gameOver()
        }
        var index = Math.floor(Math.random()*this.moleNum);
        this.moles[index].show();
    }
    gameOver(){
        this.hammer.end();
        Laya.timer.clear(this,this.show);
        if(!this.gOver){
            //this是实例？？
            this.gOver = new GameOver(this);
        }        
        this.gOver.centerX = 0;
        this.gOver.centerY = 40;
        this.gOver.scoreDisplay(this.score);
        Laya.stage.addChild(this.gOver);
    }
    setCount(type){
        if(type == 2){
            this.score +=100;
        }else{
            this.score -= 100;
        }
        if(this.score <= 0){
            this.score = 0;
        }
        this.scoreDisplay();
    }
    scoreDisplay(){
        this.data={};
        this.temp=this.score;
        for(var i=9;i>=0;i--){
            this.data["item"+i]={index:Math.floor(this.temp%10)};
            this.temp/=10;
        }
        //this.count.dataSource={item0:{index:5},item1:{index:6}};
        this.count.dataSource=this.data;
    }
}
