let currentPlayer = 1;

const reset = document.querySelector('.reset');
const cells = document.querySelectorAll('.cell');

let playerOne = [];
let pleyerTwo = [];

for (let i = 0; i < cells.length; i++) {

    cells[i].setAttribute('id', `cell-${i}`);

    // let location = document.querySelector('#')

    cells[i].addEventListener('click', function (evt) {

        if (currentPlayer === 1) {

            evt.target.style.backgroundColor = 'red';
            currentPlayer = 2;
            // playerOne.push(document.querySelector('#'))
            console.log(playerOne);
            
        }
        else {
            evt.target.style.backgroundColor = 'green';
            currentPlayer = 1;
        }

        evt.target.style.pointerEvents = 'none';
    })
}

reset.addEventListener('click', function(evt){

    evt.preventDefault();

    for (let i = 0; i < cells.length; i++) {
        const element = cells[i];

        element.style.backgroundColor = '#aec2b7';

        element.style.pointerEvents = 'auto';
        
    }
})