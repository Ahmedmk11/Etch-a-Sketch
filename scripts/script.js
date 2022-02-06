function drawButton(){
    drawBtn.classList.add('toggled-button');
    if(ers.classList.contains('toggled-button')){
        ers.classList.remove('toggled-button');
    }
    gridContainer.addEventListener("mousedown", () => mouseEvent.mouseDown = true)
    gridContainer.addEventListener("mouseup", () => delete mouseEvent.mouseDown)
}

function canDraw() {
    if (ers.classList.contains('toggled-button')){
        return false;
    }
    return mouseEvent.mouseDown;
}

function draw(e){
    colorPicked = colors.value;

    if (canDraw()) {
      e.fromElement.setAttribute('style',`background: ${colorPicked}`)
    }
}

function eraser(){
    ers.classList.add('toggled-button');
    if(drawBtn.classList.contains('toggled-button')){
        drawBtn.classList.remove('toggled-button');
    }
    gridArray.forEach(item => item.addEventListener("click", () => {
        (item.setAttribute('style', 'background: white'))
    }));
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

let value = document.getElementById('adjust-value');
value.textContent = "16 x 16";


let colors = document.getElementById('color-wheel');
let colorPicked = colors.value;
console.log(colorPicked);

let gridContainer = document.getElementById('grid-container');
let gridArray = [];
let mouseEvent = {};
for(let i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.addEventListener("mouseover", draw);
    div.setAttribute('class', 'grid-item');
    div.addEventListener("mouseover", draw);
    gridContainer.append(div);
    gridArray[i] = div;
}

let clr = document.getElementById('clear-all');
clr.addEventListener("click",clear);

let drawBtn = document.getElementById('pencil');
let ers = document.getElementById('grid-eraser');



