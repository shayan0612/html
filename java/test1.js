let number = "";
function myFunction() {
  let userInput = prompt(`Enter a number from 1 - 5 :
    1. Addition
    2. Subtraction
    3. Multipication
    4. Division
    5. Modulus`);
  function myCalculator() {
    number = userInput;
    let numb = prompt(`enter first number:`);
    numb = Number(numb);
    let numb1 = prompt(`enter second number:`);
    numb1 = Number(numb1);
    if (number == 1) {
      add();
    }
    if (number == 2) {
      sub();
    }
    if (number == 3) {
      multi();
    }
    if (number == 4) {
      divide();
    }
    if (number == 5) {
      mod();
    }
    function add(numb, numb1) {
      return numb + numb1;
    }
    function sub(numb, numb1) {
      return numb - numb1;
    }
    function multi(numb, numb1) {
      return numb * numb1;
    }
    function divide(numb, numb1) {
      return numb / numb1;
    }
    function mod(numb, numb1) {
      return numb % numb1;
    }
  }
  if (userInput < 1 || userInput > 5) {
    alert("Invalid Input");
  } else {
    myCalculator();
  }
  let result = prompt(`Enter zero to go back:`);
  if (result === "0") {
    myFunction();
  } else {
    alert("Invalid Number");
  }
}
myFunction();
