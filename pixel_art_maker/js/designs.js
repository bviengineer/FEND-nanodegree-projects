// SELECTIONS 
const color = document.getElementById("colorPicker"),
      form = document.getElementById("sizePicker"),
      canvasHeight = document.getElementById("inputHeight"),
      canvasWidth = document.getElementById("inputWidth");

let submitButton = document.getElementById("submit"),
    myCanvas = document.getElementById("pixelCanvas"),
    canvasRow = "",
    canvasCell = "",
    colorCell = "";
    
// FUNCTION(S) & LISTENERS 
submitButton.addEventListener("click", function(){  
  //clears table rows & cells in the event of a new grid size submission request
  myCanvas.innerHTML = ""; 
  makeGrid();
  //will prevent form from refreshing the page and thus removing the grid immeditely after it has been displayed
  form.addEventListener("click", function(event) {
    event.preventDefault(); 
  });
});

function makeGrid(event){
  for (let rows = 0; rows < canvasHeight.value; rows++) {
    canvasRow = myCanvas.insertRow(rows);
    for (let cells = 0; cells < canvasWidth.value; cells++) {
      canvasCell = canvasRow.insertCell(cells);
    } 
  } 
} 

// Color individual cells
myCanvas.addEventListener("click", function(event){
  event.target.style.backgroundColor = color.value;
}); 