import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here

//Visualisation of the board
    const boardElement = document.createElement("div");
    boardElement.classList.add("board");
  
    for (let i = 0; i < board.grid.length; i++) {
      const rowElement = document.createElement("div");
      rowElement.classList.add("row");
  
      for (let j = 0; j < board.grid[i].length; j++) {
        const cellElement = document.createElement("div");
        cellElement.classList.add("cell");
        cellElement.setAttribute("data-row", i);
        cellElement.setAttribute("data-col", j);

        cellElement.addEventListener("click", () => handleCellClick(i, j));
  
        rowElement.appendChild(cellElement);
      }
  
      boardElement.appendChild(rowElement);
    }
  
    document.body.appendChild(boardElement);

    function handleCellClick(row, col) {
        const cellElement = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        const value = board.makeHit(row, col);
      
        if (value === null) {
          
          cellElement.classList.add("miss");
        } else {
          
          cellElement.classList.add("hit");
          cellElement.innerText = value;
        }
      
        
        if (board.isGameOver()) {
          
        }
      }
      


    
