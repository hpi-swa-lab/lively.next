System.register(["./__root_module__-7cbd94df.js","kld-intersections"],function(Da){var Ab,Rb,jc,cc,je,fd,Yd,jd,Pc,vd,Ld,ge,Td,md,Za;return{setters:[function(Db){Ab=Db.s;Rb=Db.P;jc=Db.a6;cc=Db.p;je=Db.bG;fd=Db.D;Yd=Db.bH;jd=Db.r;Pc=Db.aS;vd=Db.bI;Ld=Db.bJ;ge=Db.bK;Td=Db.bL;md=Db.bM;Za=Db.n},function(){}],execute:function(){function Db(Yb,qc,Ob,Hc){Hc=void 0===Hc?{}:Hc;Hc=Hc.package||ic.ObjectPackage.lookupPackageForObject(Yb,Hc);if(!Hc)throw Error("Object is not part of an object package: "+Yb);
return Hc.addScript(Yb,qc,Ob)}function ac(Yb,qc){qc=ic.normalizeOptions(qc).System;Yb=(Yb=Yb[Symbol.for("lively-module-meta")])?Yb.package.name:null;return(qc=(Yb?ic.lookupPackage(qc,Yb):{}).pkg)?!!ic.ObjectPackage.forSystemPackage(qc):!1}Da({addScript:Db,isObjectClass:ac});var ic=lively.FreezerRuntime.recorderFor("lively.classes/object-classes.js");ic.normalizeOptions=function(Yb){Yb=Object.assign({baseURL:ic.defaultBaseURL,System:System},Yb);Yb.baseURL=Yb.baseURL.replace(/\/$/,"");return Yb};ic.addScript=
Db;ic.isObjectClass=ac;ic.string=Ab;ic.Path=Rb;ic.arr=jc;ic.parse=cc;ic.isValidIdentifier=je;ic.stringify=fd;ic.parseFunction=Yd;ic.resource=jd;ic.runEval=Pc;ic.scripting=vd;ic.ExportLookup=Ld;var gd=ic.scripting;ic.ensurePackage=gd.ensurePackage;ic.registerPackage=gd.registerPackage;ic.importPackage=gd.importPackage;ic.lookupPackage=gd.lookupPackage;ic.module=gd.module;ic.ImportInjector=gd.ImportInjector;ic.RuntimeSourceDescriptor=ge;ic.toJsIdentifier=Td;ic.adoptObject=md;ic.classToFunctionTransform=
Za;ic.objectPackageSym=Symbol.for("lively-object-package-data");ic.defaultBaseURL="local://lively-object-modules";ic.globalClasses=Object.keys(System.global).map(function(Yb){Yb=System.global[Yb];return"function"===typeof Yb&&Yb.name&&Yb}).filter(Boolean);ic.addScript=Db;ic.addScript=Db;ic.isObjectClass=ac;ic.isObjectClass=ac;ic._packageStore=ic._packageStore||{};gd=function(Yb,qc){this._id=Yb;this.options=ic.normalizeOptions(qc)};gd.lookupPackageForObject=function(Yb,qc){return this.lookupPackageForClass(Yb.constructor,
qc)};gd.lookupPackageForClass=function(Yb,qc){qc=ic.normalizeOptions(qc).System;Yb=(Yb=Yb[Symbol.for("lively-module-meta")])?Yb.package.name:null;return(qc=(Yb?ic.lookupPackage(qc,Yb):{}).pkg)?ic.ObjectPackage.forSystemPackage(qc):null};gd.forSystemPackage=function(Yb){return this.packageStore[Yb.name]};gd.withId=function(Yb,qc){return this.packageStore[Yb]||(this.packageStore[Yb]=new this(Yb,qc))};gd.prototype.resource=function(Yb){Yb=void 0===Yb?"":Yb;return ic.resource(this.packageURL).join(Yb)};
gd.prototype.load=function(){return ic.importPackage(this.System,this.packageURL)};gd.prototype.ensureExistance=function(){var Yb=this,qc,Ob,Hc,Yc,cd,$b,pb,xc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Lc){switch(Lc.nextAddress){case 1:return qc=Yb.resource("/"),Lc.yield(qc.exists(),2);case 2:if(Lc.yieldResult)return Lc.return();Ob=[{resource:qc}];Hc=[{resource:Yb.resource("package.json"),content:JSON.stringify(Yb.config,null,2)}];return Lc.yield(Promise.all(Ob.map(function(Ga){return Ga.resource.mkdir()})),
3);case 3:return Lc.yield(Promise.all(Hc.map(function(Ga){var Ra;return $jscomp.asyncExecutePromiseGeneratorProgram(function(rb){switch(rb.nextAddress){case 1:return rb.yield(Ga.resource.exists(),2);case 2:if(!(Ra=!rb.yieldResult)){rb.jumpTo(3);break}return rb.yield(Ga.resource.write(Ga.content),4);case 4:Ra=rb.yieldResult;case 3:return rb.return(Ra)}})})),4);case 4:return Lc.yield(Yb.objectModule.ensureExistance(),5);case 5:return Yc=Yb,cd=Yc.System,$b=Yc.packageURL,pb=Yc.config,Lc.yield(ic.ensurePackage(cd,
$b),6);case 6:return xc=Lc.yieldResult,xc.registerWithConfig(pb),console.log(Yb.packageURL+" REGISTERED"),Lc.return(Yb)}})};gd.prototype.ensureObjectClass=function(Yb){var qc=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ob){return 1==Ob.nextAddress?Ob.yield(qc.ensureExistance(),2):Ob.return(qc.objectModule.ensureObjectClass(Yb))})};gd.prototype.adoptObject=function(Yb){var qc=this,Ob;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Hc){if(1==Hc.nextAddress)return qc.objectClass===
Yb.constructor?Hc.return():Hc.yield(qc.ensureObjectClass(Yb.constructor),2);Ob=Hc.yieldResult;ic.adoptObject(Yb,Ob);Hc.jumpToEnd()})};gd.prototype.addScript=function(Yb,qc,Ob){return this.objectModule.addScript(Yb,qc,Ob)};gd.prototype.remove=function(){this.systemPackage.remove();delete ic.ObjectPackage.packageStore[this.id];return this.resource().remove()};gd.prototype.renameObjectClass=function(Yb,qc){qc=void 0===qc?[]:qc;var Ob=this,Hc,Yc,cd,$b,pb,xc,Lc,Ga,Ra,rb,Kb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ib){if(1==
Ib.nextAddress){Hc=Ob;Yc=Hc.objectClass;cd=Hc.System;if(!Yc||Yc[Symbol.for("__LivelyClassName__")]===Yb)return Ib.return(Yc);if(!ic.isValidIdentifier(Yb))throw Error(Yb+" is not a valid name for a class");pb=$b=ic.RuntimeSourceDescriptor.for(Yc,cd);xc=pb.source;Lc=pb.ast;Ga=Lc.id;Ra=Ga.start;rb=Ga.end;return Ib.yield($b.changeSource(xc.slice(0,Ra)+Yb+xc.slice(rb)),2)}Kb=Ob.objectClass;qc.forEach(function(gb){gb.constructor=Kb;gb.__proto__=Kb.prototype});return Ib.return(Kb)})};gd.prototype.fork=function(Yb,
qc){var Ob=this,Hc,Yc,cd,$b,pb,xc,Lc,Ga,Ra,rb,Kb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Ib){switch(Ib.nextAddress){case 1:return Hc=Ob,Yc=Hc.System,cd=Hc.baseURL,$b=Hc.objectClass,qc=Object.assign({System:Yc,baseURL:cd},qc),pb=ic.RuntimeSourceDescriptor.for($b),xc=pb._renamedSource(Yb),Lc=xc.moduleSource,Ga=ic.ObjectPackage.withId(Yb,qc),Ib.yield(Ga.ensureExistance(),2);case 2:return Ra=Ga,rb=Ra.objectModule,Kb=rb.systemModule,Ib.yield(Kb.load({format:"esm"}),3);case 3:return Ib.yield(Kb.changeSource(Lc),
4);case 4:return Ib.return(Ga)}})};$jscomp.global.Object.defineProperties(gd.prototype,{id:{configurable:!0,enumerable:!0,get:function(){return this._id}},name:{configurable:!0,enumerable:!0,get:function(){return this.id}},System:{configurable:!0,enumerable:!0,get:function(){return this.options.System}},baseURL:{configurable:!0,enumerable:!0,get:function(){return this.options.baseURL}},packageURL:{configurable:!0,enumerable:!0,get:function(){return this.baseURL+("/"+this.id)}},config:{configurable:!0,
enumerable:!0,get:function(){return{name:this.name,version:"0.1.0",lively:{isObjectPackage:!0}}}},systemPackage:{configurable:!0,enumerable:!0,get:function(){return ic.lookupPackage(this.System,this.packageURL,!0).pkg}},objectModule:{configurable:!0,enumerable:!0,get:function(){return this._objectModule||(this._objectModule=new ic.ObjectModule("index.js",this))}},objectClass:{configurable:!0,enumerable:!0,get:function(){return this.objectModule.objectClass}}});$jscomp.global.Object.defineProperties(gd,
{packageStore:{configurable:!0,enumerable:!0,get:function(){return this._packageStore||(this._packageStore=ic._packageStore)}}});Da("default",gd);ic.ObjectPackage=gd;var fe=function(Yb,qc){if(!Yb)throw Error("ObjectModule needs package!");if(!qc)throw Error("ObjectModule needs package!");this._moduleName=Yb;this._objectPackage=qc};fe.prototype.read=function(){return this.resource.read()};fe.prototype.write=function(Yb){return this.resource.write(Yb)};fe.prototype.ensureExistance=function(){var Yb=
this,qc,Ob;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Hc){switch(Hc.nextAddress){case 1:return qc=Yb.resource,Hc.yield(qc.exists(),2);case 2:if(Hc.yieldResult){Hc.jumpTo(3);break}return Hc.yield(qc.write("'format esm';\n"),4);case 4:Ob={},Yb.System.config({meta:(Ob[Yb.url]={format:"esm"},Ob)});case 3:return Hc.return(Yb)}})};fe.prototype.ensureObjectClass=function(Yb){var qc=this,Ob=this.objectClass;return Ob&&Ob.prototype.__proto__===Yb.prototype?Ob:Promise.resolve(this.ensureObjectClassSource(Yb)).then(function(Hc){var Yc=
Hc.source,cd=Hc.moduleId,$b=Hc.className,pb=Hc.bindings,xc=qc.System;Hc=ic.module(xc,cd);if(pb)for(var Lc in pb)Hc.define(Lc,pb[Lc]);Yc=ic.runEval(Yc,{classTransform:ic.classToFunctionTransform,sync:!0,targetModule:cd,System:xc});if(Yc.isError)throw Yc.value;Yc=Hc.recorder[$b];if(!Yc)throw Error("Failed to define class "+$b+" in "+cd);return Yc})};fe.prototype.ensureObjectClassSource=function(Yb){return this.createDefaultClassDeclaration(Yb)};fe.prototype.createDefaultClassDeclaration=function(Yb){Yb=
void 0===Yb?Object:Yb;var qc=this,Ob,Hc,Yc,cd,$b,pb,xc,Lc,Ga,Ra,rb,Kb,Ib,gb,ib,Lb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(tc){switch(tc.nextAddress){case 1:Ob=qc;Hc=Ob.System;Yc=Ob.systemModule;cd=Ob.objectPackage;$b=ic.string.capitalize(ic.toJsIdentifier(cd.id));pb=Yb[Symbol.for("__LivelyClassName__")];xc=!pb;Lc=ic.globalClasses.includes(Yb);Ga="";Ra=null;if(xc){pb="__anonymous_superclass__";rb={};Ra=(rb[pb]=Yb,rb);tc.jumpTo(2);break}if(Lc){tc.jumpTo(2);break}return tc.yield(ic.ExportLookup.findExportOfValue(Yb,
Hc),4);case 4:(Kb=tc.yieldResult)?(Ib=ic.ImportInjector.run(Hc,Yc.id,Yc.package(),"",Kb),gb=Ib.standaloneImport,Ga+=gb+"\n\n"):(ib={},Ra=(ib[pb]=Yb,ib));case 2:return $b===pb&&($b="Object"+$b),Lb="Object"===pb?"class "+$b+" {}\n":"class "+$b+" extends "+pb+" {}\n",Ga+="export default "+Lb+"\n",tc.yield(Yc.changeSource(Ga),5);case 5:return tc.yield(Yc.load(),6);case 6:return tc.return({source:Ga,className:$b,moduleId:qc.url,bindings:Ra})}})};fe.prototype.addScript=function(Yb,qc,Ob){var Hc=this,Yc,
cd,$b,pb,xc,Lc,Ga,Ra,rb,Kb,Ib,gb,ib,Lb,tc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Qc){switch(Qc.nextAddress){case 1:if(Yb.constructor===Hc.objectClass){Yc=Yb.constructor;Qc.jumpTo(2);break}return Qc.yield(Hc.ensureObjectClass(Yb.constructor),3);case 3:Yc=Qc.yieldResult;case 2:cd=Yc;$b="function"===typeof qc?String(qc):qc;pb=ic.parseFunction($b);xc=ic.RuntimeSourceDescriptor.for(cd,Hc.System);Ob||(Ob=ic.Path("id.name").get(pb));if(!Ob)throw Error("No name, cannot add "+ic.string.truncate($b,
30).replace(/\n/g,"")+"!");Lc=ic.toJsIdentifier(Ob);console.assert("FunctionExpression"===pb.type||"ArrowFunctionExpression"===pb.type,"not a function expression but: "+pb.type);Ga=pb.params.map(function(sc){return $b.slice(sc.start,sc.end)});Ra="BlockStatement"===pb.body.type?$b.slice(pb.body.start,pb.body.end):"{ return "+$b.slice(pb.body.start,pb.body.end)+" }";rb=Lc+"("+Ga.join(",")+") "+Ra;"ArrowFunctionExpression"===pb.type&&(pb.type="FunctionExpression");Kb=xc.source;Ib=xc.ast;if(!Ib)throw Error("cannot find class decl of "+
xc.module.id);(gb=Ib.body.body.find(function(sc){return sc.key.name===Lc&&!sc.static}))?Kb=Kb.slice(0,gb.start)+rb+Kb.slice(gb.end):(ib=Kb.lastIndexOf("}"),Lb=Kb.slice(0,ib),tc=Kb.slice(ib),/\n\s*$/m.test(Lb)||(Lb+="\n"),rb=ic.string.changeIndent(rb,"  ",1),/^[ ]*\n/m.test(tc)||(tc="\n"+tc),Kb=Lb+rb+tc);return Qc.yield(xc.changeSource(Kb),4);case 4:return Qc.return({script:cd.prototype[Lc],klass:cd,module:xc.module.id,methodName:Lc})}})};$jscomp.global.Object.defineProperties(fe.prototype,{objectPackage:{configurable:!0,
enumerable:!0,get:function(){return this._objectPackage}},objectClass:{configurable:!0,enumerable:!0,get:function(){var Yb=this.systemModule;return Yb.isLoaded()?Yb.System.get(Yb.id).default:null}},moduleName:{configurable:!0,enumerable:!0,get:function(){return this._moduleName}},systemModule:{configurable:!0,enumerable:!0,get:function(){return ic.module(this.System,this.url)}},System:{configurable:!0,enumerable:!0,get:function(){return this.objectPackage.System}},resource:{configurable:!0,enumerable:!0,
get:function(){return this.objectPackage.resource(this.moduleName)}},url:{configurable:!0,enumerable:!0,get:function(){return this.resource.url}}});ic.ObjectModule=fe;ic.default=gd}}});