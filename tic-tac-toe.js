//HTML
//CSS
//JS
    //On click of div, add a class
        //class will style X or O ....x-selection ...o-selection
    //Session store
    //insert promise
    //after win, disable clicking

function run () {
    let cells = document.querySelectorAll('.cell');

    for (let a = 0; a < cells.length; a++) {
        cells[a].addEventListener('click', myFunction);
    }
}

run();

let O_Players_Turn = false;

let arr1 = [
    ["","",""],
    ["","",""],
    ["","",""]
]

function myFunction (e) {
    let clickedCell = e.target;
    let prevSelection = clickedCell.classList

    //unable selected cell to be selected again
    if (prevSelection.contains('x-player') || prevSelection.contains('o-player')) {

    } else {
        let row = e.target.getAttribute('data-row');
        let position = e.target.getAttribute('data-col');
        
        if (!O_Players_Turn) {
            //console.log(O_Players_Turn);
            e.target.className += ' x-player';
            arr1[row][position] = 'x';
            O_Players_Turn = false;
        } else {
            //console.log(O_Players_Turn);
            e.target.className += ' o-player';
            arr1[row][position] = 'o';
            O_Players_Turn = true;
        }

        O_Players_Turn = !O_Players_Turn;
        checkWin();
    }

}

function checkWin() {
    for (let i=0; i < arr1.length; i++) {
        //track rows
        if ( arr1[i].every(n => n=='x') ||  arr1[i].every(n => n=='o')) {
            break;
        } 
        else if (arr1[0][0] === 'x' && arr1[1][0] === 'x' && arr1[2][0] === 'x' || arr1[0][0] === 'o' && arr1[1][0] === 'o' && arr1[2][0] === 'o'){
            break;
        } else if (arr1[0][1] === 'x' && arr1[1][1] === 'x' && arr1[2][1] === 'x' || arr1[0][1] === 'o' && arr1[1][1] === 'o' && arr1[2][1] === 'o'){
            break;
        } else if (arr1[0][2] === 'x' && arr1[1][2] === 'x' && arr1[2][2] === 'x' || arr1[0][2] === 'o' && arr1[1][2] === 'o' && arr1[2][2] === 'o'){
           break;
        } else if (arr1[0][0] === 'x' && arr1[1][1] === 'x' && arr1[2][2] === 'x' || arr1[0][0] === 'o' && arr1[1][1] === 'o' && arr1[2][2] === 'o'){
           break;
        } else if (arr1[0][2] === 'x' && arr1[1][1] === 'x' && arr1[2][0] === 'x' || arr1[0][2] === 'o' && arr1[1][1] === 'o' && arr1[2][0] === 'o'){
           break;
        }
    }
}