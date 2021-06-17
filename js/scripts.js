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

function toggleTurn (totalScore, currentScore, diceRoll, player) {
  totalScore += currentScore

  if (player === 1) {
    $('#totalScore1').text(totalScore);
    $('#diceRoll1').text(0);
    $('#currentScore1').text(0);
  } else if (player === 2) {
    $('#totalScore2').text(totalScore);
    $('#diceRoll2').text(0);
    $('#currentScore2').text(0);
  }
  


  // hook up logic to make player 1 hold
  $('#player1 button').toggle()
  $('#player2 button').toggle()

  return totalScore
}

// toggle the button
$(document).ready(function () {
  let totalScore1 = 0;
  let currentScore1 = 0;
  let diceRoll1 = 0;
  let totalScore2 = 0;
  let currentScore2 = 0;
  let diceRoll2 = 0;


  $('#player1-roll').on('click', function () {
    diceRoll1 = diceRoll();
    if (diceRoll1 === 1) {
      currentScore1 = 0;
      totalScore1 = toggleTurn(totalScore1, currentScore1, diceRoll1, 1);

    } else {
      currentScore1 += diceRoll1
    }
    $('#totalScore1').text(totalScore1);
    $('#diceRoll1').text(diceRoll1);
    $('#currentScore1').text(currentScore1);
    
    if (totalScore1 < 50) { 
  
    } else { 
      $('#totalScore1').text("Winner!");
    }

    //$('#totalScore1').text(totalScore1)
    // hook up logic to make player 1 do a roll
  })

  $('#player1-hold').on('click', function () {
    totalScore1 = toggleTurn(totalScore1, currentScore1, diceRoll1, 1);
    currentScore1 = 0;
  })

  $('#player2-roll').on('click', function () {
    diceRoll2 = diceRoll();
    if (diceRoll2 === 1) {
      currentScore2 = 0;
      totalScore2 = toggleTurn(totalScore2, currentScore2, diceRoll2, 2);

    } else {
      currentScore2 += diceRoll2
    }
    $('#totalScore2').text(totalScore2);
    $('#diceRoll2').text(diceRoll2);
    $('#currentScore2').text(currentScore2);
    
    if (totalScore2 < 50) { 
  
    } else { 
      $('#totalScore2').text("Winner!");
    }

  })

  $('#player2-hold').on('click', function () {
    totalScore2 = toggleTurn(totalScore2, currentScore2, diceRoll2, 2);
    currentScore2 = 0;
   
  })
})
