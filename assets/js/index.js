import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here

//Visualisation of the board
    const boardElement = document.createElement("div");
    boardElement.classList.add("board");

    const handleCellClick = event => {
        const cellElement = event.target
        const value = board.makeHit(event.target.dataset.row, event.target.dataset.col);
      
        if (value === null) {
          
          cellElement.classList.add("miss");
        } else {
          
          cellElement.classList.add("hit");
          cellElement.innerText = value;
        }
    }
  
    for (let i = 0; i < board.grid.length; i++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
  
      for (let j = 0; j < board.grid[i].length; j++) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.setAttribute("data-row", i);
        cellElement.setAttribute("data-col", j);

        cellElement.addEventListener("click", handleCellClick);
  
        rowElement.appendChild(cellElement);
      }
  
      boardElement.appendChild(rowElement);
    }
  
    document.body.appendChild(boardElement);

      


    
