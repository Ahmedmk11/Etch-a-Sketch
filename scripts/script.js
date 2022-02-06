const DEFAULT_SIZE = 16;
let currentSize = DEFAULT_SIZE;

function drawButton(){
    drawBtn.classList.add('toggled-button');
    gridContainer.addEventListener("mousedown", () => mouseEvent.mouseDown = true)
    gridContainer.addEventListener("mouseup", () => delete mouseEvent.mouseDown)
}

function canDraw() {
    return mouseEvent.mouseDown;
}

function draw(e){
    colorPicked = colors.value;

    if (canDraw() && e.fromElement.classList.contains('can-draw')) {
      e.fromElement.setAttribute('style',`background: ${colorPicked}`)
    }
}

function clear(){
    gridArray.forEach(item => item.setAttribute('style', 'background: white'));

    if(drawBtn.classList.contains('toggled-button')){
        drawBtn.classList.remove('toggled-button');
    }
    if(ers.classList.contains('toggled-button')){
        ers.classList.remove('toggled-button');
    }
}

function loadGrid(gridSize){
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for(let i = 0; i < (gridSize ** 2); i++){
        let div = document.createElement('div');
        div.setAttribute('class', 'grid-item can-draw');
        div.addEventListener("mouseover", draw);
        gridContainer.append(div);
        
    }
}

function clearGrid() {
    gridContainer.innerHTML = '';
}

function reloadGrid() {
    clearGrid();
    loadGrid(currentSize);
}

function updateSizeValue(value) {
    adjustValue.textContent = `${value} x ${value}`
}

function setCurrentSize(newSize) {
    currentSize = newSize;
}

function changeSize(value) {
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

let gridLines = document.getElementById('grid-lines');
gridLines.addEventListener('click', () =>{
    (gridContainer.classList.toggle('gap'))
});

let gridSizeElement = document.querySelector('.slider');
gridSizeElement.onchange = (e) => changeSize(e.target.value);

let adjustValue = document.getElementById('adjust-value');
adjustValue.textContent= `${DEFAULT_SIZE} x ${DEFAULT_SIZE}`;


let colors = document.getElementById('color-wheel');
let colorPicked = colors.value;
console.log(colorPicked);

let gridContainer = document.getElementById('grid-container');
let gridArray = [];
let mouseEvent = {};

let clr = document.getElementById('clear-all');
clr.addEventListener("click",clear);

let drawBtn = document.getElementById('pencil');
let ers = document.getElementById('grid-eraser');


// for(let i = 0; i < (gridSize ** 2); i++){
//     let div = document.createElement('div');
//     div.setAttribute('class', 'grid-item');
//     div.addEventListener("mouseover", draw);
//     gridContainer.append(div);
//     gridArray[i] = div;
// }

window.onload = () => {
    loadGrid(DEFAULT_SIZE)
};