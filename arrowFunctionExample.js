var inputs = process.argv.slice(2);
var firstCharacterOfInput = inputs.map(element => element[0])
  .reduce((accumulator, current) => accumulator + current);
console.log(`[${inputs}] becomes \"${firstCharacterOfInput}\"`);

/*var firstCharacterOfInput = inputs.map(function getSingleChar(element) {
  return element[0];
});
var result = firstCharacterOfInput.reduce((acc, curr) => acc + curr);*/