System.register(["./__root_module__-a4bfb546.js","kld-intersections"],function(ta){var cb,mb,Sb,Jb,sd,vc,wd,wc,Cc,Gc,Cd,pe,Je,ce,Qb;return{setters:[function(pc){cb=pc.a7;mb=pc.P;Sb=pc.a6;Jb=pc.p;sd=pc.bE;vc=pc.B;wd=pc.bF;wc=pc.r;Cc=pc.aU;Gc=pc.bG;Cd=pc.bH;pe=pc.bI;Je=pc.bJ;ce=pc.bK;Qb=pc.l},function(){}],execute:function(){function pc(Dc,bc,Ib,gc){gc=void 0===gc?{}:gc;gc=gc.package||Rb.ObjectPackage.lookupPackageForObject(Dc,gc);if(!gc)throw Error("Object is not part of an object package: "+Dc);
return gc.addScript(Dc,bc,Ib)}function ld(Dc,bc){bc=Rb.normalizeOptions(bc).System;Dc=(Dc=Dc[Symbol.for("lively-module-meta")])?Dc.package.name:null;return(bc=(Dc?Rb.lookupPackage(bc,Dc):{}).pkg)?!!Rb.ObjectPackage.forSystemPackage(bc):!1}ta({addScript:pc,isObjectClass:ld});var Rb=lively.FreezerRuntime.recorderFor("lively.classes/object-classes.js");Rb.normalizeOptions=function(Dc){Dc=Object.assign({baseURL:Rb.defaultBaseURL,System:System},Dc);Dc.baseURL=Dc.baseURL.replace(/\/$/,"");return Dc};Rb.addScript=
pc;Rb.isObjectClass=ld;Rb.string=cb;Rb.Path=mb;Rb.arr=Sb;Rb.parse=Jb;Rb.isValidIdentifier=sd;Rb.stringify=vc;Rb.parseFunction=wd;Rb.resource=wc;Rb.runEval=Cc;Rb.scripting=Gc;Rb.ExportLookup=Cd;var xd=Rb.scripting;Rb.ensurePackage=xd.ensurePackage;Rb.registerPackage=xd.registerPackage;Rb.importPackage=xd.importPackage;Rb.lookupPackage=xd.lookupPackage;Rb.module=xd.module;Rb.ImportInjector=xd.ImportInjector;Rb.RuntimeSourceDescriptor=pe;Rb.toJsIdentifier=Je;Rb.adoptObject=ce;Rb.classToFunctionTransform=
Qb;Rb.objectPackageSym=Symbol.for("lively-object-package-data");Rb.defaultBaseURL="local://lively-object-modules";Rb.globalClasses=Object.keys(System.global).map(function(Dc){Dc=System.global[Dc];return"function"===typeof Dc&&Dc.name&&Dc}).filter(Boolean);Rb.addScript=pc;Rb.addScript=pc;Rb.isObjectClass=ld;Rb.isObjectClass=ld;Rb._packageStore=Rb._packageStore||{};xd=function(Dc,bc){this._id=Dc;this.options=Rb.normalizeOptions(bc)};xd.lookupPackageForObject=function(Dc,bc){return this.lookupPackageForClass(Dc.constructor,
bc)};xd.lookupPackageForClass=function(Dc,bc){bc=Rb.normalizeOptions(bc).System;Dc=(Dc=Dc[Symbol.for("lively-module-meta")])?Dc.package.name:null;return(bc=(Dc?Rb.lookupPackage(bc,Dc):{}).pkg)?Rb.ObjectPackage.forSystemPackage(bc):null};xd.forSystemPackage=function(Dc){return this.packageStore[Dc.name]};xd.withId=function(Dc,bc){return this.packageStore[Dc]||(this.packageStore[Dc]=new this(Dc,bc))};xd.prototype.resource=function(Dc){Dc=void 0===Dc?"":Dc;return Rb.resource(this.packageURL).join(Dc)};
xd.prototype.load=function(){return Rb.importPackage(this.System,this.packageURL)};xd.prototype.ensureExistance=function(){var Dc=this,bc,Ib,gc,sc,dd,bd,oc,$a;return $jscomp.asyncExecutePromiseGeneratorProgram(function(fb){switch(fb.nextAddress){case 1:return bc=Dc.resource("/"),fb.yield(bc.exists(),2);case 2:if(fb.yieldResult)return fb.return();Ib=[{resource:bc}];gc=[{resource:Dc.resource("package.json"),content:JSON.stringify(Dc.config,null,2)}];return fb.yield(Promise.all(Ib.map(function(ya){return ya.resource.mkdir()})),
3);case 3:return fb.yield(Promise.all(gc.map(function(ya){var Ca;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Aa){switch(Aa.nextAddress){case 1:return Aa.yield(ya.resource.exists(),2);case 2:if(!(Ca=!Aa.yieldResult)){Aa.jumpTo(3);break}return Aa.yield(ya.resource.write(ya.content),4);case 4:Ca=Aa.yieldResult;case 3:return Aa.return(Ca)}})})),4);case 4:return fb.yield(Dc.objectModule.ensureExistance(),5);case 5:return sc=Dc,dd=sc.System,bd=sc.packageURL,oc=sc.config,fb.yield(Rb.ensurePackage(dd,
bd),6);case 6:return $a=fb.yieldResult,$a.registerWithConfig(oc),console.log(Dc.packageURL+" REGISTERED"),fb.return(Dc)}})};xd.prototype.ensureObjectClass=function(Dc){var bc=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ib){return 1==Ib.nextAddress?Ib.yield(bc.ensureExistance(),2):Ib.return(bc.objectModule.ensureObjectClass(Dc))})};xd.prototype.adoptObject=function(Dc){var bc=this,Ib;return $jscomp.asyncExecutePromiseGeneratorProgram(function(gc){if(1==gc.nextAddress)return bc.objectClass===
Dc.constructor?gc.return():gc.yield(bc.ensureObjectClass(Dc.constructor),2);Ib=gc.yieldResult;Rb.adoptObject(Dc,Ib);gc.jumpToEnd()})};xd.prototype.addScript=function(Dc,bc,Ib){return this.objectModule.addScript(Dc,bc,Ib)};xd.prototype.remove=function(){this.systemPackage.remove();delete Rb.ObjectPackage.packageStore[this.id];return this.resource().remove()};xd.prototype.renameObjectClass=function(Dc,bc){bc=void 0===bc?[]:bc;var Ib=this,gc,sc,dd,bd,oc,$a,fb,ya,Ca,Aa,xa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Oa){if(1==
Oa.nextAddress){gc=Ib;sc=gc.objectClass;dd=gc.System;if(!sc||sc[Symbol.for("__LivelyClassName__")]===Dc)return Oa.return(sc);if(!Rb.isValidIdentifier(Dc))throw Error(Dc+" is not a valid name for a class");oc=bd=Rb.RuntimeSourceDescriptor.for(sc,dd);$a=oc.source;fb=oc.ast;ya=fb.id;Ca=ya.start;Aa=ya.end;return Oa.yield(bd.changeSource($a.slice(0,Ca)+Dc+$a.slice(Aa)),2)}xa=Ib.objectClass;bc.forEach(function(wb){wb.constructor=xa;wb.__proto__=xa.prototype});return Oa.return(xa)})};xd.prototype.fork=function(Dc,
bc){var Ib=this,gc,sc,dd,bd,oc,$a,fb,ya,Ca,Aa,xa;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Oa){switch(Oa.nextAddress){case 1:return gc=Ib,sc=gc.System,dd=gc.baseURL,bd=gc.objectClass,bc=Object.assign({System:sc,baseURL:dd},bc),oc=Rb.RuntimeSourceDescriptor.for(bd),$a=oc._renamedSource(Dc),fb=$a.moduleSource,ya=Rb.ObjectPackage.withId(Dc,bc),Oa.yield(ya.ensureExistance(),2);case 2:return Ca=ya,Aa=Ca.objectModule,xa=Aa.systemModule,Oa.yield(xa.load({format:"esm"}),3);case 3:return Oa.yield(xa.changeSource(fb),
4);case 4:return Oa.return(ya)}})};$jscomp.global.Object.defineProperties(xd.prototype,{id:{configurable:!0,enumerable:!0,get:function(){return this._id}},name:{configurable:!0,enumerable:!0,get:function(){return this.id}},System:{configurable:!0,enumerable:!0,get:function(){return this.options.System}},baseURL:{configurable:!0,enumerable:!0,get:function(){return this.options.baseURL}},packageURL:{configurable:!0,enumerable:!0,get:function(){return this.baseURL+("/"+this.id)}},config:{configurable:!0,
enumerable:!0,get:function(){return{name:this.name,version:"0.1.0",lively:{isObjectPackage:!0}}}},systemPackage:{configurable:!0,enumerable:!0,get:function(){return Rb.lookupPackage(this.System,this.packageURL,!0).pkg}},objectModule:{configurable:!0,enumerable:!0,get:function(){return this._objectModule||(this._objectModule=new Rb.ObjectModule("index.js",this))}},objectClass:{configurable:!0,enumerable:!0,get:function(){return this.objectModule.objectClass}}});$jscomp.global.Object.defineProperties(xd,
{packageStore:{configurable:!0,enumerable:!0,get:function(){return this._packageStore||(this._packageStore=Rb._packageStore)}}});ta("default",xd);Rb.ObjectPackage=xd;var Hd=function(Dc,bc){if(!Dc)throw Error("ObjectModule needs package!");if(!bc)throw Error("ObjectModule needs package!");this._moduleName=Dc;this._objectPackage=bc};Hd.prototype.read=function(){return this.resource.read()};Hd.prototype.write=function(Dc){return this.resource.write(Dc)};Hd.prototype.ensureExistance=function(){var Dc=
this,bc,Ib;return $jscomp.asyncExecutePromiseGeneratorProgram(function(gc){switch(gc.nextAddress){case 1:return bc=Dc.resource,gc.yield(bc.exists(),2);case 2:if(gc.yieldResult){gc.jumpTo(3);break}return gc.yield(bc.write("'format esm';\n"),4);case 4:Ib={},Dc.System.config({meta:(Ib[Dc.url]={format:"esm"},Ib)});case 3:return gc.return(Dc)}})};Hd.prototype.ensureObjectClass=function(Dc){var bc=this,Ib=this.objectClass;return Ib&&Ib.prototype.__proto__===Dc.prototype?Ib:Promise.resolve(this.ensureObjectClassSource(Dc)).then(function(gc){var sc=
gc.source,dd=gc.moduleId,bd=gc.className,oc=gc.bindings,$a=bc.System;gc=Rb.module($a,dd);if(oc)for(var fb in oc)gc.define(fb,oc[fb]);sc=Rb.runEval(sc,{classTransform:Rb.classToFunctionTransform,sync:!0,targetModule:dd,System:$a});if(sc.isError)throw sc.value;sc=gc.recorder[bd];if(!sc)throw Error("Failed to define class "+bd+" in "+dd);return sc})};Hd.prototype.ensureObjectClassSource=function(Dc){return this.createDefaultClassDeclaration(Dc)};Hd.prototype.createDefaultClassDeclaration=function(Dc){Dc=
void 0===Dc?Object:Dc;var bc=this,Ib,gc,sc,dd,bd,oc,$a,fb,ya,Ca,Aa,xa,Oa,wb,dc,Ya;return $jscomp.asyncExecutePromiseGeneratorProgram(function(jb){switch(jb.nextAddress){case 1:Ib=bc;gc=Ib.System;sc=Ib.systemModule;dd=Ib.objectPackage;bd=Rb.string.capitalize(Rb.toJsIdentifier(dd.id));oc=Dc[Symbol.for("__LivelyClassName__")];$a=!oc;fb=Rb.globalClasses.includes(Dc);ya="";Ca=null;if($a){oc="__anonymous_superclass__";Aa={};Ca=(Aa[oc]=Dc,Aa);jb.jumpTo(2);break}if(fb){jb.jumpTo(2);break}return jb.yield(Rb.ExportLookup.findExportOfValue(Dc,
gc),4);case 4:(xa=jb.yieldResult)?(Oa=Rb.ImportInjector.run(gc,sc.id,sc.package(),"",xa),wb=Oa.standaloneImport,ya+=wb+"\n\n"):(dc={},Ca=(dc[oc]=Dc,dc));case 2:return bd===oc&&(bd="Object"+bd),Ya="Object"===oc?"class "+bd+" {}\n":"class "+bd+" extends "+oc+" {}\n",ya+="export default "+Ya+"\n",jb.yield(sc.changeSource(ya),5);case 5:return jb.yield(sc.load(),6);case 6:return jb.return({source:ya,className:bd,moduleId:bc.url,bindings:Ca})}})};Hd.prototype.addScript=function(Dc,bc,Ib){var gc=this,sc,
dd,bd,oc,$a,fb,ya,Ca,Aa,xa,Oa,wb,dc,Ya,jb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Za){switch(Za.nextAddress){case 1:if(Dc.constructor===gc.objectClass){sc=Dc.constructor;Za.jumpTo(2);break}return Za.yield(gc.ensureObjectClass(Dc.constructor),3);case 3:sc=Za.yieldResult;case 2:dd=sc;bd="function"===typeof bc?String(bc):bc;oc=Rb.parseFunction(bd);$a=Rb.RuntimeSourceDescriptor.for(dd,gc.System);Ib||(Ib=Rb.Path("id.name").get(oc));if(!Ib)throw Error("No name, cannot add "+Rb.string.truncate(bd,
30).replace(/\n/g,"")+"!");fb=Rb.toJsIdentifier(Ib);console.assert("FunctionExpression"===oc.type||"ArrowFunctionExpression"===oc.type,"not a function expression but: "+oc.type);ya=oc.params.map(function(U){return bd.slice(U.start,U.end)});Ca="BlockStatement"===oc.body.type?bd.slice(oc.body.start,oc.body.end):"{ return "+bd.slice(oc.body.start,oc.body.end)+" }";Aa=fb+"("+ya.join(",")+") "+Ca;"ArrowFunctionExpression"===oc.type&&(oc.type="FunctionExpression");xa=$a.source;Oa=$a.ast;if(!Oa)throw Error("cannot find class decl of "+
$a.module.id);(wb=Oa.body.body.find(function(U){return U.key.name===fb&&!U.static}))?xa=xa.slice(0,wb.start)+Aa+xa.slice(wb.end):(dc=xa.lastIndexOf("}"),Ya=xa.slice(0,dc),jb=xa.slice(dc),/\n\s*$/m.test(Ya)||(Ya+="\n"),Aa=Rb.string.changeIndent(Aa,"  ",1),/^[ ]*\n/m.test(jb)||(jb="\n"+jb),xa=Ya+Aa+jb);return Za.yield($a.changeSource(xa),4);case 4:return Za.return({script:dd.prototype[fb],klass:dd,module:$a.module.id,methodName:fb})}})};$jscomp.global.Object.defineProperties(Hd.prototype,{objectPackage:{configurable:!0,
enumerable:!0,get:function(){return this._objectPackage}},objectClass:{configurable:!0,enumerable:!0,get:function(){var Dc=this.systemModule;return Dc.isLoaded()?Dc.System.get(Dc.id).default:null}},moduleName:{configurable:!0,enumerable:!0,get:function(){return this._moduleName}},systemModule:{configurable:!0,enumerable:!0,get:function(){return Rb.module(this.System,this.url)}},System:{configurable:!0,enumerable:!0,get:function(){return this.objectPackage.System}},resource:{configurable:!0,enumerable:!0,
get:function(){return this.objectPackage.resource(this.moduleName)}},url:{configurable:!0,enumerable:!0,get:function(){return this.resource.url}}});Rb.ObjectModule=Hd;Rb.default=xd}}});