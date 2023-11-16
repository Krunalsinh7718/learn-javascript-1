let randNo = parseInt(Math.floor(Math.random() * 100 + 1));

let numberSubmitBtn = document.querySelector("#numberSubmitBtn");
let numberInput = document.querySelector("#numberInput");
let prevGuesses = document.querySelector("#prevGuesses");
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
        parseInt(numberInput.value)
    })
}

function validateGuess(guess) {
    
}

function checkGuess(guess){

}

function displayMessage(mesage) {
    
}

function endGame() {
    
}

function newGame() {
    
}
