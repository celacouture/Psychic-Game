//letters to choose from

var alphabet=[ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']
//initial variables
var wins=0;
var losses=0;
var guesses=9;
//keep users guessses in an array
var letters=[];
var userGuess = null;

var randomLetter=alphabet[Math.floor(Math.random()*alphabet.length)];
console.log(randomLetter);


document.onkeyup = function (event) {


    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
    
    if(letters.indexOf(userGuess) <0 && alphabet.indexOf(userGuess)>=0){
        letters[letters.length]=userGuess;
        guesses--;
    }


    if(randomLetter == userGuess){
        wins++;
        guesses = 9;
        letters = [];
        randomLetters=alphabet[Math.floor(Math.random()*alphabet.length)];
        console.log(randomLetter);
        
    }

    if(guesses == 0){
        losses++;
        guesses=9;
        letters=[];
        randomLetters=alphabet[Math.floor(Math.random()*alphabet.length)];
        console.log(randomLetter);
        

    }


var html =
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + guesses + "</p>"+
"<p>Your Guesses so far:" + letters +"</p>";

document.querySelector('#game').innerHTML = html;

}