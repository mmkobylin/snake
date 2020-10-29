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
    // 0 - point
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


    
    const score = 0; 

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
                squares[i].classList.add('point')
            } else if (layout[i] === 2) {
                squares[i].classList.add('empty')
            }
        }
    };

    createBoard();

   

    //creating moving buttons:
    //making sure the site loads first 

    ((d) => {

        let width = 10;
        let snakeIndex = 64; 
        squares[snakeIndex].classList.add('snake')
        squares[snakeIndex].classList.remove('point')
        
        function moveSnake() {
            //declare the variables
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
                squares[snakeIndex].classList.remove("point", "empty");

                squares[snakeIndex].classList.add("snake");

                }
            })



            buttonUp.addEventListener('click', () => {
                //if snake is not going to go into a wall, let it go
                if (!squares[snakeIndex - width].classList.contains('wall')){
                squares[snakeIndex].classList.remove("snake");
                squares[snakeIndex].classList.add("empty");

                snakeIndex -=width;
                squares[snakeIndex].classList.remove("point", "empty");

                squares[snakeIndex].classList.add("snake");

                }
            })
            buttonDown.addEventListener('click', () => {
                if (!squares[snakeIndex + width].classList.contains('wall')){

                squares[snakeIndex].classList.remove("snake");
                squares[snakeIndex].classList.add("empty");

                snakeIndex +=width;
                squares[snakeIndex].classList.remove("point", "empty");

                squares[snakeIndex].classList.add("snake");

                }
            })

            buttonRight.addEventListener('click', () => {
                if(!squares[snakeIndex +1].classList.contains('wall')){
                    squares[snakeIndex].classList.remove('snake', 'point')
                    squares[snakeIndex].classList.add('empty')

                    snakeIndex +=1;
                    squares[snakeIndex].classList.remove('point', 'empty')
                    squares[snakeIndex].classList.add('snake')
                }
            })
          }

        function pointEaten(){
            if (squares[snakeIndex].classList.contains('point')){
                score+=1
                scoreDisplay.innerHTML = score
                squares[snakeIndex].classList.remove('point')
                console.log(score)
            }
        }
        pointEaten(); 

        moveSnake();

        let show = d.getElementById("show");

        // this is our state
        // keep track of whether the show is blue or not
        let blue = true;
    
        // every time the user clicks
        show.addEventListener("click", () => {
            // if blue then set to red, otherwise set to blue
            show.style.opacity = blue ? "100" : "0";
    
            // switch the value of blue
            blue = !blue;
        });
    })(document);

    console.log('chuj')

});
