var compiler = require('vue-component-compiler')
var fs= require('fs');
// filePath should be an absolute path, and is optional if
// the fileContent doesn't contain src imports
compiler.compile('./src/main.js', './src/index.vue', function (err, result) {
  console.log(err,result);
})
