System.register(["./__root_module__-3c9a1ccb.js","./index-f326120b.js","./color-picker-075382cf.js"],function(){var sa,lb,Eb,Wb,Qb,Bd,Fc,wd,Kc,Gc,Yc,jd,Dd,od,Zc,Ra,tb,dc,bc,Xc,Oc,$b,zc,Fb,Cb,pc,Pc,wb;return{setters:[function(db){sa=db.ar;lb=db.s;Eb=db.a5;Wb=db.aT;Qb=db.a4;Bd=db.a7;Fc=db.a8;wd=db.az;Kc=db.ai;Gc=db.al;Yc=db.ag;jd=db.am;Dd=db.a1;od=db.$;Zc=db.C;Ra=db.ao;tb=db.as;dc=db.bS;bc=db.bq;Xc=db.aa;Oc=db.aq;$b=db.bf;zc=db.bp;Fb=db.bn;Cb=db.bT},function(db){pc=db.N;Pc=db.I},function(db){wb=
db.a}],execute:function(){var db=lively.FreezerRuntime.recorderFor("lively.ide/text/ui.js");db.fun=sa;db.string=lb;db.obj=Eb;db.properties=Wb;db.arr=Qb;db.Text=Bd;db.config=Fc;db.HorizontalLayout=wd;db.VerticalLayout=Kc;db.morph=Gc;db.Morph=Yc;db.Icon=jd;db.pt=Dd;db.Rectangle=od;db.Color=Zc;db.connect=Ra;db.once=tb;db.noUpdate=dc;db.ColorPicker=wb;db.DropDownList=bc;db.loadObjectFromPartsbinFolder=Xc;db.cachedControls=new WeakMap;var Ta=function(fb){var pb=lively.FreezerRuntime.recorderFor("lively.ide/text/ui.js"),
xb=pb.hasOwnProperty("RichTextControl")&&"function"===typeof pb.RichTextControl?pb.RichTextControl:pb.RichTextControl=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Oc(xb,fb,[{key:"toggleButton",value:function(Wa,Xa){var Ab=this.ui.fontSelection;Xa?(Wa.fontColor=db.Color.white,Wa.fill=this.toggleColor):(Wa.fontColor=Ab.fontColor,Wa.fill=Ab.fill)}},{key:"reset",value:function(){var Wa=this.ui.fontSelection;Wa.items=
db.RichTextControl.basicFontItems();Wa.selection=Wa.items[0].value;db.connect(this.target,"selectionChange",this,"update")}},{key:"alignAtTarget",value:function(Wa){Wa=void 0===Wa?!!this.world():Wa;var Xa=this.target,Ab=Xa.world()||$world,kc=this.globalBounds();Xa=(Xa.selection.isEmpty()?Xa.globalBounds():Xa.getGlobalTransform().transformRectToRect(Xa.selectionBounds().translatedBy(Xa.scroll.negated()))).bottomCenter().subPt(kc.topCenter());Ab=Ab.visibleBounds().translateForInclusion(kc.translatedBy(Xa)).topLeft().subPt(kc.topLeft());
Ab=this.position.addPt(Ab);Wa?this.animate({duration:300,position:Ab}):this.position=Ab}},{key:"removeFocus",value:function(){this.autoRemove&&this.target&&(this.remove(),this.target=null)}},{key:"focusOn",value:function(Wa,Xa){Xa=void 0===Xa?!0:Xa;var Ab=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(kc){if(1==kc.nextAddress)return Ab.target=Wa,Ab.update(),kc.yield(Ab.whenRendered(),2);Ab.ui.fontSizeField.relayout();Xa&&Ab.alignAtTarget();kc.jumpToEnd()})}},{key:"update",value:function(){var Wa=
this,Xa=this.target,Ab=this.updateSpec,kc=Xa.selection;kc=kc?kc.isEmpty()?Xa.textAttributeAt(kc.start):Xa.getStyleInRange(kc):{};var Ub=this.managedProps,qc=db.obj.select(Xa,Ub);Xa=$jscomp.makeIterator(Object.entries(db.obj.select(kc||{},Ub)));for(kc=Xa.next();!kc.done;kc=Xa.next())Ub=$jscomp.makeIterator(kc.value),kc=Ub.next().value,Ub=Ub.next().value,"undefined"!==typeof Ub&&(qc[kc]=Ub);db.noUpdate(function(){for(var wc=$jscomp.makeIterator(Object.entries(Wa.ui)),I=wc.next();!I.done;I=wc.next()){var T=
$jscomp.makeIterator(I.value);I=T.next().value;T=T.next().value;if(Ab[I])Ab[I](qc,T)}})}},{key:"relayout",value:function(){}},{key:"changeAttributeInSelectionOrMorph",value:function(Wa,Xa){var Ab=this.target,kc=Ab.selection;Ab.isLabel||kc.isEmpty()?Ab[Wa]="function"===typeof Xa?Xa(Ab[Wa]):Xa:(Ab.undoManager.group(),Ab.changeStyleProperty(Wa,function(Ub){return"function"===typeof Xa?Xa(Ub):Xa}),Ab.undoManager.group())}},{key:"changeFont",value:function(Wa){var Xa=this,Ab;return $jscomp.asyncExecutePromiseGeneratorProgram(function(kc){if(1==
kc.nextAddress)return Xa._last=Wa,(Ab="custom..."===Wa)?kc.yield($world.prompt("Enter font family name",{requester:Xa.target,historyId:"lively.morphic-rich-text-font-names",useLastInput:!0}),3):kc.jumpTo(2);if(2!=kc.nextAddress&&(Wa=kc.yieldResult,!Wa))return kc.return();Xa.changeAttributeInSelectionOrMorph("fontFamily",Wa);kc.jumpToEnd()})}},{key:"setPadding",value:function(Wa){this.target.padding=db.Rectangle.inset(Wa)}},{key:"setPaddingTop",value:function(Wa){var Xa=this.target.padding;this.target.padding=
db.Rectangle.inset(Xa.left(),Wa,Xa.right(),Xa.bottom())}},{key:"setPaddingLeft",value:function(Wa){var Xa=this.target.padding;this.target.padding=db.Rectangle.inset(Wa,Xa.top(),Xa.right(),Xa.bottom())}},{key:"setPaddingRight",value:function(Wa){var Xa=this.target.padding;this.target.padding=db.Rectangle.inset(Xa.left(),Xa.top(),Wa,Xa.bottom())}},{key:"setPaddingBottom",value:function(Wa){var Xa=this.target.padding;this.target.padding=db.Rectangle.inset(Xa.left(),Xa.top(),Xa.right(),Wa)}},{key:"setLineWrapping",
value:function(Wa){this.target.lineWrapping=Wa}},{key:"changeFontWeight",value:function(Wa){this.changeAttributeInSelectionOrMorph("fontWeight",Wa)}},{key:"changeTextAlign",value:function(Wa){this.changeAttributeInSelectionOrMorph("textAlign",Wa)}},{key:"changeFontColor",value:function(Wa){this.changeAttributeInSelectionOrMorph("fontColor",Wa)}},{key:"changeFontSize",value:function(Wa){this.changeAttributeInSelectionOrMorph("fontSize",Wa)}},{key:"changeFixedWidth",value:function(Wa){this.target.fixedWidth=
Wa}},{key:"changeFixedHeight",value:function(Wa){this.target.fixedHeight=Wa}},{key:"changeLink",value:function(){var Wa=this,Xa,Ab,kc,Ub,qc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(wc){if(1==wc.nextAddress)return Xa=Wa.target,Ab=Xa.selection,kc=Xa.getStyleInRange(Ab),Ub=kc.link,wc.yield(Wa.world().prompt("Set link",{input:Ub||"https://"}),2);qc=wc.yieldResult;Xa.undoManager.group();Xa.setStyleInRange({link:qc||void 0},Ab);Xa.undoManager.group();Wa.autoRemove&&Wa.remove();wc.jumpToEnd()})}},
{key:"toggleUnderline",value:function(){this.changeAttributeInSelectionOrMorph("textDecoration",function(Wa){return"underline"===Wa?"none":"underline"})}},{key:"toggleItalic",value:function(){this.changeAttributeInSelectionOrMorph("fontStyle",function(Wa){return"italic"===Wa?"normal":"italic"})}},{key:"toggleBold",value:function(){this.changeAttributeInSelectionOrMorph("fontWeight",function(Wa){return"bold"===Wa||"700"===Wa?"normal":"bold"})}},{key:"copyStyle",value:function(){var Wa=this,Xa=this.target,
Ab=this.ui.applyStyleButton;Xa=Xa.selection.isEmpty()?Xa.defaultTextStyle:Xa.getStyleInRange(Xa.selection);var kc=JSON.stringify(Xa,null,2);this.constructor.copiedStyle=Xa;Ab.tooltip="paste style\n"+kc;this.env.eventDispatcher.doCopyWithMimeTypes([{type:"text/plain",data:kc},{type:"application/morphic-text-style",styleString:kc}]).then(function(){return Wa.setStatusMessage("Copied style\n"+kc)}).catch(function(Ub){return Wa.showError(Ub)})}},{key:"pasteStyle",value:function(){var Wa=this,Xa=this.target,
Ab=this.constructor.copiedStyle;Xa.selection.isEmpty()?Object.assign(Xa,Ab):Xa.selections.forEach(function(kc){return Xa.addTextAttribute(Wa.constructor.copiedStyle,kc)});this.update()}},{key:"clearStyle",value:function(){var Wa=this.target;Wa.selections.forEach(function(Xa){return Wa.resetStyleInRange(Xa)});this.update()}},{key:"configureRichTextOptions",value:function(){this.getSubmorphNamed("config panel")&&this.getSubmorphNamed("config panel").remove();var Wa=this.defaultSpec,Xa=this.uiSpec;Wa=
this.addMorph({name:"config panel",layout:new db.VerticalLayout({spacing:5}),epiMorph:!0,submorphs:[].concat($jscomp.arrayFromIterable(Object.keys(Wa).map(function(Ab){var kc=Xa.rows.some(function(Ub){return Ub.some(function(qc){return qc===Ab})});return{type:"labeledcheckbox",label:Ab,name:Ab,checked:kc}})),[{layout:new db.HorizontalLayout({spacing:3}),submorphs:[{type:"button",name:"OK button",label:"OK"},{type:"button",name:"cancel button",label:"Cancel"}]}])});Wa.center=this.innerBounds().center();
db.connect(Wa.getSubmorphNamed("OK button"),"fire",this,"configureAccepted");db.connect(Wa.getSubmorphNamed("cancel button"),"fire",this,"configureCanceled")}},{key:"configureAccepted",value:function(){var Wa=this.getSubmorphNamed("config panel");Wa&&(Wa.remove(),Wa.submorphs.filter(function(Xa){return"LabeledCheckBox"===Xa.constructor.name}))}},{key:"configureCanceled",value:function(){var Wa=this.getSubmorphNamed("config panel");Wa&&Wa.remove()}},{key:"close",value:function(){var Wa=this;this.target&&
this.target.attributeConnections&&this.target.attributeConnections.forEach(function(Xa){return Xa.targetObj===Wa&&Xa.disconnect()});this.remove()}},{key:"alwaysTargetFocusedMorph",value:function(){this.startStepping(1500,"updateTarget")}},{key:"updateTarget",value:function(){var Wa=this.world();Wa&&(Wa=Wa.focusedMorph)&&(Wa.isLabel||Wa.isText)&&!this.isAncestorOf(Wa)&&this.target!==Wa&&this.focusOn(Wa,!1)}},{key:"onMouseUp",value:function(Wa){var Xa=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ab){if(1==
Ab.nextAddress)return Ab.yield(Xa.whenRendered(),2);Xa.update();Ab.jumpToEnd()})}},{key:"attachToWorld",value:function(){db.connect($world,"onMouseDown",this,"updateTarget",{garbageCollect:!0})}}],[{key:"className",get:function(){return"RichTextControl"}},{key:"properties",get:function(){return{autoRemove:{defaultValue:!1},target:{},toggleColor:{},managedProps:{readOnly:!0,get:function(){return"fontFamily fontWeight fontSize fontStyle isText fontColor textAlign link textDecoration fixedWidth fixedHeight lineWrapping padding".split(" ")}},
updateSpec:{get:function(){var Wa=this;return Object.assign({fontSelection:function(Xa,Ab){var kc=Xa.fontFamily;(Xa=kc&&Ab.items.find(function(Ub){return Ub.value.toLowerCase()===kc.toLowerCase()}))?Ab.selection=Xa.value:kc&&(Ab.items=Ab.items.concat({isListItem:!0,label:[kc,{fontFamily:kc}],value:kc}),Ab.selection=db.arr.last(Ab.items));Ab.fit();Ab.width=Math.max(Ab.width,170)},fontWeightSelection:function(Xa,Ab){Ab.selection="normal"==Xa.fontWeight?"Medium":Xa.fontWeight?db.string.capitalize(Xa.fontWeight):
"Medium"},boldButton:function(Xa,Ab){Wa.toggleButton(Ab,"bold"===Xa.fontWeight)},italicButton:function(Xa,Ab){Wa.toggleButton(Ab,"italic"===Xa.fontStyle)},underlineButton:function(Xa,Ab){Wa.toggleButton(Ab,"underline"===Xa.textDecoration)},linkButton:function(Xa,Ab){Wa.toggleButton(Ab,!!Xa.link)},colorPicker:function(Xa,Ab){Ab.colorValue=Xa.fontColor},fontSizeField:function(Xa,Ab){Ab.number=Xa.fontSize},fixedWidthControl:function(Xa,Ab){Xa.isText?Ab.enable():Ab.disable();Ab.checked=Xa.fixedWidth},
fixedHeightControl:function(Xa,Ab){Xa.isText?Ab.enable():Ab.disable();Ab.checked=Xa.fixedHeight},lineWrappingControl:function(Xa,Ab){var kc=$jscomp.makeIterator(Ab.submorphs);Ab=kc.next().value;kc=kc.next().value;Ab.checked=!!Xa.lineWrapping;kc.deactivated=!Xa.lineWrapping;kc.deactivated?kc.opacity=.5:(kc.opacity=1,kc.selection=Xa.lineWrapping)},paddingControl:function(Xa,Ab){var kc=Xa.padding,Ub=kc.left();Xa=kc.top();var qc=kc.right();kc=kc.bottom();var wc=!db.arr.every([Ub,Xa,qc,kc],function(I){return I==
Ub});Ab.get("multi value indicator").visible=wc;db.connect(Ab.get("multi value indicator"),"onMouseDown",Ab.get("padding field"),"number",{converter:"() => left",varMapping:{left:Ub}});Ab.get("padding field").number=Ub;Ab.get("padding field").visible=!wc;Ab.get("padding field top").number=Xa;Ab.get("padding field left").number=Ub;Ab.get("padding field right").number=qc;Ab.get("padding field bottom").number=kc}},["left","center","right","block"].reduce(function(Xa,Ab){Xa[Ab+"Align"]=function(kc,Ub){Wa.toggleButton(Ub,
kc.textAlign==Ab)};return Xa},{}))}},ui:{get:function(){var Wa=this,Xa={fontSelection:"font selection",fontWeightSelection:"font weight selection",boldButton:"bold button",italicButton:"italic button",underlineButton:"underline button",linkButton:"link button",leftAlign:"left align",centerAlign:"center align",rightAlign:"right align",blockAlign:"block align",fontSizeField:"font size field",colorPicker:"color picker",copyStyleButton:"copy style",applyStyleButton:"apply style",removeStyleButton:"remove style",
fixedHeightControl:"fixed height control",fixedWidthControl:"fixed width control",lineWrappingControl:"line wrapping control",paddingControl:"padding control"};return db.obj.extract(Xa,db.obj.keys(Xa),function(Ab,kc){return Wa.getSubmorphNamed(kc)})}}}}},{key:"openDebouncedFor",value:function(Wa){var Xa=Wa.selection;if(Xa.isEmpty()){var Ab=db.cachedControls.get(Wa);Ab&&(Ab.update(),Ab.alignAtTarget(),Ab.world()||Wa.world().addMorph(Ab))}else db.fun.debounceNamed(Wa.id+"openRichTextControl",600,function(){var kc=
db.cachedControls.get(Wa);Xa.isEmpty()?kc&&kc.removeFocus():(kc&&kc.world()||(kc=new db.RichTextControl,db.cachedControls.set(Wa,kc)),Wa.world().addMorph(kc),kc.focusOn(Wa,!0),kc.alwaysTargetFocusedMorph())})()}},{key:"openFor",value:function(Wa){var Xa=db.cachedControls.get(Wa);Xa?Xa.update():(Xa=new db.RichTextControl,db.cachedControls.set(Wa,Xa),Xa.focusOn(Wa,!0),Xa.alwaysTargetFocusedMorph());Xa.alignAtTarget();Xa.world()||Wa.world().addMorph(Xa);return Xa}}],pb,{pathInPackage:function(){return"text/ui.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"lively.ide",version:"0.1.0"}}},{start:624,end:16332})}(db.Morph);db.RichTextControl=Ta;db.RichTextControl=Ta;db.RichTextControl=Ta;Ta=lively.FreezerRuntime.recorderFor("ProtoSearchField/index.js");Ta.SearchField=$b;var cb=function(fb){var pb=lively.FreezerRuntime.recorderFor("ProtoSearchField/index.js"),xb=pb.hasOwnProperty("ProtoSearchField")&&
"function"===typeof pb.ProtoSearchField?pb.ProtoSearchField:pb.ProtoSearchField=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Oc(xb,fb,void 0,[{key:"className",get:function(){return"ProtoSearchField"}},{key:"properties",get:function(){return{master:{initialize:function(){}}}}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"ProtoSearchField",version:"0.1.1-0"}}},{start:76,end:221})}(Ta.SearchField);cb=Ta.ProtoSearchField;Ta.default=cb;var ma=lively.FreezerRuntime.recorderFor("ProtoTree/index.js");ma.Tree=zc;ma.TreeData=Fb;Ta=function(fb){var pb=lively.FreezerRuntime.recorderFor("ProtoTree/index.js"),xb=pb.hasOwnProperty("TestTreeData")&&"function"===typeof pb.TestTreeData?pb.TestTreeData:pb.TestTreeData=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Oc(xb,fb,[{key:"display",value:function(Wa){return Wa.name}},{key:"isCollapsed",value:function(Wa){return Wa.isCollapsed}},{key:"collapse",value:function(Wa,Xa){Wa.isCollapsed=Xa}},{key:"getChildren",value:function(Wa){return Wa.isLeaf?null:Wa.isCollapsed?[]:Wa.children}},{key:"isLeaf",value:function(Wa){return Wa.isLeaf}}],[{key:"className",get:function(){return"TestTreeData"}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoTree",version:"0.1.1-2"}}},{start:113,end:417})}(ma.TreeData);ma.TestTreeData=Ta;ma.TestTreeData=Ta;ma.TestTreeData=Ta;Ta=function(fb){var pb=lively.FreezerRuntime.recorderFor("ProtoTree/index.js"),xb=pb.hasOwnProperty("ProtoTree")&&"function"===typeof pb.ProtoTree?pb.ProtoTree:pb.ProtoTree=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Oc(xb,fb,void 0,[{key:"className",get:function(){return"ProtoTree"}},{key:"properties",get:function(){return{treeData:{initialize:function(){this.treeData=new ma.TestTreeData({name:"root",isCollapsed:!1,isLeaf:!1,children:[{name:"child 1",isLeaf:!0},{name:"child 2",isLeaf:!1,isCollapsed:!0,children:[{name:"child 2 - 1",isLeaf:!0}]},{name:"child 3",isLeaf:!1,isCollapsed:!1,children:[{name:"child 3 - 1",isLeaf:!0},{name:"child 3 - 2",isLeaf:!0}]},{name:"child 4",isLeaf:!0}]})}},master:{initialize:function(){}}}}}],
pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoTree",version:"0.1.1-2"}}},{start:434,end:1297})}(ma.Tree);Ta=ma.ProtoTree;ma.default=Ta;Ta=lively.FreezerRuntime.recorderFor("ProtoNumberWidget/index.js");Ta.NumberWidget=pc;cb=function(fb){var pb=lively.FreezerRuntime.recorderFor("ProtoNumberWidget/index.js"),xb=pb.hasOwnProperty("ProtoNumberWidget")&&
"function"===typeof pb.ProtoNumberWidget?pb.ProtoNumberWidget:pb.ProtoNumberWidget=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Oc(xb,fb,void 0,[{key:"className",get:function(){return"ProtoNumberWidget"}},{key:"properties",get:function(){return{master:{initialize:function(){}}}}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"ProtoNumberWidget",version:"0.1.1-0"}}},{start:76,end:224})}(Ta.NumberWidget);cb=Ta.ProtoNumberWidget;Ta.default=cb;Ta=lively.FreezerRuntime.recorderFor("FrameResizer/index.js");Ta.Morph=Yc;cb=function(fb){var pb=lively.FreezerRuntime.recorderFor("FrameResizer/index.js"),xb=pb.hasOwnProperty("FrameResizer")&&"function"===typeof pb.FrameResizer?pb.FrameResizer:pb.FrameResizer=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Oc(xb,fb,[{key:"onDrag",value:function(Wa){var Xa=this.owner.left;Wa=Wa.positionIn(this).x;Wa*="left"==this.direction?-1:1;this.owner.width+=Wa;350>this.owner.width&&(Wa+=350-this.owner.width,this.owner.width=350);this.owner.left="left"==this.direction?Xa-Wa:Xa}}],[{key:"className",get:function(){return"FrameResizer"}},{key:"properties",get:function(){return{direction:{type:"Enum",values:["left","right"]}}}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"FrameResizer",version:"0.1.1-24"}}},{start:56,end:840})}(Ta.Morph);cb=Ta.FrameResizer;Ta.default=cb;var La=lively.FreezerRuntime.recorderFor("ShapeLayoutControl/index.js");La.Morph=Yc;La.morph=Gc;La.layouts=Cb;La.string=lb;La.connect=Ra;La.noUpdate=dc;La.InteractiveMorphSelector=Pc;La.Color=Zc;La.pt=Dd;Ta=function(fb){var pb=lively.FreezerRuntime.recorderFor("ShapeLayoutControl/index.js"),xb=pb.hasOwnProperty("ShapeLayoutControl")&&
"function"===typeof pb.ShapeLayoutControl?pb.ShapeLayoutControl:pb.ShapeLayoutControl=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Oc(xb,fb,[{key:"focusOn",value:function(Wa){this.target=Wa;this.update(!1)}},{key:"setupConnections",value:function(){var Wa=this.ui;La.connect(Wa.submorphSettingsControl,"fire",this,"chooseSubmorphToChangeLayoutSettings");La.connect(Wa.dragmeControl,"onDragStart",this,"onSubmorphSettingsDragStart");
La.connect(Wa.xAxisPolicyControl,"selection",this,"updateSubmorphProportionalLayoutSettings",{converter:'policy => ({\n        policy,\n        axis: "x",\n        submorph: self.selectedSubmorph,\n      })',varMapping:{self:this}});La.connect(Wa.yAxisPolicyControl,"selection",this,"updateSubmorphProportionalLayoutSettings",{converter:'policy => ({\n        policy,\n        axis: "y",\n        submorph: self.selectedSubmorph,\n      })',varMapping:{self:this}});for(var Xa={},Ab=$jscomp.makeIterator(this.managedProps),
kc=Ab.next();!kc.done;Xa={$jscomp$loop$prop$prop$2285:Xa.$jscomp$loop$prop$prop$2285},kc=Ab.next()){var Ub=$jscomp.makeIterator(kc.value),qc=Ub.next().value;kc=Ub.next().value;Ub.next().value||(Xa.$jscomp$loop$prop$prop$2285=this.join(qc),Ub=Wa[this.join(qc,"control")],La.connect(Ub,kc,this,"updateLayout",{updater:function(wc){return function(I,T){I(wc.$jscomp$loop$prop$prop$2285,T)}}(Xa),varMapping:{prop:Xa.$jscomp$loop$prop$prop$2285}}))}}},{key:"lower",value:function(Wa){return Wa.charAt(0).toLowerCase()+
Wa.slice(1)}},{key:"join",value:function(Wa,Xa){return this.lower(La.string.camelCaseString(Wa+(Xa?" "+Xa:"")))}},{key:"updateLayoutOfTarget",value:function(Wa){Wa=La.layouts[La.string.camelCaseString(Wa)];this.target.layout=Wa?new Wa({autoResize:!1}):null;this.update()}},{key:"updateLayout",value:function(Wa,Xa){this.target.layout[Wa]=Xa}},{key:"update",value:function(Wa){var Xa=this;this.target&&La.noUpdate(function(){for(var Ab=Xa.ui,kc=Xa.target.layout||{name:function(){return"No"}},Ub=$jscomp.makeIterator(Xa.managedProps),
qc=Ub.next();!qc.done;qc=Ub.next()){var wc=$jscomp.makeIterator(qc.value);qc=wc.next().value;var I=wc.next().value;wc.next();wc=Ab[Xa.join(qc,"control")];var T=Ab[Xa.join(qc,"label")];if(I)if("type"===qc)wc.selection=kc.name()+" Layout";else{var ta=kc[Xa.join(qc)],Ca="undefined"!==typeof ta;if(Ca){switch(qc){case "align":wc.items=kc.possibleAlignValues;break;case "direction":wc.items=kc.possibleDirectionValues;break;case "axis":wc.items=kc.possibleAxisValues}wc[I]=ta}T.isLayoutable=T.visible=Ca}}Xa.showGridLayoutControl("Grid"===
kc.name());Xa.showProportionalControl("Proportional"===kc.name())})}},{key:"updateSubmorphProportionalLayoutSettings",value:function(Wa){var Xa={};this.target.layout.changeSettingsFor(Wa.submorph,(Xa[Wa.axis]=Wa.policy,Xa),!0)}},{key:"onSubmorphSettingsDragStart",value:function(Wa){var Xa=this;Wa.stop();var Ab=this.target.layout,kc=Ab.settingsFor(this.selectedSubmorph),Ub=[],qc;for(qc in kc)Ub=[].concat($jscomp.arrayFromIterable(Ub),[qc+": ",{fontWeight:"bold"},kc[qc]+" ",{}]);var wc=La.morph({type:"label",
fontColor:La.Color.white,value:Ub,fill:La.Color.black.withA(.7),padding:5,borderRadius:10,isLayoutable:!1});wc.wantsToBeDroppedOn=function(I){return Ab.layoutableSubmorphs.includes(I)};wc.onBeingDroppedOn=function(I,T){wc.remove();if(I=Ab.layoutableSubmorphs.includes(T)?T:Wa.world.morphsContainingPoint(Wa.hand.position).find(function(ta){return Ab.layoutableSubmorphs.includes(ta)}))Xa.updateSubmorphProportionalLayoutSettings({policy:kc.x,axis:"x",submorph:I}),Xa.updateSubmorphProportionalLayoutSettings({policy:kc.y,
axis:"y",submorph:I}),I.show(),$world.setStatusMessage("layout settings applied")};Wa.hand.grab(wc);wc.moveBy(La.pt(10,10))}},{key:"chooseSubmorphToChangeLayoutSettings",value:function(){var Wa=this,Xa,Ab,kc,Ub,qc,wc,I,T,ta;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ca){switch(Ca.nextAddress){case 1:return Xa=Wa.target.layout.layoutableSubmorphs,Wa.manageFocus=!0,Wa.env.eventDispatcher.isKeyPressed("Shift")?(kc=Xa.map(function(Mb){return{isListItem:!0,string:String(Mb),value:Mb}}),
Ca.yield($world.listPrompt("Select morph",kc,{onSelection:function(Mb){return Mb.show()}}),5)):Ca.yield(La.InteractiveMorphSelector.selectMorph(Wa.world(),Wa,function(Mb){return Xa.includes(Mb)}),4);case 4:Ab=Ca.yieldResult;Ca.jumpTo(3);break;case 5:Ub=Ca.yieldResult,qc=$jscomp.makeIterator(Ub.selected),Ab=qc.next().value;case 3:Wa.manageFocus=!1;Wa.selectedSubmorph=Ab;if(!Ab)return Ca.return();wc=Wa.ui;I=wc.xAxisPolicyControl;T=wc.yAxisPolicyControl;ta=Wa.target.layout.settingsFor(Ab);La.noUpdate(function(){I.selection=
ta.x;T.selection=ta.y});Ca.jumpToEnd()}})}},{key:"showProportionalControl",value:function(Wa){var Xa=this.ui;[Xa.submorphSettingsControl,Xa.dragmeControl,Xa.xAxisPolicyControl,Xa.xAxisPolicyLabel,Xa.yAxisPolicyControl,Xa.yAxisPolicyLabel].forEach(function(Ab){Ab.isLayoutable=Wa;Ab.visible=Wa})}},{key:"showGridLayoutHalo",value:function(){$world.showLayoutHaloFor(this.target)}},{key:"showGridLayoutControl",value:function(Wa){var Xa=this.ui.configureGridLayoutControl;Xa.visible=Xa.isLayoutable=Wa}}],
[{key:"className",get:function(){return"ShapeLayoutControl"}},{key:"properties",get:function(){return{managedProps:{get:function(){return[["type","selection",!0],["align","selection"],["direction","selection"],["axis","selection"],["spacing","number"],["auto resize","checked"],["resize submorphs","checked"],["x axis policy","selection",!0],["y axis policy","selection",!0],["react to submorph animations","checked"],["submorph settings",!1,!0],["order by index","checked"],["dragme",!1,!0],["configure grid layout",
!1,!0]]}},ui:{readOnly:!0,get:function(){for(var Wa={labelContainer:this.getSubmorphNamed("label container"),controlContainer:this.getSubmorphNamed("control container")},Xa=$jscomp.makeIterator(this.managedProps),Ab=Xa.next();!Ab.done;Ab=Xa.next()){var kc=$jscomp.makeIterator(Ab.value).next().value;Ab=kc+" label";kc+=" control";Wa[this.join(Ab)]=this.getSubmorphNamed(Ab);Wa[this.join(kc)]=this.getSubmorphNamed(kc)}return Wa}}}}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShapeLayoutControl",version:"0.1.1-166"}}},{start:345,end:7771})}(La.Morph);Ta=La.ShapeLayoutControl;La.default=Ta}}});