

function myFunction1() {
    let person = prompt("Please enter your name here: "); 
    if (person != null) {
        document.getElementById("demo").innerHTML = 
    "Hello " + person + ", how are you today?";
    } 
}



function compareUserWords() {
    const word1 = prompt("Type first word: ");
    const word2 = prompt("Type second word: "); 

    if (word1 && word2) {
        const result = compareWords(word1, word2);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "You must enter 2 words";
    }
}

function compareWords(word1, word2) {
    const comparison = word1.localeCompare(word2);

    if (comparison < 0) {
        return `${word1} comes before ${word2} in the alphabet.`;
    } else if (comparison > 0) {
        return `${word2} comes before ${word1} in the alphabet.`;
    } else {
        return `${word1} and ${word2} is the same word.`;
    }
}

function checkYourAge() {
let age = Number(prompt("Enter your age: "));

if (age < 18 && age > 0) {
    document.getElementById("age").innerHTML = "You are not an adult";
} else if (age >= 18 && age < 120) {
document.getElementById("age").innerHTML = "You are an adult";
} else {
    document.getElementById("age").innerHTML = "not a valid age";
}

}


function guessWhatAnimal() {
    const secretAnimal = "dog";
    let attempts = 4;

    while (attempts > 0) {
        let guess = prompt(`Guess what animal i am thinking of. you have ${attempts} attempts left:`);

        if (guess.toLowerCase() === secretAnimal) {
            alert("congratualtions! I was thinking of a dog!");
            return; // Avslutar funktionen om gissningen är rätt
        } else {
            attempts--;
            if (attempts > 0) {
                alert("Wrong! guess again.");
            } else {
                alert("Sorry, you are out of guesses.I was thinking of a dog.");
            }
        }
    }
}

function askFavoriteColor() {
    let color = prompt("Enter your favorite color: ").toLowerCase(); 

    if (color === "yellow" || color === "black") {
        document.getElementById("response").innerHTML = "Yellow and black is the color of Hufflepuff.";
    } else if (color === "blue" || color === "bronze") {
        document.getElementById("response").innerHTML = "Blue and bronze is the color of Ravenclaw!";
    } else if (color === "green" || color === "silver") {
        document.getElementById("response").innerHTML = "Green and silver is the color of Slytherin!";
    } else if (color === "red" || color === "gold") { 
        document.getElementById("response").innerHTML = "Red and gold is the color of Gryffindor!";
    } else {
        document.getElementById("response").innerHTML = `Interesting choice, but your favorite color ${color}, does not represent a Hogwarts house.`;
    }
}

function enterTestresult() {

    let score = prompt("Enter your test result (0-100) ");

score = Number(score);

if (isNaN(score) || score < 0 || score > 100) {
    document.getElementById("test-result").innerHTML = "Please enter a valid score between 0 and 100.";
} else if (score >= 50) {
    document.getElementById("test-result").innerHTML = "congratulations! you passed!";
} else {
    document.getElementById("test-result").innerHTML = "Sorry, you did not pass!";
}
}



function checkWeather() {
    let weather = prompt("Is the weather rainy, sunny och cloudy? "); 
    if (weather === "sunny") {
        document.getElementById("activity").innerHTML = "Today is sunny, it is a nice day to eat icecream!"
    } else if (weather === "rainy") {
        document.getElementById("activity").innerHTML = "jump some puddles in the rain!"
    } else {
        document.getElementById("activity").innerHTML = "It is okay to stay inside and watch some movies."
}
}

function askLanguage() {
    let language = prompt("What language do you speak?").toLowerCase();

    if (language === "swedish") {
        document.getElementById("lang").innerHTML = "Hej! Hur mår du idag?";
    } else if (language === "english") {
        document.getElementById("lang").innerHTML = "Hello! How are you today?";
    } else {
        document.getElementById("lang").innerHTML = "Interesting! How do you say 'How are you today?' in you language?";
    }
}

function checkMultipleOfFive() {
    
    let number = prompt("Ange ett tal:");

    number = Number(number);

    if (isNaN(number)) {
        document.getElementById("answer").innerHTML = "Vänligen ange ett giltigt tal.";
    } else if (number % 5 === 0) {
        document.getElementById("answer").innerHTML = number + " är en multipel av 5.";
    } else {
        document.getElementById("answer").innerHTML = number + " är inte en multipel av 5.";
    }
}

function askToGoOut() {
    let userResponse = confirm("Vill du gå ut?");

    if (userResponse) {
        document.getElementById("askGoOut").innerHTML = "Härligt! Ha en trevlig dag utomhus!";
    } else {
        document.getElementById("askGoOut").innerHTML = "Ingen fara, kanske en annan gång!";
    }
}