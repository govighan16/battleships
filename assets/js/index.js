import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here
function generateBoardUI(grid) {
    const boardElement = document.createElement("div");
    boardElement.classList.add("board");
  
    for (let i = 0; i < grid.length; i++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
  
      for (let j = 0; j < grid[i].length; j++) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.setAttribute("data-row", i);
        cellElement.setAttribute("data-col", j);
  
        rowElement.appendChild(cellElement);
      }
  
      boardElement.appendChild(rowElement);
    }
  
    document.body.appendChild(boardElement);
  }

  generateBoardUI(board.grid)
