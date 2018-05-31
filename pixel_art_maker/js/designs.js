// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
document.body.addEventListener("click", function(){
  const newTable = document.createElement("tr");
  newTable.innerHTML = "<td>used js-row 1, cell 1</td><td>r1c2</td><td>r1c3</td><td>r1c4</td><td>r1c5</td>";
  document.getElementById("pixelCanvas").appendChild(newTable);
});

function makeGrid() {
    // Your code goes here!

  }
  
