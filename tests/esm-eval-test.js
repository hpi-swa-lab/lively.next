/*global System, beforeEach, afterEach, describe, it*/

import { expect } from "mocha-es6";
import { promise } from "lively.lang";

import { getSystem, removeSystem, moduleEnv, moduleRecordFor } from "lively.modules/src/system.js";
import { forgetModuleDeps } from "lively.modules/src/dependencies.js";
import { runEval } from "../lib/esm-eval.js";

var dir = System.normalizeSync("lively.vm/tests/test-resources/"),
    testProjectDir = dir + "test-project-dir-1/",
    module1 = testProjectDir + "file1.js",
    module2 = testProjectDir + "file2.js",
    module3 = testProjectDir + "file3.js",
    module4 = testProjectDir + "file4.js";

describe("eval", () => {

  var S;
  beforeEach(function() {
    S = getSystem('test', { baseURL: dir });
    return S.import(module1);
  });

  afterEach(() => removeSystem("test"));

  it("inside of module", () =>
    runEval(S, "1 + z + x", {targetModule: module1})
      .then(result => expect(result.value).equals(6)));

  it("sets this", () =>
    runEval(S, "1 + this.x", {targetModule: module1, context: {x: 2}})
      .then(result => expect(result.value).equals(3)));

  it("of export statement", () =>
    promise.chain([
      () => Promise.all([S.import(module1), S.import(module2)]),
      ([m1, m2], state) => {
        state.m1 = m1; state.m2 = m2;
        expect(m1.x).to.equal(3);
        expect(m2.y).to.equal(1);
      },
        // Modify module1
      () => runEval(S, "export var y = 2;", {asString: true, targetModule: module2}),
      (result, {m1, m2}) => {
        expect(result.value).to.not.match(/error/i);
        expect(m2.y).to.equal(2, "file2.js not updated");
        expect(m1.x).to.equal(4, "file1.js not updated after its dependency changed");
        return Promise.all([
          S.import(module1).then(m => expect(m.x).to.equal(4)),
          S.import(module2).then(m => expect(m.y).to.equal(2)),
        ]);
      }]));

  it("of var being exported", () =>
    promise.chain([
      () => Promise.all([S.import(module1), S.import(module2)]),
      ([m1, m2], state) => {
        state.m1 = m1; state.m2 = m2;
        expect(m1.x).to.equal(3);
        expect(m2.y).to.equal(1);
      },
        // Modify module1
      () => runEval(S, "var y = 2;", {asString: true, targetModule: module2}),
      (result, {m1, m2}) => {
        expect(result.value).to.not.match(/error/i);
        expect(m2.y).to.equal(2, "file2.js not updated");
        expect(m1.x).to.equal(4, "file1.js not updated after its dependency changed");
        return Promise.all([
          S.import(module1).then(m => expect(m.x).to.equal(4)),
          S.import(module2).then(m => expect(m.y).to.equal(2)),
        ]);
      }]));

  it("of new var that is exported and then changes", () =>
    S.import(module1)
      // define a new var that is exported
      .then(_ => runEval(S, "var zork = 1; export { zork }", {asString: true, targetModule: module1}))
      .then(() => expect(moduleRecordFor(S, module1).exports).to.have.property("zork", 1, "of record"))
      .then(() => S.import(module1).then(m1 => expect(m1).to.have.property("zork", 1, "of module")))
      // now change that var and see if the export is updated
      .then(() => runEval(S, "var zork = 2;", {asString: true, targetModule: module1}))
      .then(() => expect(moduleRecordFor(S, module1).exports).to.have.property("zork", 2, "of record after change"))
      .then(() => S.import(module1).then(m1 => expect(m1).to.have.property("zork", 2, "of module after change")))
      );

  it("of export statement with new export", () =>
    promise.chain([
      () => () => Promise.all([S.import(module1), S.import(module2)]),
      (modules, state) => ([m1, m2], state) => { state.m1 = m1; state.m2 = m2; },
      () => runEval(S, "export var foo = 3;", {asString: true, targetModule: module2}),
      (result, {m1, m2}) => {
        expect(result.value).to.not.match(/error/i);
        // Hmmm.... frozen modules require us to re-import... damn!
        // expect(state.m1.foo).to.equal(3, "foo not defined in module1 after eval");
        return S.import(module2)
          .then((m) => expect(m.foo).to.equal(3, "foo not defined after eval"))
      },
      () => runEval(S, "export var foo = 5;", {asString: true, targetModule: module2}),
      (result, {m1, m2}) => {
        expect(result.value).to.not.match(/error/i);
        // expect(state.m1.foo).to.equal(5, "foo updated in module1 after re-eval");
        return S.import(module2)
          .then((m) => expect(m.foo).to.equal(5, "foo updated in module1 after re-eval"));
      }]));

  it("of import statement", () =>
    // test if import is transformed to lookup + if the imported module gets before eval
    promise.chain([
      () => runEval(S, "import { z } from './file3.js'; z", {targetModule: testProjectDir + "file1.js"}),
      (result, state) => {
        expect(result.value).to.not.match(/error/i);
        expect(result.value).to.equal(1, "imported value");
      }]));


  it("reload module dependencies", () =>
    S.import(module1)
      .then(m => expect(m.x).to.equal(3))
      // we change module3 and check that the value of module1 that indirectly
      // depends on module3 has changed as well
      .then(() => S.fetch({status: 'loading', address: module3, name: module3, linkSets: [], dependencies: [], metadata: {}}))
      .then(s => s.replace(/(z = )([0-9]+)/, "$12"))
      .then(s => runEval(S, s, {asString: true, targetModule: module3}))
      .then(result => expect(result.value).to.not.match(/error/i))
      .then(() => forgetModuleDeps(S, module3))
      .then(() => S.import(module1))
      .then(m => expect(m.x).to.equal(4)));

  describe("es6 code", () => {

    it("**", () =>
      S.import(module1)
        .then(() => runEval(S, "z ** 4", {targetModule: module1})
        .then(result => expect(result).property("value").to.equal(16))));

  });

  describe("async", () => {

    it("awaits async function", () =>
      S.import(module4)
        .then(() => runEval(S, "await foo(3)", {targetModule: module4})
        .then(result => expect(result).property("value").to.equal(3))));

    it("nests await", () =>
      S.import(module4)
        .then(() => runEval(S, "await ('a').toUpperCase()", {targetModule: module4})
        .then(result => expect(result).property("value").to.equal("A"))));

  });
});
