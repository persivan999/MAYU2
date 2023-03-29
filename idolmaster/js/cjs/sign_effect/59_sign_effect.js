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


(lib.reflect_inner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// standard
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.749)","rgba(255,255,255,0)"],[0,0.51,1],0,297.1,0.1,-297).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_inner, new cjs.Rectangle(0,0,300,1200), null);


(lib.reflect_mask_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,204,255,0.502)").s().p("AG9O9QAAgFgBAAQhegcAjhrIAKgKQAFgFAGgBQBggWA4g7QBBhBAghiIiNBDIg1AZQjNBejTBUQhYgFhIgWQjkhEjUhSQjWhTi6hrQhAglg7gsQiph7h/ipQhLAKhAAWQhJAZgwgvQgFAAgDgCQgsgaAMhRQARghArgGIAKgBQAIgRAgACQAkABAbgIQA8gSgjhPQgPgigCgvQgHh0ARheQAHggALgjQAlhrA/hXQB+ipD1g1QAegHAfgCQCXgKB+AfQBzAdBjAxQDFBjB5CuQAKAAAEgFQBuiHCmhNIA1gYQDPhcEOgVQCcgMCFATQEAAlCQCWQAPAAAOgDIAMgCQAbgCAPgFIA3gQQBLgUAlAwQAKAFAEAIQAlBMgMB5QgKBthjAVQglgCgCAqQgGBVgbBLQhODWiXCPQiYCQi7BsQgUAygSAzQhNDbiOCZQhHBNiUAAIgEAAgARvkkQAFAFAGADQAEACAFAAQBaAnggBvQgZBYheAQQg7ALgRAtQgLAfgMAcQgLApAfgBIAKAAQAcgMAUgUQACgDAAgFQAgghAiggQCCh7A9jAQATg6gOhPQgijCidhPQgygYhHgFQAHAcAVAPQACACAAAFQAyBHgGB3QgDBHgfAxQAAAFgBAFQgHAWgWAIQAIAhA1gEIAGgBQATAAAOAMgAHokzQgqAag6ASQhUAZhjAQQAMAXAaAMQAZANAWASQAmAgA5AMQAxhHBvgIIAKgBQgFgngZgfQgBgdgKgQQgEgFgGAAQgGAAgKAFgAxWrDQhbA6g8BdQgLAQgGAUQgRA+gTA4IAAAKQgMCFAqBNQALgJAOgJQC5hrCMibQAVh8AthiQAEgIAFgFQAhglgSgmQilAAhlBBgAEBpzQiQA6hYB1QgMA6ApgGQBogOBrgSQADgRAcACQABAAABAAQABAAAAgBQAAAAAAAAQABgBgBAAQgahGgIhdQAFgQgIAAIgFABgApIrGQgKArgHAsQgTB4hKBHQAAAKAFAIQAPAbATgaQAsg9Avg6QAFAAAEgCQBQg3BRA5QAlACgOgnQgDgIgGgIQgXgggjgXQg+gohKggQgKAAAAACg");
	this.shape.setTransform(0.0172,0.0287);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_mask_59, new cjs.Rectangle(-167.7,-95.7,335.5,191.5), null);


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
	this.lighter_tgt.setTransform(0,-295.9,1.1899,1.1899,0,0,-20.0009);
	this.lighter_tgt.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.lighter_tgt).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect, new cjs.Rectangle(0,-418,335.5,836.1), null);


(lib.reflect_container_cjs_59 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(-0.5,513.85,1,1,0,0,0,-0.5,0.1);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regY:-0.1,y:-0.1},9,cjs.Ease.get(-1)).to({regY:0.1,y:-513.65},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-931.7,335.5,1863.5);


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


(lib.reflect_wrapper_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cjs
	this.reflect = new lib.reflect_container_cjs_59();
	this.reflect.name = "reflect";
	this.reflect.parent = this;
	this.reflect.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.reflect).wait(1));

}).prototype = getMCSymbolPrototype(lib.reflect_wrapper_59, new cjs.Rectangle(0,-418,335.5,836.1), null);


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


(lib.sign_effect_59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glitter
	this.instance = new lib.glitter_wrapper();
	this.instance.parent = this;
	this.instance.setTransform(289.5,597.15,0.4282,0.4282);

	this.instance_1 = new lib.glitter_wrapper();
	this.instance_1.parent = this;
	this.instance_1.setTransform(97,491.55);

	this.instance_2 = new lib.glitter_wrapper();
	this.instance_2.parent = this;
	this.instance_2.setTransform(338.8,506.05);

	this.instance_3 = new lib.glitter_wrapper();
	this.instance_3.parent = this;
	this.instance_3.setTransform(220.6,665.25);

	this.instance_4 = new lib.glitter_wrapper();
	this.instance_4.parent = this;
	this.instance_4.setTransform(123.85,635.5,0.7247,0.7247);

	this.instance_5 = new lib.glitter_wrapper();
	this.instance_5.parent = this;
	this.instance_5.setTransform(19.9,582.35,0.6923,0.6923);

	this.instance_6 = new lib.glitter_wrapper();
	this.instance_6.parent = this;
	this.instance_6.setTransform(271.05,510.65,0.6599,0.6599);

	this.instance_7 = new lib.glitter_wrapper();
	this.instance_7.parent = this;
	this.instance_7.setTransform(198.45,565.05);

	this.instance_8 = new lib.glitter_wrapper();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,578.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// mask_idn
	this.reflect_mask = new lib.reflect_mask_59();
	this.reflect_mask.name = "reflect_mask";
	this.reflect_mask.parent = this;
	this.reflect_mask.setTransform(178.45,580.25);
	this.reflect_mask.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.reflect_mask).wait(1));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EAHzA00QAAgFgBgBQhegbAjhrIAKgKQAFgFAGgCQBggWA4g6QBBhCAghhIiNBDIg1AZQjNBejTBUQhZgGhHgVQjkhFjUhRQjWhTi6hsQhAglg7grQiph8h/ioQhLAJhAAWQhJAZgwguQgFAAgDgCQgsgaAMhSQARghArgHIAKAAQAIgRAgABQAkABAbgIQA8gSgjhOQgPgigCgvQgHh1ARhdQAHghALgiQAlhsA/hWQB+iqD1g1QAegGAfgCQCXgKB+AfQBzAcBjAyQDFBjB5CuQAKAAAEgFQBuiICmhNIA1gYQDPhcEOgVQCcgMCFATQEAAlCQCXQAPAAAOgEIAMgCQAbgCAPgEIA3gQQBLgVAlAxQAKAFAEAIQAlBMgMB5QgKBshjAWQglgCgCApQgGBWgbBKQhODYiXCPQiYCPi7BtQgUAygSAyQhNDbiOCZQhIBOiTAAIgEAAgEASlAhSQAFAFAGADQAEACAFAAQBaAnggBuQgZBYheARQg7AKgRAvQgLAfgMAcQgLApAfgBIAKAAQAcgNAUgUQACgCAAgFQAgghAiggQCCh9A9i/QATg6gOhQQgijCidhOQgygZhHgEQAHAbAVAQQACACAAAFQAyBGgGB3QgDBHgfAyQAAAFgBAEQgHAWgWAJQAIAgA1gEIAFAAQAUAAAOAMgEAIeAhDQgqAag6ARQhUAahjAQQAMAWAaANQAZAMAWATQAmAfA5ANQAxhHBvgJIAKAAQgFgngZgfQgBgdgKgRQgEgFgGAAQgHAAgJAGgAwgazQhbA6g8BcQgLARgGAUQgRA9gTA5IAAAKQgMCEAqBOQALgKAOgJQC5hrCMiaQAVh9AthhQAEgIAFgGQAhgkgSgmQilAAhlBBgAE3cCQiQA7hYB1QgMA5ApgFQBogOBrgSQADgRAcABQABABAAAAQABgBABAAQAAAAAAAAQAAgBAAgBQgahGgIhcQAFgRgIAAIgFABgAoSawQgKArgHAsQgTB4hKBHQAAAKAFAHQAPAbATgZQAsg+Avg5QAFAAAEgDQBQg2BRA5QAlABgOgnQgDgHgGgIQgXghgjgWQg+gphKgfQgKAAAAACg");
	mask.setTransform(173.0969,338.0006);

	// reflect
	this.reflect_wrapper = new lib.reflect_wrapper_59();
	this.reflect_wrapper.name = "reflect_wrapper";
	this.reflect_wrapper.parent = this;
	this.reflect_wrapper.setTransform(10.75,580.25);

	var maskedShapeInstanceList = [this.reflect_wrapper];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.reflect_wrapper).wait(1));

}).prototype = getMCSymbolPrototype(lib.sign_effect_59, new cjs.Rectangle(-18.9,162.1,413.79999999999995,747.6999999999999), null);


(lib.replace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sign
	this.sign_effect = new lib.sign_effect_59();
	this.sign_effect.name = "sign_effect";
	this.sign_effect.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.sign_effect).wait(1));

}).prototype = getMCSymbolPrototype(lib.replace, new cjs.Rectangle(-18.9,0,658.9,998.3), null);


// stage content:
(lib._59_sign_effect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// replace
	this.instance = new lib.replace();
	this.instance.parent = this;
	this.instance.setTransform(188,499.2,1,1,0,0,0,188,499.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(301.1,562.3,93.79999999999995,436);
// library properties:
lib.properties = {
	id: '_59_sign_effect',
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
an.compositions['_59_sign_effect'] = {
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