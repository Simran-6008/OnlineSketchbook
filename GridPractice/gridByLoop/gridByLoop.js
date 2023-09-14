var grid = document.querySelector(".grid");

// Use a nested for loop to create the grid cells
for (var i = 0; i < 100; i++) {
    for (var j = 0; j < 100; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}

var totalNode = document.querySelectorAll(".cell");
console.log(totalNode);

totalNode.forEach((div) => {
    div.addEventListener("mousedown", () => {
        mousedown = true;
        div.style.backgroundColor = "black";
    });
});

totalNode.forEach((div) => {
    div.addEventListener("mouseup", () => {
        mousedown = false;
    });
});

totalNode.forEach((div) => {
    div.addEventListener("mouseover", () => {
        if (mousedown === true) div.style.backgroundColor = "black";
    });
});
