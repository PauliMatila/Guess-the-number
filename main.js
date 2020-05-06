function start()
{   
    secretNumber = Math.floor(Math.random()*100+1);  
}

var secretNumber;
var quessedNumbers = [];
    
function quessButtonPressed()
{
    var quessed = parseInt(document.querySelector("#quessField").value);  
    if (isValidQuess(quessed))
    {
        checkIfCorrect(quessed);
    }
    document.querySelector("#quessField").value = "";
}

function isValidQuess(number)
{
    if (!isNaN(number))
    {
        if (number <= 100 && number > 0)
        {
            if (quessedNumbers.length > 0)
            {            
                if (!quessedNumbers.includes(number))
                {
                    quessedNumbers.push(number);
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
                quessedNumbers.push(number);
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
}

function checkIfCorrect(number)
{
    if (secretNumber === number)
    {
        document.getElementById("messageBox").innerHTML = "Winner winner, chicken dinner! Winning number was: " + 
        secretNumber.toString() + " Amount of quesses: " + quessedNumbers.length;
    }
    else if (secretNumber < number)
    {
        document.getElementById("messageBox").innerHTML = "Hint! Smaller number.";
        document.getElementById("wrongQuess").innerHTML = quessedNumbers.toString();
    }
    else
    {
        document.getElementById("messageBox").innerHTML = "Hint! Bigger number.";
        document.getElementById("wrongQuess").innerHTML = quessedNumbers.toString();
    }
    
}