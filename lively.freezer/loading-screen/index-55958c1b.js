System.register(["./__root_module__-884b54f8.js"],function(){var za,cb,mb,Pb;return{setters:[function(tb){za=tb.bD;cb=tb.bB;mb=tb.i;Pb=tb.M}],execute:function(){var tb=lively.FreezerRuntime.recorderFor("ProtoTree/index.js");tb.Tree=za;tb.TreeData=cb;var Fc=function(Qc){var mc=lively.FreezerRuntime.recorderFor("ProtoTree/index.js"),ic=mc.hasOwnProperty("TestTreeData")&&"function"===typeof mc.TestTreeData?mc.TestTreeData:mc.TestTreeData=function(zc){zc&&zc[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return mb(ic,Qc,[{key:"display",value:function(zc){return zc.name}},{key:"isCollapsed",value:function(zc){return zc.isCollapsed}},{key:"collapse",value:function(zc,Dc){zc.isCollapsed=Dc}},{key:"getChildren",value:function(zc){return zc.isLeaf?null:zc.isCollapsed?[]:zc.children}},{key:"isLeaf",value:function(zc){return zc.isLeaf}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"TestTreeData"}}],mc,{pathInPackage:function(){return"index.js"},
unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoTree",version:"0.1.1-2"}}},{start:113,end:417})}(tb.TreeData);tb.TestTreeData=Fc;tb.TestTreeData=Fc;tb.TestTreeData=Fc;Fc=function(Qc){var mc=lively.FreezerRuntime.recorderFor("ProtoTree/index.js"),ic=mc.hasOwnProperty("ProtoTree")&&"function"===typeof mc.ProtoTree?mc.ProtoTree:mc.ProtoTree=function(zc){zc&&zc[Symbol.for("lively-instance-restorer")]||
this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return mb(ic,Qc,void 0,[{key:Symbol.for("__LivelyClassName__"),get:function(){return"ProtoTree"}},{key:"properties",get:function(){return{treeData:{initialize:function(){this.treeData=new tb.TestTreeData({name:"root",isCollapsed:!1,isLeaf:!1,children:[{name:"child 1",isLeaf:!0},{name:"child 2",isLeaf:!1,isCollapsed:!0,children:[{name:"child 2 - 1",isLeaf:!0}]},{name:"child 3",isLeaf:!1,isCollapsed:!1,children:[{name:"child 3 - 1",
isLeaf:!0},{name:"child 3 - 2",isLeaf:!0}]},{name:"child 4",isLeaf:!0}]})}},master:{initialize:function(){}}}}}],mc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"ProtoTree",version:"0.1.1-2"}}},{start:434,end:1297})}(tb.Tree);Fc=tb.ProtoTree;tb.default=Fc;Fc=lively.FreezerRuntime.recorderFor("FrameResizer/index.js");Fc.Morph=Pb;
var vc=function(Qc){var mc=lively.FreezerRuntime.recorderFor("FrameResizer/index.js"),ic=mc.hasOwnProperty("FrameResizer")&&"function"===typeof mc.FrameResizer?mc.FrameResizer:mc.FrameResizer=function(zc){zc&&zc[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return mb(ic,Qc,[{key:"onDrag",value:function(zc){var Dc=this.owner.left;zc=zc.positionIn(this).x;zc*="left"==this.direction?-1:1;this.owner.width+=zc;350>this.owner.width&&(zc+=
350-this.owner.width,this.owner.width=350);this.owner.left="left"==this.direction?Dc-zc:Dc}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"FrameResizer"}},{key:"properties",get:function(){return{direction:{type:"Enum",values:["left","right"]}}}}],mc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"FrameResizer",version:"0.1.1-24"}}},
{start:56,end:840})}(Fc.Morph);vc=Fc.FrameResizer;Fc.default=vc}}});