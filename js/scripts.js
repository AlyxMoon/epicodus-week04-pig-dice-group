console.log('stuff happens!')

function diceRoll () {
  return Math.ceil((Math.random() * 6));
};

function checkIfTurnOver (roll) {
  if (roll === 1) {
    return true
  } else {
    return false
  }
}

function scoreTracker () {
  let currentScore = 0

  for(let i = 0; i < 5; i++) {
    let playerOneRoll = diceRoll(); 
    
    if (checkIfTurnOver(playerOneRoll)){
      currentScore = 0
      console.log("You rolled a 1")
      break
    } else {
      currentScore += playerOneRoll
    }
    console.log('playeroneroll', playerOneRoll)
    console.log('currentscore', currentScore)
  }

  console.log('end score', currentScore)
};

function runTests () {
  console.log('diceRoll returns something between 1 and 6')

  let gotWrongAnswer = false

  for (let i = 0; i < 1000; i++) {
    const result = diceRoll()

    // check if result is within our bounds, 1 - 6
    // but can be random, so we can't check for a specific number
    if (result >= 7 || result <= 0) {
      gotWrongAnswer = true
      console.log('WRONG!, digit out of bounds!', result)
      break
    }
  }

  if (!gotWrongAnswer) {
    console.log('success: it works!')
  }

  console.log('checkIfTurnOver(1)', checkIfTurnOver(1), 'expect this to be true')
  console.log('checkIfTurnOver(2)', checkIfTurnOver(2), 'expect this to be false')
  console.log('checkIfTurnOver(5)', checkIfTurnOver(5), 'expect this to be false')
  console.log('checkIfTurnOver(6)', checkIfTurnOver(6), 'expect this to be false')
}

runTests()
scoreTracker()