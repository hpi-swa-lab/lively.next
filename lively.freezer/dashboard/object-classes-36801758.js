System.register(["./__root_module__-aa47e4cd.js","kld-intersections"],function(Ca){var ub,Tb,lc,mc,Zd,id,ce,kd,$c,Cd,Fd,pe,Xd,nd,eb;return{setters:[function(Hb){ub=Hb.s;Tb=Hb.P;lc=Hb.a4;mc=Hb.p;Zd=Hb.bE;id=Hb.B;ce=Hb.bF;kd=Hb.r;$c=Hb.aQ;Cd=Hb.bG;Fd=Hb.bH;pe=Hb.bI;Xd=Hb.bJ;nd=Hb.bK;eb=Hb.n},function(){}],execute:function(){function Hb(Xc,gd,bc,ad){ad=void 0===ad?{}:ad;ad=ad.package||qc.ObjectPackage.lookupPackageForObject(Xc,ad);if(!ad)throw Error("Object is not part of an object package: "+Xc);
return ad.addScript(Xc,gd,bc)}function Cc(Xc,gd){gd=qc.normalizeOptions(gd).System;Xc=(Xc=Xc[Symbol.for("lively-module-meta")])?Xc.package.name:null;return(gd=(Xc?qc.lookupPackage(gd,Xc):{}).pkg)?!!qc.ObjectPackage.forSystemPackage(gd):!1}Ca({addScript:Hb,isObjectClass:Cc});var qc=lively.FreezerRuntime.recorderFor("lively.classes/object-classes.js");qc.normalizeOptions=function(Xc){Xc=Object.assign({baseURL:qc.defaultBaseURL,System:System},Xc);Xc.baseURL=Xc.baseURL.replace(/\/$/,"");return Xc};qc.addScript=
Hb;qc.isObjectClass=Cc;qc.string=ub;qc.Path=Tb;qc.arr=lc;qc.parse=mc;qc.isValidIdentifier=Zd;qc.stringify=id;qc.parseFunction=ce;qc.resource=kd;qc.runEval=$c;qc.scripting=Cd;qc.ExportLookup=Fd;var ld=qc.scripting;qc.ensurePackage=ld.ensurePackage;qc.registerPackage=ld.registerPackage;qc.importPackage=ld.importPackage;qc.lookupPackage=ld.lookupPackage;qc.module=ld.module;qc.ImportInjector=ld.ImportInjector;qc.RuntimeSourceDescriptor=pe;qc.toJsIdentifier=Xd;qc.adoptObject=nd;qc.classToFunctionTransform=
eb;qc.objectPackageSym=Symbol.for("lively-object-package-data");qc.defaultBaseURL="local://lively-object-modules";qc.globalClasses=Object.keys(System.global).map(function(Xc){Xc=System.global[Xc];return"function"===typeof Xc&&Xc.name&&Xc}).filter(Boolean);qc.addScript=Hb;qc.addScript=Hb;qc.isObjectClass=Cc;qc.isObjectClass=Cc;qc._packageStore=qc._packageStore||{};ld=function(Xc,gd){this._id=Xc;this.options=qc.normalizeOptions(gd)};ld.lookupPackageForObject=function(Xc,gd){return this.lookupPackageForClass(Xc.constructor,
gd)};ld.lookupPackageForClass=function(Xc,gd){gd=qc.normalizeOptions(gd).System;Xc=(Xc=Xc[Symbol.for("lively-module-meta")])?Xc.package.name:null;return(gd=(Xc?qc.lookupPackage(gd,Xc):{}).pkg)?qc.ObjectPackage.forSystemPackage(gd):null};ld.forSystemPackage=function(Xc){return this.packageStore[Xc.name]};ld.withId=function(Xc,gd){return this.packageStore[Xc]||(this.packageStore[Xc]=new this(Xc,gd))};ld.prototype.resource=function(Xc){Xc=void 0===Xc?"":Xc;return qc.resource(this.packageURL).join(Xc)};
ld.prototype.load=function(){return qc.importPackage(this.System,this.packageURL)};ld.prototype.ensureExistance=function(){var Xc=this,gd,bc,ad,ed,Id,hc,Qb,xb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Nb){switch(Nb.nextAddress){case 1:return gd=Xc.resource("/"),Nb.yield(gd.exists(),2);case 2:if(Nb.yieldResult)return Nb.return();bc=[{resource:gd}];ad=[{resource:Xc.resource("package.json"),content:JSON.stringify(Xc.config,null,2)}];return Nb.yield(Promise.all(bc.map(function(kb){return kb.resource.mkdir()})),
3);case 3:return Nb.yield(Promise.all(ad.map(function(kb){var Db;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Rb){switch(Rb.nextAddress){case 1:return Rb.yield(kb.resource.exists(),2);case 2:if(!(Db=!Rb.yieldResult)){Rb.jumpTo(3);break}return Rb.yield(kb.resource.write(kb.content),4);case 4:Db=Rb.yieldResult;case 3:return Rb.return(Db)}})})),4);case 4:return Nb.yield(Xc.objectModule.ensureExistance(),5);case 5:return ed=Xc,Id=ed.System,hc=ed.packageURL,Qb=ed.config,Nb.yield(qc.ensurePackage(Id,
hc),6);case 6:return xb=Nb.yieldResult,xb.registerWithConfig(Qb),console.log(Xc.packageURL+" REGISTERED"),Nb.return(Xc)}})};ld.prototype.ensureObjectClass=function(Xc){var gd=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(bc){return 1==bc.nextAddress?bc.yield(gd.ensureExistance(),2):bc.return(gd.objectModule.ensureObjectClass(Xc))})};ld.prototype.adoptObject=function(Xc){var gd=this,bc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ad){if(1==ad.nextAddress)return gd.objectClass===
Xc.constructor?ad.return():ad.yield(gd.ensureObjectClass(Xc.constructor),2);bc=ad.yieldResult;qc.adoptObject(Xc,bc);ad.jumpToEnd()})};ld.prototype.addScript=function(Xc,gd,bc){return this.objectModule.addScript(Xc,gd,bc)};ld.prototype.remove=function(){this.systemPackage.remove();delete qc.ObjectPackage.packageStore[this.id];return this.resource().remove()};ld.prototype.renameObjectClass=function(Xc,gd){gd=void 0===gd?[]:gd;var bc=this,ad,ed,Id,hc,Qb,xb,Nb,kb,Db,Rb,vc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(jc){if(1==
jc.nextAddress){ad=bc;ed=ad.objectClass;Id=ad.System;if(!ed||ed.className===Xc)return jc.return(ed);if(!qc.isValidIdentifier(Xc))throw Error(Xc+" is not a valid name for a class");Qb=hc=qc.RuntimeSourceDescriptor.for(ed,Id);xb=Qb.source;Nb=Qb.ast;kb=Nb.id;Db=kb.start;Rb=kb.end;return jc.yield(hc.changeSource(xb.slice(0,Db)+Xc+xb.slice(Rb)),2)}vc=bc.objectClass;gd.forEach(function(qb){qb.constructor=vc;qb.__proto__=vc.prototype});return jc.return(vc)})};ld.prototype.fork=function(Xc,gd){var bc=this,
ad,ed,Id,hc,Qb,xb,Nb,kb,Db,Rb,vc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(jc){switch(jc.nextAddress){case 1:return ad=bc,ed=ad.System,Id=ad.baseURL,hc=ad.objectClass,gd=Object.assign({System:ed,baseURL:Id},gd),Qb=qc.RuntimeSourceDescriptor.for(hc),xb=Qb._renamedSource(Xc),Nb=xb.moduleSource,kb=qc.ObjectPackage.withId(Xc,gd),jc.yield(kb.ensureExistance(),2);case 2:return Db=kb,Rb=Db.objectModule,vc=Rb.systemModule,jc.yield(vc.load({format:"esm"}),3);case 3:return jc.yield(vc.changeSource(Nb),
4);case 4:return jc.return(kb)}})};$jscomp.global.Object.defineProperties(ld.prototype,{id:{configurable:!0,enumerable:!0,get:function(){return this._id}},name:{configurable:!0,enumerable:!0,get:function(){return this.id}},System:{configurable:!0,enumerable:!0,get:function(){return this.options.System}},baseURL:{configurable:!0,enumerable:!0,get:function(){return this.options.baseURL}},packageURL:{configurable:!0,enumerable:!0,get:function(){return this.baseURL+("/"+this.id)}},config:{configurable:!0,
enumerable:!0,get:function(){return{name:this.name,version:"0.1.0",lively:{isObjectPackage:!0}}}},systemPackage:{configurable:!0,enumerable:!0,get:function(){return qc.lookupPackage(this.System,this.packageURL,!0).pkg}},objectModule:{configurable:!0,enumerable:!0,get:function(){return this._objectModule||(this._objectModule=new qc.ObjectModule("index.js",this))}},objectClass:{configurable:!0,enumerable:!0,get:function(){return this.objectModule.objectClass}}});$jscomp.global.Object.defineProperties(ld,
{packageStore:{configurable:!0,enumerable:!0,get:function(){return this._packageStore||(this._packageStore=qc._packageStore)}}});Ca("default",ld);qc.ObjectPackage=ld;var wd=function(Xc,gd){if(!Xc)throw Error("ObjectModule needs package!");if(!gd)throw Error("ObjectModule needs package!");this._moduleName=Xc;this._objectPackage=gd};wd.prototype.read=function(){return this.resource.read()};wd.prototype.write=function(Xc){return this.resource.write(Xc)};wd.prototype.ensureExistance=function(){var Xc=
this,gd,bc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(ad){switch(ad.nextAddress){case 1:return gd=Xc.resource,ad.yield(gd.exists(),2);case 2:if(ad.yieldResult){ad.jumpTo(3);break}return ad.yield(gd.write("'format esm';\n"),4);case 4:bc={},Xc.System.config({meta:(bc[Xc.url]={format:"esm"},bc)});case 3:return ad.return(Xc)}})};wd.prototype.ensureObjectClass=function(Xc){var gd=this,bc=this.objectClass;return bc&&bc.prototype.__proto__===Xc.prototype?bc:Promise.resolve(this.ensureObjectClassSource(Xc)).then(function(ad){var ed=
ad.source,Id=ad.moduleId,hc=ad.className,Qb=ad.bindings,xb=gd.System;ad=qc.module(xb,Id);if(Qb)for(var Nb in Qb)ad.define(Nb,Qb[Nb]);ed=qc.runEval(ed,{classTransform:qc.classToFunctionTransform,sync:!0,targetModule:Id,System:xb});if(ed.isError)throw ed.value;ed=ad.recorder[hc];if(!ed)throw Error("Failed to define class "+hc+" in "+Id);return ed})};wd.prototype.ensureObjectClassSource=function(Xc){return this.createDefaultClassDeclaration(Xc)};wd.prototype.createDefaultClassDeclaration=function(Xc){Xc=
void 0===Xc?Object:Xc;var gd=this,bc,ad,ed,Id,hc,Qb,xb,Nb,kb,Db,Rb,vc,jc,qb,rb,cc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Vc){switch(Vc.nextAddress){case 1:bc=gd;ad=bc.System;ed=bc.systemModule;Id=bc.objectPackage;hc=qc.string.capitalize(qc.toJsIdentifier(Id.id));Qb=Xc.className;xb=!Qb;Nb=qc.globalClasses.includes(Xc);kb="";Db=null;if(xb){Qb="__anonymous_superclass__";Rb={};Db=(Rb[Qb]=Xc,Rb);Vc.jumpTo(2);break}if(Nb){Vc.jumpTo(2);break}return Vc.yield(qc.ExportLookup.findExportOfValue(Xc,
ad),4);case 4:(vc=Vc.yieldResult)?(jc=qc.ImportInjector.run(ad,ed.id,ed.package(),"",vc),qb=jc.standaloneImport,kb+=qb+"\n\n"):(rb={},Db=(rb[Qb]=Xc,rb));case 2:return hc===Qb&&(hc="Object"+hc),cc="Object"===Qb?"class "+hc+" {}\n":"class "+hc+" extends "+Qb+" {}\n",kb+="export default "+cc+"\n",Vc.yield(ed.changeSource(kb),5);case 5:return Vc.yield(ed.load(),6);case 6:return Vc.return({source:kb,className:hc,moduleId:gd.url,bindings:Db})}})};wd.prototype.addScript=function(Xc,gd,bc){var ad=this,ed,
Id,hc,Qb,xb,Nb,kb,Db,Rb,vc,jc,qb,rb,cc,Vc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Bc){switch(Bc.nextAddress){case 1:if(Xc.constructor===ad.objectClass){ed=Xc.constructor;Bc.jumpTo(2);break}return Bc.yield(ad.ensureObjectClass(Xc.constructor),3);case 3:ed=Bc.yieldResult;case 2:Id=ed;hc="function"===typeof gd?String(gd):gd;Qb=qc.parseFunction(hc);xb=qc.RuntimeSourceDescriptor.for(Id,ad.System);bc||(bc=qc.Path("id.name").get(Qb));if(!bc)throw Error("No name, cannot add "+qc.string.truncate(hc,
30).replace(/\n/g,"")+"!");Nb=qc.toJsIdentifier(bc);console.assert("FunctionExpression"===Qb.type||"ArrowFunctionExpression"===Qb.type,"not a function expression but: "+Qb.type);kb=Qb.params.map(function(xc){return hc.slice(xc.start,xc.end)});Db="BlockStatement"===Qb.body.type?hc.slice(Qb.body.start,Qb.body.end):"{ return "+hc.slice(Qb.body.start,Qb.body.end)+" }";Rb=Nb+"("+kb.join(",")+") "+Db;"ArrowFunctionExpression"===Qb.type&&(Qb.type="FunctionExpression");vc=xb.source;jc=xb.ast;if(!jc)throw Error("cannot find class decl of "+
xb.module.id);(qb=jc.body.body.find(function(xc){return xc.key.name===Nb&&!xc.static}))?vc=vc.slice(0,qb.start)+Rb+vc.slice(qb.end):(rb=vc.lastIndexOf("}"),cc=vc.slice(0,rb),Vc=vc.slice(rb),/\n\s*$/m.test(cc)||(cc+="\n"),Rb=qc.string.changeIndent(Rb,"  ",1),/^[ ]*\n/m.test(Vc)||(Vc="\n"+Vc),vc=cc+Rb+Vc);return Bc.yield(xb.changeSource(vc),4);case 4:return Bc.return({script:Id.prototype[Nb],klass:Id,module:xb.module.id,methodName:Nb})}})};$jscomp.global.Object.defineProperties(wd.prototype,{objectPackage:{configurable:!0,
enumerable:!0,get:function(){return this._objectPackage}},objectClass:{configurable:!0,enumerable:!0,get:function(){var Xc=this.systemModule;return Xc.isLoaded()?Xc.System.get(Xc.id).default:null}},moduleName:{configurable:!0,enumerable:!0,get:function(){return this._moduleName}},systemModule:{configurable:!0,enumerable:!0,get:function(){return qc.module(this.System,this.url)}},System:{configurable:!0,enumerable:!0,get:function(){return this.objectPackage.System}},resource:{configurable:!0,enumerable:!0,
get:function(){return this.objectPackage.resource(this.moduleName)}},url:{configurable:!0,enumerable:!0,get:function(){return this.resource.url}}});qc.ObjectModule=wd;qc.default=ld}}});