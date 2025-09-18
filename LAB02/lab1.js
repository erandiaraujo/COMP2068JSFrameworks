// Import the prompt package.
const prompt = require('prompt');

// Configure prompt
prompt.start();

// Define the schema for user input
const schema = {
  properties: {
    userSelection: {
      description: 'Choose ROCK, PAPER, or SCISSORS',
      pattern: /^(ROCK|PAPER|SCISSORS)$/i,
      message: 'Please enter ROCK, PAPER, or SCISSORS',
      required: true
    }
  }
};

// Get user input
prompt.get(schema, function (err, result) {
  if (err) {
    console.log('Error:', err.message);
    return;
  }

  // Store user selection (convert to uppercase for consistency)
  const userSelection = result.userSelection.toUpperCase();

  // Generate computer selection using Math.random()
  const randomNum = Math.random();
  let computerSelection;

  if (randomNum >= 0.00 && randomNum <= 0.34) {
    computerSelection = 'PAPER';
  } else if (randomNum >= 0.35 && randomNum <= 0.67) {
    computerSelection = 'SCISSORS';
  } else { // 0.68 - 1.00
    computerSelection = 'ROCK';
  }

  // Display both selections
  console.log('User Selection:', userSelection);
  console.log('Computer Selection:', computerSelection);

  // Determine the winner using switch statement
  let outcome;

  if (userSelection === computerSelection) {
    outcome = "It's a tie";
  } else {
    switch (userSelection) {
      case 'ROCK':
        outcome = (computerSelection === 'SCISSORS') ? 'User Wins' : 'Computer Wins';
        break;
      case 'PAPER':
        outcome = (computerSelection === 'ROCK') ? 'User Wins' : 'Computer Wins';
        break;
      case 'SCISSORS':
        outcome = (computerSelection === 'PAPER') ? 'User Wins' : 'Computer Wins';
        break;
      default:
        outcome = 'Invalid selection';
    }
  }

  // Display the outcome
  console.log('Outcome:', outcome);
});