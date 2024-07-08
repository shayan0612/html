// // var items = document.getElementsByClassName("list-group-item");
// // console.log(items[2]);
// // // items[2].style.backgroundColor = "yellow";

// // for (let i = 0; i <= items.length; i++) {
// //   items[i].style.backgroundColor = "#f4f4f4";
// //   //   items[i].style.textColor = "white";
// // }

// // let header = document.querySelector("#main-header");
// // header.style.borderBottom = "solid 10px black";

// // let form = document.querySelector(".form-control");
// // form.value = "Fill the Field";

// // let text = document.querySelectorAll("li:nth-child(2)");
// // for (let i = 0; i <= text.length; i++) {
// //   text.style.backgroundColor = "#f4f4f4";
// // }

// let itemList = document.querySelector("#items");
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello 1";

// // newDiv = document.createElement("div");
// // newDiv.className = "hello";
// // newDiv.id = "hello1";
// // newDivText = document.createTextNode("Hello div");
// // newDiv.appendChild(newDivText);
// // let container = document.querySelector("header .container");
// // let h1 = document.querySelector("header h1");
// // // console.log(newDiv);
// // container.insertBefore(newDiv, h1);

// let button = document
//   .getElementById("button")
//   .addEventListener("click", clickBtn);

// function clickBtn(e) {
//   document.getElementById("header-title").innerHTML = "changed text";
//   document.querySelector("#main").style.backgroundColor = "yellow";
//   let output = document.getElementById("output");
//   output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   console.log(e.offsetX);
// }
// var box = document.getElementById("box").addEventListener("mousemove", run);

// function run(e) {
//   console.log("Event type:" + e.type);
//   console.log("Event box:" + box);
//   box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", 40)";
// }

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector("form");
// itemInput.addEventListener("keydown ", runEvent);
// function runEvent(e) {
//   console.log("Event type:" + e.type);
//   document.getElementById("output").innerHTML =
//     "<h3>" + e.target.value + "<h3>";
// }

let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
form.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("item").value;
  let li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));
  let button = document.createElement("button");
  button.className = "btn btn-danger btn-sm float-right delete";
  button.appendChild(document.createTextNode("X"));
  li.appendChild(button);
  itemList.appendChild(li);
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
