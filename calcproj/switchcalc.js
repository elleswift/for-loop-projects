const prompt = require('prompt-sync')({ signint: true });
console.log('Welcome to Node CLI Calculator App');
const userName = prompt('What is your name?');
console.log('Hello, ' + `${userName}`);
console.log('Please read the acceptance criteria to get started.');
let cork = true;
while (cork) {
  const mathOp = prompt('What would you like to do + - * or /?');
  const num1 = Number(prompt('What is your first number?'));
  const num2 = Number(prompt('What is your second number?'));

  switch (mathOp) {
    case '+':
      console.log(num1 + num2);
      break;
    case '-':
      console.log(num1 - num2);
      break;
    case '*':
      console.log(num1 * num2);
      break;
    case '/':
      console.log(num1 / num2);
      break;
    default:
      console.log('Not a math operator, please check your selection.');
    }
      let goAgain = prompt('Do you want to do more? Select Y to continue or any other key to quit.');
      if (goAgain == 'Y' || goAgain =='y') {
        console.clear();
      } else {
        cork = false;
        console.log('See you next time.');
      }
}