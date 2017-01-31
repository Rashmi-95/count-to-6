function average(...listOfNumbers) {
  var sum = listOfNumbers.reduce( (sum, eachNumber) => (sum + eachNumber), 0);
  return sum / listOfNumbers.length;
}
module.exports = average