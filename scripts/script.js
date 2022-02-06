let gridContainer = document.getElementById('grid-container');
let gridArray = [];
for(let i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.setAttribute('class', 'grid-item');
    gridContainer.append(div);
    gridArray[i] = div;
}

gridArray.forEach(item => item.addEventListener("mouseover", () => {
    (item.classList.add('hover')) 
}));
