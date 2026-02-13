const gridcontainer = document.querySelector("#grid-container")
const colorpicker = document.querySelector("#colorpicker")
const sizeInput = document.querySelector("#sizeInput")


let chosecolor = colorpicker.value;

colorpicker.addEventListener('input', (event) => {

    chosecolor = event.target.value;

    colorpicker.style.backgroundColor = chosecolor;
});

function newsize(size) {
    
    gridcontainer.innerHTML = "";

    gridcontainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    gridcontainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    
    for (let i = 0; i < size * size; i++) {
        
        const cell = document.createElement("div");
       
        cell.classList.add("grid-cell");

        cell.addEventListener("mouseenter", () => {
           
            cell.style.backgroundColor = chosecolor;
        });

        gridcontainer.appendChild(cell);
    }
}


if (sizeInput) {
    newsize(parseInt(sizeInput.value, 10) || 16);

    sizeInput.addEventListener('change', (e) => {

        const newSize = parseInt(e.target.value, 10) || 16;

        newsize(newSize);
    });

} else {
   
    newsize(16);
}
