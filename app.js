
//CACHE THE DOM 

const userScore = 0;
const computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let  result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div =document.getElementById("p");
const scissors_div = document.getElementById("s");
let finalResult = document.getElementById("final-result");
let final = document.getElementById("final");
let button = document.querySelector("button");
let compImage = document.getElementById("computer-image");
let userImage = document.getElementById("user-image");
const rock = document.createElement("img")
rock.src = "images/rock.png";
const paper = document.createElement("img")
paper.src = "images/paper.png";
const scissors = document.createElement("img")
scissors.src = "images/scissors.png";

let gameActive = true;



let computerPoints = 0 ;
let userPoints = 0 ;
let numberOfGames = 0;

// DEFINE THE COMPUTER CHOICE 

function getComputerChoice(){
    const choices = ['rock','paper','scissors'];
    const index = Math.floor(Math.random() *3);
    const computerChoice = choices[index];
    return computerChoice;
}
let computerChoice = getComputerChoice();

// DEFINE THE GAME
function game(userChoice)
{
    if (gameActive)
  {  
    button.textContent = "RESET";
    const getCompChoice = getComputerChoice();
    console.log( "computer picks "+ getCompChoice );
    console.log("user picks " + userChoice);
    switch ( userChoice+getCompChoice )
    {
        case ( 'rockscissors'):
        case ( 'scissorspaper' ):
        case(  'paperrock'):
        {
            console.log("you win!");
            result_div.textContent = "you win!"
            userPoints+= 1;
            numberOfGames+=1;
            console.log(numberOfGames);
            userScore_span.textContent = userPoints;
            break;
        }
        case( 'scissorsrock' ):
        case( "paperscissors"):
        case( 'rockpaper' ):
        {
            console.log("You lose!");
            result_div.textContent ="You lose!"
            numberOfGames+=1;
            computerPoints +=1;
            console.log(numberOfGames);
            computerScore_span.textContent = computerPoints;
            break;
        }   
        case( "scissorsscissors" ):
        case("rockrock"):
        case("paperpaper"):
        {
            numberOfGames+=1;
            console.log(numberOfGames);
            console.log("its a draw");
            result_div.textContent ="Its a draw";
            break;
        }
       
    }
    endGame() 

}
}
function displayMatch(userChoice)
{
  
    let userImage = document.getElementById("user-image");
    userImage.innerHTML= " "; // Clear the container
    let computerImage = document.getElementById("computer-image");
    computerImage.innerHTML =  " "; // Clear the container
    if(userChoice == 'rock')
    {
        userImage.appendChild(rock);
    }

    if(userChoice == 'paper')
    {
        userImage.appendChild(paper);
    }

    if(userChoice == 'scissors')
    {
        userImage.appendChild(scissors);
    }
    if(computerChoice == 'rock')
    {
        computerImage.appendChild(paper);
    }
    if(computerChoice== 'paper')
    {
        computerImage.appendChild(paper);
    }
    if(computerChoice== 'scissors')
    {
        computerImage.appendChild(scissors);
    }
}

function endGame()
    {
        if (numberOfGames >=5 )
        {
            gameActive = false;
            final.textContent = "the game has Ended!"
            console.log("the game has Ended!")
            if(computerPoints>userPoints)
               { finalResult.textContent = "You lose the game!"
                console.log("You lose the game!");
            }
            if(userPoints>computerPoints)
                {finalResult.textContent = "You win the game!"
                console.log("You win the game!");
            }
            if( computerPoints==userPoints)
               { finalResult.textContent = "Its a draw game!"
                console.log("Its a draw game!");
            }

            /*            
            numberOfGames = 0;
            userScore_span.textContent = 0;
            computerPoints = 0 ;
            userPoints = 0 ;
            computerScore_span.textContent = 0;
            */
        }
        if (numberOfGames ===5 )
        {
            playAgain = button.textContent = "PLAY AGAIN";
         
            }         

        }
       
        // }
        // if(numberOfGames==0)
        // {
        //     computerScore_span.textContent = 0;
        //     userScore_span.textContent = 0;
        //     computerPoints = 0 ;
        //     userPoints = 0 ;
        // } 
        
        

    
function buttonFunction()
{
    gameActive = true;
    button.textContent = "RESET";
    finalResult.textContent = '';
    final.textContent = '';
    numberOfGames = 0;
    userScore_span.textContent = 0;
    computerPoints = 0 ;
    userPoints = 0 ;
    computerScore_span.textContent = 0;
    computerScore_span = 0;
    result_div = "";
}



function main()
{
    
    
        rock_div.addEventListener('click' , function(){
     game("rock");
     displayMatch("rock");
    
    });
    
    paper_div.addEventListener("click", function(){
        game("paper");
        displayMatch("paper");
    });
    scissors_div.addEventListener('click', function(){
        game("scissors")
        displayMatch("scissors");
    });

    button.addEventListener("click" , function(){
        buttonFunction()
    });
    

}
main();


// document.addEventListener("DOMContentLoaded", function () {
//     main();
// });

// if (numberOfGames< 6)
// {
//     main();

// }





// endGame();



//     if ( (userChoice=== 'rock' && getCompChoice=== "scissors") ||
//         ( userChoice=== 'scissors' && getCompChoice=== "paper") ||
//         (userChoice=== 'paper' && getCompChoice=== "rock"))
//         {
//             console.log("you win!");
//             userPoints+= 1;
//             userScore_span.textContent = userPoints;
//         }
//     // else if ((userChoice=== 'rock' && getCompChoice=== "rock") ||
//     // ( userChoice=== 'scissors' && getCompChoice=== "scissors") ||
//     // (userChoice=== 'paper' && getCompChoice=== "paper"))
//     // {
//     //     console.log("Draw!");
//     // }
//    else
//    {
//     console.log("You lose!");
//     computerPoints +=1;
//     computerScore_span.textContent = computerPoints;
//    }
//    console.log(computerPoints);
//    console.log(userPoints);
// }
// if (numberOfGames == 5)
// {
//     console.log("the game has Ended!")
//     if(computerPoints>userPoints)
//         console.log("You lose the game!");
//     if(userPoints>computerPoints)
//         console.log("You win the game!");
//     if( computerPoints==userPoints)
//         console.log("Its a draw game!");
//     computerPoints = 0 ;
//     userPoints = 0 ;
//     numberOfGames = 0;
// }

