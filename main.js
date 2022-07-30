function startPage(){
    // Init Button Functions
    createGridBtn();
    clearGridBtn();

    createGrid(16);
}

function createGridBtn(){
    const newGridButton = document.querySelector('.newGridBtn');
    newGridButton.addEventListener('click',()=>{
        let size = prompt("Enter size of grid between 16 and 100: ");
        while(size > 100 || size < 16){
            size = prompt("Enter size of grid between 16 and 100: ");
        }
        createGrid(size);
    });
}

function createGrid(size){
    clearGrid()
    const gridContainer = document.querySelector(".gridContainer");
    delExistingGrid(gridContainer);
    // Set the grid column and rows to repeat so grid items wrap inside grid.
        // Creates the grid of size x size 
        for(let rows = 0; rows < size * size; rows++){
            const square = document.createElement('div');
            square.classList.add("square");
            gridContainer.appendChild(square);
        }
    gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
    turnSqBlackOnHover();
}

function clearGridBtn(){
    let delBtn = document.querySelector(".delGridBtn");
    delBtn.addEventListener("click",()=>{
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.classList.remove("filled");
        });
    });
}

function delExistingGrid(gridContainer){
    while(gridContainer.hasChildNodes()){
        gridContainer.removeChild(gridContainer.lastChild);
    }
}
function clearGrid(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.classList.remove("filled");
    });
}
function turnSqBlackOnHover(){
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover',()=>{
            square.classList.add("filled");
        });
    });
}

startPage();

