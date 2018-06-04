// SELECTIONS //

//color input
const color = document.getElementById("colorPicker");

//size input
const canvasHeight = document.getElementById("inputHeight");
const canvasWidth = document.getElementById("inputWidth");

//submit button
let submitButton = document.getElementById("submit");

//design canvas
let myCanvas = document.getElementById("pixelCanvas");

// FUNCTIONS & LISTENERS //

//Code help: https://www.w3schools.com/jsref/event_preventdefault.asp
// document.getElementById("sizePicker").addEventListener("click", function(formEvent) {
//   console.log(formEvent);
//   formEvent.preventDefault();
// });

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener("click", function(formEvent){
  makeGrid();
});

function makeGrid() {
  // Your code goes here!
    let canvasRow = 0;
    let canvasCol = 0;
    
  for (let rows = 0; rows < canvasHeight.value; rows++) {
    canvasRow = myCanvas.insertRow(rows);
    
    for (let cols = 0; cols < canvasWidth.value; cols++) {
      canvasCol = canvasRow.insertCell(cols);
    }    
  }
} 
  
