//tesing
//start function
start();
function start() {
  let userInputs = prompt(
    "Enter a Number from 1-4:\n1.Addtion \n2.Subtraction\n3.Multiplication\n4.Division"
  );
  if (userInputs < 1 || userInputs > 4) {
    alert("Invalid Input");
    start();
  } else {
    main(userInputs);
  }
}

//4 logic function
function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function multi(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
//result function
function result(x, y) {
  prompt(``);
}

//uservalue function
function userValue() {
  let numb = prompt(`Enter first Number:`);
  numb = Number(numb);
  let numb1 = prompt(`Enter second Number:`);
  numb1 = Number(numb1);
  return {
    numb,
    numb1,
  };
}
//main function
function main(userInputs) {
  let { numb, numb1 } = userValue();

  if (userInputs == 1) {
    let result = add(numb, numb1);
    while (true) {
      let back = prompt(
        numb + "+" + numb1 + "=" + result + `\n` + `Enter one to go back: `
      );
      if (back == "1") {
        start();
      } else {
        alert("Please Enter a valid field ");
      }
    }
  }
  if (userInputs == 2) {
    let result = sub(numb, numb1);
    while (true) {
      let back = prompt(
        numb + "-" + numb1 + "=" + result + `\n` + `Enter one to go back: `
      );
      if (back == "1") {
        start();
      } else {
        alert("Please Enter a valid field ");
      }
    }
  }
  if (userInputs == 3) {
    let result = multi(numb, numb1);
    while (true) {
      let back = prompt(
        numb + "*" + numb1 + "=" + result + `\n` + `Enter one to go back: `
      );
      if (back == "1") {
        start();
      } else {
        alert("Please Enter a valid field ");
      }
    }
  }

  if (userInputs == 4) {
    let result = divide(numb, numb1);
    while (true) {
      let back = prompt(
        numb + "/" + numb1 + "=" + result + `\n` + `Enter one to go back: `
      );
      if (back == "1") {
        start();
      } else {
        alert("Please Enter a valid field ");
      }
    }
  }
}
