System.register(["./__root_module__-aa47e4cd.js"],function(){var Ca,ub,Tb;return{setters:[function(lc){Ca=lc.b2;ub=lc.C;Tb=lc.aq}],execute:function(){var lc=lively.FreezerRuntime.recorderFor("StripeButton/index.js");lc.Button=Ca;lc.Color=ub;var mc=function(Zd){var id=lively.FreezerRuntime.recorderFor("StripeButton/index.js"),ce=id.hasOwnProperty("StripeButton")&&"function"===typeof id.StripeButton?id.StripeButton:id.StripeButton=function(kd){kd&&kd[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Tb(ce,Zd,[{key:"onDrop",value:function(kd){(kd=$jscomp.makeIterator(kd.hand.grabbedMorphs).next().value)&&kd.isLabel&&(this.label=kd.textAndAttributes,kd.remove())}},{key:"onHoverIn",value:function(kd){Tb._get(Object.getPrototypeOf(ce.prototype),"onHoverIn",this).call(this,kd);!1!==this.haloShadowEnabled&&(kd=this.dropShadow.toJson(),kd.blur=10,kd.distance=3,this.animate({dropShadow:kd,duration:200}))}},{key:"onHoverOut",value:function(kd){Tb._get(Object.getPrototypeOf(ce.prototype),
"onHoverOut",this).call(this,kd);!1!==this.haloShadowEnabled&&(kd=this.dropShadow.toJson(),kd.blur=6,kd.distance=1,this.animate({dropShadow:kd,duration:200}))}}],[{key:"className",get:function(){return"StripeButton"}},{key:"properties",get:function(){return{haloShadowEnabled:{defaultValue:!0},toggleFill:{}}}}],id,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"StripeButton",version:"0.1.1-26"}}},{start:121,end:1027})}(lc.Button);mc=lc.StripeButton;lc.default=mc}}});