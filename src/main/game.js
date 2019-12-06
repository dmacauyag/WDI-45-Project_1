//========================== Global Variables ================================//
const gameObject = {
  player1: {name: 'Player 1', class: '.player1', aces: 0, hand: [], score: 0, cash: 100, bet: 0, resolved: false},
  player2: {name: 'Player 2', class: '.player2', aces: 0, hand: [], score: 0, cash: 100, bet: 0, resolved: false},
  dealer: {name: 'Dealer', class: '.dealer', hand: [], score : 0},
  deck: [
    {suit: 'Hearts', name: 'Ace', value: 11, altValue: 1, img: 'src/main/resources/images/ace_of_hearts.png'},
    {suit: 'Hearts', name: '2', value: 2, img: 'src/main/resources/images/2_of_hearts.png'},
    {suit: 'Hearts', name: '3', value: 3, img: 'src/main/resources/images/3_of_hearts.png'},
    {suit: 'Hearts', name: '4', value: 4, img: 'src/main/resources/images/4_of_hearts.png'},
    {suit: 'Hearts', name: '5', value: 5, img: 'src/main/resources/images/5_of_hearts.png'},
    {suit: 'Hearts', name: '6', value: 6, img: 'src/main/resources/images/6_of_hearts.png'},
    {suit: 'Hearts', name: '7', value: 7, img: 'src/main/resources/images/7_of_hearts.png'},
    {suit: 'Hearts', name: '8', value: 8, img: 'src/main/resources/images/8_of_hearts.png'},
    {suit: 'Hearts', name: '9', value: 9, img: 'src/main/resources/images/9_of_hearts.png'},
    {suit: 'Hearts', name: '10', value: 10, img: 'src/main/resources/images/10_of_hearts.png'},
    {suit: 'Hearts', name: 'Jack', value: 10, img: 'src/main/resources/images/jack_of_hearts.png'},
    {suit: 'Hearts', name: 'Queen', value: 10, img: 'src/main/resources/images/queen_of_hearts.png'},
    {suit: 'Hearts', name: 'King', value: 10, img: 'src/main/resources/images/king_of_hearts.png'},
    {suit: 'Diamonds', name: 'Ace', value: 11, altValue: 1, img: 'src/main/resources/images/ace_of_diamonds.png'},
    {suit: 'Diamonds', name: '2', value: 2, img: 'src/main/resources/images/2_of_diamonds.png'},
    {suit: 'Diamonds', name: '3', value: 3, img: 'src/main/resources/images/3_of_diamonds.png'},
    {suit: 'Diamonds', name: '4', value: 4, img: 'src/main/resources/images/4_of_diamonds.png'},
    {suit: 'Diamonds', name: '5', value: 5, img: 'src/main/resources/images/5_of_diamonds.png'},
    {suit: 'Diamonds', name: '6', value: 6, img: 'src/main/resources/images/6_of_diamonds.png'},
    {suit: 'Diamonds', name: '7', value: 7, img: 'src/main/resources/images/7_of_diamonds.png'},
    {suit: 'Diamonds', name: '8', value: 8, img: 'src/main/resources/images/8_of_diamonds.png'},
    {suit: 'Diamonds', name: '9', value: 9, img: 'src/main/resources/images/9_of_diamonds.png'},
    {suit: 'Diamonds', name: '10', value: 10, img: 'src/main/resources/images/10_of_diamonds.png'},
    {suit: 'Diamonds', name: 'Jack', value: 10, img: 'src/main/resources/images/jack_of_diamonds.png'},
    {suit: 'Diamonds', name: 'Queen', value: 10, img: 'src/main/resources/images/queen_of_diamonds.png'},
    {suit: 'Diamonds', name: 'King', value: 10, img: 'src/main/resources/images/king_of_diamonds.png'},
    {suit: 'Spades', name: 'Ace', value: 11, altValue: 1, img: 'src/main/resources/images/ace_of_spades.png'},
    {suit: 'Spades', name: '2', value: 2, img: 'src/main/resources/images/2_of_spades.png'},
    {suit: 'Spades', name: '3', value: 3, img: 'src/main/resources/images/3_of_spades.png'},
    {suit: 'Spades', name: '4', value: 4, img: 'src/main/resources/images/4_of_spades.png'},
    {suit: 'Spades', name: '5', value: 5, img: 'src/main/resources/images/5_of_spades.png'},
    {suit: 'Spades', name: '6', value: 6, img: 'src/main/resources/images/6_of_spades.png'},
    {suit: 'Spades', name: '7', value: 7, img: 'src/main/resources/images/7_of_spades.png'},
    {suit: 'Spades', name: '8', value: 8, img: 'src/main/resources/images/8_of_spades.png'},
    {suit: 'Spades', name: '9', value: 9, img: 'src/main/resources/images/9_of_spades.png'},
    {suit: 'Spades', name: '10', value: 10, img: 'src/main/resources/images/10_of_spades.png'},
    {suit: 'Spades', name: 'Jack', value: 10, img: 'src/main/resources/images/jack_of_spades.png'},
    {suit: 'Spades', name: 'Queen', value: 10, img: 'src/main/resources/images/queen_of_spades.png'},
    {suit: 'Spades', name: 'King', value: 10, img: 'src/main/resources/images/king_of_spades.png'},
    {suit: 'Clubs', name: 'Ace', value: 11, altValue: 1, img: 'src/main/resources/images/ace_of_clubs.png'},
    {suit: 'Clubs', name: '2', value: 2, img: 'src/main/resources/images/2_of_clubs.png'},
    {suit: 'Clubs', name: '3', value: 3, img: 'src/main/resources/images/3_of_clubs.png'},
    {suit: 'Clubs', name: '4', value: 4, img: 'src/main/resources/images/4_of_clubs.png'},
    {suit: 'Clubs', name: '5', value: 5, img: 'src/main/resources/images/5_of_clubs.png'},
    {suit: 'Clubs', name: '6', value: 6, img: 'src/main/resources/images/6_of_clubs.png'},
    {suit: 'Clubs', name: '7', value: 7, img: 'src/main/resources/images/7_of_clubs.png'},
    {suit: 'Clubs', name: '8', value: 8, img: 'src/main/resources/images/8_of_clubs.png'},
    {suit: 'Clubs', name: '9', value: 9, img: 'src/main/resources/images/9_of_clubs.png'},
    {suit: 'Clubs', name: '10', value: 10, img: 'src/main/resources/images/10_of_clubs.png'},
    {suit: 'Clubs', name: 'Jack', value: 10, img: 'src/main/resources/images/jack_of_clubs.png'},
    {suit: 'Clubs', name: 'Queen', value: 10, img: 'src/main/resources/images/queen_of_clubs.png'},
    {suit: 'Clubs', name: 'King', value: 10, img: 'src/main/resources/images/king_of_clubs.png'},
  ]
}
const audio = {
  chips: new Audio('src/main/resources/audio/chips.wav'),
  hit: new Audio('src/main/resources/audio/hit.wav'),
  shuffle: new Audio('src/main/resources/audio/shuffle.wav')
}
const dealButton = document.querySelector('.dealer-buttons button.deal')
const newGameButton = document.querySelector('button.new-game')
const hitPlayer1Button = document.querySelector('.player1-container button.hit')
const hitPlayer2Button = document.querySelector('.player2-container button.hit')
const standPlayer1Button = document.querySelector('.player1-container button.stand')
const standPlayer2Button = document.querySelector('.player2-container button.stand')
const placeBetPlayer1Button = document.querySelector('.player1-container button.place-bet')
const placeBetPlayer2Button = document.querySelector('.player2-container button.place-bet')
const player1Bet = document.querySelector('.player1-container input.bet-player1')
const player2Bet = document.querySelector('.player2-container input.bet-player2')

let currentPlayer
//============================================================================//

GameHelpers.displayNotification('Welcome to Blackjack! Press NEW GAME to begin.')

newGameButton.onclick = () => {
  newGameButton.classList.add('new-game-off')
  GameHelpers.displayNotification('Please place a minimum bet of $10')
  currentPlayer = gameObject.player1
  resetValues()
  resetCardsToDeck()

  placeBetPlayer1Button.classList.add('place-bet-on')
  placeBetPlayer2Button.classList.add('place-bet-on')

  placeBetPlayer1Button.addEventListener('click', function clickListener () {
    if (GameHelpers.isBetValid(+player1Bet.value, gameObject.player1.cash)) {
      placeBetPlayer1Button.removeEventListener('click', clickListener)
      GameHelpers.processBet(+player1Bet.value, gameObject.player1, audio.chips)
    }
  })

  placeBetPlayer2Button.addEventListener('click', function clickListener () {
    if (GameHelpers.isBetValid(+player2Bet.value, gameObject.player2.cash)) {
      placeBetPlayer1Button.removeEventListener('click', clickListener)
      GameHelpers.processBet(+player2Bet.value, gameObject.player2, audio.chips)
      dealButton.classList.add('deal-on')
      dealDeck()
    }
  })
}

function dealDeck () {
  GameHelpers.displayNotification('Press DEAL to play!')
  dealButton.addEventListener('click', function clickListener () {
    dealButton.removeEventListener('click', clickListener)
    audio.shuffle.play()
    dealButton.classList.remove('deal-on')
    gameObject.deck = GameHelpers.shuffle(gameObject.deck)
    dealCards()
    checkInitialCardValues()
  })
}

function dealCards () {
  gameObject.dealer.hand = [gameObject.deck.pop(), gameObject.deck.pop()]
  gameObject.player1.hand = [gameObject.deck.pop(), gameObject.deck.pop()]
  gameObject.player2.hand = [gameObject.deck.pop(), gameObject.deck.pop()]

  document.querySelector('.dealer-hand').appendChild(GameHelpers.createCardElement(gameObject.dealer.hand[0].img, 'card-image'))
  document.querySelector('.dealer-hand').appendChild(GameHelpers.createCardElement('src/main/resources/images/card_back.jpg', 'card-back'))

  document.querySelector('.player1-hand').appendChild(GameHelpers.createCardElement(gameObject.player1.hand[0].img, 'card-image'))
  document.querySelector('.player1-hand').appendChild(GameHelpers.createCardElement(gameObject.player1.hand[1].img, 'card-image'))

  document.querySelector('.player2-hand').appendChild(GameHelpers.createCardElement(gameObject.player2.hand[0].img, 'card-image'))
  document.querySelector('.player2-hand').appendChild(GameHelpers.createCardElement(gameObject.player2.hand[1].img, 'card-image'))
}

// Function that checks the initial card values
function checkInitialCardValues () {
  const dealerScore = GameHelpers.getPlayerScore(gameObject.dealer.hand)
  const player1Score = GameHelpers.getPlayerScore(gameObject.player1.hand)
  const player2Score = GameHelpers.getPlayerScore(gameObject.player2.hand)

  dealerScore > 21
    ? gameObject.dealer.score -= 10
    : gameObject.dealer.score += dealerScore

  player1Score > 21
    ? gameObject.player1.score -= 10
    : gameObject.player1.score += player1Score

  player2Score > 21
    ? gameObject.player2.score -= 10
    : gameObject.player2.score += player2Score

  checkforInitialBlackjack()
  displayScore()
}

// Function for player 1 and player 2 turns
function playTurn () {
  if (currentPlayer.name == 'Player 1') {
    if (currentPlayer.score == 21) {
      switchTurns()
    } else {
      GameHelpers.displayNotification(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
      hitPlayer1Button.addClass('onP1')
      standPlayer1Button.addClass('onP1')
      hitPlayer1Button.on('click', hit)
      standPlayer1Button.on('click', switchTurns)
    }
  } else if (currentPlayer.name == 'Player 2') {
      if (currentPlayer.score == 21) {
        switchTurns()
      } else {
        GameHelpers.displayNotification(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
        hitPlayer2Button.addClass('onP2')
        standPlayer2Button.addClass('onP2')
        hitPlayer2Button.on('click', hit)
        standPlayer2Button.on('click', switchTurns)
      }
  } else {
    checkForWinner()
  }
}

// Function for the hit button
function hit() {
  audio.hit.play()
  currentPlayer.hand.push(gameObject.deck.pop())
  $('<img class="card-image" src=' + currentPlayer.hand[currentPlayer.hand.length - 1].img + '>').hide().appendTo(currentPlayer.class).show('slow')
  checkCardValue()
}

// Function that switches turns
function switchTurns() {
  if (currentPlayer == gameObject.player1) {
    hitPlayer1Button.removeClass('onP1')
    standPlayer1Button.removeClass('onP1')
    hitPlayer1Button.off()
    standPlayer1Button.off()
    currentPlayer = gameObject.player2
    playTurn()
  } else if (currentPlayer == gameObject.player2){
    hitPlayer2Button.removeClass('onP2')
    standPlayer2Button.removeClass('onP2')
    hitPlayer2Button.off()
    standPlayer2Button.off()
    currentPlayer = gameObject.dealer
    playDealer()
  } else {
    checkForWinner()
  }
}

// Function for the dealer's turn
function playDealer() {
  $('.card-back').replaceWith('<img class="card-image" src=' + gameObject.dealer.hand[1].img + '>')
  if (gameObject.player1.score > 21 && gameObject.player2.score > 21) {
    checkForWinner()
  } else if (currentPlayer.score < 17 && (gameObject.player1.score <= 21 || gameObject.player2.score <= 21)) {
    hit()
  }
  checkForWinner()
}

// Function that checks for the cards values between turns
function checkCardValue() {
  currentPlayer.score = 0
  currentPlayer.aces = 0
  for (var i = 0; i < currentPlayer.hand.length; i++) {
    currentPlayer.score += currentPlayer.hand[i].value
  }
  GameHelpers.displayNotification(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
  if (currentPlayer.score == 21) {
    switchTurns()
  }
  if (currentPlayer.score > 21) {
    if (isAce()) {
      checkAce()
    } else {
      switchTurns()
    }
  }
  if (currentPlayer.name == 'Dealer') {
    if (currentPlayer.score < 17 && (gameObject.player1.score <= 21 || gameObject.player2.score <= 21)) {
      hit()
    } else {
      checkForWinner()
    }
  }
  displayScore()
}

// Function that checks if a players hand contains an ace card
function isAce() {
  for (var i = 0; i < currentPlayer.hand.length; i++) {
    if (currentPlayer.hand[i].name == 'Ace') {
      currentPlayer.aces++
    }
  }
  if (currentPlayer.aces != 0) {
    return true
  } else {
    return false
  }
}

// Function to calculate new score if there are aces in the player's hand
function checkAce() {
  for (var i = 0; i < currentPlayer.aces; i++) {
    if (currentPlayer.score > 21) {
      currentPlayer.score -= 10
    }
  }
  if (currentPlayer.score > 21) {
    switchTurns()
  } else if (currentPlayer.score == 21) {
    switchTurns()
  }
  GameHelpers.displayNotification(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
}

// Function that checks if the dealer's starting hand is a 21 (blackjack)
function checkforInitialBlackjack () {
  if (gameObject.dealer.score == 21) {
    const flippedCard = GameHelpers.createCardElement(gameObject.dealer.hand[1].img, 'card-image')
    document.querySelector('.dealer-hand').replaceChild(flippedCard, document.querySelector('.dealer-hand .card-back'))
    checkForWinner()
  } else {
    playTurn()
  }
}

// Function checks for winner at the END of the game
function checkForWinner () {
  // Player 1 //
  if (((gameObject.player1.score > gameObject.dealer.score) && gameObject.player1.score <= 21) || (gameObject.player1.score <= 21 && gameObject.dealer.score > 21)) {
    // Player 1 Beats Dealer
    if (gameObject.player1.resolved == false) {
      gameObject.player1.cash = gameObject.player1.cash + (gameObject.player1.bet * 2)
      gameObject.player1.resolved = true
      $('.result-player1').addClass('resultWin')
      document.querySelector('.result-player1').innerHTML = 'WIN!'
    }
  } else if (((gameObject.dealer.score > gameObject.player1.score) && gameObject.dealer.score <= 21) || (gameObject.dealer.score <= 21 && gameObject.player1.score > 21) || gameObject.player1.score > 21) {
    // Dealer Beats Player 1 (Player 1 Bust)
    if (gameObject.player1.resolved == false) {
      gameObject.player1.resolved = true
      $('.result-player1').addClass('resultLose')
      document.querySelector('.result-player1').innerHTML = 'LOSE!'
    }
  } else if (gameObject.player1.score == gameObject.dealer.score) {
    // Dealer and Player 1 Tie
    if (gameObject.player1.resolved == false) {
      gameObject.player1.cash = gameObject.player1.cash + gameObject.player1.bet
      gameObject.player1.resolved = true
      $('.result-player1').addClass('resultTie')
      document.querySelector('.result-player1').innerHTML = 'TIE!'
    }
  }
  // Player 2 //
  if (((gameObject.player2.score > gameObject.dealer.score) && gameObject.player2.score <= 21) || (gameObject.player2.score <= 21 && gameObject.dealer.score > 21)) {
    // Player 2 Beats Dealer
    if (gameObject.player2.resolved == false) {
      gameObject.player2.cash = gameObject.player2.cash + (gameObject.player2.bet * 2)
      gameObject.player2.resolved = true
      $('.result-player2').addClass('resultWin')
      document.querySelector('.result-player2').innerHTML = 'WIN!'
    }
  } else if (((gameObject.dealer.score > gameObject.player2.score) && gameObject.dealer.score <= 21) || (gameObject.dealer.score <= 21 && gameObject.player2.score > 21) || gameObject.player2.score > 21) {
    // Dealer Beats Player 2 (Player 2 Bust)
    if (gameObject.player2.resolved == false) {
      gameObject.player2.resolved = true
      $('.result-player2').addClass('resultLose')
      document.querySelector('.result-player2').innerHTML = 'LOSE!'
    }
  } else if (gameObject.player2.score == gameObject.dealer.score) {
    // Dealer and Player 2 Tie
    if (gameObject.player2.resolved == false) {
      gameObject.player2.resolved = true
      gameObject.player2.cash = gameObject.player2.cash + gameObject.player2.bet
      $('.result-player2').addClass('resultTie')
      document.querySelector('.result-player2').innerHTML = 'TIE!'
    }
  }
  displayScore()
  playerBankrupt()
}


// Function that checks if a player is out of cash
function playerBankrupt() {
  if (gameObject.player1.cash <= 0) {
    GameHelpers.displayNotification("Player 1 is out of cash! Press RESTART to reset each player's cash.")
    $('.restart').removeClass('restart-off')
    $('.restart').one('click', function() {
      gameObject.player1.cash = 100
      gameObject.player2.cash = 100
      displayScore()
      $('.restart').addClass('restart-off')
      newGameButton.removeClass('new-game-off')
      GameHelpers.displayNotification('Press NEW GAME to play again!')
    })
  } else if (gameObject.player2.cash <= 0) {
    GameHelpers.displayNotification("Player 2 is out of cash! Press RESTART to reset each player's cash.")
    $('.restart').removeClass('restart-off')
    $('.restart').one('click', function() {
      gameObject.player1.cash = 100
      gameObject.player2.cash = 100
      displayScore()
      $('.restart').addClass('restart-off')
      newGameButton.removeClass('new-game-off')
      GameHelpers.displayNotification('Press NEW GAME to play again!')
    })
  } else {
    newGameButton.removeClass('new-game-off')
    GameHelpers.displayNotification('Press NEW GAME to play again!')
  }
}

// Function that places the cards back into the deck
function resetCardsToDeck() {
  var dealerHandSize = gameObject.dealer.hand.length
  var player1HandSize = gameObject.player1.hand.length
  var player2HandSize = gameObject.player2.hand.length
  $('.card-image').remove()
  for (var i = 0; i < dealerHandSize; i++) {
    gameObject.deck.push(gameObject.dealer.hand.pop())
  }
  for (var i = 0; i < player1HandSize; i++) {
    gameObject.deck.push(gameObject.player1.hand.pop())
  }
  for (var i = 0; i < player2HandSize; i++) {
    gameObject.deck.push(gameObject.player2.hand.pop())
  }
}

// Function that resets values to begin a new game
function resetValues() {
  gameObject.dealer.score = 0
  gameObject.player1.score = 0
  gameObject.player2.score = 0
  gameObject.dealer.aces = 0
  gameObject.player1.aces = 0
  gameObject.player2.aces = 0
  gameObject.player1.bet = 0
  gameObject.player2.bet = 0
  gameObject.player1.resolved = false
  gameObject.player2.resolved = false

  document.querySelector('.score1').innerHTML = ''
  document.querySelector('.score2').innerHTML = ''
  document.querySelector('.score-dealer').innerHTML = ''
  document.querySelector('.bet-value-player1').innerHTML = 'Player 1 Bet: $'
  document.querySelector('.bet-value-player2').innerHTML = 'Player 2 Bet: $'
  document.querySelector('.cash-player1').innerHTML = 'Player 1 Cash: $' + gameObject.player1.cash
  document.querySelector('.cash-player2').innerHTML = 'Player 2 Cash: $' + gameObject.player2.cash
  document.querySelector('.result-player1').innerHTML = ''
  document.querySelector('.result-player2').innerHTML = ''

  $('.result').removeClass('resultWin resultLose resultTie')
}

// Function that displays each player's score
function displayScore() {
  if (gameObject.player1.score == 21) {
    document.querySelector('.score1').innerHTML = 'SCORE: ' + gameObject.player1.score
  } else if (gameObject.player1.score > 21) {
    document.querySelector('.score1').innerHTML = 'SCORE: ' + gameObject.player1.score + ' - BUST!'
  } else {
    document.querySelector('.score1').innerHTML = 'SCORE: ' + gameObject.player1.score
  }

  if (gameObject.player2.score == 21) {
    document.querySelector('.score2').innerHTML = 'SCORE: ' + gameObject.player2.score
  } else if (gameObject.player2.score > 21) {
    document.querySelector('.score2').innerHTML = 'SCORE: ' + gameObject.player2.score + ' - BUST!'
  } else {
    document.querySelector('.score2').innerHTML = 'SCORE: ' + gameObject.player2.score
  }

  if (gameObject.dealer.score == 21) {
    document.querySelector('.score-dealer').innerHTML = 'DEALER HAS ' + gameObject.dealer.score
  } else if (currentPlayer.name != 'Dealer') {
    document.querySelector('.score-dealer').innerHTML = 'DEALER SHOWS ' + gameObject.dealer.hand[0].value
  } else {
    if (gameObject.dealer.score > 21) {
      document.querySelector('.score-dealer').innerHTML = 'DEALER HAS ' + gameObject.dealer.score + ' - BUST!'
    } else {
      document.querySelector('.score-dealer').innerHTML = 'DEALER HAS ' + gameObject.dealer.score
    }
  }
  document.querySelector('.cash-player1').innerHTML = 'Player 1 Cash: $' + gameObject.player1.cash
  document.querySelector('.cash-player2').innerHTML = 'Player 2 Cash: $' + gameObject.player2.cash
}
