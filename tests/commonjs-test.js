/*global require, before, after, beforeEach, afterEach, describe, it*/

var env = typeof module !== "undefined" && module.require ? module.require("../env") : window;
var chai = env.isCommonJS ? module.require("chai") : window.chai;
var chaiSubset = env.isCommonJS ? module.require("chai-subset") : window.chaiSubset;
var expect = chai.expect; chaiSubset && chai.use(chaiSubset);

var lang = env.lively.lang || lively.lang,
    vm = env.isCommonJS ? require('../index') : lively.vm,
    cjs = vm.cjs;

// yet-another-cjs-module depends on another-cjs-module
// another-cjs-module depends on some-cjs-module
var module1 = "./test-resources/some-cjs-module";
var module2 = "./test-resources/another-cjs-module";
var module3 = "./test-resources/yet-another-cjs-module";
var module1Full = cjs.resolve(module1, __filename);
var module2Full = cjs.resolve(module2, __filename);
var module3Full = cjs.resolve(module3, __filename);
var parentModule = __filename;

before(() => cjs.wrapModuleLoad());
after(() => cjs.unwrapModuleLoad());

describe("common-js modules", () => {

  beforeEach(() => require(module1));
  afterEach(() => cjs.forgetModule(module1));

  describe("module state", () => {

    it("captures internal module state", () => {
      expect(cjs.envFor(module1))
        .deep.property('recorder.internalState').equals(23);
      expect(cjs.envFor(module1))
        .deep.property('recorder.exports.state').equals(42);
    });
  });

  describe("eval", () => {
    it("evaluates inside of module", () =>
      cjs.runEval("internalState", {targetModule: module1, parentModule: parentModule})
        .then(evalResult => expect(evalResult).property("value").equals(23)));
  });

  describe("eval + print", () => {

    it("asString", () =>
      cjs.runEval("3 + 4", {targetModule: module1, parentModule: parentModule, printed: {asString: true}})
        .then(printed => console.log(printed) || expect(printed).to.containSubset({value: "7"})));

    it("inspect", () =>
      cjs.runEval(
        "({foo: {bar: {baz: 42}, zork: 'graul'}})",
        {targetModule: module1, parentModule: parentModule, printed: {inspect: true, printDepth: 2}})
          .then(printed => expect(printed).to.containSubset({value: "{\n  foo: {\n    bar: {/*...*/},\n    zork: \"graul\"\n  }\n}"})));

    it("prints promises", () =>
      cjs.runEval(
        "Promise.resolve(23)", {targetModule: module1, parentModule: parentModule, printed: {asString: true}})
          .then(printed => expect(printed).to.containSubset({value: 'Promise({status: "fulfilled", value: 23})'})));
  });

  describe("reloading", () => {

    beforeEach(() => require(module3));
    afterEach(() => cjs.forgetModule(module3));

    it("computes required modules of some module", () => {
      expect(cjs.findRequirementsOf(module3)).to.deep.equal(
        [cjs.resolve(module2Full), cjs.resolve(module1Full), "fs"]);
    });

    it("computes dependent modules of some module", () => {
      expect(cjs.findDependentsOf(module1)).to.deep.equal(
        [parentModule, cjs.resolve(module2Full), cjs.resolve(module3Full)]);
    });
    
    it("can reload module dependencies", () => {
      expect(require(module3).myVal).to.equal(44);
      // we change module1 and check that the value of module3 that indirectly
      // depends on module1 has changed as well
      return cjs.sourceOf(module1, parentModule)
        .then(s => s.replace(/(externalState = )([0-9]+)/, "$123"))
        .then(s => cjs.runEval(s, {targetModule: module1, parentModule: parentModule}))
        .then(() => cjs.forgetModuleDeps(module1, parentModule))
        .then(() => expect(require(module3).myVal).to.equal(25))
    });
  });

});
