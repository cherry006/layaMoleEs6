class Mole{
    constructor(normal,hit,score,hitCallback,downY){
        this.normal = normal;
        this.hit = hit;
        this.score = score;
        this.downY = downY;
        this.upY = this.normal.y;
        this.scoreY = this.score.y;
        this.hitCallback = hitCallback;
        //这里是通过创建实例，调用构造函数调用的，不是类调用的
        this.reset();
        //监听
        this.normal.on(Laya.Event.CLICK,this,this.hitting)
    }
    reset(){
        this.normal.visible = false;
        this.hit.visible = false;
        this.score.visible = false;
    }
    show(){
        this.type = Math.random() < 0.4 ? 1 : 2;
        this.normal.skin= "comp/mouse_normal_"+this.type+".png";
        this.hit.skin= "comp/mouse_hit_"+this.type+".png";
        this.score.skin = "comp/score_"+this.type+".png";
        this.normal.visible = true;
        this.normal.y=this.downY;    
        Laya.Tween.to(this.normal,{y:this.upY},500,Laya.Ease.backOut,Laya.Handler.create(this,this.showComplete))
    }
    showComplete(){
        Laya.timer.once(200,this,this.hide)
    }
    hide(){
        Laya.Tween.to(this.normal,{y:this.downY},300,Laya.Ease.backIn,Laya.Handler.create(this,this.reset))
    }
    hitting(){
        this.normal.visible = false;
        this.hit.visible = true;        
        Laya.timer.clear(this,this.hide);
        Laya.timer.once(200,this,this.reset)
        this.showScore();
        //总分
        this.hitCallback.runWith(this.type);
    }
    showScore(){        
        this.score.y = this.scoreY+30;
        this.score.scale(0,0);
        this.score.visible = true;
        Laya.Tween.to(this.score,{y:this.scoreY,scaleX:1,scaleY:1},300,Laya.Ease.backOut);
    }
}