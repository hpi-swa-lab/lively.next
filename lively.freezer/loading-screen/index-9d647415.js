System.register(["./__root_module__-3c9a1ccb.js"],function(){var sa,lb,Eb,Wb;return{setters:[function(Qb){sa=Qb.ag;lb=Qb.am;Eb=Qb.C;Wb=Qb.aq}],execute:function(){var Qb=lively.FreezerRuntime.recorderFor("FastLoadToggler/index.js");Qb.Morph=sa;Qb.Icon=lb;Qb.Color=Eb;var Bd=function(Fc){var wd=lively.FreezerRuntime.recorderFor("FastLoadToggler/index.js"),Kc=wd.hasOwnProperty("FastLoadToggler")&&"function"===typeof wd.FastLoadToggler?wd.FastLoadToggler:wd.FastLoadToggler=function(Gc){Gc&&Gc[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Wb(Kc,Fc,[{key:"onLoad",value:function(){localStorage.getItem("lively.load-config")||localStorage.setItem("lively.load-config",JSON.stringify({"lively.lang":"dynamic","lively.ast":"dynamic","lively.source-transform":"dynamic","lively.classes":"dynamic","lively.vm":"dynamic","lively.modules":"dynamic","lively.user":"dynamic","lively.storage":"dynamic","lively.morphic":"dynamic"}))}},{key:"onMouseDown",value:function(Gc){Wb._get(Object.getPrototypeOf(Kc.prototype),
"onMouseDown",this).call(this,Gc);this.toggleFastLoad()}},{key:"refresh",value:function(){var Gc=this.getSubmorphNamed("toggle indicator"),Yc=this.getSubmorphNamed("label"),jd=this.getSubmorphNamed("bolt"),Dd=Object.values(this.loadConfig).every(function(Zc){return"frozen"==Zc}),od=Dd?this.owner.haloColor:this.owner.get("label").fontColor;Gc.fontColor=Yc.fontColor=jd.fontColor=od;Gc.textAndAttributes=Qb.Icon.textAttribute(Dd?"toggle-on":"toggle-off")}},{key:"toggleFastLoad",value:function(){var Gc=
this.loadConfig,Yc=Object.values(Gc).every(function(Dd){return"frozen"==Dd}),jd;for(jd in Gc)Gc[jd]=Yc?"dynamic":"frozen";this.loadConfig=Gc;this.refresh()}}],[{key:"className",get:function(){return"FastLoadToggler"}},{key:"properties",get:function(){return{loadConfig:{derived:!0,get:function(){return JSON.parse(localStorage.getItem("lively.load-config")||"{}")},set:function(Gc){localStorage.setItem("lively.load-config",JSON.stringify(Gc))}}}}}],wd,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"FastLoadToggler",version:"0.1.1-17"}}},{start:112,end:1847})}(Qb.Morph);Bd=Qb.FastLoadToggler;Qb.default=Bd}}});