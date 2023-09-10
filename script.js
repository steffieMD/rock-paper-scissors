console.log('hi');

// Get User's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  }
  else{
    console.log('error, incorrect input')
  }
};

// Create Computer's Choice
const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);
  if (randomNumber === 0){
    return 'rock';
  }
  else if (randomNumber === 1){
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

// Determine the Winner
const determineWinner = (userChoice, computerChoice) => {
  //Cheat code
if (userChoice === 'bomb'){
    return 'user won!'
}
  if (userChoice === computerChoice){
    return 'game was a tie!';
  }

if (userChoice === 'rock'){
  if (computerChoice === 'paper'){
    return 'computer won!'
  }
  else if (computerChoice === 'scissors'){
    return 'user won!'
  }
}

if (userChoice === 'paper'){
  if (computerChoice === 'scissors'){
    return 'computer won!'
  }
  else if (computerChoice === 'rock'){
    return 'user won!'
  }
}

if (userChoice === 'scissors'){
  if (computerChoice === 'rock'){
    return 'computer won!'
  }
  else if (computerChoice === 'paper'){
    return 'user won!'
  }
}
}

// Everything's set up. Play Game.
function playGame(){
  const userChoice = getUserChoice('paper');
  const computerChoice = getComputerChoice();

  // Call User
  console.log('You got: ' + userChoice);

  // Call Computer
console.log('Computer got: ' + computerChoice);

console.log(determineWinner(userChoice, computerChoice));
}

playGame()

