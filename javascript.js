function createGrid(side){
    const outerContainer = document.querySelector("#container");
    for (let row = 0; row < side; row++) {
        const container = document.createElement("div");
        container.classList.add("row");
        for(let col = 0; col < side; col++){
            const div = document.createElement('div');
            let size = 80/side;
            div.style.minWidth= `${size}vh`;
            div.style.paddingBottom=`${size}vh`;
            div.style.border="1px ridge"
            div.classList.add('square');
            container.appendChild(div);
        }  
        outerContainer.appendChild(container);
    }
}

function changeColor(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor="#63666A";
        });
    });
}

function reset(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor="white";
    });
}
function clearAll(){
    const outerContainer = document.querySelector("#container");
    const container = document.querySelectorAll('.row');
    container.forEach(c => {
        outerContainer.removeChild(c);
    });
}

const size = document.getElementById("sizeButton");
const sizeNum = document.getElementById("sizeNum");
size.addEventListener("click", () => {
    let gridSize = 0;
    while (!Number.isInteger(Number(gridSize)) || gridSize < 1 || gridSize > 100){
        gridSize = prompt("Enter a valid grid size between 1 to 100", "Note: Your drawing will be erased");
    }
    reset();
    sizeNum.textContent=`Size of Grid: ${gridSize}`;
    clearAll();
    createGrid(gridSize);
    changeColor();
});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    reset();
});

createGrid(16);
changeColor();