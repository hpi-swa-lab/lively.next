System.register(["./__root_module__-cddb8267.js"],function(){var Ea,Cb,Kb,lc;return{setters:[function($b){Ea=$b.an;Cb=$b.as;Kb=$b.C;lc=$b.aw}],execute:function(){var $b=lively.FreezerRuntime.recorderFor("FastLoadToggler/index.js");$b.Morph=Ea;$b.Icon=Cb;$b.Color=Kb;var Qd=function(Zc){var Rd=lively.FreezerRuntime.recorderFor("FastLoadToggler/index.js"),ad=Rd.hasOwnProperty("FastLoadToggler")&&"function"===typeof Rd.FastLoadToggler?Rd.FastLoadToggler:Rd.FastLoadToggler=function(Nc){Nc&&Nc[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return lc(ad,Zc,[{key:"onLoad",value:function(){localStorage.getItem("lively.load-config")||localStorage.setItem("lively.load-config",JSON.stringify({"lively.lang":"dynamic","lively.ast":"dynamic","lively.source-transform":"dynamic","lively.classes":"dynamic","lively.vm":"dynamic","lively.modules":"dynamic","lively.user":"dynamic","lively.storage":"dynamic","lively.morphic":"dynamic"}))}},{key:"onMouseDown",value:function(Nc){lc._get(Object.getPrototypeOf(ad.prototype),
"onMouseDown",this).call(this,Nc);this.toggleFastLoad()}},{key:"refresh",value:function(){var Nc=this.getSubmorphNamed("toggle indicator"),nd=this.getSubmorphNamed("label"),he=this.getSubmorphNamed("bolt"),af=Object.values(this.loadConfig).every(function(rd){return"frozen"==rd}),Af=af?this.owner.haloColor:this.owner.get("label").fontColor;Nc.fontColor=nd.fontColor=he.fontColor=Af;Nc.textAndAttributes=$b.Icon.textAttribute(af?"toggle-on":"toggle-off")}},{key:"toggleFastLoad",value:function(){var Nc=
this.loadConfig,nd=Object.values(Nc).every(function(af){return"frozen"==af}),he;for(he in Nc)Nc[he]=nd?"dynamic":"frozen";this.loadConfig=Nc;this.refresh()}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"FastLoadToggler"}},{key:"properties",get:function(){return{loadConfig:{derived:!0,get:function(){return JSON.parse(localStorage.getItem("lively.load-config")||"{}")},set:function(Nc){localStorage.setItem("lively.load-config",JSON.stringify(Nc))}}}}}],Rd,{pathInPackage:function(){return"index.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"FastLoadToggler",version:"0.1.1-17"}}},{start:112,end:1847})}($b.Morph);Qd=$b.FastLoadToggler;$b.default=Qd}}});