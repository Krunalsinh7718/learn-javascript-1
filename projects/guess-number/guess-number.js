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
            setMessage('');
            const guessNum = parseInt(numberInput.value);
            const isValidNum = validateNumber(guessNum);

            if(isValidNum) setAttempts();

            if(!isValidNum) {
                setMessage('<span style="color:red;">Please enter number between 1 and 100</span>')
            }else if(attempts > 0){
                numberInput.value = '';
                checkGuess(guessNum);
                setGuess(guessNum);
            }else{
                endGame(false);
            }
        })
    }
}

function restartGame() {
    playGame = true;
    numberInput.value = '';
    numberSubmitBtn.removeAttribute('disabled');
    setMessage('');
    guesses = [];
    setGuess(guesses);
    attempts = 10;
    remgAttempts.innerHTML = attempts;
    randNo = Math.floor(Math.random() * 100 + 1)
}

function validateNumber(guess){
    if(guess < 1 || guess > 100 || isNaN(guess)){
        return false;
    }
    return true;
}

function setMessage(message){
    dispMessage.innerHTML = message;
}

function setAttempts() {
    attempts = attempts - 1;
    remgAttempts.innerHTML = attempts;
}

function setGuess(guessNum){
    guesses.push(guessNum);
    const prevGuess = guesses.join(' , ')
    prevGuesses.innerHTML = prevGuess;
   
}

function checkGuess(guess){
    if(guess === randNo){
        endGame(true);
    }else if(guess > randNo){
        setMessage("guess is too big.")
    }else if(guess < randNo){
        setMessage("guess is too less.")
    }
}

function endGame(success) {
    playGame = false;
    numberSubmitBtn.setAttribute('disabled','');

    if(success){
        setMessage(`
            <div class="success-msg" >You have guess the right number. The number was ${randNo},</div>
            <div onclick="restartGame()" class="restart-btn">Click hear to restart the game.</div>
        `);
    }else{
        setMessage(`
            <div class="fail-msg" >You have fail to guess the right number. The number was ${randNo}.</div>
            <div onclick="restartGame()" class="restart-btn">Click hear to restart the game.</div>
        `);
    }
}
