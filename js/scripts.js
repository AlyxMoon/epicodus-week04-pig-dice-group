console.log('stuff happens!')

function diceRoll () {
  return Math.ceil((Math.random() * 6));
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
}

runTests()