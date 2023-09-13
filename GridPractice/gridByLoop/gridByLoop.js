var grid = document.querySelector(".grid");

// Use a nested for loop to create the grid cells
for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }
}
