document.addEventListener('DOMContentLoaded', () => {

    //selecting the div by the class
    const grid = document.querySelector('.grid')

    // pseudocode:
    // create a board
    //create a variable for width
    // create empty array for the board items
    // create a function to execute it
    // call the function 
  
    const width = 10

    //legend: 
    // 1 - wall
    // 0 - space
    // 2 - snake

    const layout = [
        1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,1,
        1,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1
    ];

    const squares = [];


    function createBoard() {
        //foreach function to append it to the squares
        for (let i = 0; i < layout.length; i++) {
            //each of the layout elements becomes div
            const square = document.createElement('div')
            //appending to grid
            grid.appendChild(square)

            //pushing the newly created divs into the empty array
            squares.push(square);

            //if it's 1 add class 'wall'
            if (layout[i] === 1 ) {
                squares[i].classList.add('wall')
            } else if (layout[i] === 0 ) {
                squares[i].classList.add('space')
            } else if (layout[i] === 2) {
                squares[i].classList.add('snake')
            }
        }
    };

    createBoard();


    

    //creating moving buttons:
    //making sure the site loads first 

    ((d) => {

        let snakeIndex = 66; 
        squares[snakeIndex].classList.add('snake')

        let buttonUp = d.getElementById('data-up')

        buttonUp.addEventListener('click', () => {
            //if snake is not going to go into a wall, let it go
            console.log('sun')
        })

        let buttonDown = d.querySelector('[data-down]')

        buttonDown.addEventListener('click', () => {
            console.log('moon')
        })

        
    })(document);


});
