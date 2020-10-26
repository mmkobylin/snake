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
        1,0,0,0,0,0,2,0,0,1,
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
                squares[i].classList.add('empty')
            }
        }
    };

    createBoard();


    

    //creating moving buttons:
    //making sure the site loads first 

    ((d) => {
        //declare the variables
        let width = 10;
        let snakeIndex = 64; 
        squares[snakeIndex].classList.add('snake')

        let buttonUp = d.getElementById('data-up')
        let buttonDown = d.querySelector('[data-down]')
        let buttonLeft = d.querySelector('[data-left]')
        let buttonRight = d.querySelector('[data-right]')

        buttonLeft.addEventListener('click', () => {
            //if snake is not going to go into a wall, let it go
            if (!squares[snakeIndex - 1].classList.contains('wall')){
            squares[snakeIndex].classList.remove("snake");
            squares[snakeIndex].classList.add("empty");

            snakeIndex -=1;
            squares[snakeIndex].classList.remove("space", "empty");

            squares[snakeIndex].classList.add("snake");

            console.log(snakeIndex)
            }
        })



        buttonUp.addEventListener('click', () => {
            //if snake is not going to go into a wall, let it go
            if (!squares[snakeIndex - width].classList.contains('wall')){
            squares[snakeIndex].classList.remove("snake");
            squares[snakeIndex].classList.add("empty");

            snakeIndex -=width;
            squares[snakeIndex].classList.remove("space", "empty");

            squares[snakeIndex].classList.add("snake");

            console.log(snakeIndex)
            }
        })
        buttonDown.addEventListener('click', () => {
            if (!squares[snakeIndex + width].classList.contains('wall')){

            squares[snakeIndex].classList.remove("snake");
            squares[snakeIndex].classList.add("empty");

            snakeIndex +=width;
            squares[snakeIndex].classList.remove("space", "empty");

            squares[snakeIndex].classList.add("snake");

            console.log(snakeIndex)
            }
        })

        buttonRight.addEventListener('click', () => {
            if(!squares[snakeIndex +1].classList.contains('wall')){
                squares[snakeIndex].classList.remove('snake', 'space')
                squares[snakeIndex].classList.add('empty')

                snakeIndex +=1;
                squares[snakeIndex].classList.remove('space', 'empty')
                squares[snakeIndex].classList.add('snake')

                console.log(snakeIndex);
            }
        })


        
    })(document);


});
