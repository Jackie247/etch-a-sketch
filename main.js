function startPage(){
    initPageFunctions();
}

function initPageFunctions(){
    // Button Functions
    createGridBtn();
    clearGridBtn();
    // Grid Functions
    turnSqBlackOnHover();
}
function createGridBtn(){
    const newGridButton = document.querySelector('.newGridBtn');
    newGridButton.addEventListener('click',()=>{
        let size = prompt("Enter size of grid: ");
        while(size > 100 || size < 1){
            size = prompt("Enter size of grid: ");
        }
        createGrid(size);
    });
}

function getUserInput(){
    let size = prompt("Enter size of grid: ");
    while(size > 100 || size < 1){
        size = prompt("Enter size of grid: ");
    }
    return size;
}
function createGrid(size){
    const gridContainer = document.querySelector(".gridContainer");
    if(gridContainer.hasChildNodes()){
        alert("Grid already exists, clear first!");
        return -1;
    }
    for(let rows = 0; rows < size; rows++){
        for(let columns = 0; columns < size; columns++){
            const square = document.createElement('div');
            square.classList.add("square");
            gridContainer.appendChild(square);
        }
    }
}

function clearGridBtn(){
    let delBtn = document.querySelector(".delGridBtn");
    delBtn.addEventListener("click",()=>{
        const gridContainer = document.querySelector(".gridContainer");
        while (gridContainer.hasChildNodes()) {
            gridContainer.removeChild(gridContainer.firstChild);
          }
    });
}
function turnSqBlackOnHover(){
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor = "black";
        });
    });
}

startPage();

