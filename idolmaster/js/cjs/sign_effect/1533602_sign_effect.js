(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.reflect_mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("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");
	this.shape.setTransform(0.0197,0.0071);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_mask, new cjs.Rectangle(-152.6,-86.2,305.29999999999995,172.4), null);


(lib.reflect_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// standard
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,297.1,0.1,-297).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_inner, new cjs.Rectangle(0,0,300,1200), null);


(lib.glitter_inner_sphere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.302)","rgba(255,255,255,0)"],[0,0.522,1],0,0,0,0,0,51.4).s().p("AlhFhQiSiSAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPQAADPiTCSQiSCTjPAAQjPAAiSiTg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner_sphere, new cjs.Rectangle(-50,-50,100,100), null);


(lib.reflect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// main
	this.lighter_tgt = new lib.reflect_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.setTransform(0,-269.35,1.083,1.083,0,0,-20.0008);
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect, new cjs.Rectangle(0,-380.4,305.3,760.9), null);


(lib.reflect_container_cjs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{flash:20});

	// timeline functions:
	this.frame_0 = function() {
		this.preview.visible = false;
	}
	this.frame_20 = function() {
		this.play();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(19));

	// preview
	this.preview = new lib.reflect();
	this.preview.name = "preview";
	this.preview.parent = this;
	this.preview.setTransform(-0.5,-0.1,1,1,0,0,0,-0.5,-0.1);
	this.preview.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.preview).wait(39));

	// reflect
	this.instance = new lib.reflect();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,466.75,1,1,0,0,0,-0.5,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-0.1,y:-0.1},9,cjs.Ease.get(-1)).to({regY:0.1,y:-466.55},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-847.1,305.3,1694.2);


(lib.glitter_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.glitter_inner_sphere();
	this.instance.parent = this;
	this.instance.setTransform(0,0.05,1.5,0.0862,-45);

	this.instance_1 = new lib.glitter_inner_sphere();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.3342,0.3342);

	this.instance_2 = new lib.glitter_inner_sphere();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-0.05,1.5,0.0862,45);

	this.instance_3 = new lib.glitter_inner_sphere();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_inner, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.glitter = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// flare
	this.lighter_tgt = new lib.glitter_inner();
	this.lighter_tgt.name = "lighter_tgt";
	this.lighter_tgt.parent = this;
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.reflect_wrapper_1533602 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.reflect = new lib.reflect_container_cjs();
	this.reflect.name = "reflect";
	this.reflect.parent = this;
	this.reflect.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.reflect).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_wrapper_1533602, new cjs.Rectangle(0,-380.4,305.3,760.9), null);


(lib.glitter_container_cjs = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{loop:20});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndPlay( Math.floor( Math.random() * 20 ) );
	}
	this.frame_20 = function() {
		
	}
	this.frame_50 = function() {
		this.gotoAndPlay( 0 );
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(30).call(this.frame_50).wait(1));

	// mc
	this.lux = new lib.glitter();
	this.lux.name = "lux";
	this.lux.parent = this;

	this.instance = new lib.glitter();
	this.instance.parent = this;
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lux}]}).to({state:[]},1).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance}]},9).to({state:[]},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({scaleX:0.7333,scaleY:0.7333,alpha:0.75},9,cjs.Ease.get(0.5)).to({scaleX:0.7,scaleY:0.7,alpha:0},9,cjs.Ease.get(-0.5)).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001);


(lib.glitter_wrapper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.instance = new lib.glitter_container_cjs();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glitter_wrapper, new cjs.Rectangle(-56.1,-56.1,112.2,112.30000000000001), null);


(lib.sign_effect_1533602 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.parent = this;
	this.instance.setTransform(581.5,558.15,0.4282,0.4282);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(396.85,458.55);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.parent = this;
	this.instance_2.setTransform(626.8,472.05);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.parent = this;
	this.instance_3.setTransform(514.6,619.35);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.parent = this;
	this.instance_4.setTransform(427.7,593.8,0.7247,0.7247);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.parent = this;
	this.instance_5.setTransform(327.9,538.75,0.6923,0.6923);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.parent = this;
	this.instance_6.setTransform(564.5,472.65,0.6599,0.6599);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.parent = this;
	this.instance_7.setTransform(497.2,521.45);

	this.instance_8 = new lib.glitter_wrapper();
	this.instance_8.parent = this;
	this.instance_8.setTransform(385,535.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// mask_idn
	this.reflect_mask = new lib.reflect_mask();
	this.reflect_mask.name = "reflect_mask";
	this.reflect_mask.parent = this;
	this.reflect_mask.setTransform(478.35,539.2);
	this.reflect_mask.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.reflect_mask).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(315.5104,312.7071);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_1533602();
	this.reflect_wrapper.name = "reflect_wrapper";
	this.reflect_wrapper.parent = this;
	this.reflect_wrapper.setTransform(325.7,539.2);

	var maskedShapeInstanceList = [this.reflect_wrapper];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.reflect_wrapper).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign_effect_1533602, new cjs.Rectangle(32,162.1,650.9,747.6999999999999), null);


(lib.replace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sign
	this.sign_effect = new lib.sign_effect_1533602();
	this.sign_effect.name = "sign_effect";
	this.sign_effect.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sign_effect).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace, new cjs.Rectangle(0,0,682.9,919.7), null);


// stage content:
(lib._1533602_sign_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replace
	this.instance = new lib.replace();
	this.instance.parent = this;
	this.instance.setTransform(341.4,459.8,1,1,0,0,0,341.4,459.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(609.1,558.8,73.79999999999995,360.9000000000001);
// library properties:
lib.properties = {
	id: '_1533602_sign_effect',
	width: 640,
	height: 800,
	fps: 18,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['_1533602_sign_effect'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;