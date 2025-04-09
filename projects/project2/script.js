// Speak function using the Speech API
function say(m) {
    let msg = new SpeechSynthesisUtterance(m);
    speechSynthesis.speak(msg);
}

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Game logic
function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
    } else if (user === 'paper') {
        result = "win";
        playerScore++;  // Increase player's score
    } else if (user === 'scissors') {
        result = "lose";
        computerScore++;  // Increase computer's score
    }
    
    // Update the scoreboard
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    
    let myMessage = "Computer chose rock, you " + result + "!";
    alert(myMessage);
    say(myMessage);
}
