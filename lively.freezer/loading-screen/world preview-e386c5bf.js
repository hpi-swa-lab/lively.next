System.register(["./__root_module__-11543d52.js","kld-intersections","./index-5413fdc6.js","./index-0748ee4b.js"],function(){var sa,lb,Eb,Vb,Wb,qd,Ec,vd,Ic,Jc,Zc,$c,Fd,md,Vc,Ra,tb,dc,bc,Yc,Oc,$b,zc,Fb;return{setters:[function(Bb){sa=Bb.ag;lb=Bb.au;Eb=Bb.ay;Vb=Bb.al;Wb=Bb.P;qd=Bb._;Ec=Bb.s;vd=Bb.a4;Ic=Bb.aM;Jc=Bb.bM;Zc=Bb.bN;$c=Bb.$;Fd=Bb.C;md=Bb.a1;Vc=Bb.ap;Ra=Bb.as;tb=Bb.bO;dc=Bb.aq;bc=Bb.aB;Yc=Bb.az;Oc=Bb.Y;$b=Bb.bP;zc=Bb.a3;Fb=Bb.L},function(){},function(){},function(){}],execute:function(){var Bb=
lively.FreezerRuntime.recorderFor("typeshift.components/interactive.js");Bb.Morph=sa;Bb.HTMLMorph=lb;Bb.touchInputDevice=Eb;Bb.morph=Vb;Bb.Path=Wb;Bb.promise=qd;Bb.string=Ec;Bb.arr=vd;Bb.List=Ic;Bb.asItem=Jc;Bb.ListItemMorph=Zc;Bb.Rectangle=$c;Bb.Color=Fd;Bb.pt=md;Bb.signal=Vc;Bb.once=Ra;Bb.ObjectRef=tb;var pc=function(db){var Ta=lively.FreezerRuntime.recorderFor("typeshift.components/interactive.js"),cb=Ta.hasOwnProperty("MorphSerializationStopper")&&"function"===typeof Ta.MorphSerializationStopper?
Ta.MorphSerializationStopper:Ta.MorphSerializationStopper=function(la){la&&la[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dc(cb,db,[{key:"__deserialize__",value:function(la,La,fb,pb,Cb){var Wa=la.props.wrappedMorph;this._wrappedMorph=Wa;delete la.props.wrappedMorph;dc._get(Object.getPrototypeOf(cb.prototype),"__deserialize__",this).call(this,la,La,fb,pb,Cb);this._serializer={delayedWrappedMorph:Wa,serializedObjMap:fb,pool:pb,
path:Cb}}},{key:"__after_deserialize__",value:function(la,La){var fb=this;dc._get(Object.getPrototypeOf(cb.prototype),"__after_deserialize__",this).call(this,la,La);La=this._serializer;var pb=La.delayedWrappedMorph,Cb=La.serializedObjMap,Wa=La.pool,Xa=La.path;this._getWrappedMorph=function(){var zb=pb.value.id;delete fb._getWrappedMorph;return fb.wrappedMorph=Bb.ObjectRef.fromSnapshot(zb,Cb,Wa,Xa).realObj};la.props.wrappedMorph=this._wrappedMorph;delete this._wrappedMorph;delete this._serializer}},
{key:"__serialize__",value:function(){this._getWrappedMorph&&this._getWrappedMorph();return null}}],[{key:"className",get:function(){return"MorphSerializationStopper"}},{key:"properties",get:function(){return{wrappedMorphName:{},wrappedMorph:{set:function(la){this.setProperty("wrappedMorph",la);la&&la.isMorph&&(this.setBounds(la.bounds()),this.wrappedMorphName=la.name)},get:function(){var la=this.getProperty("wrappedMorph");return la?la:this._getWrappedMorph()}}}}}],Ta,{pathInPackage:function(){return"interactive.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"typeshift.components",version:"0.1.0"}}},{start:367,end:2355})}(Bb.Morph);Bb.MorphSerializationStopper=pc;Bb.MorphSerializationStopper=pc;Bb.MorphSerializationStopper=pc;pc=function(db){var Ta=lively.FreezerRuntime.recorderFor("typeshift.components/interactive.js"),cb=Ta.hasOwnProperty("InteractiveItem")&&"function"===typeof Ta.InteractiveItem?
Ta.InteractiveItem:Ta.InteractiveItem=function(la){la&&la[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dc(cb,db,[{key:"fit",value:function(){}},{key:"onHaloGrabover",value:function(la){this.list.showDropPreviewFor(this,la)}},{key:"onDrop",value:function(la){var La=this,fb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(pb){if(1==pb.nextAddress){if(!La.item.isPreview)return pb.jumpTo(0);fb=la.hand.grabbedMorphs[0];
dc._get(Object.getPrototypeOf(cb.prototype),"onDrop",La).call(La,la);return pb.yield(La.list.whenRendered(),3)}La.list.addItemAt({morph:fb,isListItem:!0},La.itemIndex);La.list.clearPreviews();pb.jumpToEnd()})}},{key:"select",value:function(){this.list.selectedIndex=this.itemIndex;this.item.morph.focus()}},{key:"onMouseDown",value:function(la){Bb.touchInputDevice?this._touchDown=Date.now():this.select()}},{key:"onMouseUp",value:function(la){Bb.touchInputDevice&&500>Date.now()-this._touchDown&&this.select()}},
{key:"displayItem",value:function(la,La,fb,pb,Cb,Wa,Xa){Wa=void 0===Wa?!1:Wa;dc._get(Object.getPrototypeOf(cb.prototype),"displayItem",this).call(this,la,La,fb,pb,Cb,Wa,Xa);la.morph&&(la.morph.selected=Wa)}},{key:"onGrab",value:function(la){var La=this.list,fb=la.halo&&la.halo.target===this;fb&&la.halo.detachFromTarget();var pb=this.submorphs.length?this.submorphs[0]:Bb.morph({type:"label",value:this.value});la.hand.grab(pb);pb.position=la.hand.localize(this.globalPosition);fb&&la.halo.refocus(pb);
La.removeItem(this.list.items[this.itemIndex]);La.itemMorphs.forEach(function(Cb){return Cb.remove()});La.update()}}],[{key:"className",get:function(){return"InteractiveItem"}},{key:"properties",get:function(){return{draggable:{defaultValue:Bb.touchInputDevice?!1:!0},item:{derived:!0,get:function(){return this.list.items[this.itemIndex]}},list:{drived:!0,get:function(){return this.owner.owner}},isListItem:{get:function(){return!0}}}}}],Ta,{pathInPackage:function(){return"interactive.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},
subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"typeshift.components",version:"0.1.0"}}},{start:2364,end:4638})}(Bb.ListItemMorph);Bb.InteractiveItem=pc;Bb.InteractiveItem=pc;Bb.InteractiveItem=pc;pc=function(db){var Ta=lively.FreezerRuntime.recorderFor("typeshift.components/interactive.js"),cb=Ta.hasOwnProperty("MorphList")&&"function"===typeof Ta.MorphList?Ta.MorphList:Ta.MorphList=function(la){la&&la[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dc(cb,db,[{key:"onLoad",value:function(){dc._get(Object.getPrototypeOf(cb.prototype),"onLoad",this).call(this);this.clipMode=this.touchInput?"auto":"hidden"}},{key:"showDropPreviewFor",value:function(la,La){la=la.itemIndex;this.items[la].isPreview&&La||(this.clearPreviews(),La&&this.addItemAt({isListItem:!0,isPreview:!0,morph:Bb.morph({reactsToPointer:!1,acceptsDrops:!1,width:this.width-5,height:this.itemHeight,fill:Bb.Color.orange.withA(.5)})},
la))}},{key:"clearPreviews",value:function(){var la=this;this.items.filter(function(La){return La.morph&&La.morph.owner&&!Bb.Path("morph.owner.isListItem").get(La)}).map(function(La){return $jscomp.asyncExecutePromiseGeneratorProgram(function(fb){return fb.return(la.removeItem(La))})});this.items.filter(function(La){return La.isPreview}).map(function(La){return la.removeItem(La)})}},{key:"update",value:function(){var la=this,La=this.items;La&&this.listItemContainer&&(this.scroller&&(this.scroller.visible=
!1),this.dontRecordChangesWhile(function(){var fb=la.itemHeight,pb=la.itemMorphs,Cb=la.listItemContainer,Wa=la.selectedIndexes,Xa=la.extent.y,zb=la.fontSize,kc=la.fontFamily,Tb=la.fontColor,qc=la.padding,wc=la.itemPadding,I=la.selectionColor,T=la.selectionFontColor,ta=la.nonSelectionFontColor,Ca=la.itemBorderRadius,Mb=la.scrollBar,vb=la.scroll.y;qc=qc||Bb.Rectangle.inset(0);var Ia=qc.top(),Qb=qc.left(),Kc=qc.bottom();qc=qc.right();var Rc=Math.max(0,Math.floor(vb/fb)),xc=Math.min(La.length,Math.ceil((vb+
Xa)/fb));Xa=0;vb=la.width-(Qb+qc);pb=Bb.arr.sortBy(pb,function($a){return $a.itemIndex});var Fa=$jscomp.makeIterator(Bb.arr.partition(pb,function($a){return $a.itemIndex<Rc}));pb=Fa.next().value;var nc=Fa.next().value;nc=$jscomp.makeIterator(Bb.arr.partition(nc,function($a){return $a.itemIndex>xc}));Fa=nc.next().value;nc=nc.next().value;pb=[].concat($jscomp.arrayFromIterable(Fa),$jscomp.arrayFromIterable(nc),$jscomp.arrayFromIterable(pb));zb={fontSize:zb,fontFamily:kc,fontColor:ta||Tb,padding:wc,
borderRadius:Ca||0,selectionFontColor:T,nonSelectionFontColor:ta,selectionColor:I};pb.length&&xc-Rc>pb.length&&(Rc!=pb[0].itemIndex?Bb.arr.pushAt(pb,Cb.addMorph(new Bb.InteractiveItem(zb)),0):xc!=Bb.arr.last(pb).itemIndex&&pb.push(Cb.addMorph(new Bb.InteractiveItem(zb))));for(kc=0;kc<xc-Rc;kc++){Tb=Rc+kc;wc=La[Tb];if(!wc){pb.slice(kc).forEach(function($a){return $a.remove()});break}I=pb[kc];I||(I=pb[kc]=Cb.addMorph(new Bb.InteractiveItem(zb)),I.clipMode="visible");I.displayItem(wc,Tb,vb,fb,Bb.pt(0,
fb*Tb),Wa.includes(Tb),zb);Xa=Math.max(Xa,I.width)}fb=Math.max(Ia+Kc+fb*La.length,la.height);Wa=Bb.pt(la.width,fb).subPt(Bb.pt(Qb+qc,0));Cb.setBounds(Bb.pt(Qb,Ia).extent(Wa));Mb.left=Xa-10;Mb.fill=null;Mb.top=0;Mb.extent=Bb.pt(1,fb)}))}},{key:"onHoverIn",value:function(la){this.clipMode="auto"}},{key:"onHoverOut",value:function(la){this.touchInput||(this.clipMode="hidden")}},{key:"onScroll",value:function(la){this.update()}}],[{key:"className",get:function(){return"MorphList"}},{key:"properties",
get:function(){return{touchInput:{get:function(){return Bb.touchInputDevice}},items:{group:"list",defaultValue:[],after:["submorphs"],set:function(la){this.setProperty("items",la.map(Bb.asItem));this.itemMorphs.forEach(function(La){return La.remove()});this.update();this.attributeConnections&&Bb.signal(this,"values",this.values)}}}}}],Ta,{pathInPackage:function(){return"interactive.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},
package:function(){return{name:"typeshift.components",version:"0.1.0"}}},{start:4647,end:9874})}(Bb.List);Bb.MorphList=pc;Bb.MorphList=pc;Bb.MorphList=pc;pc=function(db){var Ta=lively.FreezerRuntime.recorderFor("typeshift.components/interactive.js"),cb=Ta.hasOwnProperty("InteractiveMorph")&&"function"===typeof Ta.InteractiveMorph?Ta.InteractiveMorph:Ta.InteractiveMorph=function(la){la&&la[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};
return dc(cb,db,[{key:"commands",get:function(){var la=this;return[{name:"resize on client",exec:function(){la.extent=Bb.pt(window.innerWidth,window.innerHeight);la.position=Bb.pt(0,0);la.adjustScale()}}]}},{key:"adjustScale",value:function(){var la=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(La){if(1==La.nextAddress)return La.yield(la.whenRendered(),2);if(3!=La.nextAddress)return La.yield(Bb.promise.delay(la.checkDelay),3);$world.scale=window.innerWidth/window.outerWidth;La.jumpToEnd()})}},
{key:"menuItems",value:function(){var la=this,La;return $jscomp.asyncExecutePromiseGeneratorProgram(function(fb){if(1==fb.nextAddress)return fb.yield(dc._get(Object.getPrototypeOf(cb.prototype),"menuItems",la).call(la),2);La=fb.yieldResult;La[Bb.arr.findIndex(La,function(pb){return"Open in..."==pb[0]})]=["Open in...",[["Window",function(){la.openInWindow()}],["Prototype Box",function(){la.world().execCommand("open in prototype box",{target:la})}]]];return fb.return(La)})}},{key:"cleanAnchors",value:function(){this.ui.texts.map(function(la){return la.anchors.filter(function(La){return!La.id}).forEach(function(La){return la.removeAnchor(La)})})}},
{key:"resizeToMobile",value:function(){this.extent=Bb.pt(375,667)}},{key:"resizeToDesktop",value:function(){this.extent=Bb.pt(1024,720)}}],[{key:"className",get:function(){return"InteractiveMorph"}},{key:"properties",get:function(){return{loadingScreen:{},crawlerScreen:{},title:{initialize:function(){this.title=this.name}},checkDelay:{readOnly:!0,get:function(){return 300}},__crawler_html__:{derived:!0,get:function(){return this.crawlerScreen&&this.crawlerScreen.html}},__loading_html__:{derived:!0,
get:function(){if(!this.loadingScreen)return null;var la=this.loadingScreen,La=la.html,fb=la.id;la=la.document.getElementById("css-for-"+fb);return"\n            "+(la?la.outerHTML:"")+'\n            <div id="'+fb+'" style="position: absolute; z-index: 1; height: 100%; width: 100%;">\n            '+La+"\n            </div>\n          "}},ui:{derived:!0,get:function(){var la={},La={};if(lively.FreezerRuntime&&this._ui)return this._ui;this.withAllSubmorphsDoExcluding(function(fb){la[Bb.string.camelize(fb.name.split(" ").join("-"))]=
fb;var pb=fb.constructor.className;pb=pb.charAt(0).toLowerCase()+pb.slice(1)+"s";var Cb=La[pb]||[];Cb.push(fb);La[pb]=Cb},function(fb){return fb.ignoreScope});return this._ui=Object.assign({},la,{},La)}}}}}],Ta,{pathInPackage:function(){return"interactive.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"typeshift.components",version:"0.1.0"}}},{start:9883,end:13100})}(Bb.Morph);
Bb.InteractiveMorph=pc;Bb.InteractiveMorph=pc;Bb.InteractiveMorph=pc;pc=lively.FreezerRuntime.recorderFor("StaticText/index.js");pc.HTMLMorph=lb;var Pc=function(db){var Ta=lively.FreezerRuntime.recorderFor("StaticText/index.js"),cb=Ta.hasOwnProperty("StaticText")&&"function"===typeof Ta.StaticText?Ta.StaticText:Ta.StaticText=function(la){la&&la[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dc(cb,db,[{key:"refresh",value:function(){this.html=
'<span style="line-height: 1.3; font-size: '+this.fontSize+"px; color: "+this.fontColor+"; font-family: "+this.fontFamily+'">'+this.value+"</span>"}}],[{key:"className",get:function(){return"StaticText"}},{key:"properties",get:function(){return{html:{isStyleProp:!1},fontSize:{type:"Number",set:function(la){this.setProperty("fontSize",la);this.refresh()}},fontColor:{type:"Color",set:function(la){this.setProperty("fontColor",la);this.refresh()}},fontFamily:{type:"Enum",set:function(la){this.setProperty("fontFamily",
la);this.refresh()}},value:{set:function(la){this.setProperty("value",la);this.refresh()}}}}}],Ta,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"StaticText",version:"0.1.1-10"}}},{start:74,end:953})}(pc.HTMLMorph);Pc=pc.StaticText;pc.default=Pc;var xb=lively.FreezerRuntime.recorderFor("WorldVersionViewer/index.js");xb.Morph=sa;xb.World=
bc;xb.HorizontalLayout=Yc;xb.morph=Vb;xb.MorphicDB=Oc;xb.graph=$b;xb.promise=qd;xb.date=zc;xb.string=Ec;xb.arr=vd;xb.Color=Fd;xb.pt=md;xb.LoadingIndicator=Fb;(function(db){var Ta=lively.FreezerRuntime.recorderFor("WorldVersionViewer/index.js"),cb=Ta.hasOwnProperty("WorldVersion")&&"function"===typeof Ta.WorldVersion?Ta.WorldVersion:Ta.WorldVersion=function(la){la&&la[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dc(cb,db,[{key:"update",
value:function(){var la=$jscomp.makeIterator(this.submorphs),La=la.next().value;la=la.next().value;La.imageUrl=this.commit.preview;la.textAndAttributes=this.info;la.fontColor=this.selected?xb.Color.white:xb.Color.darkGray}}],[{key:"className",get:function(){return"WorldVersion"}},{key:"properties",get:function(){return{commit:{},fill:{defaultValue:xb.Color.transparent},info:{derived:!0,get:function(){var la=this.commit,La=la.message,fb=la.name,pb=la.timestamp;return[la._id.slice(0,6)+" ",{fontWeight:"bold"},
xb.string.truncate(La.split("\n")[0],40)+" ",{}," ("+fb+" ",{},""+xb.date.format(new Date(pb),"yyyy-mm-dd HH:MM Z"),{}]}},selected:{set:function(la){this.setProperty("selected",la);this.update()}},layout:{initialize:function(){this.layout=new xb.HorizontalLayout({align:"center",spacing:5})}},submorphs:{initialize:function(){this.submorphs=[{type:"image",extent:xb.pt(30,30),name:"preview",reactsToPointer:!1},{reactsToPointer:!1,type:"label",fill:null,name:"commit info",fontFamily:"Nunito",fontColor:xb.Color.gray}]}}}}}],
Ta,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"WorldVersionViewer",version:"0.1.1-33"}}},{start:274,end:1824})})(xb.Morph);pc=function(db){var Ta=lively.FreezerRuntime.recorderFor("WorldVersionViewer/index.js"),cb=Ta.hasOwnProperty("WorldVersionViewer")&&"function"===typeof Ta.WorldVersionViewer?Ta.WorldVersionViewer:Ta.WorldVersionViewer=
function(la){la&&la[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return dc(cb,db,[{key:"reset",value:function(){this.getSubmorphNamed("version list").items=[]}},{key:"onMouseDown",value:function(la){switch(la.targetMorph.name){case "visit button":this.visitSelectedCommit();break;case "revert button":this.revertToSelectedCommit()}}},{key:"visitSelectedCommit",value:function(){var la=this,La,fb,pb,Cb,Wa,Xa,zb,kc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Tb){switch(Tb.nextAddress){case 1:return La=
la.get("version list").selection,fb=xb.LoadingIndicator.open("Loading "+La.name+"..."),pb=$world,Cb=la.db||xb.MorphicDB.default,Wa=La._id,Tb.setCatchFinallyBlocks(2,3),Wa?Tb.yield(xb.World.loadFromCommit(Wa,void 0,{morphicDB:Cb}),8):Tb.yield(xb.World.loadFromDB(La.name,La.ref,void 0,{morphicDB:Cb}),7);case 7:Xa=Tb.yieldResult;Tb.jumpTo(6);break;case 8:Xa=Tb.yieldResult;case 6:return zb=Xa,Tb.return(zb);case 3:Tb.enterFinallyBlock();fb.remove();Tb.leaveFinallyBlock(0);break;case 2:kc=Tb.enterCatchBlock(),
console.error(kc),pb.showError("Error loading world:"+kc),Tb.jumpTo(3)}})}},{key:"revertToSelectedCommit",value:function(){var la=this,La,fb,pb,Cb,Wa,Xa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(zb){if(1==zb.nextAddress){La=la.get("version list").selection;if(!La)return zb.return();fb=la.db||xb.MorphicDB.default;pb=La;Cb=pb._id;Wa=pb.name;Xa=pb.type;return zb.yield(fb.revert(Xa,Wa,Cb,"HEAD"),2)}return zb.return(la.initializeFromStartCommit(La,fb,{showRevertButton:!0}))})}},{key:"initializeFromStartCommit",
value:function(la,La,fb){La=void 0===La?xb.MorphicDB.default:La;fb=void 0===fb?{}:fb;var pb=this,Cb,Wa,Xa,zb,kc,Tb,qc,wc,I,T,ta,Ca,Mb,vb,Ia,Qb,Kc,Rc,xc,Fa,nc,$a,Pa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Oa){switch(Oa.nextAddress){case 1:return Cb=fb,Wa=void 0===Cb.showRefs?!0:Cb.showRefs,Xa=pb.startCommit=la,zb=Xa._id,kc=Xa.type,Tb=Xa.name,qc=pb.getSubmorphNamed("version list spinner"),qc.visible=!0,qc.center=pb.get("version list").center,pb.db=La,Oa.yield(La.history(kc,Tb),2);
case 2:wc=Oa.yieldResult,I=wc.refs,T=wc.history,ta=zb,Ca=xb.graph.invert(T),Mb=xb.graph.hull(Ca,zb),vb={_id:!0},Ia=[la],Qb=$jscomp.makeIterator(Mb),Kc=Qb.next();case 3:if(Kc.done)return Fa=xb.arr.max(Ia,function(Kb){return Kb.timestamp}),ta=Fa._id,Oa.yield(La.log(ta,void 0,!0),7);Rc=Kc.value;return Oa.yield(La.log(Rc,void 0,!0,vb),6);case 6:xc=Oa.yieldResult;Ia.push.apply(Ia,$jscomp.arrayFromIterable(xc));xc.forEach(function(Kb){return vb[Kb._id]=!0});Kc=Qb.next();Oa.jumpTo(3);break;case 7:nc=Oa.yieldResult;
if(Wa)for($a in I);Pa=nc.map(function(Kb){var Ib=new xb.WorldVersion({reactsToPointer:!1,commit:Kb});Ib.update();return{isListItem:!0,morph:Ib,value:Kb}});pb.get("version list").items=Pa;qc.visible=!1;Oa.jumpToEnd()}})}}],[{key:"className",get:function(){return"WorldVersionViewer"}}],Ta,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"WorldVersionViewer",
version:"0.1.1-33"}}},{start:1841,end:5600})}(xb.Morph);pc=xb.WorldVersionViewer;xb.default=pc}}});