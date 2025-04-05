// script.js

// Function to display a greeting message
function greeting() {
    document.getElementById('words').innerHTML = "Welcome to Flatland.<br> I am Square.";
}

// Function to change the square's color
function changeColour(color) {
    document.getElementById('square').style.backgroundColor = color;
}

// Function to generate a random buzzword phrase
function createBuzzwordPhrase() {
    let buzz = ["Paradigm-changing", "Multi-tier", "10,000-foot", "Agile", "Customer", "Win-win"];
    let action = ["empowered", "value-added", "synergy", "creative", "oriented", "focused", "aligned"];
    let outcome = ["process", "deliverable", "solution", "tipping-point", "strategy", "vision"];

    let idx_buz = Math.floor(Math.random() * buzz.length);
    let idx_act = Math.floor(Math.random() * action.length);
    let idx_out = Math.floor(Math.random() * outcome.length);

    return buzz[idx_buz] + " " + action[idx_act] + " " + outcome[idx_out];
}

// Access the square element and add event listeners
const square = document.getElementById('square');

// Add event listeners to the square element
square.addEventListener('mouseover', function() {
    changeColour('gray');
    document.getElementById('words').innerHTML = createBuzzwordPhrase();  // Show buzzword on hover
});

square.addEventListener('mouseout', function() {
    changeColour('red');
    document.getElementById('words').innerHTML = "Hover over the square!";  // Reset text on mouseout
});

square.addEventListener('click', function() {
    changeColour('green');
    document.getElementById('words').innerHTML = createBuzzwordPhrase();  // Show buzzword on click
});

// Call greeting() on page load
window.onload = greeting;
