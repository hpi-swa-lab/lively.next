System.register(["./__root_module__-6d2e743c.js","./index-e6e24a9a.js","kld-intersections","./index-9d4f3df2.js"],function(){var Ma,rb,Db,hc,Kb;return{setters:[function(id){Ma=id.M;rb=id.be;Db=id.r;hc=id.i},function(id){Kb=id.e},function(){},function(){}],execute:function(){var id=lively.FreezerRuntime.recorderFor("VersionChecker/index.js");id.Morph=Ma;id.runCommand=rb;id.evalOnServer=Kb;id.resource=Db;var Zc=function(yd){var Kc=lively.FreezerRuntime.recorderFor("VersionChecker/index.js"),sc=
Kc.hasOwnProperty("VersionChecker")&&"function"===typeof Kc.VersionChecker?Kc.VersionChecker:Kc.VersionChecker=function(bd){bd&&bd[Symbol.for("lively-instance-restorer")]||this[Symbol.for("lively-instance-initialize")].apply(this,arguments)};return hc(sc,yd,[{key:"onLoad",value:function(){this.isComponent||this.withAllSubmorphsDo(function(bd){return bd.halosEnabled=!1})}},{key:"checkVersion",value:function(){this.reset();this.checkIfUpToDate()}},{key:"onMouseDown",value:function(bd){hc._get(Object.getPrototypeOf(sc.prototype),
"onMouseDown",this).call(this,bd);this.isComponent||this.checkVersion()}},{key:"relayout",value:function(){this.bottomLeft=this.world().visibleBounds().insetBy(10).bottomLeft()}},{key:"checkIfUpToDate",value:function(){var bd=this,hd,se,xe,ne,Rc,Pd,Hb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Gc){switch(Gc.nextAddress){case 1:return hd="git rev-parse master",Gc.yield(id.evalOnServer("System.baseURL").then(function(ud){return ud.replace("file://","")}),2);case 2:return se=Gc.yieldResult,
Gc.yield(id.runCommand("git fetch",{cwd:se}).whenDone(),3);case 3:return Gc.yield(id.runCommand(hd,{cwd:se}).whenDone(),4);case 4:return xe=Gc.yieldResult,ne=xe.stdout,Rc=ne.split("\n")[0],Gc.yield(id.resource("https://api.github.com/repos/LivelyKernel/lively.next/commits/master").readJson(),5);case 5:return Pd=Gc.yieldResult,Hb=Pd.sha,Rc!=Hb?Gc.return(bd.showOutdated(Rc.slice(0,6))):Gc.return(bd.showUpToDate(Rc.slice(0,6)))}})}},{key:"showOutdated",value:function(bd){var hd=this.ui,se=hd.checking,
xe=hd.outdated;hd.status.value=["Version: ",{},"["+bd+"]",{fontWeight:"bold"}," (Please update!)"];se.visible=se.isLayoutable=!1;xe.visible=xe.isLayoutable=!0}},{key:"showUpToDate",value:function(bd){var hd=this.ui,se=hd.checking,xe=hd.latest;hd.status.value=["Version: ",{},"["+bd+"]",{fontWeight:"bold"}];se.visible=se.isLayoutable=!1;xe.visible=xe.isLayoutable=!0}},{key:"reset",value:function(){var bd=this.ui,hd=bd.checking,se=bd.outdated,xe=bd.latest;bd.status.value="Checking version...";hd.visible=
hd.isLayoutable=!0;se.visible=xe.visible=se.isLayoutable=xe.isLayoutable=!1}}],[{key:Symbol.for("__LivelyClassName__"),get:function(){return"VersionChecker"}},{key:"properties",get:function(){return{isEpiMorph:{derived:!0,get:function(){return!this.isComponent}},respondsToVisibleWindow:{derived:!0,get:function(){return!this.isComponent}},ui:{derived:!0,get:function(){return{status:this.get("version status label"),checking:this.get("loading indicator"),outdated:this.get("icon outdated"),latest:this.get("icon latest")}}}}}}],
Kc,{pathInPackage:function(){return"index.js"},unsubscribeFromToplevelDefinitionChanges:function(){return function(){}},subscribeToToplevelDefinitionChanges:function(){return function(){}},package:function(){return{name:"VersionChecker",version:"0.1.1-20"}}},{start:232,end:2729})}(id.Morph);Zc=id.VersionChecker;id.default=Zc}}});