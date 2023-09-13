// var cell = document.querySelector("#box1")
// cell.style.backgroundColor = "black";


// var cell = document.querySelector("#box16")
// cell.style.backgroundColor = "red";
//cell.innerHTML="<p>Hello</p>"


// var cell = document.querySelector("#box10")
// cell.style.backgroundColor = "white";

// var container = document.querySelector(".container");
// container.setAttribute("id", "box17");
// container.style.backgroundColor = "white";
// console.log(container.getAttribute("class"));

// var newdiv = document.createElement("div");
// newdiv.classList.add("cell");
// newdiv.textContent="B";
//newDiv.style.backgroundColor = "blue"
// container.appendChild(newdiv);

var totalnd = document.querySelectorAll(".cell");
console.log(totalnd);

//........................DOM EVENT...........................
// cell.addEventListener("click", changeToBlack);
// function changeToBlack(){
// cell.style.backgroundColor="black";
// }

totalnd.forEach((div) => {
    div.addEventListener('click', () =>{
        div.classList.toggle("clicked");
    })
}) 

// totalnd.forEach((div) => {
//     div.addEventListener('mousedown', () =>{
//         div.style.backgroundColor = "black";
//     })
// })







