const outerContainer = document.querySelector("#container");

function createGrid(side){
    for (let row = 0; row < side; row++) {
        const container = document.createElement("div");
        container.classList.add("row");
        for(let col = 0; col < side; col++){
            const div = document.createElement('div');
            setBorderWidth(div,side);
            div.classList.add('square');
            div.setAttribute("id","100");
            container.appendChild(div);
        }  
        outerContainer.appendChild(container);
    }
}
// 2 w 641px
// h 544.5px
// 10 w 641px
// h 522.656
// 20 532.5


function setBorderWidth(div,side){
    let size = .8*smallerScreenSize()/side;
    console.log(size);
    // let borderWidth = 1/side;
    // console.log(borderWidth);
    div.style.minWidth= `${size}px`;
    div.style.paddingBottom=`${size}px`;
    // div.style.borderWidth = `${borderWidth}px ${borderWidth}px 0 0`;
    div.style.border="0";
}
function smallerScreenSize(){
    return (window.innerWidth > window.innerHeight) ? 
        window.innerHeight
        :window.innerWidth;
}

function changeColor(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', () => {
            let shade = square.id;
            shade=(Number(shade)-10);
            square.setAttribute("id",shade);
            square.style.backgroundColor=("hsl(0,0%,"+shade+"%)");
        });
    });
}

function reset(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor="white";
        square.id="100";
    });
}
function clearAll(){
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
    sizeNum.textContent=`Grid Pixels: ${gridSize}`;
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