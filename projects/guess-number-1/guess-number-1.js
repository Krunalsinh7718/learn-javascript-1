let randNo = parseInt(Math.floor(Math.random() * 100 + 1));

let numberSubmitBtn = document.querySelector("#numberSubmitBtn");
let numberInput = document.querySelector("#numberInput");
let guessSlot = document.querySelector("#guessSlot");
let remgAttempts = document.querySelector("#remgAttempts");
let dispMessage = document.querySelector("#dispMessage");
let messageBox = document.querySelector(".messages-box");

let p = document.querySelector('p');

let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    numberSubmitBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(numberInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("please enter valid number");
    }else if(guess < 1){
        alert("please enter a number more then 1");
    }else if(guess > 100){
        alert("please enter a number less then 100");
    }else{
        prevGuess.push(guess);
        displayGuess(guess);
        if(numGuesses === 11){
            displayMessage(`game over. Random number was ${randNo}.`)
            endGame();
        }else{
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === randNo){
        displayMessage(`you guessed it right.`);
        endGame();
    }else if(guess < randNo){
        displayMessage(`number is too low.`);
    }else if(guess > randNo){
        displayMessage(`number is too high.`);
    }
}

function displayGuess(guess) {
    numberInput.value = '';
    guessSlot.innerHTML += `${guess}`;
    remgAttempts.innerHTML = `${10 - numGuesses}`
    numGuesses++;
}

function displayMessage(message) {
    dispMessage.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    numberInput.value = '';
    numberInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = '<h2 id="newGame" >Start a new Game</h2>';
    messageBox.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener('click', function(e){
        randNo = parseInt(Math.floor(Math.random() * 100 + 1));
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        dispMessage.innerHTML= '';
        remgAttempts.innerHTML = `${10 - numGuesses}`;
        numberInput.removeAttribute('disabled');
        messageBox.removeChild(p);
        playGame = true;
    })
}
