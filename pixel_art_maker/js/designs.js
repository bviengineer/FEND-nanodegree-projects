// Select color input
// Select size input
let myCanvas = document.getElementById("pixelCanvas");
const noOfRows = 10;
const noOfCols = 20;

// When size is submitted by the user, call makeGrid()
document.body.addEventListener("click", function(){
  makeGrid();
});

function makeGrid() {
  // Your code goes here!
    let canvasRow = 0;
    let canvasCol = 0;
    
  for (let rows = 0; rows < noOfRows; rows++) {
    canvasRow = myCanvas.insertRow(rows);
    
    for (let cols = 0; cols < noOfCols; cols++) {
      canvasCol = canvasRow.insertCell(cols);
    }    
  }
} 
  
