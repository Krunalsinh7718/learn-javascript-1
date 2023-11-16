let playGame = true;
let guesses = [];
let attempts = 10;
let randNo = Math.floor(Math.random() * 100 + 1);
console.log("guess number :", randNo);

let numberInput = document.querySelector("#numberInput");
let numberSubmitBtn = document.querySelector("#numberSubmitBtn");
let prevGuesses = document.querySelector("#prevGuesses");
let remgAttempts = document.querySelector("#remgAttempts");
let dispMessage = document.querySelector("#dispMessage");
startGame();

function startGame() {
    if(playGame){
        numberSubmitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setDefault();
            const guessNum = parseInt(numberInput.value);
            const isValidNum = validateNumber(guessNum);
            if(!isValidNum) {
                setMessage('<span style="color:red;">Please enter number between 1 and 100</span>')
            }else{
                checkGuess(guessNum);
            }
        })
    }
}

function restartGame() {
    playGame = true;
    numberSubmitBtn.removeAttribute('disabled');
    setMessage('');
    guesses = [];
    setGuess(guesses);
    attempts = 10;
    randNo = Math.floor(Math.random() * 100 + 1)
    console.log("guess number :", randNo);
}

function validateNumber(guess){
    if(guess < 1 || guess > 100 || !guess){
        return false;
    }
    return true;
}

function setDefault(){
    setMessage('');
}   

function setMessage(message){
    dispMessage.innerHTML = message;
}

function setGuess(guesses){
    const prevGuess = guesses.join(' , ')
    prevGuesses.innerHTML = prevGuess;
    remgAttempts.innerHTML = attempts - guesses.length;
}



function checkGuess(guess){
    guesses.push(guess);

    setGuess(guesses);

    if(guess === randNo){
        endGame();
    }else if(guess > randNo){
        setMessage("guess is too big.")
    }else if(guess < randNo){
        setMessage("guess is too less.")
    }
}

function endGame() {
    playGame = false;
    numberSubmitBtn.setAttribute('disabled','');

    setMessage(`
        <span style="color:green;">You have guess the right number.</span>
        <div onclick="restartGame()">Click hear to restart the game.<div>
    `);

}
