
#### Business Logic

State: what we need to track
- users
- dice outcomes
- what turn it is
- add up dice roll for that turn
- whether we continue rolling or hold (end turn)
  - roll/hold can be manual choice, or forced based on condition
  - if we roll 1, turn is forced to end
  - turn score is ignored
  - if they end turn manually, we add turn score to total score

Get a random "dice roll", 1 through 6
```js
diceRoll()
// No input
// Output: 1-6
```

Variables to be used
```js
let runningTotal // total score for player across all turns
let turnScore // players score for that turn

let runningTotal2
let turnScore2

let turn // track whether player 1 or player 2
```

```js
// basic logic for tracking turn
let turn = 1

// player 1 plays their turn
turn = turn + 1

// if turn is odd
if (turn % 2 === 1) {
  // add turnScore to runningTotal
}


// player 2 plays their turn
turn = turn + 1

// if turn is even
if (turn % 2 === 0) {
  // add turnScore to runningTotal2
}

```

Steps for the day:
1. Kyle: When we get a one, clear the current score
2. Scott: current score is not reset when we hold
3. Arthur: make roll work for player two

- we don't get marked as winner until rolling AFTER winning score
- a 50 for player 2 does not win

#### Misc notes and stuff


math.random()

play options:
  - two players, both manual
  - two players, one computer
  - option to pick either first option
  - three players, two manual one computer

Should we have a computer play/user input?
  - start with two players, then add computer later

When a player rolls a dice:
  - simple: show number player rolled
  - extra: add a dice picture showing the dice

When a player rolls a 1:
  - extra: some fun picture to show the user they lost that round
    - batman slap!

When a player wins:
  - simple: say whatever, you win

How two players works:
  - have two separate buttons
  - allow clicking both in turn
  - super extra: three player rumble!

How computer works:
  - add logic for whether to roll or hold

Displaying Score:
  - show simple numbers for score, both players
  * extra: picture gets bigger with score!
  * each player gets a different picture displayed when it's their turn