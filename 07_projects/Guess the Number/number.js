let randomNo = (parseInt((Math.random()) * 100 + 1))
console.log(randomNo);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number!");
    } else if (guess < 1) {
        alert("Please enter a number greater than 1!");
    } else if (guess > 100) {
        alert("Please enter a number less than 100!");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over, Answer was ${randomNo}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess==randomNo) {
        displayMessage(" You guessed it right! ");
        endGame();
    } else if (guess<randomNo){
        displayMessage(" You guessed a smaller number! ");
        
    } else if (guess>randomNo){
        displayMessage(" You guessed a larger number! ");
        
    }
}

function displayGuess(guess) {
    userInput.value=''  //cleanup
    guessSlot.innerHTML+= `[` + ` ${guess} ` + `] `
    numGuess++;
    remaining.innerHTML= ` ${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML= ` <h2> ${message} </h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame"> Start New Game </h2>`;
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame'); // Fix the selector
    newGameButton.addEventListener('click', function (e) {
        e.preventDefault();
        randomNo = parseInt((Math.random()) * 100 + 1); // Generate new number
        prevGuess = [];
        numGuess = 1; // Reset count
        guessSlot.innerHTML = ''; // Clear previous guesses
        remaining.innerHTML = ` ${11 - numGuess}`; // Reset remaining guesses
        userInput.removeAttribute('disabled'); // Enable input
        startOver.removeChild(p); // Remove the new game button
        playGame = true;
    });
}

