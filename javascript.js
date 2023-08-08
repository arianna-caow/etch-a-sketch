function createGrid(side){
    const outerContainer = document.querySelector("#container");
    for (let row = 0; row < side; row++) {
        const container = document.createElement("div");
        container.classList.add("row");
        for(let col = 0; col < side; col++){
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
    squares.forEach(square => {
        square.style.backgroundColor="white";
    });
}

const size = document.getElementById("size");
const sizeNum = document.getElementById("sizeNum");
size.addEventListener("submit", () => {
    console.log(size.value);
    reset();
});


const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    reset();
});

//createGrid(16);
changeColor();