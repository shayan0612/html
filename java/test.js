// let number = "";

// function userValues() {
//   let userInput = prompt(`Enter a number from 1 - 5 :
//     1. Addition
//     2. Subtraction
//     3. Multipication
//     4. Division
//     5. Modulus`);
//   number = userInput;
//   if (userInput < 1 || userInput > 5) {
//     alert("Invalid Input");
//   } else {
//     main();
//   }
//   let result = prompt(`Enter one to go back:`);
//   if (result === "1") {
//     userValues();
//   } else {
//     alert("invalid number");
//   }
// }

// function main() {
//   let numb = prompt(`enter first number:`);
//   numb = Number(numb);
//   let numb1 = prompt(`enter second number:`);
//   numb1 = Number(numb1);
//   if (number == 1) {
//     add(numb, numb1);
//   }
//   if (number == 2) {
//     sub(numb, numb1);
//   }
//   if (number == 3) {
//     multi(numb, numb1);
//   }
//   if (number == 4) {
//     divide(numb, numb1);
//   }
//   if (number == 5) {
//     mod(numb, numb1);
//   }

//   function add(numb, numb1) {
//     console.log("Addition is:" + (numb + numb1));
//   }
//   function sub(numb, numb1) {
//     console.log("Subtraction is:" + (numb - numb1));
//   }
//   function multi(numb, numb1) {
//     console.log("Multiplication is:" + numb * numb1);
//   }
//   function divide(numb, numb1) {
//     console.log("Division is:" + numb / numb1);
//   }
//   function mod(numb, numb1) {
//     console.log("Modulus is:" + (numb % numb1));
//   }
// }

// userValues();

// testing

//four logic function
//uservalue function
//alret function
//result function
//main function

//start function
// let number = "";
// function userValues() {
//   let userInput = prompt(`Enter a number from 1 - 4 :
//     1. Addition
//     2. Subtraction
//     3. Multipication
//     4. Division`);
//   number = userInput;
//   if (userInput < 1 || userInput > 4) {
//     alert("Invalid Input");
//   } else {
//     let numb = prompt(`enter first number:`);
//     numb = Number(numb);
//     let numb1 = prompt(`enter second number:`);
//     numb1 = Number(numb1);
//     main(numb, numb1);
//   }
// }
// function result() {
//   let result = prompt(`Enter one to go back:`);
//   if (result === "1") {
//     userValues();
//   } else {
//     alert("invalid number");
//   }
// }

// function main(numb, numb1) {
//   if (number == 1) {
//     add(numb, numb1);
//   }
//   if (number == 2) {
//     sub(numb, numb1);
//   }
//   if (number == 3) {
//     multi(numb, numb1);
//   }
//   if (number == 4) {
//     divide(numb, numb1);
//   }
//   if (number == 5) {
//     mod(numb, numb1);
//   }

//   function add(numb, numb1) {
//     console.log("Addition is:" + (numb + numb1));
//   }
//   function sub(numb, numb1) {
//     console.log("Subtraction is:" + (numb - numb1));
//   }
//   function multi(numb, numb1) {
//     console.log("Multiplication is:" + numb * numb1);
//   }
//   function divide(numb, numb1) {
//     console.log("Division is:" + numb / numb1);
//   }
//   function mod(numb, numb1) {
//     console.log("Modulus is:" + (numb % numb1));
//   }
// }

// userValues();
// result();

// testing
//start function
function start() {
  let userInput = prompt(`Enter a number from 1 - 4 :
    1. Addition
    2. Subtraction
    3. Multipication
    4. Division`);
  alret(userInput);
}
//alret function
function alret(userInput) {
  if (userInput < 1 || userInput > 4) {
    alert("Invalid Input");
  } else {
    userValues(userInput);
  }
}
//uservalue function
function userValues(userInput) {
  let numb = prompt(`enter first number:`);
  numb = Number(numb);
  let numb1 = prompt(`enter second number:`);
  numb1 = Number(numb1);
  main(userInput, numb, numb1);
}
//main function
function main(number, numb, numb1) {
  if (number == 1) {
    add(numb, numb1);
  }
  if (number == 2) {
    sub(numb, numb1);
  }
  if (number == 3) {
    multi(numb, numb1);
  }
  if (number == 4) {
    divide(numb, numb1);
  }
}
//four logic function
function add(numb, numb1) {
  console.log("Addition is:" + (numb + numb1));
}
function sub(numb, numb1) {
  console.log("Subtraction is:" + (numb - numb1));
}
function multi(numb, numb1) {
  console.log("Multiplication is:" + numb * numb1);
}
function divide(numb, numb1) {
  console.log("Division is:" + numb / numb1);
}

//result function
function result() {
  let result = prompt(`Enter one to go back:`);
  for (i = 0; (i = result.length); i++) {
    if (result === "1") {
      start();
    } else {
      alert("invalid number");
    }
  }
}
start();
result();
