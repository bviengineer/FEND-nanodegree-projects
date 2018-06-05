// SELECTIONS //
const color = document.getElementById("colorPicker"),
      form = document.getElementById("sizePicker"),
      canvasHeight = document.getElementById("inputHeight"),
      canvasWidth = document.getElementById("inputWidth");

let submitButton = document.getElementById("submit"),
    myCanvas = document.getElementById("pixelCanvas");
  
    
// FUNCTION(S) & LISTENERS //
submitButton.addEventListener("click", function(){
  makeGrid();
  
  form.addEventListener("click", function(event) {
    event.preventDefault(); 
  }); //END form addEventListener
}); //END submitButton addEventListener

function makeGrid(){
  for (let rows = 0; rows < canvasHeight.value; rows++) {
    let canvasRow = myCanvas.insertRow(rows);
    for (let cols = 0; cols < canvasWidth.value; cols++) {
      let canvasCol = canvasRow.insertCell(cols);
    } //END canvasWidth
  } //END canvasHeight
} // END makeGrid()

// Color individual cells
myCanvas.addEventListener("click", function(event){
  event.target.style.backgroundColor = color.value;
});//END myCanvas addEventListener

// END SCRIPT

/*

PROUD MOMENT: These two lines of statements were instrumental in developing the code above that targets individual cells to color and remains noted here as a personal reminder.  
          console.log(myCanvas.children[0].childNodes); 
          console.log(event); 
*/