System.register(["./__root_module__-3c9a1ccb.js","kld-intersections"],function(sa){var lb,Eb,Wb,Qb,Bd;return{setters:[function(Fc){lb=Fc._;Eb=Fc.bk;Wb=Fc.a4;Qb=Fc.a5;Bd=Fc.ap},function(){}],execute:function(){function Fc(Zc,Ra){Ra=void 0===Ra?{}:Ra;var tb=Ra.l2lClient;if(!tb)throw Error("lively.shell client side runCommand needs opts.l2lClient!");od.ClientCommand.installLively2LivelyServices(tb);tb=new od.ClientCommand(tb);tb.spawn(Object.assign({command:Zc},od.obj.dissoc(Ra,["l2lClient"])));
return tb}function wd(Zc){return od.dirCache[Zc.trackerId]?od.dirCache[Zc.trackerId]:Promise.resolve().then(function(){var Ra,tb,dc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(bc){if(1==bc.nextAddress)return bc.yield(Zc.sendToAndWait(Zc.trackerId,"lively.shell.info",{}),2);Ra=bc.yieldResult;tb=Ra.data;dc=tb.defaultDirectory;return bc.return(od.dirCache[Zc.trackerId]=dc)})})}function Kc(Zc){var Ra,tb,dc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(bc){if(1==bc.nextAddress)return bc.yield(Zc.sendToAndWait(Zc.trackerId,
"lively.shell.env",{}),2);Ra=bc.yieldResult;tb=Ra.data;dc=tb.env;return bc.return(dc)})}function Gc(Zc,Ra){Ra=(Ra=void 0===Ra?{}:Ra)||{};var tb=od.runCommand('cat "'+Zc+'"',Ra);return tb.whenDone().then(function(){if(tb.exitCode)throw Error("Read "+Zc+" failed: "+tb.stderr);return tb.output})}function Yc(Zc,Ra,tb){!tb&&Ra&&Ra.content&&(tb=Ra,Ra=tb.content);var dc=od.runCommand('tee "'+Zc+'"',Object.assign({stdin:Ra||""},tb));return dc.whenDone().then(function(){if(dc.exitCode)throw Error("Write "+
Zc+" failed: "+dc.stderr);return dc})}sa({defaultDirectory:wd,env:Kc,readFile:Gc,runCommand:Fc,writeFile:Yc});var jd=lively.FreezerRuntime.recorderFor("lively.shell/command-interface.js");jd.promise=lb;jd.events=Eb;var Dd=function(){this._stderr=this._stdout="";this.exitCode=void 0;this.commandString="";this.process=null;this._whenDone=jd.promise.deferred();this._whenStarted=jd.promise.deferred();this.startTime=0;this.lastSignal=null;jd.events.makeEmitter(this)};Dd.findCommand=function(Zc){return this.commands.find(function(Ra){return Ra.pid===
Zc})};Dd.prototype.isRunning=function(){return this.process&&void 0===this.exitCode};Dd.prototype.isDone=function(){return void 0!=this.exitCode};Dd.prototype.whenStarted=function(){return this._whenStarted.promise};Dd.prototype.whenDone=function(){return this._whenDone.promise};Dd.prototype.spawn=function(Zc){throw Error("not yet implemented");};Dd.prototype.kill=function(Zc){this.lastSignal=void 0===Zc?"KILL":Zc};Dd.prototype.toString=function(){return this.constructor.name+"("+this.commandString+
", "+this.status+")"};$jscomp.global.Object.defineProperties(Dd.prototype,{isShellCommand:{configurable:!0,enumerable:!0,get:function(){return!0}},status:{configurable:!0,enumerable:!0,get:function(){return this.process?void 0===this.exitCode?"running, pid "+this.pid:"exited "+this.exitCode+", pid "+this.pid:"not started"}},pid:{configurable:!0,enumerable:!0,get:function(){return this.process?this.process.pid:null}},output:{configurable:!0,enumerable:!0,get:function(){return this.stdout+(this.stderr?
"\n"+this.stderr:"")}},stdout:{configurable:!0,enumerable:!0,get:function(){return this._stdout}},stderr:{configurable:!0,enumerable:!0,get:function(){return this._stderr}}});$jscomp.global.Object.defineProperties(Dd,{commands:{configurable:!0,enumerable:!0,get:function(){return this._commands||(this._commands=[])}}});jd.CommandInterface=Dd;jd.default=Dd;var od=lively.FreezerRuntime.recorderFor("lively.shell/client-command.js");od.runCommand=Fc;od.defaultDirectory=wd;od.env=Kc;od.readFile=Gc;od.writeFile=
Yc;od.CommandInterface=Dd;od.promise=lb;od.arr=Wb;od.obj=Qb;od.signal=Bd;od.debug=!1;od.runCommand=Fc;od.runCommand=Fc;od.dirCache={};od.defaultDirectory=wd;od.defaultDirectory=wd;od.env=Kc;od.env=Kc;od.readFile=Gc;od.readFile=Gc;od.writeFile=Yc;od.writeFile=Yc;Dd=function(Zc){var Ra=od.CommandInterface.call(this)||this;Ra.debug=od.debug;Ra.l2lClient=Zc;return Ra};$jscomp.inherits(Dd,od.CommandInterface);Dd.installLively2LivelyServices=function(Zc){Object.keys(od.L2LServices).forEach(function(Ra){return Zc.addService(Ra,
function(tb,dc,bc){return $jscomp.asyncExecutePromiseGeneratorProgram(function(Xc){return Xc.return(od.L2LServices[Ra](tb,dc,bc))})})})};Dd.prototype.envForCommand=function(Zc){var Ra=this.l2lClient,tb=Ra.id,dc=Ra.origin,bc=Ra.path;Ra=Ra.namespace;var Xc=Zc||{};Zc=Xc.env;Xc=Xc.owner;Zc=Zc||{};Xc&&(Zc.LIVELY_COMMAND_OWNER=Xc);return Object.assign({ASKPASS_SESSIONID:tb,L2L_EDITOR_SESSIONID:tb,L2L_SESSIONTRACKER_SERVER:dc,L2L_SESSIONTRACKER_PATH:bc,L2L_SESSIONTRACKER_NS:Ra},Zc)};Dd.prototype.spawn=function(Zc){Zc=
void 0===Zc?{command:null,env:{},cwd:null,stdin:null}:Zc;var Ra=this,tb,dc,bc,Xc,Oc,$b,zc,Fb,Cb,pc,Pc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(wb){if(1==wb.nextAddress)return tb=Ra,dc=tb.l2lClient,bc=Zc,Xc=bc.command,Oc=bc.env,$b=bc.cwd,zc=bc.stdin,Ra.startTime=new Date,Oc=Ra.envForCommand(Zc),Ra.debug&&console.log(Ra+" spawning "+Xc),Ra.debug&&Ra.whenStarted().then(function(){return console.log(Ra+" started")}),Ra.debug&&Ra.whenDone().then(function(){return console.log(Ra+" exited")}),
od.arr.pushIfNotIncluded(Ra.constructor.commands,Ra),Ra.commandString=Array.isArray(Xc)?Xc.join(""):Xc,wb.yield(dc.sendToAndWait(dc.trackerId,"lively.shell.spawn",{command:Xc,env:Oc,cwd:$b,stdin:zc},{ackTimeout:3E4}),2);Fb=wb.yieldResult;Cb=Fb.data;pc=Cb.error;Pc=Cb.pid;if(pc)throw od.debug&&console.error("["+Ra+"] error at start: "+pc),Ra.process={error:pc},Ra.exitCode=1,od.signal(Ra,"error",pc),Error(pc);Ra.process={pid:Pc};od.debug&&console.log("["+Ra+"] got pid "+Pc);od.signal(Ra,"pid",Pc);Ra._whenStarted.resolve();
return wb.return(Ra)})};Dd.prototype.writeToStdin=function(Zc){var Ra=this,tb,dc,bc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Xc){if(!Ra.isRunning())return Xc.return();tb=Ra;dc=tb.l2lClient;bc=tb.pid;return Xc.yield(dc.sendToAndWait(dc.trackerId,"lively.shell.writeToStdin",{pid:bc,stdin:String(Zc)}),0)})};Dd.prototype.kill=function(Zc){Zc=void 0===Zc?"KILL":Zc;var Ra=this,tb,dc,bc,Xc,Oc,$b,zc;return $jscomp.asyncExecutePromiseGeneratorProgram(function(Fb){if(1==Fb.nextAddress){if(!Ra.isRunning())return Fb.return();
od.debug&&console.log(Ra+" signaling "+Zc);Ra.lastSignal=Zc;tb=Ra;dc=tb.pid;bc=tb.l2lClient;return Fb.yield(bc.sendToAndWait(bc.trackerId,"lively.shell.kill",{pid:dc}),2)}Xc=Fb.yieldResult;Oc=Xc.data;$b=Oc.status;zc=Oc.error;od.debug&&console.log(Ra+" kill send: "+(zc||$b));if(zc)throw Error(zc);return Fb.return(Ra.whenDone())})};Dd.prototype.onOutput=function(Zc){var Ra=Zc.stdout;Zc=Zc.stderr;Ra&&(this._stdout+=Ra,od.signal(this,"stdout",Ra),this.emit("stdout",Ra));Zc&&(this._stderr+=Zc,od.signal(this,
"stderr",Zc),this.emit("stderr",Zc))};Dd.prototype.onClose=function(Zc){od.arr.remove(this.constructor.commands,this);this.exitCode=Zc;this.emit("close",Zc);od.signal(this,"close",Zc);this._whenDone.resolve(this)};Dd.prototype.onError=function(Zc){od.arr.remove(this.constructor.commands,this);this._stderr+=Zc.stack;this.exitCode=1;this.emit("error",Zc.stack);od.signal(this,"error",Zc.stack);this._whenDone.reject(Zc)};sa("default",Dd);od.ClientCommand=Dd;od.L2LServices={"lively.shell.onOutput":function(Zc,
Ra,tb,dc){Zc=Ra.data;var bc=Zc.pid,Xc=Zc.stdout,Oc=Zc.stderr,$b;return $jscomp.asyncExecutePromiseGeneratorProgram(function(zc){switch(zc.nextAddress){case 1:return od.debug&&console.log("[lively.shell] client received lively.shell.onOutput for command "+bc),zc.setCatchFinallyBlocks(2),zc.yield(od.promise.waitFor(1E3,function(){return od.ClientCommand.findCommand(bc)}),4);case 4:$b=zc.yieldResult;zc.leaveTryBlock(3);break;case 2:return zc.enterCatchBlock(),console.warn("[lively.shell] received output for command "+
bc+" but it isn't registered!'"),zc.return();case 3:$b.onOutput({stdout:Xc,stderr:Oc}),zc.jumpToEnd()}})},"lively.shell.onExit":function(Zc,Ra,tb,dc){Zc=Ra.data;var bc=Zc.pid,Xc=Zc.code,Oc=Zc.error,$b;return $jscomp.asyncExecutePromiseGeneratorProgram(function(zc){switch(zc.nextAddress){case 1:return od.debug&&console.log("[lively.shell] client received lively.shell.onExit for command "+bc),zc.setCatchFinallyBlocks(2),zc.yield(od.promise.waitFor(1E3,function(){return od.ClientCommand.findCommand(bc)}),
4);case 4:$b=zc.yieldResult;zc.leaveTryBlock(3);break;case 2:return zc.enterCatchBlock(),console.warn("[lively.shell] received exit message for command "+bc+" but it isn't registered!'"),zc.return();case 3:if(Oc)"string"===typeof Oc&&(Oc=Error(Oc)),$b.onError(Oc);else $b.onClose(Xc);zc.jumpToEnd()}})}};od.default=Dd}}});