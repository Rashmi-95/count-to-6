function makeImportant(inputString, numberOfExclamation = inputString.length) {
  var outputString = inputString + '!'.repeat(numberOfExclamation);
  return outputString;
}
module.exports = makeImportant