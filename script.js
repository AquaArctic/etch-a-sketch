document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    const eraserButton = document.getElementById("eraser");
    const clearButton = document.getElementById("clear");
    const paintButton = document.getElementById("paint");
    const sizeChange = document.getElementById("size-change");

    createGrid(16);
  
    // Add event listener for eraser button
    eraserButton.addEventListener("click", function() {
      eraserButton.classList.add("active");
      paintButton.classList.remove("active");
    });
  
    // Add event listener for paint button
    paintButton.addEventListener("click", function() {
      eraserButton.classList.remove("active");
    });
  
    // Add event listener for clear button
    clearButton.addEventListener("click", function() {
      const gridItems = document.querySelectorAll(".grid-item");
      gridItems.forEach(function(gridItem) {
        gridItem.style.backgroundColor = "white";
      });
    });

    // Add event listener for size-change button
    sizeChange.addEventListener("click", function() {
        const squaresPerSide = prompt("Enter the number of squares per side for the new grid (4-100):");
        if (squaresPerSide !== null && squaresPerSide !== "") {
          const gridSize = parseInt(squaresPerSide);
          if (!isNaN(gridSize) && gridSize >= 4 && gridSize <= 100) {
            clearGrid();
            createGrid(gridSize);
          } else {
            alert("Please enter a valid number between 4 and 100.");
          }
        }
      });
      
      function createGrid(gridSize) {
        grid.innerHTML = ""; // Clear existing grid
      
        document.documentElement.style.setProperty('--grid-size', gridSize);
      
        const totalCells = gridSize * gridSize;
      
        for (let i = 0; i < totalCells; i++) {
          const gridItem = document.createElement("div");
          gridItem.className = "grid-item";
          grid.appendChild(gridItem);
      
          // Add event listener for hover effect
          gridItem.addEventListener("mouseover", function(event) {
            if (!eraserButton.classList.contains("active") && !paintButton.classList.contains("active")) {
              const randomColor = getRandomColor();
              event.target.style.backgroundColor = randomColor;
            } else if (eraserButton.classList.contains("active")) {
              event.target.style.backgroundColor = "white";
            }
          });
        }
      }
      
      function clearGrid() {
      grid.innerHTML = ""; // Clear existing grid
    }

  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

});


