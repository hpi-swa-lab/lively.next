System.register(["./__root_module__-f418f9fd.js","lively.collab","kld-intersections"],function(){var Ha,tb,Ab,kc,ac,Ld,Tc,$d,Uc;return{setters:[function(Pc){Ha=Pc.av;tb=Pc.bQ;Ab=Pc.aa;kc=Pc.a3;ac=Pc.aH;Ld=Pc.P;Tc=Pc.$;$d=Pc.aO;Uc=Pc.aJ},function(){},function(){}],execute:function(){var Pc=lively.FreezerRuntime.recorderFor("ModuleProgress/index.js");Pc.Morph=Ha;Pc.stringToEasing=tb;Pc.easings=Ab;Pc.pt=kc;Pc.num=ac;Pc.Path=Ld;Pc.promise=Tc;Pc.fun=$d;var Jd=function(pe){var Ze=lively.FreezerRuntime.recorderFor("ModuleProgress/index.js"),
Ff=Ze.hasOwnProperty("ModuleProgress")&&"function"===typeof Ze.ModuleProgress?Ze.ModuleProgress:Ze.ModuleProgress=function(te){te&&te[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Uc(Ff,pe,[{key:"fadeIntoBack",value:function(){this.animate({blur:5})}},{key:"relayout",value:function(){!this.isComponent&&Pc.Path("owner.isWorld").get(this)&&(this.bottomCenter=$world.visibleBounds().center().subXY(0,100))}},{key:"reset",value:function(){var te=
this.getAllNamed(/stage/);this.blur=0;this.stages=new Map(te.map(function(Bc){return[Bc,"not loaded"]}));this.updateProgressVisualization();this.getAllNamed(/label/).map(function(Bc){Bc._cachedTextBounds=null;Bc.fit()})}},{key:"updateProgressBar",value:function(){if(this._lastWidth){this.relayout();var te=this.get("progress path"),Bc=Pc.stringToEasing(Pc.easings.inOutExpo)(Pc.num.clamp(Date.now()-this._timeStamp,0,1E3)/1E3);te.width=Pc.num.interpolate(Bc,this._lastWidth,this._currentProgress)}}},
{key:"fastLoadTest",value:function(){var te=this,Bc,sd,le,jc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(je){1==je.nextAddress&&(te.reset(),Bc="lively.lang lively.ast lively.source-transform lively.classes lively.vm lively.modules lively.user lively.storage lively.morphic".split(" "),sd=$jscomp.makeIterator(Bc),le=sd.next());if(3!=je.nextAddress){if(le.done)return je.jumpTo(0);jc=le.value;te.finishPackage({packageName:jc,loaded:!0});return je.yield(Pc.promise.delay(200),3)}le=sd.next();
return je.jumpTo(2)})}},{key:"finishPackage",value:function(te){var Bc=this,sd=te.frozen,le=te.loaded;te="stage "+te.packageName.replace("lively.","");te=this.get(te);sd&&this.stages.set(te,"frozen");le&&this.stages.set(te,"loaded");Pc.fun.debounceNamed("update progress",200,function(){Bc.updateProgressVisualization()})()}},{key:"updateProgressVisualization",value:function(){var te=this,Bc=this.getSubmorphNamed("progress path"),sd=this.getAllNamed(/stage/),le=sd[0];sd.forEach(function(jc){var je=
jc.get("checkmark"),Ae=jc.get("frozen indicator"),Dc=jc.get("icon");jc=te.stages.get(jc);if("not loaded"!=jc){le=je;if("loaded"==jc){if(je.visible)return;je.animate({duration:300,visible:!0})}if("frozen"==jc){if(Ae.visible)return;Ae.animate({duration:300,visible:!0})}Dc.opacity=1}else je.visible=!1,Ae.visible=!1,Dc.opacity=.2});sd=this.localizePointFrom(Pc.pt(-20,0),le).x;sd=Math.max(20,sd-Bc.left);Bc.visible=20==sd?!1:!0;this._lastWidth=Bc.width;this._timeStamp=Date.now();this._currentProgress=sd}}],
[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ModuleProgress"}},{key:"properties",get:function(){return{stages:{serialize:!1,after:["submorphs"],initialize:function(){var te=this;this.whenRendered().then(function(){te.reset()})}}}}}],Ze,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ModuleProgress",version:"0.1.1-109"}}},
{start:192,end:3586})}(Pc.Morph);Jd=Pc.ModuleProgress;Pc.default=Jd}}});System.register("12",["./__root_module__-f418f9fd.js","lively.collab","kld-intersections","./index-e1bb9574.js","./index-c551f254.js"],function(){return{setters:[function(){},function(){},function(){},function(){},function(){}],execute:function(){}}});