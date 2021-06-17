function diceRoll () {
  return Math.ceil((Math.random() * 6));
};

function Player (id) {
  this.id = id;
  this.totalScore = 0;
  this.currentScore = 0;
  this.diceRoll = 0;
}

Player.prototype.toggleTurn = function () {
  this.totalScore += this.currentScore

  if (this.id === 1) {
    $('#totalScore1').text(this.totalScore);
    $('#diceRoll1').text(0);
    $('#currentScore1').text(0);
  } else if (this.id === 2) {
    $('#totalScore2').text(this.totalScore);
    $('#diceRoll2').text(0);
    $('#currentScore2').text(0);
  }

  // hook up logic to make player 1 hold
  $('#player1 button').toggle()
  $('#player2 button').toggle()

  return this.totalScore
}

// do stuff here
Player.prototype.showOutcome = function () {
  $(`#totalScore${this.id}`).text(this.totalScore);
  $(`#diceRoll${this.id}`).text(this.diceRoll);
  $(`#currentScore${this.id}`).text(this.currentScore);
}
// ---------------------

// toggle the button
$(document).ready(function () {
  const player1 = new Player(1)
  const player2 = new Player(2)

  $('#player1-roll').on('click', function () {
    player1.diceRoll = diceRoll();
    if (player1.diceRoll === 1) {
      player1.currentScore = 0;
      player1.toggleTurn();
    } else {
      player1.currentScore += player1.diceRoll
    }

    player1.showOutcome()

    if (player1.totalScore + player1.currentScore >= 20) {
      $('#totalScore1').text("Winner!");
      $('button').hide();
    }
  })

  $('#player1-hold').on('click', function () {
    player1.toggleTurn();
    player1.currentScore = 0;

    if (player1.totalScore >= 20) { 
      $('#totalScore1').text("Winner!");
    }
  })

  $('#player2-roll').on('click', function () {
    player2.diceRoll = diceRoll();
    if (player2.diceRoll === 1) {
      player2.currentScore = 0;
      player2.toggleTurn();

    } else {
      player2.currentScore += player2.diceRoll
    }
    
    player2.showOutcome()
    
    if (player2.totalScore + player2.currentScore >= 20) {
      $('#totalScore2').text("Winner!");
      $('button').hide();
    }
  })

  $('#player2-hold').on('click', function () {
    // call toggleTurn
    player2.toggleTurn()
    player2.currentScore = 0;

    if (player2.totalScore >= 20) {
      $('#totalScore2').text("Winner!");
    }
  })
})
