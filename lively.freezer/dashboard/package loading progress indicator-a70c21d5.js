System.register(["./__root_module__-5a58cfed.js","kld-intersections"],function(){var Ca,Cb,Vb,lc,gc,fe,fd,Zd,id;return{setters:[function(Uc){Ca=Uc.ag;Cb=Uc.bN;Vb=Uc.at;lc=Uc.a1;gc=Uc.an;fe=Uc.P;fd=Uc._;Zd=Uc.ar;id=Uc.aq},function(){}],execute:function(){var Uc=lively.FreezerRuntime.recorderFor("ModuleProgress/index.js");Uc.Morph=Ca;Uc.stringToEasing=Cb;Uc.easings=Vb;Uc.pt=lc;Uc.num=gc;Uc.Path=fe;Uc.promise=fd;Uc.fun=Zd;var Ad=function(Nd){var ee=lively.FreezerRuntime.recorderFor("ModuleProgress/index.js"),
Ud=ee.hasOwnProperty("ModuleProgress")&&"function"===typeof ee.ModuleProgress?ee.ModuleProgress:ee.ModuleProgress=function(kd){kd&&kd[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return id(Ud,Nd,[{key:"relayout",value:function(){!this.isComponent&&Uc.Path("owner.isWorld").get(this)&&(this.bottomCenter=$world.visibleBounds().center().subXY(0,100))}},{key:"reset",value:function(){var kd=this.getAllNamed(/stage/);this.stages=new Map(kd.map(function(cb){return[cb,
"not loaded"]}));this.updateProgressVisualization();this.getAllNamed(/label/).map(function(cb){cb._cachedTextBounds=null;cb.fit()})}},{key:"updateProgressBar",value:function(){if(this._lastWidth){this.relayout();var kd=this.get("progress path"),cb=Uc.stringToEasing(Uc.easings.inOutExpo)(Uc.num.clamp(Date.now()-this._timeStamp,0,1E3)/1E3);kd.width=Uc.num.interpolate(cb,this._lastWidth,this._currentProgress)}}},{key:"fastLoadTest",value:function(){var kd=this,cb,Fb,vc,pc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(sd){1==
sd.nextAddress&&(kd.reset(),cb="lively.lang lively.ast lively.source-transform lively.classes lively.vm lively.modules lively.user lively.storage lively.morphic".split(" "),Fb=$jscomp.makeIterator(cb),vc=Fb.next());if(3!=sd.nextAddress){if(vc.done)return sd.jumpTo(0);pc=vc.value;kd.finishPackage({packageName:pc,loaded:!0});return sd.yield(Uc.promise.delay(200),3)}vc=Fb.next();return sd.jumpTo(2)})}},{key:"finishPackage",value:function(kd){var cb=this,Fb=kd.frozen,vc=kd.loaded;kd="stage "+kd.packageName.replace("lively.",
"");kd=this.get(kd);Fb&&this.stages.set(kd,"frozen");vc&&this.stages.set(kd,"loaded");Uc.fun.debounceNamed("update progress",200,function(){cb.updateProgressVisualization()})()}},{key:"updateProgressVisualization",value:function(){var kd=this,cb=this.getSubmorphNamed("progress path"),Fb=this.getAllNamed(/stage/),vc=Fb[0];Fb.forEach(function(pc){var sd=pc.get("checkmark"),pd=pc.get("frozen indicator"),tc=pc.get("icon");pc=kd.stages.get(pc);if("not loaded"!=pc){vc=sd;if("loaded"==pc){if(sd.visible)return;
sd.animate({duration:300,visible:!0})}if("frozen"==pc){if(pd.visible)return;pd.animate({duration:300,visible:!0})}tc.opacity=1}else sd.visible=!1,pd.visible=!1,tc.opacity=.2});Fb=this.localizePointFrom(Uc.pt(-20,0),vc).x;Fb=Math.max(20,Fb-cb.left);cb.visible=20==Fb?!1:!0;this._lastWidth=cb.width;this._timeStamp=Date.now();this._currentProgress=Fb}}],[{key:"className",get:function(){return"ModuleProgress"}},{key:"properties",get:function(){return{stages:{serialize:!1,after:["submorphs"],initialize:function(){var kd=
this;this.whenRendered().then(function(){kd.reset()})}}}}}],ee,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ModuleProgress",version:"0.1.1-108"}}},{start:192,end:3478})}(Uc.Morph);Ad=Uc.ModuleProgress;Uc.default=Ad}}});