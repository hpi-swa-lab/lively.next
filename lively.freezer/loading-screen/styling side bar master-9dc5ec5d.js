System.register("./__root_module__-39b2be6e.js lively.collab kld-intersections ./index-6347bda8.js ./world-477420c5.js ./index-bc3e9fbd.js ./index-8c1367cc.js ./index-00644ced.js".split(" "),function(){var wa,bb,ib,Qb,Ib,ed,qc,pd,uc,Ac,dd,Ad,le,Le,ae,lc,Wc,Ed,Tb,Bd,Sd,hc;return{setters:[function(mc){wa=mc.av;bb=mc.a_;ib=mc.ab;Qb=mc.aK;Ib=mc.aa;ed=mc.a3;qc=mc.C;pd=mc.aO;uc=mc.aF;Ac=mc.bw;dd=mc.aJ;Ad=mc.a8;le=mc.a7;Le=mc.bQ;ae=mc.ak;lc=mc.aG;Wc=mc.r;Ed=mc.a6;Tb=mc.P;Bd=mc.bT;Sd=mc.bU},function(){},
function(){},function(){},function(mc){hc=mc.c},function(){},function(){},function(){}],execute:function(){var mc=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js");mc.Morph=wa;mc.touchInputDevice=bb;mc.morph=ib;mc.Icon=Qb;mc.easings=Ib;mc.pt=ed;mc.Color=qc;mc.fun=pd;mc.connect=uc;mc.TreeData=Ac;var Hb=function(Za){var Xa=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js"),jb=Xa.hasOwnProperty("SettingsTree")&&"function"===typeof Xa.SettingsTree?Xa.SettingsTree:Xa.SettingsTree=
function(Fa){Fa&&Fa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dd(jb,Za,[{key:"display",value:function(Fa){return Fa.panel?[Fa.panel,{}]:Fa.name}},{key:"collapse",value:function(Fa,Ea){Fa.isCollapsed=Ea}},{key:"isCollapsed",value:function(Fa){return Fa.isCollapsed}},{key:"isLeaf",value:function(Fa){return!Fa.children}},{key:"getChildren",value:function(Fa){var Ea=this;return Fa===this.root?Fa.children.filter(function(ka){return Ea.target&&
ka.applicabilityCheck?eval(ka.applicabilityCheck)(Ea.target):!0}):Fa.children}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"SettingsTree"}},{key:"default",value:function(){return new this({isCollapsed:!1,children:[{isCollapsed:!0,name:[" ",{}].concat($jscomp.arrayFromIterable(mc.Icon.textAttribute("font")),[" Rich Text",{fontWeight:"bold"}]),children:[{panel:mc.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(mc.Icon.textAttribute("image")),[" Shape",
{fontWeight:"bold"}]),children:[{panel:mc.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(mc.Icon.textAttribute("border-style")),[" Border",{paddingLeft:"2px",fontWeight:"bold"}]),children:[{panel:mc.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(mc.Icon.textAttribute("grip-vertical")),[" Layout",{paddingLeft:"4px",fontWeight:"bold"}]),children:[{panel:mc.morph({})}]}]})}},{key:"border",value:function(){return new this({isCollapsed:!1,children:[{isCollapsed:!0,
name:[" Type    ",{},mc.morph({height:20}),{}],children:[{panel:mc.morph({})}]},{isCollapsed:!1,name:[" Color   ",{},mc.morph({height:20}),{}],children:[{panel:mc.morph({})}]},{isCollapsed:!1,name:[" Width  ",{},mc.morph({height:20}),{}],children:[{panel:mc.morph({})}]},{isCollapsed:!1,name:[" Radius ",{},mc.morph({height:20}),{}],children:[{panel:mc.morph({})}]}]})}}],Xa,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"StylingSideBar",version:"0.1.1-67"}}},{start:284,end:2663})}(mc.TreeData);mc.SettingsTree=Hb;mc.SettingsTree=Hb;mc.SettingsTree=Hb;Hb=function(Za){var Xa=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js"),jb=Xa.hasOwnProperty("StylingSideBar")&&"function"===typeof Xa.StylingSideBar?Xa.StylingSideBar:Xa.StylingSideBar=function(Fa){Fa&&Fa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dd(jb,
Za,[{key:"relayout",value:function(){this.onWorldResize()}},{key:"collapseAll",value:function(){this.getSubmorphsByStyleClassName("Tree").forEach(function(Fa){Fa.nodes.forEach(function(Ea){return Fa.treeData.root==Ea?Fa.uncollapse(Ea):Fa.collapse(Ea)})})}},{key:"onWorldResize",value:function(Fa){Fa=void 0===Fa?!0:Fa;if(this.respondsToVisibleWindow){var Ea=$world.visibleBounds(),ka=navigator.standalone&&mc.touchInputDevice?25:0,ja=this.getSubmorphNamed("horizontal resizer");this.height=Ea.height-ka;
this.top=ka+Ea.top();ja.height=this.height;ja.left=0;ja.top=0;Fa&&(this.visible?this.topRight=Ea.topRight():this.topLeft=Ea.topRight())}}},{key:"toggle",value:function(Fa){var Ea=this,ka,ja;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ca){switch(Ca.nextAddress){case 1:ka=$world.visibleBounds().withTopLeft(mc.pt(0,0));ja=navigator.standalone&&mc.touchInputDevice?25:0;Ea.height=ka.height-ja;Ea.top=ja+ka.top();if(Fa)return $world.addMorph(Ea,$world.get("lively top bar")),Ea.topLeft=ka.topRight(),
Ea.visible=!0,Ca.yield(Ea.whenRendered(),5);Ea.detachFromWorld($world);return Ca.yield(Ea.animate({opacity:0,topLeft:ka.topRight(),duration:300}),4);case 4:Ea.visible=!1;Ea.remove();Ca.jumpTo(0);break;case 5:return Ea.onWorldResize(!1),Ca.yield(Ea.animate({opacity:1,easing:mc.easings.outCirc,topRight:ka.topRight(),duration:300}),6);case 6:Ea.attachToWorld($world),Ca.jumpToEnd()}})}},{key:"cleanupAnchors",value:function(){for(var Fa=this.withAllSubmorphsSelect(function(Ca){return Ca.anchors&&Ca.anchors.filter(function(mb){return!mb.id}).length}),
Ea={},ka=$jscomp.makeIterator(Fa),ja=ka.next();!ja.done;Ea={$jscomp$loop$prop$m$2699:Ea.$jscomp$loop$prop$m$2699},ja=ka.next())Ea.$jscomp$loop$prop$m$2699=ja.value,Ea.$jscomp$loop$prop$m$2699.anchors.forEach(function(Ca){return function(mb){return!mb.id&&Ca.$jscomp$loop$prop$m$2699.removeAnchor(mb)}}(Ea));return Fa.length}},{key:"attachToWorld",value:function(Fa){mc.connect(Fa,"showHaloFor",this,"focusMorph",{garbageCollect:!0})}},{key:"detachFromWorld",value:function(Fa){var Ea=this;Fa.attributeConnections.forEach(function(ka){ka.targetObj===
Ea&&ka.disconnect()})}},{key:"focusMorph",value:function(Fa){if(!Fa.isMorph||!Fa.ownerChain().includes(this)){(Fa.isLabel||Fa.isText||Fa.isButton)&&this.richTextControl.focusOn(Fa,!1);var Ea=this.getSubmorphNamed("style settings tree");Ea.treeData.target=Fa;Ea.update(!0);Object.values(this.controls).forEach(function(ka){return ka&&ka.focusOn(Fa)})}}},{key:"onHierarchyChange",value:function(){Object.values(this.controls).forEach(function(Fa){return Fa&&Fa.update()})}}],[{key:Symbol.for("__LivelyClassName__"),
get:function(){return"StylingSideBar"}},{key:"properties",get:function(){return{controls:{},richTextControl:{},isHaloItem:{get:function(){return!0}}}}}],Xa,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"StylingSideBar",version:"0.1.1-67"}}},{start:2682,end:5749})}(mc.Morph);Hb=mc.StylingSideBar;mc.default=Hb;var ec=lively.FreezerRuntime.recorderFor("ShapeFormatStyler/index.js");
ec.Morph=wa;ec.obj=Ad;ec.string=le;ec.connect=uc;ec.noUpdate=Le;ec.once=ae;Hb=function(Za){var Xa=lively.FreezerRuntime.recorderFor("ShapeFormatStyler/index.js"),jb=Xa.hasOwnProperty("ShapeFormatStyler")&&"function"===typeof Xa.ShapeFormatStyler?Xa.ShapeFormatStyler:Xa.ShapeFormatStyler=function(Fa){Fa&&Fa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dd(jb,Za,[{key:Symbol.for("lively-instance-initialize"),value:function(Fa){dd._get(Object.getPrototypeOf(jb.prototype),
Symbol.for("lively-instance-initialize"),this).call(this,Fa);0<this.submorphs.length&&this.setupConnections()}},{key:"setupConnections",value:function(){for(var Fa=this.ui,Ea={},ka=$jscomp.makeIterator(Object.entries(this.uiSpec)),ja=ka.next();!ja.done;Ea={$jscomp$loop$prop$control$2701:Ea.$jscomp$loop$prop$control$2701,$jscomp$loop$prop$prop$2702:Ea.$jscomp$loop$prop$prop$2702},ja=ka.next()){var Ca=$jscomp.makeIterator(ja.value);ja=Ca.next().value;Ca=$jscomp.makeIterator(Ca.next().value);Ca.next();
var mb=Ca.next().value;Ea.$jscomp$loop$prop$prop$2702=Ca.next().value;Ea.$jscomp$loop$prop$control$2701=Fa[ja];ec.connect(Ea.$jscomp$loop$prop$control$2701,mb,this,"updateTarget",{updater:function(Ub){return function(Ya,$a){Ub.$jscomp$loop$prop$control$2701._updating=!0;Ya(Ub.$jscomp$loop$prop$prop$2702,$a);Ub.$jscomp$loop$prop$control$2701._updating=!1}}(Ea),varMapping:{prop:Ea.$jscomp$loop$prop$prop$2702,control:Ea.$jscomp$loop$prop$control$2701}})}}},{key:"update",value:function(){var Fa=this,
Ea=this.target,ka=Ea.top,ja=Ea.left,Ca=Ea.clipMode,mb=Ea.fill,Ub=Ea.dropShadow,Ya=Ea.opacity,$a=Ea.height,Ua=Ea.width;Ea=this.ui;var U=Ea.clipModeSelector,Ba=Ea.fillPicker,K=Ea.opacityField,V=Ea.shadowPicker,ra=Ea.heightField,Ja=Ea.widthField,hb=Ea.posXField,dc=Ea.posYField;ec.noUpdate(function(){Fa.updateControl(V,"shadowValue",Ub);Fa.updateControl(U,"selection",Ca);Fa.updateControl(Ba,"colorValue",mb);Fa.updateControl(K,"number",Ya);Fa.updateControl(ra,"number",$a);Fa.updateControl(Ja,"number",
Ua);Fa.updateControl(hb,"number",ja);Fa.updateControl(dc,"number",ka)})}},{key:"updateTarget",value:function(Fa,Ea){this.target[Fa]=Ea;this.update()}},{key:"updateControl",value:function(Fa,Ea,ka){Fa._updating||ec.obj.equals(Fa[Ea],ka)||(Fa[Ea]=ka)}},{key:"updateMultiValue",value:function(Fa,Ea,ka){var ja=this.ui,Ca=ja[this.join(Fa)],mb=Ca.get("multi value indicator"),Ub=ec.obj.values(Ea).some(function(Ya){return!ec.obj.isFunction(Ya)&&!ec.obj.equals(Ya,Ea.valueOf())});mb.left=0;Ca.visible=Ca.isLayoutable=
!Ub;if(Ub&&mb.visible!=Ub)ec.once(mb,"onMouseDown",Ca,ka,{converter:function(){return Ea.valueOf()},varMapping:{value:Ea}});mb.visible=mb.isLayoutable=Ub;mb.left=Ub?200:0;this.updateControl(Ca,ka,Ea.valueOf());Ca=$jscomp.makeIterator(["top","left","bottom","right"]);for(mb=Ca.next();!mb.done;mb=Ca.next())mb=mb.value,Ub=ja[this.join(Fa,mb)],this.updateControl(Ub,ka,Ea[mb])}},{key:"lower",value:function(Fa){return Fa.charAt(0).toLowerCase()+Fa.slice(1)}},{key:"join",value:function(Fa,Ea){return this.lower(ec.string.camelCaseString(Fa+
(Ea?" "+Ea:"")))}},{key:"unwrap",value:function(Fa,Ea,ka){var ja={};ja=(ja[this.lower(ec.string.camelCaseString(Fa))]=[Fa,Ea,ka],ja);for(var Ca=$jscomp.makeIterator(["top","left","bottom","right"]),mb=Ca.next();!mb.done;mb=Ca.next()){mb=mb.value;var Ub=Fa+" "+mb;ja[this.lower(ec.string.camelCaseString(Ub))]=[Ub,Ea,this.join(ka,mb)]}return ja}},{key:"focusOn",value:function(Fa){var Ea=this,ka;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ja){if(1==ja.nextAddress)return!Fa||Ea.isAncestorOf(Fa)||
Ea.target===Fa||ec.obj.isArray(Fa)||(Ea.target=Fa),ka=Ea.visible,Ea.visible=!0,ja.yield(Ea.whenRendered(),2);if(3!=ja.nextAddress)return Ea.update(),ja.yield(Ea.whenRendered(),3);Ea.getSubmorphsByStyleClassName("NumberWidget").map(function(Ca){return Ca.relayout()});Ea.visible=ka;ja.jumpToEnd()})}},{key:"onHoverIn",value:function(Fa){this.watchForTarget=!1}},{key:"onHoverOut",value:function(Fa){this.watchForTarget=!0}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ShapeFormatStyler"}},
{key:"properties",get:function(){return{uiSpec:{get:function(){return this._uiSpec||(this._uiSpec={clipModeSelector:["clip mode selector","selection","clipMode"],fillPicker:["fill picker","colorValue","fill"],shadowPicker:["shadow picker","shadowValue","dropShadow"],opacityField:["opacity field","number","opacity"],heightField:["height field","number","height"],widthField:["width field","number","width"],posXField:["pos x field","number","left"],posYField:["pos y field","number","top"]})}},ui:{readOnly:!0,
get:function(){var Fa=this,Ea=this.uiSpec;return this._ui||(this._ui=ec.obj.extract(Ea,ec.obj.keys(Ea),function(ka,ja){ka=$jscomp.makeIterator(ja).next().value;return Fa.getSubmorphNamed(ka)}))}}}}}],Xa,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShapeFormatStyler",version:"0.1.1-147"}}},{start:176,end:4919})}(ec.Morph);Hb=ec.ShapeFormatStyler;
ec.default=Hb;var vc=lively.FreezerRuntime.recorderFor("ShadowWidget/index.js");vc.Morph=wa;vc.ShadowPopover=hc;vc.connect=uc;vc.signal=lc;Hb=function(Za){var Xa=lively.FreezerRuntime.recorderFor("ShadowWidget/index.js"),jb=Xa.hasOwnProperty("ShadowWidget")&&"function"===typeof Xa.ShadowWidget?Xa.ShadowWidget:Xa.ShadowWidget=function(Fa){Fa&&Fa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dd(jb,Za,[{key:"onHoverIn",value:function(){this.getSubmorphNamed("drop down indicator").animate({opacity:1,
duration:200})}},{key:"onHoverOut",value:function(){this.getSubmorphNamed("drop down indicator").animate({opacity:0,duration:200})}},{key:"onMouseDown",value:function(Fa){this.openPopover()}},{key:"update",value:function(Fa){var Ea=this.submorphs[0];Ea&&(Ea.dropShadow=Fa)}},{key:"openPopover",value:function(){var Fa=this,Ea;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ka){if(1==ka.nextAddress)return Ea=new vc.ShadowPopover({hasFixedPosition:!!Fa.ownerChain().find(function(ja){return ja.hasFixedPosition}),
shadowValue:Fa.shadowValue}),ka.yield(Ea.fadeIntoWorld(Fa.globalBounds().center()),2);vc.connect(Ea,"shadowValue",Fa,"shadowValue");vc.connect(Fa,"shadowValue",Fa,"update");vc.signal(Fa,"openWidget",Ea);ka.jumpToEnd()})}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ShadowWidget"}},{key:"properties",get:function(){return{shadowValue:{set:function(Fa){this.setProperty("shadowValue",Fa);this.update(Fa)}}}}}],Xa,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShadowWidget",version:"0.1.1-7"}}},{start:194,end:1231})}(vc.Morph);Hb=vc.ShadowWidget;vc.default=Hb;var gd=lively.FreezerRuntime.recorderFor("BorderFormatStyler/index.js");gd.Morph=wa;gd.obj=Ad;gd.string=le;gd.connect=uc;gd.noUpdate=Le;gd.once=ae;Hb=function(Za){var Xa=lively.FreezerRuntime.recorderFor("BorderFormatStyler/index.js"),jb=Xa.hasOwnProperty("BorderFormatStyler")&&"function"===typeof Xa.BorderFormatStyler?
Xa.BorderFormatStyler:Xa.BorderFormatStyler=function(Fa){Fa&&Fa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dd(jb,Za,[{key:"setupUI",value:function(){var Fa=this;this.getSubmorphsByStyleClassName("NumberWidget").map(function(Ea){var ka=gd.string.camelCaseString(Ea.name);ka=ka[0].toLowerCase()+ka.slice(1);Fa.ui[ka]=Ea})}},{key:"cleanupAnchors",value:function(){var Fa=this.withAllSubmorphsSelect(function(ja){return ja.anchors&&
ja.anchors.filter(function(Ca){return!Ca.id})}),Ea={};Fa=$jscomp.makeIterator(Fa);for(var ka=Fa.next();!ka.done;Ea={$jscomp$loop$prop$m$2704:Ea.$jscomp$loop$prop$m$2704},ka=Fa.next())Ea.$jscomp$loop$prop$m$2704=ka.value,Ea.$jscomp$loop$prop$m$2704.anchors.forEach(function(ja){return function(Ca){return!Ca.id&&ja.$jscomp$loop$prop$m$2704.removeAnchor(Ca)}}(Ea))}},{key:Symbol.for("lively-instance-initialize"),value:function(Fa){dd._get(Object.getPrototypeOf(jb.prototype),Symbol.for("lively-instance-initialize"),
this).call(this,Fa);0<this.submorphs.length&&this.setupConnections()}},{key:"setupConnections",value:function(){for(var Fa=this.ui,Ea={},ka=$jscomp.makeIterator(Object.entries(this.uiSpec)),ja=ka.next();!ja.done;Ea={$jscomp$loop$prop$control$2706:Ea.$jscomp$loop$prop$control$2706,$jscomp$loop$prop$prop$2707:Ea.$jscomp$loop$prop$prop$2707},ja=ka.next()){var Ca=$jscomp.makeIterator(ja.value);ja=Ca.next().value;Ca=$jscomp.makeIterator(Ca.next().value);Ca.next();var mb=Ca.next().value;Ea.$jscomp$loop$prop$prop$2707=
Ca.next().value;Ea.$jscomp$loop$prop$control$2706=Fa[ja];gd.connect(Ea.$jscomp$loop$prop$control$2706,mb,this,"updateTarget",{updater:function(Ub){return function(Ya,$a){Ub.$jscomp$loop$prop$control$2706._updating=!0;Ya(Ub.$jscomp$loop$prop$prop$2707,$a);Ub.$jscomp$loop$prop$control$2706._updating=!1}}(Ea),varMapping:{prop:Ea.$jscomp$loop$prop$prop$2707,control:Ea.$jscomp$loop$prop$control$2706}})}}},{key:"update",value:function(){var Fa=this,Ea=this.target,ka=Ea.borderStyle,ja=Ea.borderColor,Ca=
Ea.borderRadius,mb=Ea.borderWidth;gd.noUpdate(function(){Fa.updateMultiValue("border style selector",ka,"selection");Fa.updateMultiValue("border color picker",ja,"colorValue");Fa.updateMultiValue("border radius field",Ca,"number");Fa.updateMultiValue("border width field",mb,"number")})}},{key:"updateTarget",value:function(Fa,Ea){this.target[Fa]=Ea;this.update()}},{key:"updateControl",value:function(Fa,Ea,ka){Fa._updating||gd.obj.equals(Fa[Ea],ka)||(Fa[Ea]=ka)}},{key:"updateMultiValue",value:function(Fa,
Ea,ka){var ja=this.ui,Ca=ja[this.join(Fa)],mb=Ca.get("multi value indicator"),Ub=gd.obj.values(Ea).some(function(Ya){return!gd.obj.isFunction(Ya)&&!gd.obj.equals(Ya,Ea.valueOf())});Ca.visible=Ca.isLayoutable=!Ub;if(Ub&&mb.visible!=Ub)gd.once(mb,"onMouseDown",Ca,ka,{converter:function(){return Ea.valueOf()},varMapping:{value:Ea}});mb.visible=mb.isLayoutable=Ub;this.updateControl(Ca,ka,Ea.valueOf());Ca=$jscomp.makeIterator(["top","left","bottom","right"]);for(mb=Ca.next();!mb.done;mb=Ca.next())mb=mb.value,
Ub=ja[this.join(Fa,mb)],this.updateControl(Ub,ka,Ea[mb])}},{key:"lower",value:function(Fa){return Fa.charAt(0).toLowerCase()+Fa.slice(1)}},{key:"join",value:function(Fa,Ea){return this.lower(gd.string.camelCaseString(Fa+(Ea?" "+Ea:"")))}},{key:"unwrap",value:function(Fa,Ea,ka){var ja={};ja=(ja[this.lower(gd.string.camelCaseString(Fa))]=[Fa,Ea,ka],ja);for(var Ca=$jscomp.makeIterator(["top","left","bottom","right"]),mb=Ca.next();!mb.done;mb=Ca.next()){mb=mb.value;var Ub=Fa+" "+mb;ja[this.lower(gd.string.camelCaseString(Ub))]=
[Ub,Ea,this.join(ka,mb)]}return ja}},{key:"attachToWorld",value:function(){gd.connect($world,"showHaloFor",this,"focusOn",{garbageCollect:!0})}},{key:"focusOn",value:function(Fa){var Ea=this,ka;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ja){if(1==ja.nextAddress)return!Fa||Ea.isAncestorOf(Fa)||Ea.target===Fa||gd.obj.isArray(Fa)||(Ea.target=Fa),ka=Ea.visible,Ea.visible=!0,ja.yield(Ea.whenRendered(),2);if(3!=ja.nextAddress)return Ea.update(),ja.yield(Ea.whenRendered(),3);Ea.getSubmorphsByStyleClassName("NumberWidget").map(function(Ca){return Ca.relayout()});
Ea.visible=ka;ja.jumpToEnd()})}},{key:"onHoverIn",value:function(Fa){this.watchForTarget=!1}},{key:"onHoverOut",value:function(Fa){this.watchForTarget=!0}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"BorderFormatStyler"}},{key:"properties",get:function(){return{uiSpec:{derived:!0,serialize:!1,get:function(){return this._uiSpec||(this._uiSpec=Object.assign({},this.unwrap("border style selector","selection","borderStyle"),{},this.unwrap("border color picker","colorValue","borderColor"),
{},this.unwrap("border radius field","number","borderRadius"),{},this.unwrap("border width field","number","borderWidth")))}},ui:{initialize:function(){this.setupUI()}}}}}],Xa,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"BorderFormatStyler",version:"0.1.1-16"}}},{start:185,end:5003})}(gd.Morph);Hb=gd.BorderFormatStyler;gd.default=
Hb;var Zc=lively.FreezerRuntime.recorderFor("MasterComponentControl/index.js");Zc.Morph=wa;Zc.resource=Wc;Zc.arr=Ed;Zc.obj=Ad;Zc.string=le;Zc.Path=Tb;Zc.connect=uc;Zc.getMastersMenu=Bd;Zc.resolvedMasters=Sd;Hb=function(Za){var Xa=lively.FreezerRuntime.recorderFor("MasterComponentControl/index.js"),jb=Xa.hasOwnProperty("MasterComponentControl")&&"function"===typeof Xa.MasterComponentControl?Xa.MasterComponentControl:Xa.MasterComponentControl=function(Fa){Fa&&Fa[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dd(jb,Za,[{key:"focusOn",value:function(Fa){this.target=Fa;this.update()}},{key:"onMouseUp",value:function(Fa){var Ea=this,ka,ja,Ca,mb,Ub,Ya;return $jscomp.asyncExecutePromiseGeneratorProgram(function($a){if(1==$a.nextAddress){"auto master selection"==Fa.targetMorph.name&&(ka="auto");"hover master selection"==Fa.targetMorph.name&&(ka="hover");"click master selection"==Fa.targetMorph.name&&(ka="click");Ea.refreshButtons();
if(!Ea.target)return $a.return();ja=$jscomp.makeIterator(["auto","hover","click"]);for(Ca=ja.next();!Ca.done;Ca=ja.next())mb=Ca.value,Ea.target.master&&Ea.target.master[mb]&&!Ea.get(mb+" master checkbox").checked&&Ea.adjustMasterComponent(mb,null);if(!ka)return $a.jumpTo(0);Ub=Ea;Ya=Ub.openMenu;return $a.yield(Ea.getMastersMenu(ka),3)}Ya.call(Ub,$a.yieldResult,Fa);$a.jumpToEnd()})}},{key:"getMastersMenu",value:function(Fa){var Ea=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ka){return 1==
ka.nextAddress?ka.yield(Promise.all([].concat($jscomp.arrayFromIterable(Object.keys(Zc.resolvedMasters)),[Ea.world().name]).map(function(ja){var Ca,mb,Ub;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ya){return 1==Ya.nextAddress?(Ca=ja,mb=Ea,Ub=mb.componentsToMenu,Ya.yield(Zc.resource("styleguide://"+ja+"/").dirList(),2)):Ya.return([Ca,Ub.call(mb,Ya.yieldResult,Fa)])})})),2):ka.return(ka.yieldResult)})}},{key:"componentsToMenu",value:function(Fa,Ea,ka,ja){var Ca=this;ka=void 0===ka?
null:ka;ja=void 0===ja?1:ja;ka||(ka=Fa.map(function(Ub){return{name:Zc.arr.last(Ub.name.split("/")),path:Ub.name.split("/"),value:Ub}}));if(0==ka.length||100<ja)return[];var mb=this;return Zc.arr.flatten(Object.entries(Zc.arr.groupBy(ka,function(Ub){return Ub.path[ja-1]})).map(function(Ub){var Ya=$jscomp.makeIterator(Ub);Ub=Ya.next().value;Ya=Ya.next().value;var $a=$jscomp.makeIterator(Zc.arr.partition(Ya,function(Ua){return Ua.path.length<=ja}));Ya=$a.next().value;$a=$a.next().value;Ub=[Ub,Ca.componentsToMenu(null,
Ea,$a,ja+1)];return[].concat($jscomp.arrayFromIterable(Ya.map(function(Ua){return[Ua.name,function(){mb.adjustMasterComponent(Ea,Ua.value)}]})),$jscomp.arrayFromIterable(Ub[1].length?[Ub]:[]))}),1)}},{key:"getComponentSelectionMenu",value:function(Fa){var Ea=this,ka,ja,Ca,mb,Ub,Ya;return $jscomp.asyncExecutePromiseGeneratorProgram(function($a){if(1==$a.nextAddress)return ka=Ea.world().metadata.commit.name,ja=Zc.resource("styleguide://"+ka+"/"),$a.yield(ja.dirList(),2);if(3!=$a.nextAddress)return Ca=
$a.yieldResult,$a.yield(Zc.resource("styleguide://System/").dirList(),3);mb=$a.yieldResult;Ub=Ea.componentsToMenu(Ca,Fa);Ya=Ea.componentsToMenu(mb,Fa);return $a.return([].concat($jscomp.arrayFromIterable(0<Ub.length?[].concat($jscomp.arrayFromIterable(Ub),[{isDivider:!0}]):[]),$jscomp.arrayFromIterable(Ya)))})}},{key:"adjustMasterComponent",value:function(Fa,Ea){if(this.target.master)this.target.master[Fa]=Ea;else if(Ea){var ka={};this.target.master=(ka[Fa]=Ea,ka)}Fa=this.target.master;Ea=Fa.hover;
ka=Fa.click;Fa.auto||Ea||ka||(this.target.master=null);this.update();this.target.withAllSubmorphsDo(function(ja){return delete ja._parametrizedProps});this.target.requestMasterStyling()}},{key:"componentsToMenu",value:function(Fa,Ea,ka,ja){var Ca=this;ka=void 0===ka?null:ka;ja=void 0===ja?1:ja;ka||(ka=Fa.map(function(Ub){return{name:Zc.arr.last(Ub.name.split("/")),path:Ub.name.split("/"),value:Ub}}));if(0==ka.length||100<ja)return[];var mb=this;return Zc.arr.flatten(Object.entries(Zc.arr.groupBy(ka,
function(Ub){return Ub.path[ja-1]})).map(function(Ub){var Ya=$jscomp.makeIterator(Ub);Ub=Ya.next().value;Ya=Ya.next().value;var $a=$jscomp.makeIterator(Zc.arr.partition(Ya,function(Ua){return Ua.path.length<=ja}));Ya=$a.next().value;$a=$a.next().value;Ub=[Ub,Ca.componentsToMenu(null,Ea,$a,ja+1)];return[].concat($jscomp.arrayFromIterable(Ya.map(function(Ua){return[Ua.name,function(){mb.adjustMasterComponent(Ea,Ua.value)}]})),$jscomp.arrayFromIterable(Ub[1].length?[Ub]:[]))}),1)}},{key:"update",value:function(){if(this.target){for(var Fa=
$jscomp.makeIterator(["auto","hover","click"]),Ea=Fa.next();!Ea.done;Ea=Fa.next()){Ea=Ea.value;var ka=this.getSubmorphNamed(Ea+" master selection"),ja=this.getSubmorphNamed(Ea+" master checkbox");Zc.Path(["master",Ea]).get(this.target)?ja.checked=!0:ja.checked=!1;ka.label=Zc.string.truncateLeft(Zc.Path(["master",Ea,"name"]).get(this.target)||"select master",15,"...")}this.refreshButtons()}}},{key:"refreshButtons",value:function(){for(var Fa=$jscomp.makeIterator(["auto","hover","click"]),Ea=Fa.next();!Ea.done;Ea=
Fa.next()){Ea=Ea.value;var ka=this.getSubmorphNamed(Ea+" master selection"),ja=this.getSubmorphNamed(Ea+" master checkbox");ka=ka.deactivated=!ja.checked;this.getSubmorphNamed(Ea+" master selection").opacity=ka?.5:1}Fa=this.getSubmorphNamed("overridden props list");Fa.items=this.getOverriddenProps();this.getSubmorphNamed("clear overridden prop button").deactivated=!Fa.selection}},{key:"getMasterForTarget",value:function(){if(this.target.isMorph)return[this.target].concat($jscomp.arrayFromIterable(this.target.ownerChain())).map(function(Fa){return Fa.master}).find(Boolean)}},
{key:"clearSelectedProperty",value:function(){var Fa=this.getSubmorphNamed("overridden props list").selection;this.getMasterForTarget().clearOverriddenPropertiesFor(this.target,[Fa]);this.refreshButtons()}},{key:"getOverriddenProps",value:function(){var Fa=this.getMasterForTarget();return Fa&&Fa._overriddenProps?(Fa=Fa._overriddenProps.get(this.target))?Object.keys(Fa):[]:[]}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"MasterComponentControl"}}],Xa,{pathInPackage:function(){return"index.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"MasterComponentControl",version:"0.1.1-108"}}},{start:315,end:6096})}(Zc.Morph);Hb=Zc.MasterComponentControl;Zc.default=Hb}}});
