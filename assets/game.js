<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="reset.css"></link>
    <title>Psychic-Game</title>

</head>
<body>
    
    <p id="output">Guess what letter I'm thinking of...</p>
    <br>
    <input id="input" type= "text" placeholder= "Enter your guess">
    <button>Guess</button>
    <br>
    <p>Wins: <span id="wins"></span></p>
    <br>
    <p>Losses: <span id="losses"></span></p>
    <br>
    <p>Guesses Left: <span id="guessLeft"></span></p>
    <br>
    <p>Guesses So Far: <span id="guessesSoFar"></span></p>
    <br>
    <p>Guessed Letter: <span id="guessedLetter"></span></p>

    <Script type="text/javascript">

    $(document).ready(function() {

        var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
            'p', 'q', 'r', 's', 't' ,'u', 'v', 'w', 'x', 'y', 'z'];  
        var computerChoice = letter[Math.floor(Math.random() *letter.length)];
            console.log(computerChoice); 
               
        var wins = 0;
        var losses = 0;
        var guessesLeft = 10;
        var guessesSoFar = [];
        var guessedLetter = [];
        var gameWon = false;

        var output = document.querySelector ("#output");
        var input = document.querySelector ("#input");
        
       

        Document.getElementById("wins");
        Document.getElementById("losses");
        Document.getELementById("guessesLeft");
        Document.getElementById("guessesSoFar");

                      
        document.onkeypress = function(event) {
            var userGuess = event.key;
                    
        if (userGuess === computerChoice) {
            wins++; 
            guessesSoFar < 10;
            winText.textContent = "wins:" + wins;
            console.log("You are correct!");
        }
        else if (userGuess --- computerChoice) {
            guessesSoFar++;
            guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
            guessesSoFarText.textContent = "Guesses So Far: " + guessChoice;
            guessesLeft < 1;
                endGame();
    }   

       if (guessesLeft===0) {
            losses++;
            userGuessMade = [];
            guesses = 10;
            }

        }   
        gameWon = true;
        endGame(); 
   }
function endGame() {
       if (gameWon) {
           output.innerHTML = "Yes, it's", + computerChoice +"!";
       }
       else {
        output.innerHTML = "No more guessses left!", + "The letter was" + computerChoice +".";
       }
   }

   
    </script>
    
</body>
</html>