System.register(["./__root_module__-dce2a509.js","kld-intersections"],function(Ba){var zb,Ib,nc,bc,Sd,Vc,Ud,Yc,Oc,qd,ie,Ye,sf,ne,cc;return{setters:[function(Hc){zb=Hc.a7;Ib=Hc.P;nc=Hc.a6;bc=Hc.p;Sd=Hc.bF;Vc=Hc.B;Ud=Hc.bG;Yc=Hc.r;Oc=Hc.aU;qd=Hc.bH;ie=Hc.bI;Ye=Hc.bJ;sf=Hc.bK;ne=Hc.bL;cc=Hc.l},function(){}],execute:function(){function Hc(Cc,Ic,Sb,Jc){Jc=void 0===Jc?{}:Jc;Jc=Jc.package||fc.ObjectPackage.lookupPackageForObject(Cc,Jc);if(!Jc)throw Error("Object is not part of an object package: "+Cc);
return Jc.addScript(Cc,Ic,Sb)}function Md(Cc,Ic){Ic=fc.normalizeOptions(Ic).System;Cc=(Cc=Cc[Symbol.for("lively-module-meta")])?Cc.package.name:null;return(Ic=(Cc?fc.lookupPackage(Ic,Cc):{}).pkg)?!!fc.ObjectPackage.forSystemPackage(Ic):!1}Ba({addScript:Hc,isObjectClass:Md});var fc=lively.FreezerRuntime.recorderFor("lively.classes/object-classes.js");fc.normalizeOptions=function(Cc){Cc=Object.assign({baseURL:fc.defaultBaseURL,System:System},Cc);Cc.baseURL=Cc.baseURL.replace(/\/$/,"");return Cc};fc.addScript=
Hc;fc.isObjectClass=Md;fc.string=zb;fc.Path=Ib;fc.arr=nc;fc.parse=bc;fc.isValidIdentifier=Sd;fc.stringify=Vc;fc.parseFunction=Ud;fc.resource=Yc;fc.runEval=Oc;fc.scripting=qd;fc.ExportLookup=ie;var $d=fc.scripting;fc.ensurePackage=$d.ensurePackage;fc.registerPackage=$d.registerPackage;fc.importPackage=$d.importPackage;fc.lookupPackage=$d.lookupPackage;fc.module=$d.module;fc.ImportInjector=$d.ImportInjector;fc.RuntimeSourceDescriptor=Ye;fc.toJsIdentifier=sf;fc.adoptObject=ne;fc.classToFunctionTransform=
cc;fc.objectPackageSym=Symbol.for("lively-object-package-data");fc.defaultBaseURL="local://lively-object-modules";fc.globalClasses=Object.keys(System.global).map(function(Cc){Cc=System.global[Cc];return"function"===typeof Cc&&Cc.name&&Cc}).filter(Boolean);fc.addScript=Hc;fc.addScript=Hc;fc.isObjectClass=Md;fc.isObjectClass=Md;fc._packageStore=fc._packageStore||{};$d=function(Cc,Ic){this._id=Cc;this.options=fc.normalizeOptions(Ic)};$d.lookupPackageForObject=function(Cc,Ic){return this.lookupPackageForClass(Cc.constructor,
Ic)};$d.lookupPackageForClass=function(Cc,Ic){Ic=fc.normalizeOptions(Ic).System;Cc=(Cc=Cc[Symbol.for("lively-module-meta")])?Cc.package.name:null;return(Ic=(Cc?fc.lookupPackage(Ic,Cc):{}).pkg)?fc.ObjectPackage.forSystemPackage(Ic):null};$d.forSystemPackage=function(Cc){return this.packageStore[Cc.name]};$d.withId=function(Cc,Ic){return this.packageStore[Cc]||(this.packageStore[Cc]=new this(Cc,Ic))};$d.prototype.resource=function(Cc){Cc=void 0===Cc?"":Cc;return fc.resource(this.packageURL).join(Cc)};
$d.prototype.load=function(){return fc.importPackage(this.System,this.packageURL)};$d.prototype.ensureExistance=function(){var Cc=this,Ic,Sb,Jc,dd,Jd,Kd,Hb,Bb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Mb){switch(Mb.nextAddress){case 1:return Ic=Cc.resource("/"),Mb.yield(Ic.exists(),2);case 2:if(Mb.yieldResult)return Mb.return();Sb=[{resource:Ic}];Jc=[{resource:Cc.resource("package.json"),content:JSON.stringify(Cc.config,null,2)}];return Mb.yield(Promise.all(Sb.map(function(Na){return Na.resource.mkdir()})),
3);case 3:return Mb.yield(Promise.all(Jc.map(function(Na){var Ua;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Oa){switch(Oa.nextAddress){case 1:return Oa.yield(Na.resource.exists(),2);case 2:if(!(Ua=!Oa.yieldResult)){Oa.jumpTo(3);break}return Oa.yield(Na.resource.write(Na.content),4);case 4:Ua=Oa.yieldResult;case 3:return Oa.return(Ua)}})})),4);case 4:return Mb.yield(Cc.objectModule.ensureExistance(),5);case 5:return dd=Cc,Jd=dd.System,Kd=dd.packageURL,Hb=dd.config,Mb.yield(fc.ensurePackage(Jd,
Kd),6);case 6:return Bb=Mb.yieldResult,Bb.registerWithConfig(Hb),console.log(Cc.packageURL+" REGISTERED"),Mb.return(Cc)}})};$d.prototype.ensureObjectClass=function(Cc){var Ic=this;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Sb){return 1==Sb.nextAddress?Sb.yield(Ic.ensureExistance(),2):Sb.return(Ic.objectModule.ensureObjectClass(Cc))})};$d.prototype.adoptObject=function(Cc){var Ic=this,Sb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Jc){if(1==Jc.nextAddress)return Ic.objectClass===
Cc.constructor?Jc.return():Jc.yield(Ic.ensureObjectClass(Cc.constructor),2);Sb=Jc.yieldResult;fc.adoptObject(Cc,Sb);Jc.jumpToEnd()})};$d.prototype.addScript=function(Cc,Ic,Sb){return this.objectModule.addScript(Cc,Ic,Sb)};$d.prototype.remove=function(){this.systemPackage.remove();delete fc.ObjectPackage.packageStore[this.id];return this.resource().remove()};$d.prototype.renameObjectClass=function(Cc,Ic){Ic=void 0===Ic?[]:Ic;var Sb=this,Jc,dd,Jd,Kd,Hb,Bb,Mb,Na,Ua,Oa,Ia;return $jscomp.asyncExecutePromiseGeneratorProgram(function(eb){if(1==
eb.nextAddress){Jc=Sb;dd=Jc.objectClass;Jd=Jc.System;if(!dd||dd[Symbol.for("__LivelyClassName__")]===Cc)return eb.return(dd);if(!fc.isValidIdentifier(Cc))throw Error(Cc+" is not a valid name for a class");Hb=Kd=fc.RuntimeSourceDescriptor.for(dd,Jd);Bb=Hb.source;Mb=Hb.ast;Na=Mb.id;Ua=Na.start;Oa=Na.end;return eb.yield(Kd.changeSource(Bb.slice(0,Ua)+Cc+Bb.slice(Oa)),2)}Ia=Sb.objectClass;Ic.forEach(function(cb){cb.constructor=Ia;cb.__proto__=Ia.prototype});return eb.return(Ia)})};$d.prototype.fork=function(Cc,
Ic){var Sb=this,Jc,dd,Jd,Kd,Hb,Bb,Mb,Na,Ua,Oa,Ia;return $jscomp.asyncExecutePromiseGeneratorProgram(function(eb){switch(eb.nextAddress){case 1:return Jc=Sb,dd=Jc.System,Jd=Jc.baseURL,Kd=Jc.objectClass,Ic=Object.assign({System:dd,baseURL:Jd},Ic),Hb=fc.RuntimeSourceDescriptor.for(Kd),Bb=Hb._renamedSource(Cc),Mb=Bb.moduleSource,Na=fc.ObjectPackage.withId(Cc,Ic),eb.yield(Na.ensureExistance(),2);case 2:return Ua=Na,Oa=Ua.objectModule,Ia=Oa.systemModule,eb.yield(Ia.load({format:"esm"}),3);case 3:return eb.yield(Ia.changeSource(Mb),
4);case 4:return eb.return(Na)}})};$jscomp.global.Object.defineProperties($d.prototype,{id:{configurable:!0,enumerable:!0,get:function(){return this._id}},name:{configurable:!0,enumerable:!0,get:function(){return this.id}},System:{configurable:!0,enumerable:!0,get:function(){return this.options.System}},baseURL:{configurable:!0,enumerable:!0,get:function(){return this.options.baseURL}},packageURL:{configurable:!0,enumerable:!0,get:function(){return this.baseURL+("/"+this.id)}},config:{configurable:!0,
enumerable:!0,get:function(){return{name:this.name,version:"0.1.0",lively:{isObjectPackage:!0}}}},systemPackage:{configurable:!0,enumerable:!0,get:function(){return fc.lookupPackage(this.System,this.packageURL,!0).pkg}},objectModule:{configurable:!0,enumerable:!0,get:function(){return this._objectModule||(this._objectModule=new fc.ObjectModule("index.js",this))}},objectClass:{configurable:!0,enumerable:!0,get:function(){return this.objectModule.objectClass}}});$jscomp.global.Object.defineProperties($d,
{packageStore:{configurable:!0,enumerable:!0,get:function(){return this._packageStore||(this._packageStore=fc._packageStore)}}});Ba("default",$d);fc.ObjectPackage=$d;var pe=function(Cc,Ic){if(!Cc)throw Error("ObjectModule needs package!");if(!Ic)throw Error("ObjectModule needs package!");this._moduleName=Cc;this._objectPackage=Ic};pe.prototype.read=function(){return this.resource.read()};pe.prototype.write=function(Cc){return this.resource.write(Cc)};pe.prototype.ensureExistance=function(){var Cc=
this,Ic,Sb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Jc){switch(Jc.nextAddress){case 1:return Ic=Cc.resource,Jc.yield(Ic.exists(),2);case 2:if(Jc.yieldResult){Jc.jumpTo(3);break}return Jc.yield(Ic.write("'format esm';\n"),4);case 4:Sb={},Cc.System.config({meta:(Sb[Cc.url]={format:"esm"},Sb)});case 3:return Jc.return(Cc)}})};pe.prototype.ensureObjectClass=function(Cc){var Ic=this,Sb=this.objectClass;return Sb&&Sb.prototype.__proto__===Cc.prototype?Sb:Promise.resolve(this.ensureObjectClassSource(Cc)).then(function(Jc){var dd=
Jc.source,Jd=Jc.moduleId,Kd=Jc.className,Hb=Jc.bindings,Bb=Ic.System;Jc=fc.module(Bb,Jd);if(Hb)for(var Mb in Hb)Jc.define(Mb,Hb[Mb]);dd=fc.runEval(dd,{classTransform:fc.classToFunctionTransform,sync:!0,targetModule:Jd,System:Bb});if(dd.isError)throw dd.value;dd=Jc.recorder[Kd];if(!dd)throw Error("Failed to define class "+Kd+" in "+Jd);return dd})};pe.prototype.ensureObjectClassSource=function(Cc){return this.createDefaultClassDeclaration(Cc)};pe.prototype.createDefaultClassDeclaration=function(Cc){Cc=
void 0===Cc?Object:Cc;var Ic=this,Sb,Jc,dd,Jd,Kd,Hb,Bb,Mb,Na,Ua,Oa,Ia,eb,cb,ob,Zb;return $jscomp.asyncExecutePromiseGeneratorProgram(function(mc){switch(mc.nextAddress){case 1:Sb=Ic;Jc=Sb.System;dd=Sb.systemModule;Jd=Sb.objectPackage;Kd=fc.string.capitalize(fc.toJsIdentifier(Jd.id));Hb=Cc[Symbol.for("__LivelyClassName__")];Bb=!Hb;Mb=fc.globalClasses.includes(Cc);Na="";Ua=null;if(Bb){Hb="__anonymous_superclass__";Oa={};Ua=(Oa[Hb]=Cc,Oa);mc.jumpTo(2);break}if(Mb){mc.jumpTo(2);break}return mc.yield(fc.ExportLookup.findExportOfValue(Cc,
Jc),4);case 4:(Ia=mc.yieldResult)?(eb=fc.ImportInjector.run(Jc,dd.id,dd.package(),"",Ia),cb=eb.standaloneImport,Na+=cb+"\n\n"):(ob={},Ua=(ob[Hb]=Cc,ob));case 2:return Kd===Hb&&(Kd="Object"+Kd),Zb="Object"===Hb?"class "+Kd+" {}\n":"class "+Kd+" extends "+Hb+" {}\n",Na+="export default "+Zb+"\n",mc.yield(dd.changeSource(Na),5);case 5:return mc.yield(dd.load(),6);case 6:return mc.return({source:Na,className:Kd,moduleId:Ic.url,bindings:Ua})}})};pe.prototype.addScript=function(Cc,Ic,Sb){var Jc=this,dd,
Jd,Kd,Hb,Bb,Mb,Na,Ua,Oa,Ia,eb,cb,ob,Zb,mc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Tb){switch(Tb.nextAddress){case 1:if(Cc.constructor===Jc.objectClass){dd=Cc.constructor;Tb.jumpTo(2);break}return Tb.yield(Jc.ensureObjectClass(Cc.constructor),3);case 3:dd=Tb.yieldResult;case 2:Jd=dd;Kd="function"===typeof Ic?String(Ic):Ic;Hb=fc.parseFunction(Kd);Bb=fc.RuntimeSourceDescriptor.for(Jd,Jc.System);Sb||(Sb=fc.Path("id.name").get(Hb));if(!Sb)throw Error("No name, cannot add "+fc.string.truncate(Kd,
30).replace(/\n/g,"")+"!");Mb=fc.toJsIdentifier(Sb);console.assert("FunctionExpression"===Hb.type||"ArrowFunctionExpression"===Hb.type,"not a function expression but: "+Hb.type);Na=Hb.params.map(function(pa){return Kd.slice(pa.start,pa.end)});Ua="BlockStatement"===Hb.body.type?Kd.slice(Hb.body.start,Hb.body.end):"{ return "+Kd.slice(Hb.body.start,Hb.body.end)+" }";Oa=Mb+"("+Na.join(",")+") "+Ua;"ArrowFunctionExpression"===Hb.type&&(Hb.type="FunctionExpression");Ia=Bb.source;eb=Bb.ast;if(!eb)throw Error("cannot find class decl of "+
Bb.module.id);(cb=eb.body.body.find(function(pa){return pa.key.name===Mb&&!pa.static}))?Ia=Ia.slice(0,cb.start)+Oa+Ia.slice(cb.end):(ob=Ia.lastIndexOf("}"),Zb=Ia.slice(0,ob),mc=Ia.slice(ob),/\n\s*$/m.test(Zb)||(Zb+="\n"),Oa=fc.string.changeIndent(Oa,"  ",1),/^[ ]*\n/m.test(mc)||(mc="\n"+mc),Ia=Zb+Oa+mc);return Tb.yield(Bb.changeSource(Ia),4);case 4:return Tb.return({script:Jd.prototype[Mb],klass:Jd,module:Bb.module.id,methodName:Mb})}})};$jscomp.global.Object.defineProperties(pe.prototype,{objectPackage:{configurable:!0,
enumerable:!0,get:function(){return this._objectPackage}},objectClass:{configurable:!0,enumerable:!0,get:function(){var Cc=this.systemModule;return Cc.isLoaded()?Cc.System.get(Cc.id).default:null}},moduleName:{configurable:!0,enumerable:!0,get:function(){return this._moduleName}},systemModule:{configurable:!0,enumerable:!0,get:function(){return fc.module(this.System,this.url)}},System:{configurable:!0,enumerable:!0,get:function(){return this.objectPackage.System}},resource:{configurable:!0,enumerable:!0,
get:function(){return this.objectPackage.resource(this.moduleName)}},url:{configurable:!0,enumerable:!0,get:function(){return this.resource.url}}});fc.ObjectModule=pe;fc.default=$d}}});