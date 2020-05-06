const quessField = document.querySelector(".quessField");
const wrongGuess = document.querySelector(".wrongGuess");
const messageBox = document.querySelector(".messageBox");


function start()
{   
    secretNumber = Math.floor(Math.random()*100+1);  
}

var secretNumber;
var quessedNumbers = new Array();
var resetButton;
    
function quessButtonPressed()
{
    var quessed = Number(quessField.value);
    if (isValidQuess(quessed))
    {
        checkIfCorrect(quessed);
    }
    document.querySelector("#quessField").value = "";
}

function isValidQuess(quessed)
{
    if (!isNaN(quessed))
    {
        if (quessed <= 100 && quessed > 0)
        {
            if (quessedNumbers.length > 0)
            {            
                if (!quessedNumbers.includes(quessed))
                {
                    quessedNumbers.push(quessed);
                    document.getElementById("messageBox").innerHTML = "";
                    return true;
                }
                else 
                {
                    document.getElementById("messageBox").innerHTML = "You guessed this number already!";
                    return false;
                }
            }
            else
            {
                quessedNumbers.push(quessed);
                document.getElementById("messageBox").innerHTML = "";
                return true;
            }
        }
        else 
        {
            document.getElementById("messageBox").innerHTML = "Invalid number, you fool! Number needs to be between 1-100!";
            return false;
        }
    }
    else
    {
        document.getElementById("messageBox").innerHTML = "Not a number! You fooooooool!";
        return false;
    }
    var x = quessedNumbers
}

function checkIfCorrect(quessed)
{
    if (secretNumber === quessed)
    {
        document.getElementById("messageBox").innerHTML = "Winner winner, chicken dinner! Winning number was: " + 
        secretNumber.toString() + " Amount of quesses: " + quessedNumbers.length;
        setGameOver();
    }
    else if (secretNumber < quessed)
    {
        document.getElementById("messageBox").innerHTML = "Hint! Smaller number.";
        document.getElementById("demo").innerHTML = quessedNumbers.toString();
    }
    else
    {
        document.getElementById("messageBox").innerHTML = "Hint! Bigger number.";
        document.getElementById("demo").innerHTML = quessedNumbers.toString();
    } 
}

function setGameOver() 
{
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() 
{
    resetButton.parentNode.removeChild(resetButton);
    quessedNumbers = new Array();
    var x = quessedNumbers.toString();
    document.getElementById("demo").innerHTML = x;
    quessField.value = "";
    messageBox.textContent = "";
    secretNumber = Math.floor(Math.random()*100+1); 
}