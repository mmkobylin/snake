document.addEventListener('DOMContentLoaded', () => {

    //selecting the div by the class
    const squares = document.querySelectorAll('.grid div')

    // picking the button
    const strBtn = document.querySelector('.start')

    const scoreDisplay = document.querySelector('span')


    const width = 10 

    // first on the grid: snake
    let currentIndex = 0 

    // apple what snake eats 
    let appleIndex = 0;

    let currentSnake = [ 2, 1, 0 ] 
    // div the grid of our snake is being 2, or the head

    let direction = 1  
    let score = 0; 
    let speed = 0.9





    // pseudocode:
    // create a board
    //create a variable for width
    // create empty array for the board items
    // create a function to execute it
    // call the function 


    console.log(strBtn);

});
