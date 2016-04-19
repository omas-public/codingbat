'use strict';
(function(stdin) {

  var inputs = stdin.toString().trim().split('\n');
  var filename = inputs.shift();


  var result = (function(filename, inputs) {
    console.log('var test = require(\'../src/' + filename + '.js\');');
    console.log('describe(\'' + filename + '\', function() {');
    inputs.forEach(function(v) {
      var split = v.split('→');
      console.log('\tit(\'' + v + '\', function() {');
      console.log('\t\texpect(test.'
        + split[0].trim()
        + ').toBe('
        + split[1].trim()
        +');'
      );
      console.log('\t});');
    });
    console.log('});');
  })(filename, inputs);

  // console.log(result.join('\n'));

}(require('fs').readFileSync('/dev/stdin', 'utf8')));
