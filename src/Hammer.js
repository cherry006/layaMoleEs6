class Hammer extends HammerUI{
    constructor(){
        super();
        this.start()
    }
    start(){
        this.visible = true;
        Laya.Mouse.hide();
        Laya.stage.on(Laya.Event.MOUSE_DOWN,this,this.mouseDown);
        Laya.stage.on(Laya.Event.MOUSE_MOVE,this,this.mouseMove);
        this.mouseMove();
    }
    end(){
        this.visible = false;
        Laya.Mouse.show();
        Laya.stage.off(Laya.Event.MOUSE_DOWN,this,this.mouseDown);
        Laya.stage.off(Laya.Event.MOUSE_MOVE,this,this.mouseMove);
    }
    mouseDown(){
        this.hammering.play(0,false);
    }
    mouseMove(){
        this.pos(Laya.stage.mouseX-this.width/2,Laya.stage.mouseY-this.height/2);
    }
}