console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log('error, incorrect input')
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 2);

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

const determineWinner = (userChoice, computerChoice) => {
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

console.log(determineWinner('paper', 'scissors'));

// console.log('You pick: ' + getUserChoice('paper'))
// console.log('Computer picks: ' + getComputerChoice());

