// SELECTIONS //
const color = document.getElementById("colorPicker"),
      form = document.getElementById("sizePicker"),
      canvasHeight = document.getElementById("inputHeight"),
      canvasWidth = document.getElementById("inputWidth");

let submitButton = document.getElementById("submit"),
    myCanvas = document.getElementById("pixelCanvas");


// FUNCTION(S) & LISTENERS //

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener("click", function(){
  makeGrid();

  form.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(event); //remove before project delivery 
  });

});

function makeGrid() {    
  for (let rows = 0; rows < canvasHeight.value; rows++) {
    canvasRow = myCanvas.insertRow(rows);
    
    for (let cols = 0; cols < canvasWidth.value; cols++) {
      canvasCol = canvasRow.insertCell(cols);
    }    
  }
} 

  
