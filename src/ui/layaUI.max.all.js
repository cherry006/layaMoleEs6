var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.count=null;
		    this.progress=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);

		}

		GameUI.uiView={"type":"View","props":{"width":800,"height":600},"child":[{"type":"Image","props":{"y":25,"x":25,"skin":"comp/back.png"}},{"type":"Box","props":{"y":193,"x":154,"name":"item0"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":12,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-01.png"}},{"type":"Image","props":{"y":30,"x":61,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":193,"x":343,"name":"item1"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-02.png"}},{"type":"Image","props":{"y":30,"x":63,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":199,"x":540,"name":"item2"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-03.png"}},{"type":"Image","props":{"y":30,"x":63,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":127,"name":"item3"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-04.png"}},{"type":"Image","props":{"y":30,"x":62,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":289,"x":349,"name":"item4"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-05.png"}},{"type":"Image","props":{"y":30,"x":62,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":286,"x":545,"name":"item5"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-06.png"}},{"type":"Image","props":{"y":30,"x":62,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":386,"x":128,"name":"item6"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-07.png"}},{"type":"Image","props":{"y":30,"x":63,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":391,"x":350,"name":"item7"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-08.png"}},{"type":"Image","props":{"y":30,"x":62,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Box","props":{"y":391,"x":567,"name":"item8"},"child":[{"type":"Image","props":{"y":2,"x":6,"skin":"comp/mouse_normal_1.png","name":"normal"}},{"type":"Image","props":{"y":14,"x":7,"skin":"comp/mouse_hit_1.png","name":"hit"}},{"type":"Image","props":{"y":84,"skin":"comp/mask-09.png"}},{"type":"Image","props":{"y":30,"x":63,"skin":"comp/score_1.png","name":"score","anchorY":0.5,"anchorX":0.5}}]},{"type":"Image","props":{"y":16,"x":12,"width":85,"skin":"comp/total Score.png","height":29}},{"type":"Box","props":{"y":68,"x":21,"var":"count"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":21,"skin":"comp/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":42,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":63,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":84,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":105,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":126,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":147,"skin":"comp/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":168,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":189,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]},{"type":"ProgressBar","props":{"y":12,"x":487,"var":"progress","value":1,"skin":"comp/progress_time.png"}}]};
		return GameUI;
	})(View);
var GameOverUI=(function(_super){
		function GameOverUI(){
			
		    this.replay=null;
		    this.count=null;

			GameOverUI.__super.call(this);
		}

		CLASS$(GameOverUI,'ui.GameOverUI',_super);
		var __proto__=GameOverUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameOverUI.uiView);

		}

		GameOverUI.uiView={"type":"View","props":{"width":500,"height":500},"child":[{"type":"Image","props":{"y":-1,"x":1,"width":503,"skin":"comp/overBg.png","sizeGrid":"10,10,10,10","height":501}},{"type":"Button","props":{"y":320,"x":161,"var":"replay","stateNum":2,"skin":"comp/btn_restart.png"}},{"type":"Image","props":{"y":116,"x":189,"width":111,"skin":"comp/total Score.png","height":43}},{"type":"Box","props":{"y":202,"x":158,"var":"count"},"child":[{"type":"Clip","props":{"skin":"comp/clip_number.png","name":"item0","clipX":10}},{"type":"Clip","props":{"x":20,"skin":"comp/clip_number.png","name":"item1","clipX":10}},{"type":"Clip","props":{"x":40,"skin":"comp/clip_number.png","name":"item2","clipX":10}},{"type":"Clip","props":{"x":60,"skin":"comp/clip_number.png","name":"item3","clipX":10}},{"type":"Clip","props":{"x":80,"skin":"comp/clip_number.png","name":"item4","clipX":10}},{"type":"Clip","props":{"x":100,"skin":"comp/clip_number.png","name":"item5","clipX":10}},{"type":"Clip","props":{"x":120,"skin":"comp/clip_number.png","name":"item6","clipX":10}},{"type":"Clip","props":{"x":140,"skin":"comp/clip_number.png","name":"item7","clipX":10}},{"type":"Clip","props":{"x":160,"skin":"comp/clip_number.png","name":"item8","clipX":10}},{"type":"Clip","props":{"x":180,"skin":"comp/clip_number.png","name":"item9","clipX":10}}]}]};
		return GameOverUI;
	})(View);
var GameStartUI=(function(_super){
		function GameStartUI(){
			
		    this.btnStart=null;

			GameStartUI.__super.call(this);
		}

		CLASS$(GameStartUI,'ui.GameStartUI',_super);
		var __proto__=GameStartUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameStartUI.uiView);

		}

		GameStartUI.uiView={"type":"View","props":{"width":800,"height":500},"child":[{"type":"Image","props":{"y":5,"x":38,"skin":"comp/help.png"}},{"type":"Button","props":{"y":387,"x":311,"var":"btnStart","stateNum":2,"skin":"comp/btn_start.png"}}]};
		return GameStartUI;
	})(View);
var HammerUI=(function(_super){
		function HammerUI(){
			
		    this.hammering=null;
		    this.hammer=null;

			HammerUI.__super.call(this);
		}

		CLASS$(HammerUI,'ui.HammerUI',_super);
		var __proto__=HammerUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(HammerUI.uiView);

		}

		HammerUI.uiView={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"y":87,"x":99,"width":98,"var":"hammer","skin":"comp/hammer.png","rotation":-20,"pivotY":74,"pivotX":98,"height":77},"compId":2}],"animations":[{"nodes":[{"target":2,"keyframes":{"y":[{"value":51,"tweenMethod":"linearNone","tween":true,"target":2,"key":"y","index":0}],"x":[{"value":50,"tweenMethod":"linearNone","tween":true,"target":2,"key":"x","index":0}],"rotation":[{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":0},{"value":20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":1},{"value":-20,"tweenMethod":"linearNone","tween":true,"target":2,"key":"rotation","index":5}],"anchorY":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorY","index":0}],"anchorX":[{"value":0.5,"tweenMethod":"linearNone","tween":true,"target":2,"key":"anchorX","index":0}]}}],"name":"hammering","id":1,"frameRate":24,"action":0}]};
		return HammerUI;
	})(View);