var listOfNumbers = process.argv.slice(2);
var minimumValue = Math.min(...listOfNumbers);
console.log(`The minimum of [${listOfNumbers}] is ${minimumValue}`);
