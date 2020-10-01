import Resource from "lively.resources/src/resource.js";
import { runCommand } from "./client-command.js";
import { fileInfo, findFiles } from "./client-fs-helper.js";
import { string, promise, arr, obj } from "lively.lang";

export default class ShellClientResource extends Resource {

  static get defaultL2lClient() { return this._defaultL2lClient || _defaultL2LClient; }
  static set defaultL2lClient(l2lClient) { this._defaultL2lClient = _defaultL2LClient = l2lClient; }

  constructor(url, l2lClient, options = {}) {
    super(url);
    this.options = {...options, l2lClient: l2lClient || this.constructor.defaultL2lClient};  // passed to commands
  }

  newResource(url) {
    return new this.constructor(url, this.options.l2lClient, this.options);
  }

  read() {
    var cmd = runCommand(`cat "${this.url}"`, this.options);
    return cmd.whenDone().then(() => {
      if (cmd.exitCode) throw new Error(`Read ${this.url} failed: ${cmd.stderr}`);
      return cmd.output
    });
  }

  async write(content) {
    var cmd = !content ?
      await runCommand(`echo -n > "${this.url}"`, {...this.options}).whenDone() :
      await runCommand(`touch "${this.url}" && tee "${this.url}"`,
        {stdin: String(content), ...this.options}).whenDone();
    if (cmd.exitCode) throw new Error(`Write ${this.url} failed: ${cmd.stderr}`);
    return this;
  }

  async mkdir() {
    var cmd = await runCommand(`mkdir -p "${this.url}"`, this.options).whenDone();
    if (cmd.exitCode) throw new Error(`${this} cannot create directory: ${cmd.stderr}`);
    return this;
  }

  exists() {
    var cmd = runCommand(`test -d "${this.url}" || test -f "${this.url}"`, this.options);
    return cmd.whenDone().then(() => cmd.exitCode === 0);
  }

  remove() {
    var cmd = runCommand(`rm -rf "${this.url}"`, this.options);
    return cmd.whenDone().then(() => {
      if (cmd.exitCode) throw new Error(`Remove of ${this.url} failed: ${cmd.stderr}`);
      return this;
    });
  }

  async gzip(content) {
    // requires gzip to be installed on server!
    var cmd = runCommand(`gzip > "${this.url}"`, {stdin: String(content), ...this.options});
    return cmd.whenDone().then(() => {
      if (cmd.exitCode) throw new Error(`Gzip compression of ${this.url} failed: ${cmd.stderr}`);
      return this;
    });
  }

  async brotli(content) {
    // requires brotli to be installed on server!
    var cmd = runCommand(`brotli > "${this.url}"`, {stdin: String(content), ...this.options});
    return cmd.whenDone().then(() => {
      if (cmd.exitCode) throw new Error(`Brotli compression of ${this.url} failed: ${cmd.stderr}`);
      return this;
    });
  }

  async readProperties() {
    var info = await fileInfo(this.url, this.options);
    this.assignProperties(obj.dissoc(info, ["fileName", "path", "rootDirectory"]));
    return this;
  }

  async dirList(depth = 1, opts = {}) {
    var {exclude} = opts;

    if (Array.isArray(exclude))
      exclude = ("-iname " + exclude.map(string.print).join(' -o -iname '));

    var {url, options: {l2lClient}} = this,
        fileInfos = await findFiles("*", {exclude, depth, rootDirectory: url, l2lClient});

    // remove self
    if (fileInfos[0].path.replace(/\/$/, "") === this.url.replace(/\/$/, ""))
      fileInfos.shift();

    return fileInfos.map(info => {
      var {path, isDirectory} = info;
      if (isDirectory) path = path.replace(/\/?$/, "/");
      var res = new this.constructor(path, l2lClient, this.options);
      res.assignProperties(obj.dissoc(info, ["fileName", "path", "rootDirectory"]))
      return res;
    });
      
  }

}

var _defaultL2LClient;

export var resourceExtension = {
  name: "shell-client",
  matches: (url) => url.startsWith("/") || url.match(/[a-z]:\\/i), // abs path
  resourceClass: ShellClientResource
}
