function createGrid(){
    const outerContainer = document.querySelector("#container");
    for (let row = 0; row < 16; row++) {
        const container = document.createElement("div");
        container.classList.add("row");
        for(let col = 0; col < 16; col++){
            const div = document.createElement('div');
            // div.setAttribute('id', `${row}:${col}`);
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
            square.style.backgroundColor="black";
        });
    });
}

function reset(){
    const squares = document.querySelectorAll('.square');
console.log(squares);
    squares.forEach(square => {
        square.style.backgroundColor="white";
    });
}

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    reset();
});

createGrid();
changeColor();