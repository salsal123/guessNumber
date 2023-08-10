function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let guessed = false;
let randomNumber = random(1, 10);
let tries = 0;
console.log(randomNumber);



const button = document.querySelector("#myButton");

button.addEventListener("click", play);

function play(event) {
    event.preventDefault();
    let guessedNumber = parseInt(document.getElementById("input").value);
    let result = "";

    if (guessedNumber === randomNumber) {
        result = guessedNumber + " is the random number you've tried.";
        guessed = true;
        console.log(guessed);
    } else if (randomNumber > guessedNumber) {
        result = "The random number is bigger, guess again!";
    } else {
        result = "The random number is smaller, guess again!";
    }

    document.getElementById("output").innerHTML = result;

    tries++;
    console.log(tries);
    if (tries >= 3 && !guessed) {
        document.getElementById("output").innerHTML = "You've lost. The correct number was: " + randomNumber;
    }
}


/*function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let randomNumber = random(1, 10)

console.log(randomNumber)
const button = document.querySelector("#myButton")
button.addEventListener("click", play)
function play(event) {
    event.preventDefault()
    let guessedNumber = parseInt(document.getElementById("input").value)
    let result=""
    if (guessedNumber == randomNumber) {
        result = guessedNumber + "is the random nb you've tried "

    }
    else if (randomNumber > guessedNumber){
        result = " the random nb is bigger, guess again !"


    }
    else {
        result = " the random nb is smaller, guess again !"


    }
    document.getElementById("output").innerHTML = result
}

*/