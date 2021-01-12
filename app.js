document.addEventListener('DOMContentLoaded', () => {

    //selecting the div by the class
    const squares = document.querySelectorAll('.grid div')
    // picking the button
    const strBtn = document.querySelector('.start')
    const scoreDisplay = document.querySelector('span')

    const width = 10;
    let currentIndex = 0 //first div in our grid
    let appleIndex = 0 //ALSO first div
    let currentSnake = [2,1,0] 
    // div the grid of our snake is being 2, or the head

    let direction = 1  
    let score = 0 
    let speed = 0.9
    let intervalTime = 0
    let interval = 0
    
    function startGame() {
        // this is where we are resetting the values
        currentSnake.forEach( index => squares[index].classList.remove('snake'))
        squares[appleIndex].classList.remove('apple')
        score = 0 
        randomApple()
        direction = 1
        
        scoreDisplay.innerText = score 
    

        intervalTime = 1000 
        currentSnake = [ 2, 1, 0 ]
        currentIndex = 0 
        currentSnake.forEach(index => squares[index].classList.add('snake'))
        interval = setInterval( moveOutcomes, intervalTime )
    }
        
    // function that deals with each movement

    function moveOutcomes() 
    {
        if (
                // if snake hits bottom
                (currentSnake[0] + width >= ( width * width ) && direction === width ) ||
                // if snake hits right wall 
                (currentSnake[0] % width === width - 1 && direction === 1 ) ||
                // if snake hits left wall 
                (currentSnake[0] % width === 0 && direction === -1 ) ||
                // if snake hits top: 
                (currentSnake[0] - width < 0 && direction === -width ) ||
                // function that deals with snake hitting himself

                squares[currentSnake[0] + direction].classList.contains('snake')
            )
            { 
                // this is where you change the text input
                scoreDisplay.innerText = "GAME OVER"

                return clearInterval(interval) 
            }

            // function pop() removes the last item fro an array
            const tail = currentSnake.pop()
            // this one removes the snake item
            squares[tail].classList.remove('snake')
            // unshift adds elements to the beginning of the array
            currentSnake.unshift(currentSnake[0] + direction)

            if ( squares[currentSnake[0]].classList.contains('apple')) {
                squares[currentSnake[0]].classList.remove('apple')
                squares[tail].classList.add('snake')
                currentSnake.push(tail)
                randomApple()
                score++
                scoreDisplay.textContent = score
                clearInterval(interval)
                intervalTime = intervalTime * speed
                interval = setInterval(moveOutcomes, intervalTime)
            }
        squares[currentSnake[0]].classList.add('snake')
    }

       
    function control(e) {
        // removes snake class when snake moves
        squares[currentIndex].classList.remove('snake');

        if
        // right
        ( e.keyCode === 39) {
            direction = 1 
        } 
        else if 
        ( e.keyCode === 38) {
            direction = -width
        }
        else if 
        // top
        ( e.keyCode === 40 ) {
            direction = +width
        } 
        else if
        // left
        (e.keyCode === 37 ) {
            direction = - 1
        }
    }

    function randomApple() {
        do {
            appleIndex = Math.floor(Math.random() * squares.length)
        } while(squares[appleIndex].classList.contains('snake'))
        squares[appleIndex].classList.add('apple')

    }


    // let's add event's listener
    document.addEventListener('keyup', control)
    strBtn.addEventListener('click', startGame)


});
