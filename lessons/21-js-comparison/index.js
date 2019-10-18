alert("Enter two numbers to see which number is greater?");
const firstNumber = prompt("What is the first number?");
const secondNumber = prompt("What is the second number?");
const accurate = confirm(firstNumber>secondNumber);
console.log("were we accurate?", accurate);
