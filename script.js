// input: the list of elements (numbers)
// output: a guess of what is the right number
// objective: to guess the right number with the lesser amount of attempts 

var firstNumber = 0;
var lastNumber = 100;
var actualGuess = 50;
var numerOfTries = 0;

function tooHigh() {
    lastNumber = actualGuess-1;
    guess();
}

function tooLow() {
    firstNumber = actualGuess+1;
    guess();
}

function guess() {
    numerOfTries++;
    calculateGuess();
    document.getElementById("number-div").textContent = actualGuess;
    document.getElementById("number-of-tries").textContent = "Number of tries: " + numerOfTries;
}


function calculateGuess() {
    var guess = Number(Math.round((firstNumber + lastNumber) / 2));
    console.log(guess);
    actualGuess = guess;
    return guess;
}
