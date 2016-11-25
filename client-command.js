import CommandInterface from "./command-interface.js";
import { promise, arr, obj } from "lively.lang";
import { signal } from "lively.bindings";

var debug = true;

export function runCommand(commandString, opts = {}) {
  var {l2lClient} = opts;

  if (!l2lClient)
    throw new Error("lively.shell client side runCommand needs opts.l2lClient!")

  ClientCommand.installLively2LivelyServices(l2lClient);
  var cmd = new ClientCommand(l2lClient);
  cmd.spawn({command: commandString, ...obj.dissoc(opts, ["l2lClient"])});
  return cmd;
}

var dirCache = {}
export function defaultDirectory(l2lClient) {
  if (dirCache[l2lClient.trackerId]) return dirCache[l2lClient.trackerId];
  return Promise.resolve().then(async () => {
    var {data: {defaultDirectory}} = await l2lClient.sendToAndWait(l2lClient.trackerId, "lively.shell.info", {});
    return dirCache[l2lClient.trackerId] = defaultDirectory;
  })
}

// await serverEnv()
export async function env(l2lClient) {
  var {data: {env}} = await l2lClient.sendToAndWait(l2lClient.trackerId, "lively.shell.env", {})
  return env;
}

export function readFile(path, options = {}) {
  options = options || {};
  var cmd = runCommand(`cat "${path}"`, options);
  return cmd.whenDone().then(() => {
    if (cmd.exitCode) throw new Error(`Read ${path} failed: ${cmd.stderr}`);
    return cmd.output
  });
}

export function writeFile(path, content, options) {
  if (!options && content && content.content) {
    options = content;
    content = options.content;
  }
  content = content || '';
  var cmd = runCommand(`tee "${path}"`, {stdin: content, ...options});
  return cmd.whenDone().then(() => {
    if (cmd.exitCode) throw new Error(`Write ${path} failed: ${cmd.stderr}`);
    return cmd;
  });
}


// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

export default class ClientCommand extends CommandInterface {

  static installLively2LivelyServices(l2lClient) {
    Object.keys(L2LServices).forEach(name =>
      l2lClient.addService(name,
        async (tracker, msg, ackFn) => L2LServices[name](tracker, msg, ackFn)))
  }

  constructor(l2lClient) {
    super();
    this.debug = debug;
    this.l2lClient = l2lClient;
  }

  async spawn(cmdInstructions = {command: null, env: {}, cwd: null, stdin: null}) {

    this.debug && console.log(`${this} spawning ${cmdInstructions.command}`);
    this.debug && this.whenStarted().then(() => console.log(`${this} started`));
    this.debug && this.whenDone().then(() => console.log(`${this} exited`));

    arr.pushIfNotIncluded(this.constructor.commands, this);

    var cmd = cmdInstructions.command;
    this.commandString = Array.isArray(cmd) ? cmd.join("") : cmd;

    var con = this.l2lClient;
    var {data: {status, error, pid}} = await con.sendToAndWait(
                                        con.trackerId, "lively.shell.spawn", cmdInstructions);
    if (error) {
      debug && console.error(`[${this}] error at start: ${error}`);
      this.process = {error};
      this.exitCode = 1;
      signal(this, "error", error);
      throw new Error(error);
    }

    this.process = {pid};
    debug && console.log(`[${this}] got pid ${pid}`);
    signal(this, "pid", pid);

    this._whenStarted.resolve();

    return this;
  }

  async writeToStdin(content) {
    if (!this.isRunning()) return;
    var {l2lClient, pid} = this;
    await l2lClient.sendToAndWait(l2lClient.trackerId,
      "lively.shell.writeToStdin", {pid, stdin: String(content)});
  }

  async kill(signal = "KILL") {
    if (!this.isRunning()) return;
    debug && console.log(`${this} requesting kill`)
    var {pid, l2lClient} = this,
        {data: {status, error}} = await l2lClient.sendToAndWait(
                                    l2lClient.trackerId, "lively.shell.kill", {pid});
    debug && console.log(`${this} kill send: ${error || status}`);
    if (error) throw new Error(error);
    return this.whenDone();
  }

  onOutput({stdout, stderr}) {
    if (stdout) {
      this.stdout += stdout;
      signal(this, "stdout", stdout);
      this.emit("stdout", stdout);
    }
    if (stderr) {
      this.stderr += stderr;
      signal(this, "stderr", stderr);
      this.emit("stderr", stderr);
    }
  }

  onClose(code) {
    arr.remove(this.constructor.commands, this);
    this.exitCode = code;
    this.emit('close', code);
    signal(this, 'close', code);
    this._whenDone.resolve(this);
  }

  onError(err) {
    arr.remove(this.constructor.commands, this);
    this.stderr += err.stack;
    this.exitCode = 1;
    this.emit('error', err.stack);
    signal(this, 'error', err.stack);
    this._whenDone.reject(err);
  }
}


var L2LServices = {

  async "lively.shell.onOutput": (client, {data: {pid, stdout, stderr}}, ackFn, sender) => {
    debug && console.log(`[lively.shell] client received lively.shell.onOutput for command ${pid}`);
    try {
      var cmd = await promise.waitFor(1000, () => ClientCommand.findCommand(pid))
    } catch (e) {
      console.warn(`[lively.shell] received output for command ${pid} but it isn't registered!'`)
      return;
    }
    cmd.onOutput({stdout, stderr})
  },

  async "lively.shell.onExit": (client, {data: {pid, code, error}}, ackFn, sender) => {
    debug && console.log(`[lively.shell] client received lively.shell.onExit for command ${pid}`);

    try {
      var cmd = await promise.waitFor(1000, () => ClientCommand.findCommand(pid))
    } catch (e) {
      console.warn(`[lively.shell] received exit message for command ${pid} but it isn't registered!'`)
      return;
    }

    if (error) {
      if (typeof error === "string")
        error = new Error(error)
      cmd.onError(error)
    } else cmd.onClose(code);

  }

}