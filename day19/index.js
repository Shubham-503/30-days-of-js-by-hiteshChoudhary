const jsRegex = /javascript+/g;
console.log("this is javascript and javascript live batch".match(jsRegex));

const digitsRegex = /\d+/g;
console.log("123 and this 43n1 45".match(digitsRegex));

startswithCaps = /\b[A-Z][a-z]*\b/g;
console.log("Absd Dsd Vhj".match(startswithCaps));

// const usPhone = /(\(\d{3})\) (\d{3})-(\d{4})/g;
const usPhone = /\((\d{3})\) (\d{3})-(\d{4})/;
console.log("(123) 456-7890".match(usPhone));

const domainUsername = /^([\w.%+-]+)@([\w.-]+\.[a-zA-Z]{2,})$/;
console.log("shubham@gmail.com".match(domainUsername));

const wordAtBeginning = /^\b\w+\b/;
console.log("Hello World".match(wordAtBeginning));
console.log("hello World".match(wordAtBeginning));
console.log("!hello World".match(wordAtBeginning));
const wordAtLast = /\b\w+\b$/;
console.log("Hello World".match(wordAtLast));
console.log("hello World".match(wordAtLast));
console.log("!hello !World".match(wordAtLast));

const passwordCheck =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
console.log("Shubham@123".match(passwordCheck));
console.log("Shubham".match(passwordCheck));
console.log("Shubham#".match(passwordCheck));

const urlCheck =
  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(\/[a-zA-Z0-9#]+\/?)*/;
console.log(urlCheck.test("https://www.google.com"));
console.log(urlCheck.test("http://www.google.com?q=213&m=213"));
