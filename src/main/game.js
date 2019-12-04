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
const $deal = $('.deal')
const $newGame = $('.newGame')
const $hit = $('.hit')
const $stand = $('.stand')
const $hitP1 = $('.hitP1')
const $hitP2 = $('.hitP2')
const $standP1 = $('.standP1')
const $standP2 = $('.standP2')

let currentPlayer
//============================================================================//

GameHelpers.displayNotification('Welcome to Blackjack! Press NEW GAME to begin.')

// Event listener for the new game button
  $newGame.on('click', function() {
    $newGame.addClass('newGameOff')
    GameHelpers.displayNotification('Please place a minimum bet of $10')
    currentPlayer = gameObject.player1
    resetValues()
    resetCardsToDeck()
    $('.placeBet').addClass('placeBetOn')
    $('.placeBetP1').on('click', checkBetP1)
    $('.placeBetP2').on('click', checkBetP2)
  })

// Function that checks for the validity of Player 1 bet prior to dealing cards
function checkBetP1() {
  var player1Bet = Number($('.betP1').val())
  var player1Cash = gameObject.player1.cash

  if (player1Bet > player1Cash) {
    alert('Player 1 does not have enough cash to place that bet!')
  } else if (player1Bet < 10) {
    alert('Player 1, please enter a minimum bet of $10!')
  } else if (isNaN(player1Bet) == true) {
    alert('Player 1, please enter a valid bet!')
  } else {
    audio.chips.play()
    gameObject.player1.bet = player1Bet
    gameObject.player1.cash = gameObject.player1.cash - player1Bet
    document.querySelector('.betValueP1').innerHTML = 'Player 1 Bet: $' + player1Bet
    document.querySelector('.cashP1').innerHTML = 'Player 1 Cash: $' + gameObject.player1.cash
    $('.placeBetP1').off()
    $('.placeBetP1').removeClass('placeBetOn')
    if (gameObject.player2.bet > 0) {
      $deal.addClass('dealOn')
      deal()
    }
  }
}

// Function that checks for the validity of Player 2 bet prior to dealing cards
function checkBetP2() {
  var player2Bet = Number($('.betP2').val())
  var player2Cash = gameObject.player2.cash

  if (player2Bet > player2Cash) {
    alert('Player 2 does not have enough cash to place that bet!')
  } else if (player2Bet < 10) {
    alert('Player 2, please enter a minimum bet of $10!')
  } else if (isNaN(player2Bet) == true) {
    alert('Player 2, please enter a valid bet!')
  } else {
    audio.chips.play()
    gameObject.player2.bet = player2Bet
    gameObject.player2.cash = gameObject.player2.cash - player2Bet
    document.querySelector('.betValueP2').innerHTML = 'Player 2 Bet: $' + player2Bet
    document.querySelector('.cashP2').innerHTML = 'Player 2 Cash: $' + gameObject.player2.cash
    $('.placeBetP2').off()
    $('.placeBetP2').removeClass('placeBetOn')
    if (gameObject.player1.bet > 0) {
      $deal.addClass('dealOn')
      deal()
    }
  }
}

// Function that shuffles the deck and deals a new hand to the dealer and both players
function deal() {
  GameHelpers.displayNotification('Press DEAL to play!')
  $deal.one('click', function() {
    audio.shuffle.play()
    $deal.removeClass('dealOn')
    gameObject.deck = shuffle(gameObject.deck)
    dealCards()
    checkInitialCardValues()
  })
}

// Function pops cards from the deck into each players hand array. Function also visually displays the cards on the screen
function dealCards() {
  gameObject.dealer.hand = [gameObject.deck.pop(), gameObject.deck.pop()]
  gameObject.player1.hand = [gameObject.deck.pop(), gameObject.deck.pop()]
  gameObject.player2.hand = [gameObject.deck.pop(), gameObject.deck.pop()]

  $('<img class="cardImage" src=' + gameObject.dealer.hand[0].img + '>').hide().appendTo('.dealer').show('slow')
  $('<img class="cardImage cardBack" src="src/main/resources/images/card_back.jpg">').appendTo('.dealer').show('slow')

  $('<img class="cardImage" src=' + gameObject.player1.hand[0].img + '>').hide().appendTo('.player1').show('slow')
  $('<img class="cardImage" src=' + gameObject.player1.hand[1].img + '>').hide().appendTo('.player1').show('slow')

  $('<img class="cardImage" src=' + gameObject.player2.hand[0].img + '>').hide().appendTo('.player2').show('slow')
  $('<img class="cardImage" src=' + gameObject.player2.hand[1].img + '>').hide().appendTo('.player2').show('slow')
}

// Function for player 1 and player 2 turns
function playTurn() {
  if (currentPlayer.name == 'Player 1') {
    if (currentPlayer.score == 21) {
      switchTurns()
    } else {
      GameHelpers.displayNotification(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
      $hitP1.addClass('onP1')
      $standP1.addClass('onP1')
      $hitP1.on('click', hit)
      $standP1.on('click', switchTurns)
    }
  } else if (currentPlayer.name == 'Player 2') {
      if (currentPlayer.score == 21) {
        switchTurns()
      } else {
        GameHelpers.displayNotification(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
        $hitP2.addClass('onP2')
        $standP2.addClass('onP2')
        $hitP2.on('click', hit)
        $standP2.on('click', switchTurns)
      }
  } else {
    checkForWinner()
  }
}

// Function for the hit button
function hit() {
  audio.hit.play()
  currentPlayer.hand.push(gameObject.deck.pop())
  $('<img class="cardImage" src=' + currentPlayer.hand[currentPlayer.hand.length - 1].img + '>').hide().appendTo(currentPlayer.class).show('slow')
  checkCardValue()
}

// Function that switches turns
function switchTurns() {
  if (currentPlayer == gameObject.player1) {
    $hitP1.removeClass('onP1')
    $standP1.removeClass('onP1')
    $hitP1.off()
    $standP1.off()
    currentPlayer = gameObject.player2
    playTurn()
  } else if (currentPlayer == gameObject.player2){
    $hitP2.removeClass('onP2')
    $standP2.removeClass('onP2')
    $hitP2.off()
    $standP2.off()
    currentPlayer = gameObject.dealer
    playDealer()
  } else {
    checkForWinner()
  }
}

// Function for the dealer's turn
function playDealer() {
  $('.cardBack').replaceWith('<img class="cardImage" src=' + gameObject.dealer.hand[1].img + '>')
  if (gameObject.player1.score > 21 && gameObject.player2.score > 21) {
    checkForWinner()
  } else if (currentPlayer.score < 17 && (gameObject.player1.score <= 21 || gameObject.player2.score <= 21)) {
    hit()
  }
  checkForWinner()
}

// Function that checks the initial card values
function checkInitialCardValues() {
  for (var i = 0; i < gameObject.dealer.hand.length; i++) {
    gameObject.dealer.score += gameObject.dealer.hand[i].value
  }
  if (gameObject.dealer.score > 21) {
    gameObject.dealer.score -= 10
  }

  for (var i = 0; i < gameObject.player1.hand.length; i++) {
    gameObject.player1.score += gameObject.player1.hand[i].value
  }
  if (gameObject.player1.score > 21) {
    gameObject.player1.score -= 10
  }

  for (var i = 0; i < gameObject.player2.hand.length; i++) {
    gameObject.player2.score += gameObject.player2.hand[i].value
  }
  if (gameObject.player2.score > 21) {
    gameObject.player2.score -= 10
  }
  checkforInitialBlackjack()
  displayScore()
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
function checkforInitialBlackjack() {
  if (gameObject.dealer.score == 21) {
    $('.cardBack').replaceWith('<img class="cardImage" src=' + gameObject.dealer.hand[1].img + '>')
    checkForWinner()
  } else {
    playTurn()
  }
}

// Function checks for winner at the END of the game
function checkForWinner() {
  // Player 1 //
  if (((gameObject.player1.score > gameObject.dealer.score) && gameObject.player1.score <= 21) || (gameObject.player1.score <= 21 && gameObject.dealer.score > 21)) {
    // Player 1 Beats Dealer
    if (gameObject.player1.resolved == false) {
      gameObject.player1.cash = gameObject.player1.cash + (gameObject.player1.bet * 2)
      gameObject.player1.resolved = true
      $('.resultP1').addClass('resultWin')
      document.querySelector('.resultP1').innerHTML = 'WIN!'
    }
  } else if (((gameObject.dealer.score > gameObject.player1.score) && gameObject.dealer.score <= 21) || (gameObject.dealer.score <= 21 && gameObject.player1.score > 21) || gameObject.player1.score > 21) {
    // Dealer Beats Player 1 (Player 1 Bust)
    if (gameObject.player1.resolved == false) {
      gameObject.player1.resolved = true
      $('.resultP1').addClass('resultLose')
      document.querySelector('.resultP1').innerHTML = 'LOSE!'
    }
  } else if (gameObject.player1.score == gameObject.dealer.score) {
    // Dealer and Player 1 Tie
    if (gameObject.player1.resolved == false) {
      gameObject.player1.cash = gameObject.player1.cash + gameObject.player1.bet
      gameObject.player1.resolved = true
      $('.resultP1').addClass('resultTie')
      document.querySelector('.resultP1').innerHTML = 'TIE!'
    }
  }
  // Player 2 //
  if (((gameObject.player2.score > gameObject.dealer.score) && gameObject.player2.score <= 21) || (gameObject.player2.score <= 21 && gameObject.dealer.score > 21)) {
    // Player 2 Beats Dealer
    if (gameObject.player2.resolved == false) {
      gameObject.player2.cash = gameObject.player2.cash + (gameObject.player2.bet * 2)
      gameObject.player2.resolved = true
      $('.resultP2').addClass('resultWin')
      document.querySelector('.resultP2').innerHTML = 'WIN!'
    }
  } else if (((gameObject.dealer.score > gameObject.player2.score) && gameObject.dealer.score <= 21) || (gameObject.dealer.score <= 21 && gameObject.player2.score > 21) || gameObject.player2.score > 21) {
    // Dealer Beats Player 2 (Player 2 Bust)
    if (gameObject.player2.resolved == false) {
      gameObject.player2.resolved = true
      $('.resultP2').addClass('resultLose')
      document.querySelector('.resultP2').innerHTML = 'LOSE!'
    }
  } else if (gameObject.player2.score == gameObject.dealer.score) {
    // Dealer and Player 2 Tie
    if (gameObject.player2.resolved == false) {
      gameObject.player2.resolved = true
      gameObject.player2.cash = gameObject.player2.cash + gameObject.player2.bet
      $('.resultP2').addClass('resultTie')
      document.querySelector('.resultP2').innerHTML = 'TIE!'
    }
  }
  displayScore()
  playerBankrupt()
}


// Function that checks if a player is out of cash
function playerBankrupt() {
  if (gameObject.player1.cash <= 0) {
    GameHelpers.displayNotification("Player 1 is out of cash! Press RESTART to reset each player's cash.")
    $('.restart').removeClass('restartOff')
    $('.restart').one('click', function() {
      gameObject.player1.cash = 100
      gameObject.player2.cash = 100
      displayScore()
      $('.restart').addClass('restartOff')
      $newGame.removeClass('newGameOff')
      GameHelpers.displayNotification('Press NEW GAME to play again!')
    })
  } else if (gameObject.player2.cash <= 0) {
    GameHelpers.displayNotification("Player 2 is out of cash! Press RESTART to reset each player's cash.")
    $('.restart').removeClass('restartOff')
    $('.restart').one('click', function() {
      gameObject.player1.cash = 100
      gameObject.player2.cash = 100
      displayScore()
      $('.restart').addClass('restartOff')
      $newGame.removeClass('newGameOff')
      GameHelpers.displayNotification('Press NEW GAME to play again!')
    })
  } else {
    $newGame.removeClass('newGameOff')
    GameHelpers.displayNotification('Press NEW GAME to play again!')
  }
}

// Function that places the cards back into the deck
function resetCardsToDeck() {
  var dealerHandSize = gameObject.dealer.hand.length
  var player1HandSize = gameObject.player1.hand.length
  var player2HandSize = gameObject.player2.hand.length
  $('.cardImage').remove()
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
  document.querySelector('.scoreDealer').innerHTML = ''
  document.querySelector('.betValueP1').innerHTML = 'Player 1 Bet: $'
  document.querySelector('.betValueP2').innerHTML = 'Player 2 Bet: $'
  document.querySelector('.cashP1').innerHTML = 'Player 1 Cash: $' + gameObject.player1.cash
  document.querySelector('.cashP2').innerHTML = 'Player 2 Cash: $' + gameObject.player2.cash
  document.querySelector('.resultP1').innerHTML = ''
  document.querySelector('.resultP2').innerHTML = ''

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
    document.querySelector('.scoreDealer').innerHTML = 'DEALER HAS ' + gameObject.dealer.score
  } else if (currentPlayer.name != 'Dealer') {
    document.querySelector('.scoreDealer').innerHTML = 'DEALER SHOWS ' + gameObject.dealer.hand[0].value
  } else {
    if (gameObject.dealer.score > 21) {
      document.querySelector('.scoreDealer').innerHTML = 'DEALER HAS ' + gameObject.dealer.score + ' - BUST!'
    } else {
      document.querySelector('.scoreDealer').innerHTML = 'DEALER HAS ' + gameObject.dealer.score
    }
  }
  document.querySelector('.cashP1').innerHTML = 'Player 1 Cash: $' + gameObject.player1.cash
  document.querySelector('.cashP2').innerHTML = 'Player 2 Cash: $' + gameObject.player2.cash
}

// Function that shuffles the cards in the deck using the Fisher Yates Shuffle
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
