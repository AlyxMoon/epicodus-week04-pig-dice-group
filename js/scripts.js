console.log('stuff happens!')
// user1 call function playerOneRoll
// switches turn when player rolls a 1
// user2 call function playertwoRoll


// diceRolls
// checkIfTurnOver
// playerOneTracker {} - players
// PlayerTwoTracker {} - players
// round - 
// hold - track current - total score + current score for turn
// switchPlayers
// scoreTally 





function diceRoll () {
  return Math.ceil((Math.random() * 6));
};

function checkIfTurnOver (roll) {
  if (roll === 1) {
    $('#player1, #player2').toggle();
    return true
  } else {
    return false
  }
}

function playerOneTracker () {
  let currentScore = 0

  for(let i = 0; i < 50; i++) {
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

// add in playerTwoTracker when ready



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
// scoreTracker()


//Replace true and false linking it to html
// game business logic
function Game() {
  this.currentId = 0;
  this.users = {};
  this.round = true/false;
}

// Player business logic

function Player(playerName) {
  this.playerName = playerName;
  this.turnScore = 0;
  this.totalScore = 0;
}
//Replace true and false linking it to html
Player.prototype.hold = function() {
  this.totalScore = this.turnScore + this.totalScore;
  this.turnScore = 0;
  game.round = game.round +1;
  $('#player1, #player2').toggle()

}

// toggle the button

$(document).ready(function () {
  $('#player1-roll').on('click', function () {
    alert('player 1 roll')
    // hook up logic to make player 1 do a roll
  })

  $('#player1-hold').on('click', function () {
    alert('player 1 hold')
    // hook up logic to make player 1 hold
    $('#player1 button').toggle()
    $('#player2 button').toggle()
  })

  $('#player2-roll').on('click', function () {
    alert('player 2 roll')
    // hook up logic to make player 2 do a roll
  })

  $('#player2-hold').on('click', function () {
    alert('player 2 hold')
    // hook up logic to make player 2 hold
    $('#player1 button').toggle()
    $('#player2 button').toggle()
  })
})
