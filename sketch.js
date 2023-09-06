var divid = document.querySelector("#box1")
divid.style.backgroundColor = "black";


var divid = document.querySelector("#box16")
divid.style.backgroundColor = "red";
//divid.innerHTML="<p>Hello</p>"


var divid = document.querySelector("#box10")
divid.style.backgroundColor = "white";

var container = document.querySelector(".container");
container.setAttribute("id", "box17");
container.style.backgroundColor = "pink";
console.log(container.getAttribute("class"));

var newdiv = document.createElement("div");
newdiv.classList.add("divid");
newdiv.textContent="B";
//newDiv.style.backgroundColor = "blue"
container.appendChild(newdiv);

var totalnd = document.querySelectorAll(".divid");
console.log(totalnd);





