System.register(["./__root_module__-11543d52.js","./index-82fd0049.js","./color-picker-cc396a95.js"],function(){var sa,lb,Eb,Vb,Wb,qd,Ec,vd,Ic,Jc,Zc,$c,Fd,md,Vc,Ra,tb,dc,bc,Yc,Oc,$b,zc,Fb,Bb,pc,Pc,xb;return{setters:[function(db){sa=db.ar;lb=db.s;Eb=db.a5;Vb=db.aT;Wb=db.a4;qd=db.a7;Ec=db.a8;vd=db.az;Ic=db.ai;Jc=db.al;Zc=db.ag;$c=db.am;Fd=db.a1;md=db.$;Vc=db.C;Ra=db.ao;tb=db.as;dc=db.bS;bc=db.bq;Yc=db.aa;Oc=db.aq;$b=db.bf;zc=db.bp;Fb=db.bn;Bb=db.bT},function(db){pc=db.N;Pc=db.I},function(db){xb=
db.a}],execute:function(){var db=lively.FreezerRuntime.recorderFor("lively.ide/text/ui.js");db.fun=sa;db.string=lb;db.obj=Eb;db.properties=Vb;db.arr=Wb;db.Text=qd;db.config=Ec;db.HorizontalLayout=vd;db.VerticalLayout=Ic;db.morph=Jc;db.Morph=Zc;db.Icon=$c;db.pt=Fd;db.Rectangle=md;db.Color=Vc;db.connect=Ra;db.once=tb;db.noUpdate=dc;db.ColorPicker=xb;db.DropDownList=bc;db.loadObjectFromPartsbinFolder=Yc;db.cachedControls=new WeakMap;var Ta=function(fb){var pb=lively.FreezerRuntime.recorderFor("lively.ide/text/ui.js"),
Cb=pb.hasOwnProperty("RichTextControl")&&"function"===typeof pb.RichTextControl?pb.RichTextControl:pb.RichTextControl=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Oc(Cb,fb,[{key:"toggleButton",value:function(Wa,Xa){var zb=this.ui.fontSelection;Xa?(Wa.fontColor=db.Color.white,Wa.fill=this.toggleColor):(Wa.fontColor=zb.fontColor,Wa.fill=zb.fill)}},{key:"reset",value:function(){var Wa=this.ui.fontSelection;Wa.items=
db.RichTextControl.basicFontItems();Wa.selection=Wa.items[0].value;db.connect(this.target,"selectionChange",this,"update")}},{key:"alignAtTarget",value:function(Wa){Wa=void 0===Wa?!!this.world():Wa;var Xa=this.target,zb=Xa.world()||$world,kc=this.globalBounds();Xa=(Xa.selection.isEmpty()?Xa.globalBounds():Xa.getGlobalTransform().transformRectToRect(Xa.selectionBounds().translatedBy(Xa.scroll.negated()))).bottomCenter().subPt(kc.topCenter());zb=zb.visibleBounds().translateForInclusion(kc.translatedBy(Xa)).topLeft().subPt(kc.topLeft());
zb=this.position.addPt(zb);Wa?this.animate({duration:300,position:zb}):this.position=zb}},{key:"removeFocus",value:function(){this.autoRemove&&this.target&&(this.remove(),this.target=null)}},{key:"focusOn",value:function(Wa,Xa){Xa=void 0===Xa?!0:Xa;var zb=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(kc){if(1==kc.nextAddress)return zb.target=Wa,zb.update(),kc.yield(zb.whenRendered(),2);zb.ui.fontSizeField.relayout();Xa&&zb.alignAtTarget();kc.jumpToEnd()})}},{key:"update",value:function(){var Wa=
this,Xa=this.target,zb=this.updateSpec,kc=Xa.selection;kc=kc?kc.isEmpty()?Xa.textAttributeAt(kc.start):Xa.getStyleInRange(kc):{};var Tb=this.managedProps,qc=db.obj.select(Xa,Tb);Xa=$jscomp.makeIterator(Object.entries(db.obj.select(kc||{},Tb)));for(kc=Xa.next();!kc.done;kc=Xa.next())Tb=$jscomp.makeIterator(kc.value),kc=Tb.next().value,Tb=Tb.next().value,"undefined"!==typeof Tb&&(qc[kc]=Tb);db.noUpdate(function(){for(var wc=$jscomp.makeIterator(Object.entries(Wa.ui)),I=wc.next();!I.done;I=wc.next()){var T=
$jscomp.makeIterator(I.value);I=T.next().value;T=T.next().value;if(zb[I])zb[I](qc,T)}})}},{key:"relayout",value:function(){}},{key:"changeAttributeInSelectionOrMorph",value:function(Wa,Xa){var zb=this.target,kc=zb.selection;zb.isLabel||kc.isEmpty()?zb[Wa]="function"===typeof Xa?Xa(zb[Wa]):Xa:(zb.undoManager.group(),zb.changeStyleProperty(Wa,function(Tb){return"function"===typeof Xa?Xa(Tb):Xa}),zb.undoManager.group())}},{key:"changeFont",value:function(Wa){var Xa=this,zb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(kc){if(1==
kc.nextAddress)return Xa._last=Wa,(zb="custom..."===Wa)?kc.yield($world.prompt("Enter font family name",{requester:Xa.target,historyId:"lively.morphic-rich-text-font-names",useLastInput:!0}),3):kc.jumpTo(2);if(2!=kc.nextAddress&&(Wa=kc.yieldResult,!Wa))return kc.return();Xa.changeAttributeInSelectionOrMorph("fontFamily",Wa);kc.jumpToEnd()})}},{key:"setPadding",value:function(Wa){this.target.padding=db.Rectangle.inset(Wa)}},{key:"setPaddingTop",value:function(Wa){var Xa=this.target.padding;this.target.padding=
db.Rectangle.inset(Xa.left(),Wa,Xa.right(),Xa.bottom())}},{key:"setPaddingLeft",value:function(Wa){var Xa=this.target.padding;this.target.padding=db.Rectangle.inset(Wa,Xa.top(),Xa.right(),Xa.bottom())}},{key:"setPaddingRight",value:function(Wa){var Xa=this.target.padding;this.target.padding=db.Rectangle.inset(Xa.left(),Xa.top(),Wa,Xa.bottom())}},{key:"setPaddingBottom",value:function(Wa){var Xa=this.target.padding;this.target.padding=db.Rectangle.inset(Xa.left(),Xa.top(),Xa.right(),Wa)}},{key:"setLineWrapping",
value:function(Wa){this.target.lineWrapping=Wa}},{key:"changeFontWeight",value:function(Wa){this.changeAttributeInSelectionOrMorph("fontWeight",Wa)}},{key:"changeTextAlign",value:function(Wa){this.changeAttributeInSelectionOrMorph("textAlign",Wa)}},{key:"changeFontColor",value:function(Wa){this.changeAttributeInSelectionOrMorph("fontColor",Wa)}},{key:"changeFontSize",value:function(Wa){this.changeAttributeInSelectionOrMorph("fontSize",Wa)}},{key:"changeFixedWidth",value:function(Wa){this.target.fixedWidth=
Wa}},{key:"changeFixedHeight",value:function(Wa){this.target.fixedHeight=Wa}},{key:"changeLink",value:function(){var Wa=this,Xa,zb,kc,Tb,qc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(wc){if(1==wc.nextAddress)return Xa=Wa.target,zb=Xa.selection,kc=Xa.getStyleInRange(zb),Tb=kc.link,wc.yield(Wa.world().prompt("Set link",{input:Tb||"https://"}),2);qc=wc.yieldResult;Xa.undoManager.group();Xa.setStyleInRange({link:qc||void 0},zb);Xa.undoManager.group();Wa.autoRemove&&Wa.remove();wc.jumpToEnd()})}},
{key:"toggleUnderline",value:function(){this.changeAttributeInSelectionOrMorph("textDecoration",function(Wa){return"underline"===Wa?"none":"underline"})}},{key:"toggleItalic",value:function(){this.changeAttributeInSelectionOrMorph("fontStyle",function(Wa){return"italic"===Wa?"normal":"italic"})}},{key:"toggleBold",value:function(){this.changeAttributeInSelectionOrMorph("fontWeight",function(Wa){return"bold"===Wa||"700"===Wa?"normal":"bold"})}},{key:"copyStyle",value:function(){var Wa=this,Xa=this.target,
zb=this.ui.applyStyleButton;Xa=Xa.selection.isEmpty()?Xa.defaultTextStyle:Xa.getStyleInRange(Xa.selection);var kc=JSON.stringify(Xa,null,2);this.constructor.copiedStyle=Xa;zb.tooltip="paste style\n"+kc;this.env.eventDispatcher.doCopyWithMimeTypes([{type:"text/plain",data:kc},{type:"application/morphic-text-style",styleString:kc}]).then(function(){return Wa.setStatusMessage("Copied style\n"+kc)}).catch(function(Tb){return Wa.showError(Tb)})}},{key:"pasteStyle",value:function(){var Wa=this,Xa=this.target,
zb=this.constructor.copiedStyle;Xa.selection.isEmpty()?Object.assign(Xa,zb):Xa.selections.forEach(function(kc){return Xa.addTextAttribute(Wa.constructor.copiedStyle,kc)});this.update()}},{key:"clearStyle",value:function(){var Wa=this.target;Wa.selections.forEach(function(Xa){return Wa.resetStyleInRange(Xa)});this.update()}},{key:"configureRichTextOptions",value:function(){this.getSubmorphNamed("config panel")&&this.getSubmorphNamed("config panel").remove();var Wa=this.defaultSpec,Xa=this.uiSpec;Wa=
this.addMorph({name:"config panel",layout:new db.VerticalLayout({spacing:5}),epiMorph:!0,submorphs:[].concat($jscomp.arrayFromIterable(Object.keys(Wa).map(function(zb){var kc=Xa.rows.some(function(Tb){return Tb.some(function(qc){return qc===zb})});return{type:"labeledcheckbox",label:zb,name:zb,checked:kc}})),[{layout:new db.HorizontalLayout({spacing:3}),submorphs:[{type:"button",name:"OK button",label:"OK"},{type:"button",name:"cancel button",label:"Cancel"}]}])});Wa.center=this.innerBounds().center();
db.connect(Wa.getSubmorphNamed("OK button"),"fire",this,"configureAccepted");db.connect(Wa.getSubmorphNamed("cancel button"),"fire",this,"configureCanceled")}},{key:"configureAccepted",value:function(){var Wa=this.getSubmorphNamed("config panel");Wa&&(Wa.remove(),Wa.submorphs.filter(function(Xa){return"LabeledCheckBox"===Xa.constructor.name}))}},{key:"configureCanceled",value:function(){var Wa=this.getSubmorphNamed("config panel");Wa&&Wa.remove()}},{key:"close",value:function(){var Wa=this;this.target&&
this.target.attributeConnections&&this.target.attributeConnections.forEach(function(Xa){return Xa.targetObj===Wa&&Xa.disconnect()});this.remove()}},{key:"alwaysTargetFocusedMorph",value:function(){this.startStepping(1500,"updateTarget")}},{key:"updateTarget",value:function(){var Wa=this.world();Wa&&(Wa=Wa.focusedMorph)&&(Wa.isLabel||Wa.isText)&&!this.isAncestorOf(Wa)&&this.target!==Wa&&this.focusOn(Wa,!1)}},{key:"onMouseUp",value:function(Wa){var Xa=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(zb){if(1==
zb.nextAddress)return zb.yield(Xa.whenRendered(),2);Xa.update();zb.jumpToEnd()})}},{key:"attachToWorld",value:function(){db.connect($world,"onMouseDown",this,"updateTarget",{garbageCollect:!0})}}],[{key:"className",get:function(){return"RichTextControl"}},{key:"properties",get:function(){return{autoRemove:{defaultValue:!1},target:{},toggleColor:{},managedProps:{readOnly:!0,get:function(){return"fontFamily fontWeight fontSize fontStyle isText fontColor textAlign link textDecoration fixedWidth fixedHeight lineWrapping padding".split(" ")}},
updateSpec:{get:function(){var Wa=this;return Object.assign({fontSelection:function(Xa,zb){var kc=Xa.fontFamily;(Xa=kc&&zb.items.find(function(Tb){return Tb.value.toLowerCase()===kc.toLowerCase()}))?zb.selection=Xa.value:kc&&(zb.items=zb.items.concat({isListItem:!0,label:[kc,{fontFamily:kc}],value:kc}),zb.selection=db.arr.last(zb.items));zb.fit();zb.width=Math.max(zb.width,170)},fontWeightSelection:function(Xa,zb){zb.selection="normal"==Xa.fontWeight?"Medium":Xa.fontWeight?db.string.capitalize(Xa.fontWeight):
"Medium"},boldButton:function(Xa,zb){Wa.toggleButton(zb,"bold"===Xa.fontWeight)},italicButton:function(Xa,zb){Wa.toggleButton(zb,"italic"===Xa.fontStyle)},underlineButton:function(Xa,zb){Wa.toggleButton(zb,"underline"===Xa.textDecoration)},linkButton:function(Xa,zb){Wa.toggleButton(zb,!!Xa.link)},colorPicker:function(Xa,zb){zb.colorValue=Xa.fontColor},fontSizeField:function(Xa,zb){zb.number=Xa.fontSize},fixedWidthControl:function(Xa,zb){Xa.isText?zb.enable():zb.disable();zb.checked=Xa.fixedWidth},
fixedHeightControl:function(Xa,zb){Xa.isText?zb.enable():zb.disable();zb.checked=Xa.fixedHeight},lineWrappingControl:function(Xa,zb){var kc=$jscomp.makeIterator(zb.submorphs);zb=kc.next().value;kc=kc.next().value;zb.checked=!!Xa.lineWrapping;kc.deactivated=!Xa.lineWrapping;kc.deactivated?kc.opacity=.5:(kc.opacity=1,kc.selection=Xa.lineWrapping)},paddingControl:function(Xa,zb){var kc=Xa.padding,Tb=kc.left();Xa=kc.top();var qc=kc.right();kc=kc.bottom();var wc=!db.arr.every([Tb,Xa,qc,kc],function(I){return I==
Tb});zb.get("multi value indicator").visible=wc;db.connect(zb.get("multi value indicator"),"onMouseDown",zb.get("padding field"),"number",{converter:"() => left",varMapping:{left:Tb}});zb.get("padding field").number=Tb;zb.get("padding field").visible=!wc;zb.get("padding field top").number=Xa;zb.get("padding field left").number=Tb;zb.get("padding field right").number=qc;zb.get("padding field bottom").number=kc}},["left","center","right","block"].reduce(function(Xa,zb){Xa[zb+"Align"]=function(kc,Tb){Wa.toggleButton(Tb,
kc.textAlign==zb)};return Xa},{}))}},ui:{get:function(){var Wa=this,Xa={fontSelection:"font selection",fontWeightSelection:"font weight selection",boldButton:"bold button",italicButton:"italic button",underlineButton:"underline button",linkButton:"link button",leftAlign:"left align",centerAlign:"center align",rightAlign:"right align",blockAlign:"block align",fontSizeField:"font size field",colorPicker:"color picker",copyStyleButton:"copy style",applyStyleButton:"apply style",removeStyleButton:"remove style",
fixedHeightControl:"fixed height control",fixedWidthControl:"fixed width control",lineWrappingControl:"line wrapping control",paddingControl:"padding control"};return db.obj.extract(Xa,db.obj.keys(Xa),function(zb,kc){return Wa.getSubmorphNamed(kc)})}}}}},{key:"openDebouncedFor",value:function(Wa){var Xa=Wa.selection;if(Xa.isEmpty()){var zb=db.cachedControls.get(Wa);zb&&(zb.update(),zb.alignAtTarget(),zb.world()||Wa.world().addMorph(zb))}else db.fun.debounceNamed(Wa.id+"openRichTextControl",600,function(){var kc=
db.cachedControls.get(Wa);Xa.isEmpty()?kc&&kc.removeFocus():(kc&&kc.world()||(kc=new db.RichTextControl,db.cachedControls.set(Wa,kc)),Wa.world().addMorph(kc),kc.focusOn(Wa,!0),kc.alwaysTargetFocusedMorph())})()}},{key:"openFor",value:function(Wa){var Xa=db.cachedControls.get(Wa);Xa?Xa.update():(Xa=new db.RichTextControl,db.cachedControls.set(Wa,Xa),Xa.focusOn(Wa,!0),Xa.alwaysTargetFocusedMorph());Xa.alignAtTarget();Xa.world()||Wa.world().addMorph(Xa);return Xa}}],pb,{pathInPackage:function(){return"text/ui.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"lively.ide",version:"0.1.0"}}},{start:624,end:16332})}(db.Morph);db.RichTextControl=Ta;db.RichTextControl=Ta;db.RichTextControl=Ta;Ta=lively.FreezerRuntime.recorderFor("ProtoSearchField/index.js");Ta.SearchField=$b;var cb=function(fb){var pb=lively.FreezerRuntime.recorderFor("ProtoSearchField/index.js"),Cb=pb.hasOwnProperty("ProtoSearchField")&&
"function"===typeof pb.ProtoSearchField?pb.ProtoSearchField:pb.ProtoSearchField=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Oc(Cb,fb,void 0,[{key:"className",get:function(){return"ProtoSearchField"}},{key:"properties",get:function(){return{master:{initialize:function(){}}}}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"ProtoSearchField",version:"0.1.1-0"}}},{start:76,end:221})}(Ta.SearchField);cb=Ta.ProtoSearchField;Ta.default=cb;var la=lively.FreezerRuntime.recorderFor("ProtoTree/index.js");la.Tree=zc;la.TreeData=Fb;Ta=function(fb){var pb=lively.FreezerRuntime.recorderFor("ProtoTree/index.js"),Cb=pb.hasOwnProperty("TestTreeData")&&"function"===typeof pb.TestTreeData?pb.TestTreeData:pb.TestTreeData=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Oc(Cb,fb,[{key:"display",value:function(Wa){return Wa.name}},{key:"isCollapsed",value:function(Wa){return Wa.isCollapsed}},{key:"collapse",value:function(Wa,Xa){Wa.isCollapsed=Xa}},{key:"getChildren",value:function(Wa){return Wa.isLeaf?null:Wa.isCollapsed?[]:Wa.children}},{key:"isLeaf",value:function(Wa){return Wa.isLeaf}}],[{key:"className",get:function(){return"TestTreeData"}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoTree",version:"0.1.1-2"}}},{start:113,end:417})}(la.TreeData);la.TestTreeData=Ta;la.TestTreeData=Ta;la.TestTreeData=Ta;Ta=function(fb){var pb=lively.FreezerRuntime.recorderFor("ProtoTree/index.js"),Cb=pb.hasOwnProperty("ProtoTree")&&"function"===typeof pb.ProtoTree?pb.ProtoTree:pb.ProtoTree=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Oc(Cb,fb,void 0,[{key:"className",get:function(){return"ProtoTree"}},{key:"properties",get:function(){return{treeData:{initialize:function(){this.treeData=new la.TestTreeData({name:"root",isCollapsed:!1,isLeaf:!1,children:[{name:"child 1",isLeaf:!0},{name:"child 2",isLeaf:!1,isCollapsed:!0,children:[{name:"child 2 - 1",isLeaf:!0}]},{name:"child 3",isLeaf:!1,isCollapsed:!1,children:[{name:"child 3 - 1",isLeaf:!0},{name:"child 3 - 2",isLeaf:!0}]},{name:"child 4",isLeaf:!0}]})}},master:{initialize:function(){}}}}}],
pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoTree",version:"0.1.1-2"}}},{start:434,end:1297})}(la.Tree);Ta=la.ProtoTree;la.default=Ta;Ta=lively.FreezerRuntime.recorderFor("ProtoNumberWidget/index.js");Ta.NumberWidget=pc;cb=function(fb){var pb=lively.FreezerRuntime.recorderFor("ProtoNumberWidget/index.js"),Cb=pb.hasOwnProperty("ProtoNumberWidget")&&
"function"===typeof pb.ProtoNumberWidget?pb.ProtoNumberWidget:pb.ProtoNumberWidget=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Oc(Cb,fb,void 0,[{key:"className",get:function(){return"ProtoNumberWidget"}},{key:"properties",get:function(){return{master:{initialize:function(){}}}}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"ProtoNumberWidget",version:"0.1.1-0"}}},{start:76,end:224})}(Ta.NumberWidget);cb=Ta.ProtoNumberWidget;Ta.default=cb;Ta=lively.FreezerRuntime.recorderFor("FrameResizer/index.js");Ta.Morph=Zc;cb=function(fb){var pb=lively.FreezerRuntime.recorderFor("FrameResizer/index.js"),Cb=pb.hasOwnProperty("FrameResizer")&&"function"===typeof pb.FrameResizer?pb.FrameResizer:pb.FrameResizer=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,
arguments)};return Oc(Cb,fb,[{key:"onDrag",value:function(Wa){var Xa=this.owner.left;Wa=Wa.positionIn(this).x;Wa*="left"==this.direction?-1:1;this.owner.width+=Wa;350>this.owner.width&&(Wa+=350-this.owner.width,this.owner.width=350);this.owner.left="left"==this.direction?Xa-Wa:Xa}}],[{key:"className",get:function(){return"FrameResizer"}},{key:"properties",get:function(){return{direction:{type:"Enum",values:["left","right"]}}}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"FrameResizer",version:"0.1.1-24"}}},{start:56,end:840})}(Ta.Morph);cb=Ta.FrameResizer;Ta.default=cb;var La=lively.FreezerRuntime.recorderFor("ShapeLayoutControl/index.js");La.Morph=Zc;La.morph=Jc;La.layouts=Bb;La.string=lb;La.connect=Ra;La.noUpdate=dc;La.InteractiveMorphSelector=Pc;La.Color=Vc;La.pt=Fd;Ta=function(fb){var pb=lively.FreezerRuntime.recorderFor("ShapeLayoutControl/index.js"),Cb=pb.hasOwnProperty("ShapeLayoutControl")&&
"function"===typeof pb.ShapeLayoutControl?pb.ShapeLayoutControl:pb.ShapeLayoutControl=function(Wa){Wa&&Wa[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return Oc(Cb,fb,[{key:"focusOn",value:function(Wa){this.target=Wa;this.update(!1)}},{key:"setupConnections",value:function(){var Wa=this.ui;La.connect(Wa.submorphSettingsControl,"fire",this,"chooseSubmorphToChangeLayoutSettings");La.connect(Wa.dragmeControl,"onDragStart",this,"onSubmorphSettingsDragStart");
La.connect(Wa.xAxisPolicyControl,"selection",this,"updateSubmorphProportionalLayoutSettings",{converter:'policy => ({\n        policy,\n        axis: "x",\n        submorph: self.selectedSubmorph,\n      })',varMapping:{self:this}});La.connect(Wa.yAxisPolicyControl,"selection",this,"updateSubmorphProportionalLayoutSettings",{converter:'policy => ({\n        policy,\n        axis: "y",\n        submorph: self.selectedSubmorph,\n      })',varMapping:{self:this}});for(var Xa={},zb=$jscomp.makeIterator(this.managedProps),
kc=zb.next();!kc.done;Xa={$jscomp$loop$prop$prop$2283:Xa.$jscomp$loop$prop$prop$2283},kc=zb.next()){var Tb=$jscomp.makeIterator(kc.value),qc=Tb.next().value;kc=Tb.next().value;Tb.next().value||(Xa.$jscomp$loop$prop$prop$2283=this.join(qc),Tb=Wa[this.join(qc,"control")],La.connect(Tb,kc,this,"updateLayout",{updater:function(wc){return function(I,T){I(wc.$jscomp$loop$prop$prop$2283,T)}}(Xa),varMapping:{prop:Xa.$jscomp$loop$prop$prop$2283}}))}}},{key:"lower",value:function(Wa){return Wa.charAt(0).toLowerCase()+
Wa.slice(1)}},{key:"join",value:function(Wa,Xa){return this.lower(La.string.camelCaseString(Wa+(Xa?" "+Xa:"")))}},{key:"updateLayoutOfTarget",value:function(Wa){Wa=La.layouts[La.string.camelCaseString(Wa)];this.target.layout=Wa?new Wa({autoResize:!1}):null;this.update()}},{key:"updateLayout",value:function(Wa,Xa){this.target.layout[Wa]=Xa}},{key:"update",value:function(Wa){var Xa=this;this.target&&La.noUpdate(function(){for(var zb=Xa.ui,kc=Xa.target.layout||{name:function(){return"No"}},Tb=$jscomp.makeIterator(Xa.managedProps),
qc=Tb.next();!qc.done;qc=Tb.next()){var wc=$jscomp.makeIterator(qc.value);qc=wc.next().value;var I=wc.next().value;wc.next();wc=zb[Xa.join(qc,"control")];var T=zb[Xa.join(qc,"label")];if(I)if("type"===qc)wc.selection=kc.name()+" Layout";else{var ta=kc[Xa.join(qc)],Ca="undefined"!==typeof ta;if(Ca){switch(qc){case "align":wc.items=kc.possibleAlignValues;break;case "direction":wc.items=kc.possibleDirectionValues;break;case "axis":wc.items=kc.possibleAxisValues}wc[I]=ta}T.isLayoutable=T.visible=Ca}}Xa.showGridLayoutControl("Grid"===
kc.name());Xa.showProportionalControl("Proportional"===kc.name())})}},{key:"updateSubmorphProportionalLayoutSettings",value:function(Wa){var Xa={};this.target.layout.changeSettingsFor(Wa.submorph,(Xa[Wa.axis]=Wa.policy,Xa),!0)}},{key:"onSubmorphSettingsDragStart",value:function(Wa){var Xa=this;Wa.stop();var zb=this.target.layout,kc=zb.settingsFor(this.selectedSubmorph),Tb=[],qc;for(qc in kc)Tb=[].concat($jscomp.arrayFromIterable(Tb),[qc+": ",{fontWeight:"bold"},kc[qc]+" ",{}]);var wc=La.morph({type:"label",
fontColor:La.Color.white,value:Tb,fill:La.Color.black.withA(.7),padding:5,borderRadius:10,isLayoutable:!1});wc.wantsToBeDroppedOn=function(I){return zb.layoutableSubmorphs.includes(I)};wc.onBeingDroppedOn=function(I,T){wc.remove();if(I=zb.layoutableSubmorphs.includes(T)?T:Wa.world.morphsContainingPoint(Wa.hand.position).find(function(ta){return zb.layoutableSubmorphs.includes(ta)}))Xa.updateSubmorphProportionalLayoutSettings({policy:kc.x,axis:"x",submorph:I}),Xa.updateSubmorphProportionalLayoutSettings({policy:kc.y,
axis:"y",submorph:I}),I.show(),$world.setStatusMessage("layout settings applied")};Wa.hand.grab(wc);wc.moveBy(La.pt(10,10))}},{key:"chooseSubmorphToChangeLayoutSettings",value:function(){var Wa=this,Xa,zb,kc,Tb,qc,wc,I,T,ta;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ca){switch(Ca.nextAddress){case 1:return Xa=Wa.target.layout.layoutableSubmorphs,Wa.manageFocus=!0,Wa.env.eventDispatcher.isKeyPressed("Shift")?(kc=Xa.map(function(Mb){return{isListItem:!0,string:String(Mb),value:Mb}}),
Ca.yield($world.listPrompt("Select morph",kc,{onSelection:function(Mb){return Mb.show()}}),5)):Ca.yield(La.InteractiveMorphSelector.selectMorph(Wa.world(),Wa,function(Mb){return Xa.includes(Mb)}),4);case 4:zb=Ca.yieldResult;Ca.jumpTo(3);break;case 5:Tb=Ca.yieldResult,qc=$jscomp.makeIterator(Tb.selected),zb=qc.next().value;case 3:Wa.manageFocus=!1;Wa.selectedSubmorph=zb;if(!zb)return Ca.return();wc=Wa.ui;I=wc.xAxisPolicyControl;T=wc.yAxisPolicyControl;ta=Wa.target.layout.settingsFor(zb);La.noUpdate(function(){I.selection=
ta.x;T.selection=ta.y});Ca.jumpToEnd()}})}},{key:"showProportionalControl",value:function(Wa){var Xa=this.ui;[Xa.submorphSettingsControl,Xa.dragmeControl,Xa.xAxisPolicyControl,Xa.xAxisPolicyLabel,Xa.yAxisPolicyControl,Xa.yAxisPolicyLabel].forEach(function(zb){zb.isLayoutable=Wa;zb.visible=Wa})}},{key:"showGridLayoutHalo",value:function(){$world.showLayoutHaloFor(this.target)}},{key:"showGridLayoutControl",value:function(Wa){var Xa=this.ui.configureGridLayoutControl;Xa.visible=Xa.isLayoutable=Wa}}],
[{key:"className",get:function(){return"ShapeLayoutControl"}},{key:"properties",get:function(){return{managedProps:{get:function(){return[["type","selection",!0],["align","selection"],["direction","selection"],["axis","selection"],["spacing","number"],["auto resize","checked"],["resize submorphs","checked"],["x axis policy","selection",!0],["y axis policy","selection",!0],["react to submorph animations","checked"],["submorph settings",!1,!0],["order by index","checked"],["dragme",!1,!0],["configure grid layout",
!1,!0]]}},ui:{readOnly:!0,get:function(){for(var Wa={labelContainer:this.getSubmorphNamed("label container"),controlContainer:this.getSubmorphNamed("control container")},Xa=$jscomp.makeIterator(this.managedProps),zb=Xa.next();!zb.done;zb=Xa.next()){var kc=$jscomp.makeIterator(zb.value).next().value;zb=kc+" label";kc+=" control";Wa[this.join(zb)]=this.getSubmorphNamed(zb);Wa[this.join(kc)]=this.getSubmorphNamed(kc)}return Wa}}}}}],pb,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ShapeLayoutControl",version:"0.1.1-166"}}},{start:345,end:7771})}(La.Morph);Ta=La.ShapeLayoutControl;La.default=Ta}}});