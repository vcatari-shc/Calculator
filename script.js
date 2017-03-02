var operandOne = 0;
var operandTwo = 0;
var operator = null;
var result = null;

function updateDisplay(value){
 console.log('display value is '+value);
 document.getElementById('result').innerHTML = value;
}

function buttonInput(input){
  console.log('button pressed is '+input);

  if(isinput(input)) {
     var display = null;
     if(operator){
      operandTwo = operandTwo ? operandTwo*10+input : input;
      display = operandOne + operator + operandTwo;
      }
      else {
      operandOne = operandOne ? operandOne*10+input : input;  
      display = operandOne;
      }
    updateDisplay(display);
   }
  else {
    if (operator == null){
      operator = input;
      updateDisplay(operandOne + operator);
      return
    }
    switch (operator){
        case '+' : operandOne += operandTwo;
        break;
        case '-' :  operandOne -= operandTwo;
        break;
        case '*' :  operandOne *= operandTwo;
        break;
        case '/':   operandOne /= operandTwo;
        break;
        default:
        }
    operator = input == '=' ? null : input;
    operandTwo = null;
    updateDisplay(operandOne + operator);
  }
  }
function isinput(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}