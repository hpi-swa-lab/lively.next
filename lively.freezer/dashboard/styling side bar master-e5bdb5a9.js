System.register("./__root_module__-cd530690.js kld-intersections ./index-cab7da24.js ./index-e341c34b.js ./index-459b301d.js ./color-picker-1bb681d9.js ./index-d8bbf49c.js".split(" "),function(){var Da,zb,Rb,kc,dc,ke,hd,$d,md,Qc,xd,Od,ge,Ud,nd,Za,Cb,bc,ic,id,fe,Zb;return{setters:[function(rc){Da=rc.ah;zb=rc.az;Rb=rc.am;kc=rc.an;dc=rc.au;ke=rc.a2;hd=rc.C;$d=rc.as;md=rc.ap;Qc=rc.bp;xd=rc.ar;Od=rc.a6;ge=rc.s;Ud=rc.bS;nd=rc.at;Za=rc.aq;Cb=rc.r;bc=rc.a5;ic=rc.P;id=rc.bU;fe=rc.bV},function(){},function(){},
function(){},function(){},function(rc){Zb=rc.S},function(){}],execute:function(){var rc=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js");rc.Morph=Da;rc.touchInputDevice=zb;rc.morph=Rb;rc.Icon=kc;rc.easings=dc;rc.pt=ke;rc.Color=hd;rc.fun=$d;rc.connect=md;rc.TreeData=Qc;var Lb=function(ob){var zc=lively.FreezerRuntime.recorderFor("StylingSideBar/index.js"),Mc=zc.hasOwnProperty("SettingsTree")&&"function"===typeof zc.SettingsTree?zc.SettingsTree:zc.SettingsTree=function(Ja){Ja&&Ja[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return xd(Mc,ob,[{key:"display",value:function(Ja){return Ja.panel?[Ja.panel,{}]:Ja.name}},{key:"collapse",value:function(Ja,Ra){Ja.isCollapsed=Ra}},{key:"isCollapsed",value:function(Ja){return Ja.isCollapsed}},{key:"isLeaf",value:function(Ja){return!Ja.children}},{key:"getChildren",value:function(Ja){return Ja.children}}],[{key:"className",get:function(){return"SettingsTree"}},{key:"default",value:function(){return new this({isCollapsed:!1,
children:[{isCollapsed:!0,name:[" ",{}].concat($jscomp.arrayFromIterable(rc.Icon.textAttribute("font")),[" Rich Text",{fontWeight:"bold"}]),children:[{panel:rc.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(rc.Icon.textAttribute("image")),[" Shape",{fontWeight:"bold"}]),children:[{panel:rc.morph({})}]},{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(rc.Icon.textAttribute("border-style")),[" Border",{paddingLeft:"2px",fontWeight:"bold"}]),children:[{panel:rc.morph({})}]},
{isCollapsed:!1,name:[" ",{}].concat($jscomp.arrayFromIterable(rc.Icon.textAttribute("grip-vertical")),[" Layout",{paddingLeft:"4px",fontWeight:"bold"}]),children:[{panel:rc.morph({})}]}]})}},{key:"border",value:function(){return new this({isCollapsed:!1,children:[{isCollapsed:!0,name:[" Type    ",{},rc.morph({height:20}),{}],children:[{panel:rc.morph({})}]},{isCollapsed:!1,name:[" Color   ",{},rc.morph({height:20}),{}],children:[{panel:rc.morph({})}]},{isCollapsed:!1,name:[" Width  ",{},rc.morph({height:20}),
{}],children:[{panel:rc.morph({})}]},{isCollapsed:!1,name:[" Radius ",{},rc.morph({height:20}),{}],children:[{panel:rc.morph({})}]}]})}}],zc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"StylingSideBar",version:"0.1.1-56"}}},{start:284,end:2453})}(rc.TreeData);rc.SettingsTree=Lb;rc.SettingsTree=Lb;rc.SettingsTree=Lb;Lb=function(ob){var zc=
lively.FreezerRuntime.recorderFor("StylingSideBar/index.js"),Mc=zc.hasOwnProperty("StylingSideBar")&&"function"===typeof zc.StylingSideBar?zc.StylingSideBar:zc.StylingSideBar=function(Ja){Ja&&Ja[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return xd(Mc,ob,[{key:"onWorldResize",value:function(Ja){Ja=void 0===Ja?!0:Ja;if(this.respondsToVisibleWindow){var Ra=$world.visibleBounds(),ub=navigator.standalone&&rc.touchInputDevice?25:0,Mb=this.getSubmorphNamed("horizontal resizer");
this.height=Ra.height-ub;this.top=ub+Ra.top();Mb.height=this.height;Mb.left=0;Mb.top=0;Ja&&(this.visible?this.topRight=Ra.topRight():this.topLeft=Ra.topRight())}}},{key:"toggle",value:function(Ja){var Ra=this,ub,Mb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ob){switch(Ob.nextAddress){case 1:ub=$world.visibleBounds();Mb=navigator.standalone&&rc.touchInputDevice?25:0;Ra.height=ub.height-Mb;Ra.top=Mb+ub.top();if(Ja)return $world.addMorph(Ra,$world.get("lively top bar")),Ra.left=ub.width,
Ra.visible=!0,Ob.yield(Ra.whenRendered(),5);Ra.detachFromWorld($world);return Ob.yield(Ra.animate({opacity:0,left:ub.width,duration:300}),4);case 4:Ra.visible=!1;Ra.remove();Ob.jumpTo(0);break;case 5:return Ra.onWorldResize(!1),Ob.yield(Ra.animate({opacity:1,easing:rc.easings.outCirc,right:ub.width,duration:300}),6);case 6:Ra.attachToWorld($world),Ob.jumpToEnd()}})}},{key:"cleanupAnchors",value:function(){for(var Ja=this.withAllSubmorphsSelect(function(Ob){return Ob.anchors&&Ob.anchors.filter(function(kb){return!kb.id}).length}),
Ra={},ub=$jscomp.makeIterator(Ja),Mb=ub.next();!Mb.done;Ra={$jscomp$loop$prop$m$2295:Ra.$jscomp$loop$prop$m$2295},Mb=ub.next())Ra.$jscomp$loop$prop$m$2295=Mb.value,Ra.$jscomp$loop$prop$m$2295.anchors.forEach(function(Ob){return function(kb){return!kb.id&&Ob.$jscomp$loop$prop$m$2295.removeAnchor(kb)}}(Ra));return Ja.length}},{key:"attachToWorld",value:function(Ja){rc.connect(Ja,"showHaloFor",this,"focusMorph",{garbageCollect:!0})}},{key:"detachFromWorld",value:function(Ja){var Ra=this;Ja.attributeConnections.forEach(function(ub){ub.targetObj===
Ra&&ub.disconnect()})}},{key:"focusMorph",value:function(Ja){Ja.isMorph&&Ja.ownerChain().includes(this)||((Ja.isLabel||Ja.isText||Ja.isButton)&&this.richTextControl.focusOn(Ja,!1),Object.values(this.controls).forEach(function(Ra){return Ra&&Ra.focusOn(Ja)}))}},{key:"onHierarchyChange",value:function(){Object.values(this.controls).forEach(function(Ja){return Ja&&Ja.update()})}}],[{key:"className",get:function(){return"StylingSideBar"}},{key:"properties",get:function(){return{controls:{},richTextControl:{},
isHaloItem:{get:function(){return!0}}}}}],zc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"StylingSideBar",version:"0.1.1-56"}}},{start:2470,end:5120})}(rc.Morph);Lb=rc.StylingSideBar;rc.default=Lb;var Gc=lively.FreezerRuntime.recorderFor("ShapeFormatStyler/index.js");Gc.Morph=Da;Gc.obj=Od;Gc.string=ge;Gc.connect=md;Gc.noUpdate=
Ud;Gc.once=nd;Lb=function(ob){var zc=lively.FreezerRuntime.recorderFor("ShapeFormatStyler/index.js"),Mc=zc.hasOwnProperty("ShapeFormatStyler")&&"function"===typeof zc.ShapeFormatStyler?zc.ShapeFormatStyler:zc.ShapeFormatStyler=function(Ja){Ja&&Ja[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return xd(Mc,ob,[{key:Symbol.for("lively-instance-initialize"),value:function(Ja){xd._get(Object.getPrototypeOf(Mc.prototype),Symbol.for("lively-instance-initialize"),
this).call(this,Ja);0<this.submorphs.length&&this.setupConnections()}},{key:"setupConnections",value:function(){for(var Ja=this.ui,Ra={},ub=$jscomp.makeIterator(Object.entries(this.uiSpec)),Mb=ub.next();!Mb.done;Ra={$jscomp$loop$prop$control$2297:Ra.$jscomp$loop$prop$control$2297,$jscomp$loop$prop$prop$2298:Ra.$jscomp$loop$prop$prop$2298},Mb=ub.next()){var Ob=$jscomp.makeIterator(Mb.value);Mb=Ob.next().value;Ob=$jscomp.makeIterator(Ob.next().value);Ob.next();var kb=Ob.next().value;Ra.$jscomp$loop$prop$prop$2298=
Ob.next().value;Ra.$jscomp$loop$prop$control$2297=Ja[Mb];Gc.connect(Ra.$jscomp$loop$prop$control$2297,kb,this,"updateTarget",{updater:function(ib){return function(Jb,vc){ib.$jscomp$loop$prop$control$2297._updating=!0;Jb(ib.$jscomp$loop$prop$prop$2298,vc);ib.$jscomp$loop$prop$control$2297._updating=!1}}(Ra),varMapping:{prop:Ra.$jscomp$loop$prop$prop$2298,control:Ra.$jscomp$loop$prop$control$2297}})}}},{key:"update",value:function(){var Ja=this,Ra=this.target,ub=Ra.clipMode,Mb=Ra.fill,Ob=Ra.dropShadow,
kb=Ra.opacity,ib=Ra.height,Jb=Ra.width;Ra=this.ui;var vc=Ra.clipModeSelector,sc=Ra.fillPicker,Uc=Ra.opacityField,Xc=Ra.shadowPicker,Q=Ra.heightField,fa=Ra.widthField;Gc.noUpdate(function(){Ja.updateControl(Xc,"shadowValue",Ob);Ja.updateControl(vc,"selection",ub);Ja.updateControl(sc,"colorValue",Mb);Ja.updateControl(Uc,"number",kb);Ja.updateControl(Q,"number",ib);Ja.updateControl(fa,"number",Jb)})}},{key:"updateTarget",value:function(Ja,Ra){this.target[Ja]=Ra;this.update()}},{key:"updateControl",value:function(Ja,
Ra,ub){Ja._updating||Gc.obj.equals(Ja[Ra],ub)||(Ja[Ra]=ub)}},{key:"updateMultiValue",value:function(Ja,Ra,ub){var Mb=this.ui,Ob=Mb[this.join(Ja)],kb=Ob.get("multi value indicator"),ib=Gc.obj.values(Ra).some(function(Jb){return!Gc.obj.isFunction(Jb)&&!Gc.obj.equals(Jb,Ra.valueOf())});kb.left=0;Ob.visible=Ob.isLayoutable=!ib;if(ib&&kb.visible!=ib)Gc.once(kb,"onMouseDown",Ob,ub,{converter:function(){return Ra.valueOf()},varMapping:{value:Ra}});kb.visible=kb.isLayoutable=ib;kb.left=ib?200:0;this.updateControl(Ob,
ub,Ra.valueOf());Ob=$jscomp.makeIterator(["top","left","bottom","right"]);for(kb=Ob.next();!kb.done;kb=Ob.next())kb=kb.value,ib=Mb[this.join(Ja,kb)],this.updateControl(ib,ub,Ra[kb])}},{key:"lower",value:function(Ja){return Ja.charAt(0).toLowerCase()+Ja.slice(1)}},{key:"join",value:function(Ja,Ra){return this.lower(Gc.string.camelCaseString(Ja+(Ra?" "+Ra:"")))}},{key:"unwrap",value:function(Ja,Ra,ub){var Mb={};Mb=(Mb[this.lower(Gc.string.camelCaseString(Ja))]=[Ja,Ra,ub],Mb);for(var Ob=$jscomp.makeIterator(["top",
"left","bottom","right"]),kb=Ob.next();!kb.done;kb=Ob.next()){kb=kb.value;var ib=Ja+" "+kb;Mb[this.lower(Gc.string.camelCaseString(ib))]=[ib,Ra,this.join(ub,kb)]}return Mb}},{key:"focusOn",value:function(Ja){var Ra=this,ub;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Mb){if(1==Mb.nextAddress)return!Ja||Ra.isAncestorOf(Ja)||Ra.target===Ja||Gc.obj.isArray(Ja)||(Ra.target=Ja),ub=Ra.visible,Ra.visible=!0,Mb.yield(Ra.whenRendered(),2);if(3!=Mb.nextAddress)return Ra.update(),Mb.yield(Ra.whenRendered(),
3);Ra.getSubmorphsByStyleClassName("NumberWidget").map(function(Ob){return Ob.relayout()});Ra.visible=ub;Mb.jumpToEnd()})}},{key:"onHoverIn",value:function(Ja){this.watchForTarget=!1}},{key:"onHoverOut",value:function(Ja){this.watchForTarget=!0}}],[{key:"className",get:function(){return"ShapeFormatStyler"}},{key:"properties",get:function(){return{uiSpec:{get:function(){return this._uiSpec||(this._uiSpec={clipModeSelector:["clip mode selector","selection","clipMode"],fillPicker:["fill picker","colorValue",
"fill"],shadowPicker:["shadow picker","shadowValue","dropShadow"],opacityField:["opacity field","number","opacity"],heightField:["height field","number","height"],widthField:["width field","number","width"]})}},ui:{readOnly:!0,get:function(){var Ja=this,Ra=this.uiSpec;return this._ui||(this._ui=Gc.obj.extract(Ra,Gc.obj.keys(Ra),function(ub,Mb){ub=$jscomp.makeIterator(Mb).next().value;return Ja.getSubmorphNamed(ub)}))}}}}}],zc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShapeFormatStyler",version:"0.1.1-144"}}},{start:176,end:4600})}(Gc.Morph);Lb=Gc.ShapeFormatStyler;Gc.default=Lb;var $c=lively.FreezerRuntime.recorderFor("ShadowWidget/index.js");$c.Morph=Da;$c.ShadowPopover=Zb;$c.connect=md;$c.signal=Za;Lb=function(ob){var zc=lively.FreezerRuntime.recorderFor("ShadowWidget/index.js"),Mc=zc.hasOwnProperty("ShadowWidget")&&"function"===typeof zc.ShadowWidget?zc.ShadowWidget:
zc.ShadowWidget=function(Ja){Ja&&Ja[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return xd(Mc,ob,[{key:"onHoverIn",value:function(){this.getSubmorphNamed("drop down indicator").animate({opacity:1,duration:200})}},{key:"onHoverOut",value:function(){this.getSubmorphNamed("drop down indicator").animate({opacity:0,duration:200})}},{key:"onMouseDown",value:function(Ja){this.openPopover()}},{key:"update",value:function(Ja){var Ra=this.submorphs[0];
Ra&&(Ra.dropShadow=Ja)}},{key:"openPopover",value:function(){var Ja=this,Ra;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ub){if(1==ub.nextAddress)return Ra=new $c.ShadowPopover({hasFixedPosition:!!Ja.ownerChain().find(function(Mb){return Mb.hasFixedPosition}),shadowValue:Ja.shadowValue}),ub.yield(Ra.fadeIntoWorld(Ja.globalBounds().center()),2);$c.connect(Ra,"shadowValue",Ja,"shadowValue");$c.connect(Ja,"shadowValue",Ja,"update");$c.signal(Ja,"openWidget",Ra);ub.jumpToEnd()})}}],[{key:"className",
get:function(){return"ShadowWidget"}},{key:"properties",get:function(){return{shadowValue:{set:function(Ja){this.setProperty("shadowValue",Ja);this.update(Ja)}}}}}],zc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShadowWidget",version:"0.1.1-7"}}},{start:194,end:1231})}($c.Morph);Lb=$c.ShadowWidget;$c.default=Lb;var ed=lively.FreezerRuntime.recorderFor("BorderFormatStyler/index.js");
ed.Morph=Da;ed.obj=Od;ed.string=ge;ed.connect=md;ed.noUpdate=Ud;ed.once=nd;Lb=function(ob){var zc=lively.FreezerRuntime.recorderFor("BorderFormatStyler/index.js"),Mc=zc.hasOwnProperty("BorderFormatStyler")&&"function"===typeof zc.BorderFormatStyler?zc.BorderFormatStyler:zc.BorderFormatStyler=function(Ja){Ja&&Ja[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return xd(Mc,ob,[{key:"setupUI",value:function(){var Ja=this;this.getSubmorphsByStyleClassName("NumberWidget").map(function(Ra){var ub=
ed.string.camelCaseString(Ra.name);ub=ub[0].toLowerCase()+ub.slice(1);Ja.ui[ub]=Ra})}},{key:"cleanupAnchors",value:function(){var Ja=this.withAllSubmorphsSelect(function(Mb){return Mb.anchors&&Mb.anchors.filter(function(Ob){return!Ob.id})}),Ra={};Ja=$jscomp.makeIterator(Ja);for(var ub=Ja.next();!ub.done;Ra={$jscomp$loop$prop$m$2300:Ra.$jscomp$loop$prop$m$2300},ub=Ja.next())Ra.$jscomp$loop$prop$m$2300=ub.value,Ra.$jscomp$loop$prop$m$2300.anchors.forEach(function(Mb){return function(Ob){return!Ob.id&&
Mb.$jscomp$loop$prop$m$2300.removeAnchor(Ob)}}(Ra))}},{key:Symbol.for("lively-instance-initialize"),value:function(Ja){xd._get(Object.getPrototypeOf(Mc.prototype),Symbol.for("lively-instance-initialize"),this).call(this,Ja);0<this.submorphs.length&&this.setupConnections()}},{key:"setupConnections",value:function(){for(var Ja=this.ui,Ra={},ub=$jscomp.makeIterator(Object.entries(this.uiSpec)),Mb=ub.next();!Mb.done;Ra={$jscomp$loop$prop$control$2302:Ra.$jscomp$loop$prop$control$2302,$jscomp$loop$prop$prop$2303:Ra.$jscomp$loop$prop$prop$2303},
Mb=ub.next()){var Ob=$jscomp.makeIterator(Mb.value);Mb=Ob.next().value;Ob=$jscomp.makeIterator(Ob.next().value);Ob.next();var kb=Ob.next().value;Ra.$jscomp$loop$prop$prop$2303=Ob.next().value;Ra.$jscomp$loop$prop$control$2302=Ja[Mb];ed.connect(Ra.$jscomp$loop$prop$control$2302,kb,this,"updateTarget",{updater:function(ib){return function(Jb,vc){ib.$jscomp$loop$prop$control$2302._updating=!0;Jb(ib.$jscomp$loop$prop$prop$2303,vc);ib.$jscomp$loop$prop$control$2302._updating=!1}}(Ra),varMapping:{prop:Ra.$jscomp$loop$prop$prop$2303,
control:Ra.$jscomp$loop$prop$control$2302}})}}},{key:"update",value:function(){var Ja=this,Ra=this.target,ub=Ra.borderStyle,Mb=Ra.borderColor,Ob=Ra.borderRadius,kb=Ra.borderWidth;ed.noUpdate(function(){Ja.updateMultiValue("border style selector",ub,"selection");Ja.updateMultiValue("border color picker",Mb,"colorValue");Ja.updateMultiValue("border radius field",Ob,"number");Ja.updateMultiValue("border width field",kb,"number")})}},{key:"updateTarget",value:function(Ja,Ra){this.target[Ja]=Ra;this.update()}},
{key:"updateControl",value:function(Ja,Ra,ub){Ja._updating||ed.obj.equals(Ja[Ra],ub)||(Ja[Ra]=ub)}},{key:"updateMultiValue",value:function(Ja,Ra,ub){var Mb=this.ui,Ob=Mb[this.join(Ja)],kb=Ob.get("multi value indicator"),ib=ed.obj.values(Ra).some(function(Jb){return!ed.obj.isFunction(Jb)&&!ed.obj.equals(Jb,Ra.valueOf())});Ob.visible=Ob.isLayoutable=!ib;if(ib&&kb.visible!=ib)ed.once(kb,"onMouseDown",Ob,ub,{converter:function(){return Ra.valueOf()},varMapping:{value:Ra}});kb.visible=kb.isLayoutable=
ib;this.updateControl(Ob,ub,Ra.valueOf());Ob=$jscomp.makeIterator(["top","left","bottom","right"]);for(kb=Ob.next();!kb.done;kb=Ob.next())kb=kb.value,ib=Mb[this.join(Ja,kb)],this.updateControl(ib,ub,Ra[kb])}},{key:"lower",value:function(Ja){return Ja.charAt(0).toLowerCase()+Ja.slice(1)}},{key:"join",value:function(Ja,Ra){return this.lower(ed.string.camelCaseString(Ja+(Ra?" "+Ra:"")))}},{key:"unwrap",value:function(Ja,Ra,ub){var Mb={};Mb=(Mb[this.lower(ed.string.camelCaseString(Ja))]=[Ja,Ra,ub],Mb);
for(var Ob=$jscomp.makeIterator(["top","left","bottom","right"]),kb=Ob.next();!kb.done;kb=Ob.next()){kb=kb.value;var ib=Ja+" "+kb;Mb[this.lower(ed.string.camelCaseString(ib))]=[ib,Ra,this.join(ub,kb)]}return Mb}},{key:"attachToWorld",value:function(){ed.connect($world,"showHaloFor",this,"focusOn",{garbageCollect:!0})}},{key:"focusOn",value:function(Ja){var Ra=this,ub;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Mb){if(1==Mb.nextAddress)return!Ja||Ra.isAncestorOf(Ja)||Ra.target===Ja||
ed.obj.isArray(Ja)||(Ra.target=Ja),ub=Ra.visible,Ra.visible=!0,Mb.yield(Ra.whenRendered(),2);if(3!=Mb.nextAddress)return Ra.update(),Mb.yield(Ra.whenRendered(),3);Ra.getSubmorphsByStyleClassName("NumberWidget").map(function(Ob){return Ob.relayout()});Ra.visible=ub;Mb.jumpToEnd()})}},{key:"onHoverIn",value:function(Ja){this.watchForTarget=!1}},{key:"onHoverOut",value:function(Ja){this.watchForTarget=!0}}],[{key:"className",get:function(){return"BorderFormatStyler"}},{key:"properties",get:function(){return{uiSpec:{derived:!0,
serialize:!1,get:function(){return this._uiSpec||(this._uiSpec=Object.assign({},this.unwrap("border style selector","selection","borderStyle"),{},this.unwrap("border color picker","colorValue","borderColor"),{},this.unwrap("border radius field","number","borderRadius"),{},this.unwrap("border width field","number","borderWidth")))}},ui:{initialize:function(){this.setupUI()}}}}}],zc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"BorderFormatStyler",version:"0.1.1-16"}}},{start:185,end:5003})}(ed.Morph);Lb=ed.BorderFormatStyler;ed.default=Lb;var $b=lively.FreezerRuntime.recorderFor("MasterComponentControl/index.js");$b.Morph=Da;$b.resource=Cb;$b.arr=bc;$b.obj=Od;$b.string=ge;$b.Path=ic;$b.connect=md;$b.getMastersMenu=id;$b.resolvedMasters=fe;Lb=function(ob){var zc=lively.FreezerRuntime.recorderFor("MasterComponentControl/index.js"),
Mc=zc.hasOwnProperty("MasterComponentControl")&&"function"===typeof zc.MasterComponentControl?zc.MasterComponentControl:zc.MasterComponentControl=function(Ja){Ja&&Ja[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return xd(Mc,ob,[{key:"focusOn",value:function(Ja){this.target=Ja;this.update()}},{key:"onMouseUp",value:function(Ja){var Ra=this,ub,Mb,Ob,kb,ib,Jb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(vc){if(1==vc.nextAddress){"auto master selection"==
Ja.targetMorph.name&&(ub="auto");"hover master selection"==Ja.targetMorph.name&&(ub="hover");"click master selection"==Ja.targetMorph.name&&(ub="click");Ra.refreshButtons();if(!Ra.target)return vc.return();Mb=$jscomp.makeIterator(["auto","hover","click"]);for(Ob=Mb.next();!Ob.done;Ob=Mb.next())kb=Ob.value,Ra.target.master&&Ra.target.master[kb]&&!Ra.get(kb+" master checkbox").checked&&Ra.adjustMasterComponent(kb,null);if(!ub)return vc.jumpTo(0);ib=Ra;Jb=ib.openMenu;return vc.yield(Ra.getMastersMenu(ub),
3)}Jb.call(ib,vc.yieldResult,Ja);vc.jumpToEnd()})}},{key:"getMastersMenu",value:function(Ja){var Ra=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ub){return 1==ub.nextAddress?ub.yield(Promise.all([].concat($jscomp.arrayFromIterable(Object.keys($b.resolvedMasters)),[Ra.world().name]).map(function(Mb){var Ob,kb,ib;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Jb){return 1==Jb.nextAddress?(Ob=Mb,kb=Ra,ib=kb.componentsToMenu,Jb.yield($b.resource("styleguide://"+Mb+"/").dirList(),
2)):Jb.return([Ob,ib.call(kb,Jb.yieldResult,Ja)])})})),2):ub.return(ub.yieldResult)})}},{key:"componentsToMenu",value:function(Ja,Ra,ub,Mb){var Ob=this;ub=void 0===ub?null:ub;Mb=void 0===Mb?1:Mb;ub||(ub=Ja.map(function(ib){return{name:$b.arr.last(ib.name.split("/")),path:ib.name.split("/"),value:ib}}));if(0==ub.length||100<Mb)return[];var kb=this;return $b.arr.flatten(Object.entries($b.arr.groupBy(ub,function(ib){return ib.path[Mb-1]})).map(function(ib){var Jb=$jscomp.makeIterator(ib);ib=Jb.next().value;
Jb=Jb.next().value;var vc=$jscomp.makeIterator($b.arr.partition(Jb,function(sc){return sc.path.length<=Mb}));Jb=vc.next().value;vc=vc.next().value;ib=[ib,Ob.componentsToMenu(null,Ra,vc,Mb+1)];return[].concat($jscomp.arrayFromIterable(Jb.map(function(sc){return[sc.name,function(){kb.adjustMasterComponent(Ra,sc.value)}]})),$jscomp.arrayFromIterable(ib[1].length?[ib]:[]))}),1)}},{key:"getComponentSelectionMenu",value:function(Ja){var Ra=this,ub,Mb,Ob,kb,ib,Jb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(vc){if(1==
vc.nextAddress)return ub=Ra.world().metadata.commit.name,Mb=$b.resource("styleguide://"+ub+"/"),vc.yield(Mb.dirList(),2);if(3!=vc.nextAddress)return Ob=vc.yieldResult,vc.yield($b.resource("styleguide://System/").dirList(),3);kb=vc.yieldResult;ib=Ra.componentsToMenu(Ob,Ja);Jb=Ra.componentsToMenu(kb,Ja);return vc.return([].concat($jscomp.arrayFromIterable(0<ib.length?[].concat($jscomp.arrayFromIterable(ib),[{isDivider:!0}]):[]),$jscomp.arrayFromIterable(Jb)))})}},{key:"adjustMasterComponent",value:function(Ja,
Ra){if(this.target.master)this.target.master[Ja]=Ra;else if(Ra){var ub={};this.target.master=(ub[Ja]=Ra,ub)}Ja=this.target.master;Ra=Ja.hover;ub=Ja.click;Ja.auto||Ra||ub||(this.target.master=null);this.update();this.target.withAllSubmorphsDo(function(Mb){return delete Mb._parametrizedProps});this.target.requestMasterStyling()}},{key:"componentsToMenu",value:function(Ja,Ra,ub,Mb){var Ob=this;ub=void 0===ub?null:ub;Mb=void 0===Mb?1:Mb;ub||(ub=Ja.map(function(ib){return{name:$b.arr.last(ib.name.split("/")),
path:ib.name.split("/"),value:ib}}));if(0==ub.length||100<Mb)return[];var kb=this;return $b.arr.flatten(Object.entries($b.arr.groupBy(ub,function(ib){return ib.path[Mb-1]})).map(function(ib){var Jb=$jscomp.makeIterator(ib);ib=Jb.next().value;Jb=Jb.next().value;var vc=$jscomp.makeIterator($b.arr.partition(Jb,function(sc){return sc.path.length<=Mb}));Jb=vc.next().value;vc=vc.next().value;ib=[ib,Ob.componentsToMenu(null,Ra,vc,Mb+1)];return[].concat($jscomp.arrayFromIterable(Jb.map(function(sc){return[sc.name,
function(){kb.adjustMasterComponent(Ra,sc.value)}]})),$jscomp.arrayFromIterable(ib[1].length?[ib]:[]))}),1)}},{key:"update",value:function(){if(this.target){for(var Ja=$jscomp.makeIterator(["auto","hover","click"]),Ra=Ja.next();!Ra.done;Ra=Ja.next()){Ra=Ra.value;var ub=this.getSubmorphNamed(Ra+" master selection"),Mb=this.getSubmorphNamed(Ra+" master checkbox");$b.Path(["master",Ra]).get(this.target)?Mb.checked=!0:Mb.checked=!1;ub.label=$b.string.truncateLeft($b.Path(["master",Ra,"name"]).get(this.target)||
"select master",15,"...")}this.refreshButtons()}}},{key:"refreshButtons",value:function(){for(var Ja=$jscomp.makeIterator(["auto","hover","click"]),Ra=Ja.next();!Ra.done;Ra=Ja.next()){Ra=Ra.value;var ub=this.getSubmorphNamed(Ra+" master selection"),Mb=this.getSubmorphNamed(Ra+" master checkbox");ub=ub.deactivated=!Mb.checked;this.getSubmorphNamed(Ra+" master selection").opacity=ub?.5:1}Ja=this.getSubmorphNamed("overridden props list");Ja.items=this.getOverriddenProps();this.getSubmorphNamed("clear overridden prop button").deactivated=
!Ja.selection}},{key:"getMasterForTarget",value:function(){if(this.target.isMorph)return[this.target].concat($jscomp.arrayFromIterable(this.target.ownerChain())).map(function(Ja){return Ja.master}).find(Boolean)}},{key:"clearSelectedProperty",value:function(){var Ja=this.getSubmorphNamed("overridden props list").selection;this.getMasterForTarget().clearOverriddenPropertiesFor(this.target,[Ja]);this.refreshButtons()}},{key:"getOverriddenProps",value:function(){var Ja=this.getMasterForTarget();return Ja&&
Ja._overriddenProps?(Ja=Ja._overriddenProps.get(this.target))?Object.keys(Ja):[]:[]}}],[{key:"className",get:function(){return"MasterComponentControl"}}],zc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"MasterComponentControl",version:"0.1.1-108"}}},{start:315,end:6096})}($b.Morph);Lb=$b.MasterComponentControl;$b.default=Lb}}});
