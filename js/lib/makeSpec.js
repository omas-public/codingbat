(stdin => {
  // Define Function
  const makeSpec = (sentence) => {
    const [expression, retVal] = sentence
        .split('→').map(v => v.trim());

    return `
      it('${sentence})', () => {
        expect(test.${expression}).toBe(${retVal});
      });
    `;
  };

  // Declare Variable
  const inputs  = stdin.toString().trim().split('\n');

  // Main Procedure
  const result = ((fn, sentences) => {
    let name = fn.slice(0, fn.indexOf('('));
    return []
      .concat([`const test = require('../src/${name}.js');`])
      .concat([`describe('${name}', () => {`])
      .concat(Array.from(sentences, sentence => {
        return makeSpec(sentence);
      }))
      .concat(['});']);


  })(inputs.shift(), inputs);
  // Display
  console.log(result.join('\n'));

})(require('fs').readFileSync('/dev/stdin', 'utf8'));