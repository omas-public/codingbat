(stdin => {
  // Define Function

  const inputs  = stdin.toString().trim().split('\n');
  const sep = inputs[0].indexOf('(');
  const fn  = inputs[0].slice(0, sep);
  const pr  = inputs[0].slice(sep);

  // Main Procedure
  const result = ((name, params) => {
    return `
exports.${name} = ${params} => {
  //
};
`;

  })(fn, pr);
  // Display
  console.log(result);

})(require('fs').readFileSync('/dev/stdin', 'utf8'));