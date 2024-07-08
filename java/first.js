// let inputs = "";
// function myfunction() {
//   let userinput = prompt(`Enter inputs`);
//   // inputs.push(parseFloat(userinput));
//   inputs = userinput;
//   if (userinput < 6) {
//     document.getElementById("demo").innerHTML =
//       "Please enter atleast six characters";
//   }
//   return inputs;
// }

// // reverse

// function revorder() {
//   let firstthree = inputs.substring(0, 3);
//   let lastthree = inputs.substring(3, 6);
//   let reverseNexttwo = lastthree.split("").reverse("").join("");
//   if (firstthree === reverseNexttwo) {
//     document.getElementById("result").innerHTML = "the character are reversed";
//   } else {
//     document.getElementById("result").innerHTML =
//       "the character are not reversed";
//   }
// }
// let first = myfunction();
// let result = revorder();

// let inputs = "";
// let userInput = prompt(`enter input:`);
// function myFunction() {
//   inputs = userInput;
//   let reversed = inputs.split("").reverse().join("");
//   console.log(inputs);
//   if (inputs === reversed) {
//     document.getElementById("result").innerHTML = "the character are reversed";
//   } else {
//     document.getElementById("result").innerHTML =
//       "the character are not  reversed";
//   }
// }
// let first = myFunction();
// 12345
// 5
// 54321
// 123321
// 123321

//for reversing numbers
// let userInput = prompt(`enter input:`);
// let reversed = userInput.split("").reverse().join("");
// if (userInput === reversed) {
//   document.getElementById("result").innerHTML = "the character are reversed";
// } else {
//   document.getElementById("result").innerHTML =
//     "the character are not  reversed";
// }

// function myFunction() {
//   document.getElementById("demo").innerHTML =
//     "congratulations you have hacked Nasa";
// }

//to take input from user and showing there addition
// let x = prompt(`enter input:`);
// let y = prompt(`enter input:`);
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(x,y);
// myDisplayer(result);

// const myFunction = (a, b) => a * b;
// document.getElementById("demo").innerHTML = myFunction(4, 6);

// let cars = {};

// cars.name = "bmw";
// cars.model = "m-5";
// cars.color = "black";

// document.getElementById("demo").innerHTML =
//   "the name of my car is" +
//   "  " +
//   cars.name +
//   " " +
//   "its color is" +
//   " " +
//   cars.color;

// function Cars(name, model, color) {
//   this.name = name;
//   this.model = model;
//   this.paint = color;
// }
// Cars.prototype.numberplate = "123456";
// const mycar = new Cars("gtr", "r - 35", "black");
// const mycar1 = new Cars("g-wagon", "g - 65", "black");
// document.getElementById("demo").innerHTML =
//   "my car name is " +
//   "  " +
//   mycar.name +
//   "its model is" +
//   mycar.model +
//   "my friend car is" +
//   mycar1.name;

//make two array
//thats how to make a calculator

// function myCalculator(numbers, num1) {
//   const addresult = [];
//   const subresult = [];
//   const mulitple = [];
//   const divide = [];
//   const modulus = [];
//   if (numbers.length > num1.length) {
//     large = numbers;
//   } else {
//     large = num1;
//   }

//   for (i = 0; i < large.length; i++) {
//     if (!numbers[i]) {
//       addresult.push(num1[i]);
//       subresult.push(num1[i]);
//       mulitple.push(num1[i]);
//       divide.push(num1[i]);
//       modulus.push(num1[i]);
//       continue;
//     }
//     if (!num1[i]) {
//       addresult.push(numbers[i]);
//       subresult.push(numbers[i]);
//       mulitple.push(numbers[i]);
//       divide.push(numbers[i]);
//       modulus.push(numbers[i]);
//       continue;
//     }
//     addresult.push(numbers[i] + num1[i]);
//     subresult.push(numbers[i] - num1[i]);
//     mulitple.push(numbers[i] * num1[i]);
//     divide.push((numbers[i] / num1[i]).toFixed(2));
//     modulus.push(numbers[i] % num1[i]);
//   }
//   const allArrays = {
//     no1: addresult,
//     no2: subresult,
//     no3: mulitple,
//     no4: divide,
//     no5: modulus,
//   };

//   return allArrays;
// }

// let numb1 = [32, 98, 76, 84, 90, 67, 54];
// let numb2 = [23, 67, 98, 67, 86, 54];

// let operation = myCalculator(numb1, numb2);
// document.getElementById("demo").innerHTML =
//   "addition is:" +
//   "  " +
//   operation.no1 +
//   "<br>" +
//   "subtraction is:" +
//   "  " +
//   operation.no2 +
//   "<br>" +
//   "multiplication is:" +
//   "  " +
//   operation.no3 +
//   "<br>" +
//   "modulus is:" +
//   "  " +
//   operation.no5 +
//   "<br>" +
//   "division is:" +
//   "  " +
//   operation.no4;

// tocheck the average number
// function getinput(i) {
//   return parseFloat(prompt(`Enter five numbers ${i + 1}`));
// }
// function calculate() {
//   //   let totalnum = getinput(i);
//   let sum = 0;
//   for (i = 0; i < 4; i++) {
//     let number = getinput(i);
//     sum += number;
//   }
//   average = sum / 5;
//   console.log(`the average number is :${average}`);
// }

// calculate();

// let userInput = prompt(`Please enter a prompt:`);
// let inputs = userInput;
// function reversed() {
//   return inputs.split("").reverse().join("");
// }
// console.log(inputs);
// reversed();

// to check the given iput is under 10 or not
// function myFunction() {
//   // Get the value of the input field with id="numb"
//   let x = document.getElementById("numb").value;
//   // If x is Not a Number or less than one or greater than 10
//   let text;
//   if (isNaN(x) || x < 1 || x > 100) {
//     text = "Input not valid";
//   } else {
//     text = "Input OK";
//   }
//   document.getElementById("demo").innerHTML = text;
// }

// const numbers = [10, 20, 30, 40, 50, 60, 70];

// // Destructuring
// const [a, b, ...rest] = numbers;

// // Display the Values
// document.getElementById("demo").innerHTML =
//   "<p>a is " + a + "<p>b is " + b + "<p>the rest is " + rest;

// let cars = ["gtr", "volvo", "porshce", "ferrari"];
// const [first, second, ...rest1] = cars;

// document.getElementById("demo1").innerHTML =
//   "my first car is :" +
//   first +
//   "<br>" +
//   "my second car is :" +
//   second +
//   "<br>" +
//   "rest of my cars are :" +
//   rest1;

// enter a number from five to ten if it  is  big dispaly big if it is small dispaly it is small if it is good i mean if it is b/w 5 to 10 then display good choice

// function myFunction() {
//   const message = document.getElementById("p01");
//   message.innerHTML = "";
//   let x = document.getElementById("demo").value;
//   try {
//     if (x.trim() == "") throw "empty";
//     if (isNaN(x)) throw "not a number";
//     x = Number(x);
//     if (x < 5) throw "too low";
//     if (x > 10) throw "too high";
//     if (x > 5 && x < 10) throw "good choice";
//   } catch (err) {
//     message.innerHTML = "Input is " + err;
//   }
// }

// const person = {
//     fname:"John",
//     lname:"Doe",
//     age:25,
//     nation : "pakistan"
//     };

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// // Seal Object
// Object.seal(person);

// // Test Error
// let text = "";
// try {
//     delete person.age;
//   text = Object.values(person);
// } catch (err) {
//   text = err;
// }

// document.getElementById("demo").innerHTML = text;

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   display: function () {
//     let x = document.getElementById("demo");
//     x.innerHTML = this.firstName + " " + this.lastName;
//   },
// };

// setTimeout(() => {
//   person.display();
// }, 4000);

// function myFunction(a, b) {
//   return a * b;
// }
// const b = setTimeout(() => {
//   document.getElementById("demo").innerHTML = myFunction(2, 4);
// }, 3000);

// let inputs = " ";
// function myFunction() {
//   let userInput = prompt(`Enter Your Name:`);

//   inputs = userInput;
//   alert("Hello " + inputs);
//   return inputs;
// }

// myFunction();

// elseif(result === "0");
// userValues();
// alert("Invalid Number");

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
//     let numb = prompt(`enter first number:`);
//     numb = Number(numb);
//     let numb1 = prompt(`enter second number:`);
//     numb1 = Number(numb1);
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
// if (userInput < 1 || userInput > 4) {
//     alert("Invalid Input");
//   } else {
//     userValues(userInput);
//   }
let userInput = prompt(`Enter a number from 1 - 4 :
    1. Addition
    2. Subtraction
    3. Multipication
    4. Division`);