
const grid = document.querySelector('#grid');
const clear_button = document.querySelector('#clear');


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createGrid(edge_length) {
    let slice_width = (grid.clientWidth / edge_length) -2;
    for (let index = 0; index < edge_length*edge_length; index++) {
        let slice =  document.createElement('div');
        slice.style.width = slice_width +"px";
        slice.style.height = slice_width +"px";
        slice.style.borderStyle = "dashed";
        slice.style.borderWidth = "1px";
        slice.style.borderColor = "lightgray";
        grid.appendChild(slice);
    }
}

function addEventListeners(){
    grid.childNodes.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = "#000000";
          });
    });
}

function clearGrid(){
    //e.firstElementChild can be used.
    var child = grid.lastElementChild;
    while (child) {
        grid.removeChild(child);
        child = grid.lastElementChild;
    }
}

function restart() {
    clearGrid();
    createGrid(16);
    addEventListeners();
}

clear_button.addEventListener('click', () => {
    restart();
});


restart();