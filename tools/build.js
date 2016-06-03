var fs = require("fs");
var path = require("path");
var rollup = require('rollup');
var babel = require('rollup-plugin-babel');


var mochaSrc = fs.readFileSync(require.resolve("mocha/mocha.js"));

var chaiSrc = (function() {
  var chaiCode = fs.readFileSync(require.resolve("chai/chai.js")),
      chaiSubsetCode = fs.readFileSync(require.resolve("chai-subset"));
  return `
;(function() {
  var GLOBAL = typeof window !== "undefined" ? window :
    typeof global!=="undefined" ? global :
      typeof self!=="undefined" ? self : this;
  (function() {
    var module = undefined, exports = undefined; // no cjs require should be used!
    ${chaiCode}
  }).call(GLOBAL);
  if (typeof module !== "undefined" && module.exports) module.exports = GLOBAL.chai;
  (function() {
    var module = {exports: {}}
    ${chaiSubsetCode}
    GLOBAL.chai.use(module.exports); // install then forget
  }).call(GLOBAL);
})();`

})();

var targetFile = "mocha-es6.js";
var targetFileMocha = "dist/mocha.js";
var targetFileChai = "dist/chai.js";

module.exports = Promise.resolve()
  .then(() => rollup.rollup({
    entry: "index.js",
    plugins: [babel({
      exclude: 'node_modules/**', sourceMap: false,
      "presets": ["es2015-rollup"],
      babelrc: false,
      plugins: ['transform-async-to-generator']
    })]
  }))
  .then(bundle =>
    bundle.generate({
      format: 'iife',
      moduleName: 'mochaEs6',
      globals: {"mocha": "mocha", "chai": "chai", "lively.modules": "lively.modules"}
    }))

  .then(bundled => {
    var source = `(function() {
var GLOBAL = typeof window !== "undefined" ? window :
    typeof global!=="undefined" ? global :
      typeof self!=="undefined" ? self : this;
${bundled.code}
  if (typeof module !== "undefined" && module.exports)
    module.exports = GLOBAL.mochaEs6;
})();`;

    return `${mochaSrc}\n${chaiSrc}\n${source}`;
  })

  .then(source => {
    fs.writeFileSync(targetFile, source);
    fs.writeFileSync(targetFileMocha, mochaSrc);
    fs.writeFileSync(targetFileChai, chaiSrc);
  })
  .then(() => console.log("Build " + targetFile))
  .catch(err => console.error(err.stack))
