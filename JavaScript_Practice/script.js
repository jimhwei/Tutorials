// Array for choices of what we can play
var choice = ["Rock", "Paper", "Scissors"];

// Running variable as the input can change
let playerChoice

function myFunction() {
    
    // Getting the choice from the button in the html page
    var playerChoice = document.getElementById("myBtn").value;
    document.getElementById("demo").innerHTML = playerChoice;
    console.log(`Player chooses ${playerChoice}`);
    
    // Computer gets a random choice from the choice array
    var randomChoice = choice[Math.floor(Math.random()*choice.length)];
    console.log(`Computer chooses ${randomChoice}`);

    // Conditions for victories
    if (randomChoice == playerChoice) {
        console.log("It's a Tie");
    } else if (randomChoice == "Paper" && playerChoice == "Rock") {
        console.log("Computer Wins");
    } else if (randomChoice == "Scissors" && playerChoice == "Paper") {
        console.log("Computer Wins");
    } else if (randomChoice == "Rock" && playerChoice == "Scissors") {
        console.log("Computer Wins");
    } else {
        console.log("Player Wins");
    }
    // To Make sure the program finishes
    // console.log("Done")
    
  }