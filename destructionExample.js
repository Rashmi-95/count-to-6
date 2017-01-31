let userInformationArray = process.argv.slice(2);
let extractedInformation = {};
[,extractedInformation.username, extractedInformation.email]= userInformationArray;
console.log(extractedInformation);
