let randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);

let chances = 5;

function checkGuess() {
    let userGuess = document.getElementById("guessField").value;
    let guessBtn = document.getElementById("guessBtn");

    if (chances === 0) {
        alert("Game over! No chances left.");
        return;
    }

 
    if (userGuess < 1 || userGuess > 10) {
        alert("Enter a number between 1 and 10");
        return;
    }
        if (userGuess == randomNumber) {
        alert("Correct! You win!");
        document.getElementById("guessField").disabled = true
        document.getElementById("guessBtn").disabled = true
        return;
    }

    chances--;

    if (chances > 0) {
        alert("Wrong guess! You have " + chances + " chances left.");
    } else {
        alert("Game Over! The number was " + randomNumber);
        document.getElementById("guessField").disabled = true
        document.getElementById("guessBtn").disabled = true
    }
    document.getElementById("guessField").value = ""
}


