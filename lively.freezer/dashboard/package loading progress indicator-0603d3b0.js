System.register(["./__root_module__-64e296ea.js","kld-intersections"],function(){var Ba,Ab,Qb,dc,Xb,Xd,ad,Nd,dd;return{setters:[function(Lc){Ba=Lc.aj;Ab=Lc.bR;Qb=Lc.aw;dc=Lc.a3;Xb=Lc.aq;Xd=Lc.P;ad=Lc.$;Nd=Lc.au;dd=Lc.at},function(){}],execute:function(){var Lc=lively.FreezerRuntime.recorderFor("ModuleProgress/index.js");Lc.Morph=Ba;Lc.stringToEasing=Ab;Lc.easings=Qb;Lc.pt=dc;Lc.num=Xb;Lc.Path=Xd;Lc.promise=ad;Lc.fun=Nd;var rd=function(Gd){var ke=lively.FreezerRuntime.recorderFor("ModuleProgress/index.js"),
Kd=ke.hasOwnProperty("ModuleProgress")&&"function"===typeof ke.ModuleProgress?ke.ModuleProgress:ke.ModuleProgress=function(Hc){Hc&&Hc[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dd(Kd,Gd,[{key:"relayout",value:function(){!this.isComponent&&Lc.Path("owner.isWorld").get(this)&&(this.bottomCenter=$world.visibleBounds().center().subXY(0,100))}},{key:"reset",value:function(){var Hc=this.getAllNamed(/stage/);this.stages=new Map(Hc.map(function(fb){return[fb,
"not loaded"]}));this.updateProgressVisualization();this.getAllNamed(/label/).map(function(fb){fb._cachedTextBounds=null;fb.fit()})}},{key:"updateProgressBar",value:function(){if(this._lastWidth){this.relayout();var Hc=this.get("progress path"),fb=Lc.stringToEasing(Lc.easings.inOutExpo)(Lc.num.clamp(Date.now()-this._timeStamp,0,1E3)/1E3);Hc.width=Lc.num.interpolate(fb,this._lastWidth,this._currentProgress)}}},{key:"fastLoadTest",value:function(){var Hc=this,fb,Db,mc,hc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Tc){1==
Tc.nextAddress&&(Hc.reset(),fb="lively.lang lively.ast lively.source-transform lively.classes lively.vm lively.modules lively.user lively.storage lively.morphic".split(" "),Db=$jscomp.makeIterator(fb),mc=Db.next());if(3!=Tc.nextAddress){if(mc.done)return Tc.jumpTo(0);hc=mc.value;Hc.finishPackage({packageName:hc,loaded:!0});return Tc.yield(Lc.promise.delay(200),3)}mc=Db.next();return Tc.jumpTo(2)})}},{key:"finishPackage",value:function(Hc){var fb=this,Db=Hc.frozen,mc=Hc.loaded;Hc="stage "+Hc.packageName.replace("lively.",
"");Hc=this.get(Hc);Db&&this.stages.set(Hc,"frozen");mc&&this.stages.set(Hc,"loaded");Lc.fun.debounceNamed("update progress",200,function(){fb.updateProgressVisualization()})()}},{key:"updateProgressVisualization",value:function(){var Hc=this,fb=this.getSubmorphNamed("progress path"),Db=this.getAllNamed(/stage/),mc=Db[0];Db.forEach(function(hc){var Tc=hc.get("checkmark"),Ld=hc.get("frozen indicator"),oc=hc.get("icon");hc=Hc.stages.get(hc);if("not loaded"!=hc){mc=Tc;if("loaded"==hc){if(Tc.visible)return;
Tc.animate({duration:300,visible:!0})}if("frozen"==hc){if(Ld.visible)return;Ld.animate({duration:300,visible:!0})}oc.opacity=1}else Tc.visible=!1,Ld.visible=!1,oc.opacity=.2});Db=this.localizePointFrom(Lc.pt(-20,0),mc).x;Db=Math.max(20,Db-fb.left);fb.visible=20==Db?!1:!0;this._lastWidth=fb.width;this._timeStamp=Date.now();this._currentProgress=Db}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ModuleProgress"}},{key:"properties",get:function(){return{stages:{serialize:!1,after:["submorphs"],
initialize:function(){var Hc=this;this.whenRendered().then(function(){Hc.reset()})}}}}}],ke,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ModuleProgress",version:"0.1.1-108"}}},{start:192,end:3478})}(Lc.Morph);rd=Lc.ModuleProgress;Lc.default=rd}}});