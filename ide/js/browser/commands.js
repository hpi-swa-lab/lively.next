import { arr, Path } from "lively.lang";

export default function browserCommands(browser) {
  var pList = browser.get("packageList"),
      mList = browser.get("moduleList"),
      codeEntityTree = browser.get("codeEntityTree"),
      editor = browser.get("sourceEditor"),
      world = browser.world();

  return [
    {name: "focus list with selection", exec: () =>
      focusList(codeEntityTree.selection ? codeEntityTree :
        mList.selection ? mList : pList)},
    {name: "focus code entities", exec: () => focusList(codeEntityTree)},
    {name: "focus package list", exec: () => focusList(pList)},
    {name: "focus module list", exec: () => focusList(mList)},
    {name: "focus source editor", exec: () => { editor.focus(); editor.show(); return true; }},

    {name: "browser history backward", exec: browser => { browser.historyBackward(); return true; }},
    {name: "browser history forward", exec: browser => { browser.historyForward(); return true; }},

    {
      name: "browser history browse",
      async exec: browser => {
        var {left, right} = browser.state.history,
            current = arr.last(left),
            currentIdx = left.indexOf(current);

        var items = left.concat(right).map(loc => ({
          isListItem: true,
          string: loc.module ? loc.module.nameInPackage :
            loc.package ? loc.package.name || loc.package.address :
              "strange location",
          value: loc
        }))

        var {selected: [choice]} = await browser.world().filterableListPrompt(
                                    "Jumpt to location", items, {preselect: currentIdx});
        if (choice) {
          if (left.includes(choice)) {
            browser.state.history.left = left.slice(0, left.indexOf(choice) + 1);
            browser.state.history.right = left.slice(left.indexOf(choice) + 1).concat(right);
          } else if (right.includes(choice)) {
            browser.state.history.left = left.concat(right.slice(0, right.indexOf(choice) + 1));
            browser.state.history.right = right.slice(right.indexOf(choice) + 1);
          }
          if (current) {
            var {scroll, cursor} = browser.historyGetLocation();
            current.scroll = scroll; current.cursor = cursor;
          }
          await browser.historySetLocation(choice);
        }

        return true;
      }
    },

    {
      name: "open code search",
      exec: browser => browser.world().execCommand("open code search", {browser})
    },

    {
      name: "choose and browse package resources",
      exec: browser => browser.world().execCommand("choose and browse package resources", {browser})
    },

    {
      name: "reload module",
      exec: async () => {
        var m = browser.selectedModule;
        if (!m) return browser.world().inform("No module selected", {requester: browser});
        try {
          await (await browser.systemInterface()).interactivelyReloadModule(null, m.name);
        } catch(err) {
          browser.world().inform(`Error while reloading ${m.name}:\n${err.stack || err}`, {requester: browser});
          return true;
        }
        show(`Reloaded ${m.name}`);
        browser.selectModuleNamed(m.nameInPackage);
        return true;
      }
    },

    {
      name: "load or add module",
      exec: async (browser) => {
        var p = browser.selectedPackage,
            m = browser.selectedModule,
            system = await browser.systemInterface();
        try {
          var mods = await system.interactivelyAddModule(browser, m ? m.name : p ? p.address : null);
        } catch(e) {
          e === "Canceled" ?
            show(e) :
            browser.world().inform(`Error while trying to load modules:\n${e.stack || e}`, {requester: browser});
          return;
        }

        mods.forEach(({name, error}) =>
          error ? show(`Error while loading module ${name}: ${error.stack || error}`) :
                  show(`Module ${name} loaded`))
        await browser.updateModuleList(p);
        mods.length && browser.selectModuleNamed(mods[0].name);
        return true;
      }
    },

    {
      name: "remove module",
      exec: async (browser) => {
        var p = browser.selectedPackage,
            m = browser.selectedModule,
            system = await browser.systemInterface();
        if (!p) return browser.world().inform("No package selected", {requester: browser});
        if (!m) return browser.world().inform("No module selected", {requester: browser});
        try {
          await system.interactivelyRemoveModule(browser, m.name || m.id);
        } catch(e) {
          e === "Canceled" ?
            browser.world().inform("Canceled module removal") :
            browser.showError(`Error while trying to load modules:\n${e.stack || e}`);
          return true;
        }

        await browser.updateModuleList(p);
        p && browser.selectPackageNamed(p.name);

        return true;
      }
    },

    {
      name: "add package",
      exec: async (browser) => {
        var what = await browser.world().multipleChoicePrompt(
          "Create a new package or load an existing one?",
          {choices: ["create", "load", "cancel"]});

        if (!what || what === "cancel") {
          browser.world().inform("Canceled add package");
          return true;
        }

        var pkg;
        try {
          var system = await browser.systemInterface();
          pkg = what === "create" ?
            await system.interactivelyCreatePackage(browser) :
            await system.interactivelyLoadPackage(
              browser, browser.selectedPackage ? browser.selectedPackage.address : null);
        } catch (e) {
          if (e === "Canceled") browser.world().inform("Canceled package creation");
          else throw e;
          return true;
        }

        await browser.reloadPackages();
        await browser.selectPackageNamed(pkg.name);
        return true;
      }
    },

    {
      name: "remove package",
      exec: async (browser) => {
        var p = browser.selectedPackage;
        if (!p) { browser.world().inform("No package selected"); return true; }

        try {
          var pkg = await (await browser.systemInterface()).interactivelyRemovePackage(browser, p.address);
        } catch (e) {
          if (e === "Canceled") browser.world().inform("Canceled package removel");
          else throw e;
          return true;
        }

        await browser.reloadPackages();
        await browser.selectPackageNamed(null);

        return true;
      }
    },

    {
      name: "run all tests in module",
      exec: (browser) => {
         var m = browser.selectedModule;
          if (!m) return browser.world().inform("No module selected", {requester: browser});
         return runTestsInModule(browser, m.name, null);
      }
    },

    {
      name: "change eval backend via dropdown list",
      exec: browser => {
        var list = browser.ensureEvalBackEndList();
        list.toggleList(); list.list.focus();
        return true;
      }
    },

    {
      name: "run tests at point",
      exec: async (browser) => {
        var m = browser.selectedModule;
        if (!m) return browser.world().inform("No module selected", {requester: browser});

        var ed = browser.get("sourceEditor"),
            testDescriptors = await extractTestDescriptors(
              ed.textString, ed.document.positionToIndex(ed.cursorPosition));

        if (!testDescriptors || !testDescriptors.length)
          return browser.world().inform(
            "No test at " + JSON.stringify(ed.cursorPosition),
            {requester: browser});

        var spec = {
          fullTitle: arr.pluck(testDescriptors, "title").join(" "),
          type: arr.last(testDescriptors).type,
          file: m.name
        }

        return runTestsInModule(browser, m.name, spec);
       }
     },

     {
       name: "run setup code of tests (before and beforeEach)",
       exec: async (browser, args = {what: "setup"}) => {
          var m = browser.selectedModule;
          if (!m) return browser.world().inform("No module selected", {requester: browser});


          var ed = browser.get("sourceEditor"),
              testDescriptors = await extractTestDescriptors(
                ed.textString, ed.document.positionToIndex(ed.cursorPosition));

          if (!testDescriptors || !testDescriptors.length)
            return browser.world().inform(
              "No test at " + JSON.stringify(ed.cursorPosition),
              {requester: browser});

          // the stringified body of all before(() => ...) or after(() => ...) calls
          var what = (args && args.what) || "setup", // or: teardown
              prop = what === "setup" ? "setupCalls" : "teardownCalls",
              beforeCode = testDescriptors[0][prop].map(beforeFn => {
                var bodyStmts = beforeFn.body.body || [beforeFn.body];
                return bodyStmts.map(lively.ast.stringify).join("\n")
              }),
              {coreInterface: livelySystem} = await browser.systemInterface();

          try {
            for (let snippet of beforeCode)
              await livelySystem.runEval(beforeCode, {...ed.evalEnvironment});
            browser.setStatusMessage(`Executed ${beforeCode.length} test ${what} functions`);
          } catch (e) {
            browser.showError(new Error(`Error when running ${what} calls of test:\n${e.stack}`));
          }

          return true;
       }
     },

     {
       name: "run teardown code of tests (after and afterEach)",
        exec: async (browser) =>
          browser.execCommand(
            "run setup code of tests (before and beforeEach)",
            {what: "teardown"})
     }
  ]


  function focusList(list) {
    list.scrollSelectionIntoView();
    list.update();
    list.show();
    list.focus();
    return list
  }

  async function runTestsInModule(browser, moduleName, spec) {
    var runner = browser.get("test runner window");
    if (!runner)
      runner = await world.execCommand("open test runner");
    if (runner.minimized)
      runner.toggleMinimize();

    runner = runner.getWindow().targetMorph;
    runner.backend = browser.backend;

    return spec ?
      runner[spec.type === "suite" ? "runSuite" : "runTest"](spec.fullTitle):
      runner.runTestFile(moduleName);
  }

  async function extractTestDescriptors(source, positionAsIndex) {
    // Expects mocha.js like test definitions: https://mochajs.org/#getting-started
    // Extracts nested "describe" and "it" suite and test definitions from the
    // source code and associates setup (before(Each)) and tear down (after(Each))
    // code with them. Handy to run tests at point etc.

    var {parse, query: {nodesAt}} = await System.import("lively.ast"),
         parsed = parse(source),
         nodes = nodesAt(positionAsIndex, parsed)
                   .filter(n => n.type === "CallExpression"
                             && n.callee.name
                             && n.callee.name.match(/describe|it/)
                             && n.arguments[0].type === "Literal"),
         setupCalls = nodes.map(n => {
                         var innerCode = Path("arguments.1.body.body").get(n);
                         if (!innerCode) return null;
                         return innerCode
                                   .filter(n =>
                                        n.expression && n.expression.type === "CallExpression"
                                     && n.expression.callee.name
                                     && n.expression.callee.name.match(/before(Each)?/))
                                   .map(n => n.expression.arguments[0]); }),
         teardownCalls = nodes.map(n => {
                         var innerCode = Path("arguments.1.body.body").get(n);
                         if (!innerCode) return null;
                         return innerCode
                                   .filter(n =>
                                        n.expression && n.expression.type === "CallExpression"
                                     && n.expression.callee.name
                                     && n.expression.callee.name.match(/after(Each)?/))
                                   .map(n => n.expression.arguments[0]); }),

         testDescriptors = nodes.map((n,i) => ({
           type: n.callee.name.match(/describe/) ? "suite" : "test",
           title: n.arguments[0].value,
           astNode: n,
           setupCalls: setupCalls[i],
           teardownCalls: teardownCalls[i],
         }));
    return testDescriptors;
  }
}