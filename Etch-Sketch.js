const gridcontainer = document.querySelector("#grid-container")
const colorpicker = document.querySelector("#colorpicker")
const Colorbutton = document.querySelector("button")


const gridSize = 16;
const totalCell = gridSize * gridSize;


for(let i = 0; i < totalCell; i++) {
    
    const cell = document.createElement("div")
    
    cell.classList.add("grid-cell")
    
    gridcontainer.appendChild(cell);

}


let chosecolor = colorpicker.value;

Colorbutton.style.backgroundColor = chosecolor;

colorpicker.addEventListener('input', (event) => {
 
    chosecolor = event.target.value;
  
    Colorbutton.style.backgroundColor = chosecolor;

});


cell.addEventListener("mouseenter", () =>{

        cell.style.backgroundColor = chosecolor;
    
    });