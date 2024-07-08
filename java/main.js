let txt = document.getElementById("text-box");
let btn = document.getElementById("form_btn");

let formContanier = document.getElementById("form-container");
let dropDown = document.getElementById("list");

let displayContainer = document.getElementById("display-container");
btn.addEventListener("click", function () {
  let para1 = document.createElement("li");
  para1.innerText = list.value;
  displayContainer.appendChild(para1);
  let paragraph = document.createElement("p");
  paragraph.innerText = txt.value;

  displayContainer.appendChild(paragraph);
  let button = document.createElement("button");
  button.className = "btn btn-danger mx-auto delete px-2 py-0";
  button.appendChild(document.createTextNode("Delete"));
  displayContainer.appendChild(button);
  txt.value = "";
  button.addEventListener("click", removeItem);
  function removeItem() {
    para1.remove();
    paragraph.remove();
    button.remove();
  }
});
