//========================== Global Variables ================================//
var game = {
  player1: {name: 'Player 1', class: '.player1', aces: 0, hand: [], score: 0, cash: 100, bet: 0, resolved: false},
  player2: {name: 'Player 2', class: '.player2', aces: 0, hand: [], score: 0, cash: 100, bet: 0, resolved: false},
  dealer: {name: 'Dealer', class: '.dealer', hand: [], score : 0},
  deck: [
    {suit: 'Hearts', name: 'Ace', value: 11, altValue: 1, img: 'images/ace_of_hearts.png'},
    {suit: 'Hearts', name: '2', value: 2, img: 'images/2_of_hearts.png'},
    {suit: 'Hearts', name: '3', value: 3, img: 'images/3_of_hearts.png'},
    {suit: 'Hearts', name: '4', value: 4, img: 'images/4_of_hearts.png'},
    {suit: 'Hearts', name: '5', value: 5, img: 'images/5_of_hearts.png'},
    {suit: 'Hearts', name: '6', value: 6, img: 'images/6_of_hearts.png'},
    {suit: 'Hearts', name: '7', value: 7, img: 'images/7_of_hearts.png'},
    {suit: 'Hearts', name: '8', value: 8, img: 'images/8_of_hearts.png'},
    {suit: 'Hearts', name: '9', value: 9, img: 'images/9_of_hearts.png'},
    {suit: 'Hearts', name: '10', value: 10, img: 'images/10_of_hearts.png'},
    {suit: 'Hearts', name: 'Jack', value: 10, img: 'images/jack_of_hearts.png'},
    {suit: 'Hearts', name: 'Queen', value: 10, img: 'images/queen_of_hearts.png'},
    {suit: 'Hearts', name: 'King', value: 10, img: 'images/king_of_hearts.png'},
    {suit: 'Diamonds', name: 'Ace', value: 11, altValue: 1, img: 'images/ace_of_diamonds.png'},
    {suit: 'Diamonds', name: '2', value: 2, img: 'images/2_of_diamonds.png'},
    {suit: 'Diamonds', name: '3', value: 3, img: 'images/3_of_diamonds.png'},
    {suit: 'Diamonds', name: '4', value: 4, img: 'images/4_of_diamonds.png'},
    {suit: 'Diamonds', name: '5', value: 5, img: 'images/5_of_diamonds.png'},
    {suit: 'Diamonds', name: '6', value: 6, img: 'images/6_of_diamonds.png'},
    {suit: 'Diamonds', name: '7', value: 7, img: 'images/7_of_diamonds.png'},
    {suit: 'Diamonds', name: '8', value: 8, img: 'images/8_of_diamonds.png'},
    {suit: 'Diamonds', name: '9', value: 9, img: 'images/9_of_diamonds.png'},
    {suit: 'Diamonds', name: '10', value: 10, img: 'images/10_of_diamonds.png'},
    {suit: 'Diamonds', name: 'Jack', value: 10, img: 'images/jack_of_diamonds.png'},
    {suit: 'Diamonds', name: 'Queen', value: 10, img: 'images/queen_of_diamonds.png'},
    {suit: 'Diamonds', name: 'King', value: 10, img: 'images/king_of_diamonds.png'},
    {suit: 'Spades', name: 'Ace', value: 11, altValue: 1, img: 'images/ace_of_spades.png'},
    {suit: 'Spades', name: '2', value: 2, img: 'images/2_of_spades.png'},
    {suit: 'Spades', name: '3', value: 3, img: 'images/3_of_spades.png'},
    {suit: 'Spades', name: '4', value: 4, img: 'images/4_of_spades.png'},
    {suit: 'Spades', name: '5', value: 5, img: 'images/5_of_spades.png'},
    {suit: 'Spades', name: '6', value: 6, img: 'images/6_of_spades.png'},
    {suit: 'Spades', name: '7', value: 7, img: 'images/7_of_spades.png'},
    {suit: 'Spades', name: '8', value: 8, img: 'images/8_of_spades.png'},
    {suit: 'Spades', name: '9', value: 9, img: 'images/9_of_spades.png'},
    {suit: 'Spades', name: '10', value: 10, img: 'images/10_of_spades.png'},
    {suit: 'Spades', name: 'Jack', value: 10, img: 'images/jack_of_spades.png'},
    {suit: 'Spades', name: 'Queen', value: 10, img: 'images/queen_of_spades.png'},
    {suit: 'Spades', name: 'King', value: 10, img: 'images/king_of_spades.png'},
    {suit: 'Clubs', name: 'Ace', value: 11, altValue: 1, img: 'images/ace_of_clubs.png'},
    {suit: 'Clubs', name: '2', value: 2, img: 'images/2_of_clubs.png'},
    {suit: 'Clubs', name: '3', value: 3, img: 'images/3_of_clubs.png'},
    {suit: 'Clubs', name: '4', value: 4, img: 'images/4_of_clubs.png'},
    {suit: 'Clubs', name: '5', value: 5, img: 'images/5_of_clubs.png'},
    {suit: 'Clubs', name: '6', value: 6, img: 'images/6_of_clubs.png'},
    {suit: 'Clubs', name: '7', value: 7, img: 'images/7_of_clubs.png'},
    {suit: 'Clubs', name: '8', value: 8, img: 'images/8_of_clubs.png'},
    {suit: 'Clubs', name: '9', value: 9, img: 'images/9_of_clubs.png'},
    {suit: 'Clubs', name: '10', value: 10, img: 'images/10_of_clubs.png'},
    {suit: 'Clubs', name: 'Jack', value: 10, img: 'images/jack_of_clubs.png'},
    {suit: 'Clubs', name: 'Queen', value: 10, img: 'images/queen_of_clubs.png'},
    {suit: 'Clubs', name: 'King', value: 10, img: 'images/king_of_clubs.png'},
  ]
}
var currentPlayer
var $deal = $('.deal')
var $newGame = $('.newGame')
var $hit = $('.hit')
var $stand = $('.stand')
var $hitP1 = $('.hitP1')
var $hitP2 = $('.hitP2')
var $standP1 = $('.standP1')
var $standP2 = $('.standP2')
//============================================================================//

notify('Welcome to Blackjack! Press NEW GAME to begin.')

// Event listener for new game
  $newGame.on('click', function() {
    console.log('new game clicked');
    notify('Please place a minimum bet of $10')
    currentPlayer = game.player1
    resetValues()
    resetCardsToDeck()
    $('.placeBet').addClass('placeBetOn')
    $('.placeBetP1').on('click', checkBetP1)
    $('.placeBetP2').on('click', checkBetP2)
  })

// Function that checks for the validity of Player 1 bet prior to dealing cards
function checkBetP1() {
  console.log('checking Player 1 bet');
  var player1Bet = Number($('.betP1').val())
  var player1Cash = game.player1.cash

  if (player1Bet > player1Cash) {
    alert('Player 1 does not have enough cash to place that bet!')
  } else if (player1Bet < 10) {
    alert('Player 1, please enter a minimum bet of $10!')
  } else if (isNaN(player1Bet) == true) {
    alert('Player 1, please enter a valid bet!')
  } else {
    game.player1.bet = player1Bet
    game.player1.cash = game.player1.cash - player1Bet
    document.querySelector('.betValueP1').innerHTML = 'Player 1 Bet: $' + player1Bet
    document.querySelector('.cashP1').innerHTML = 'Player 1 Cash: $' + game.player1.cash
    $('.placeBetP1').off()
    $('.placeBetP1').removeClass('placeBetOn')
    if (game.player2.bet > 0) {
      console.log(game.player2.bet);
      $deal.addClass('dealOn')
      deal()
    }
  }
}

// Function that checks for the validity of Player 2 bet prior to dealing cards
function checkBetP2() {
  console.log('checking Player 2 bet');
  var player2Bet = Number($('.betP2').val())
  var player2Cash = game.player2.cash

  if (player2Bet > player2Cash) {
    alert('Player 2 does not have enough cash to place that bet!')
  } else if (player2Bet < 10) {
    alert('Player 2, please enter a minimum bet of $10!')
  } else if (isNaN(player2Bet) == true) {
    alert('Player 2, please enter a valid bet!')
  } else {
    game.player2.bet = player2Bet
    game.player2.cash = game.player2.cash - player2Bet
    document.querySelector('.betValueP2').innerHTML = 'Player 2 Bet: $' + player2Bet
    document.querySelector('.cashP2').innerHTML = 'Player 2 Cash: $' + game.player2.cash
    $('.placeBetP2').off()
    $('.placeBetP2').removeClass('placeBetOn')
    if (game.player1.bet > 0) {
      console.log(game.player1.bet);
      $deal.addClass('dealOn')
      deal()
    }
  }
}

// Function that shuffles the deck and deals a new hand to the dealer and both players
function deal() {
  notify('Press DEAL to play!')
  $deal.one('click', function() {
    console.log('deal clicked');
    $deal.removeClass('dealOn')
    game.deck = shuffle(game.deck)
    console.log('deck shuffled');
    dealCards()
    console.log('cards distributed');
    checkInitialCardValues()
  })
}

// Function pops cards from the deck into each players hand array. Function also visually displays the cards on the screen
function dealCards() {
  game.dealer.hand = [game.deck.pop(), game.deck.pop()]
  game.player1.hand = [game.deck.pop(), game.deck.pop()]
  game.player2.hand = [game.deck.pop(), game.deck.pop()]

  $('<img class="cardImage" src=' + game.dealer.hand[0].img + '>').hide().appendTo('.dealer').show('slow')
  $('<img class="cardImage cardBack" src="images/card_back.jpg">').appendTo('.dealer').show('slow')

  $('<img class="cardImage" src=' + game.player1.hand[0].img + '>').hide().appendTo('.player1').show('slow')
  $('<img class="cardImage" src=' + game.player1.hand[1].img + '>').hide().appendTo('.player1').show('slow')

  $('<img class="cardImage" src=' + game.player2.hand[0].img + '>').hide().appendTo('.player2').show('slow')
  $('<img class="cardImage" src=' + game.player2.hand[1].img + '>').hide().appendTo('.player2').show('slow')
}

// Function for player 1 and player 2 turns
function playTurn() {
  if (currentPlayer.name == 'Player 1') {
    if (currentPlayer.score == 21) {
      switchTurns()
    } else {
      console.log('turn on ' + currentPlayer.name + ' buttons');
      notify(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
      $hitP1.addClass('onP1')
      $standP1.addClass('onP1')
      $hitP1.on('click', hit)
      $standP1.on('click', switchTurns)
    }
  } else if (currentPlayer.name == 'Player 2') {
      if (currentPlayer.score == 21) {
        switchTurns()
      } else {
        console.log('turn on ' + currentPlayer.name + ' buttons');
        notify(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
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
  console.log('hit')
  currentPlayer.hand.push(game.deck.pop())
  $('<img class="cardImage" src=' + currentPlayer.hand[currentPlayer.hand.length - 1].img + '>').hide().appendTo(currentPlayer.class).show('slow')
  console.log('new card added to ' + currentPlayer.name + ' hand');
  checkCardValue()
}

// Function that switches turns
function switchTurns() {
  if (currentPlayer == game.player1) {
    $hitP1.removeClass('onP1')
    $standP1.removeClass('onP1')
    $hitP1.off()
    $standP1.off()
    console.log('turn off ' + currentPlayer.name + ' buttons');
    currentPlayer = game.player2
    console.log('switch to ' + currentPlayer.name);
    playTurn()
  } else if (currentPlayer == game.player2){
    $hitP2.removeClass('onP2')
    $standP2.removeClass('onP2')
    $hitP2.off()
    $standP2.off()
    console.log('turn off ' + currentPlayer.name + ' buttons');
    currentPlayer = game.dealer
    console.log('switch to ' + currentPlayer.name);
    playDealer()
  } else {
    checkForWinner()
  }
}

// Function for the dealer's turn
function playDealer() {
  console.log('dealers turn');
  $('.cardBack').replaceWith('<img class="cardImage" src=' + game.dealer.hand[1].img + '>')
  if (game.player1.score > 21 && game.player2.score > 21) {
    console.log('dealer won');
    checkForWinner()
  } else if (currentPlayer.score < 17 && (game.player1.score <= 21 || game.player2.score <= 21)) {
    console.log(currentPlayer.score);
    console.log('dealer must hit');
    hit()
  }
  checkForWinner()
}

// Function that checks the initial card values
function checkInitialCardValues() {
  console.log('checking the initial card values');
  for (var i = 0; i < game.dealer.hand.length; i++) {
    game.dealer.score += game.dealer.hand[i].value
  }
  if (game.dealer.score > 21) {
    game.dealer.score -= 10
  }
  console.log('dealers initial hand = ' + game.dealer.score);

  for (var i = 0; i < game.player1.hand.length; i++) {
    game.player1.score += game.player1.hand[i].value
  }
  if (game.player1.score > 21) {
    game.player1.score -= 10
  }
  console.log('player 1 initial hand = ' + game.player1.score);

  for (var i = 0; i < game.player2.hand.length; i++) {
    game.player2.score += game.player2.hand[i].value
  }
  if (game.player2.score > 21) {
    game.player2.score -= 10
  }
  console.log('player 2 initial hand = ' + game.player2.score);
  checkforInitialBlackjack()
  displayScore()
}

// Function that checks for the cards values between turns
function checkCardValue() {
  console.log('checking card value');
  currentPlayer.score = 0
  currentPlayer.aces = 0
  for (var i = 0; i < currentPlayer.hand.length; i++) {
    currentPlayer.score += currentPlayer.hand[i].value
  }
  notify(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
  console.log(currentPlayer.name + ' has ' + currentPlayer.score);
  if (currentPlayer.score == 21) {
    switchTurns()
  }
  if (currentPlayer.score > 21) {
    if (isAce()) {
      console.log('player has aces');
      checkAce()
    } else {
      switchTurns()
    }
  }
  if (currentPlayer.name == 'Dealer') {
    if (currentPlayer.score < 17 && (game.player1.score <= 21 || game.player2.score <= 21)) {
      console.log('dealer must hit');
      hit()
    } else {
      checkForWinner()
    }
  }
  displayScore()
}

// Function that checks for Ace
function isAce() {
  console.log('check if hand has aces');
  for (var i = 0; i < currentPlayer.hand.length; i++) {
    if (currentPlayer.hand[i].name == 'Ace') {
      currentPlayer.aces++
    }
  }
  if (currentPlayer.aces != 0) {
    console.log('hand has an ace');
    return true
  } else {
    console.log('hand has no aces');
    return false
  }
}

// Function to calculate new score if there are aces in the player's hand
function checkAce() {
  console.log('get new value for ace');
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
  notify(currentPlayer.name + ' has ' + currentPlayer.score + '. Hit or Stand?')
}

// Function that checks if there is a winner at the beginning of the game
function checkforInitialBlackjack() {
  console.log('checking for initial blackack');
  if (game.dealer.score == 21) {
    $('.cardBack').replaceWith('<img class="cardImage" src=' + game.dealer.hand[1].img + '>')
    checkForWinner()
  } else {
    console.log('dealer does not have 21, start play');
    playTurn()
  }
}

// Function checks for winner at the END of the game
function checkForWinner() {
  console.log('checking for the game winner');
  // Player 1 //
  if (((game.player1.score > game.dealer.score) && game.player1.score <= 21) || (game.player1.score <= 21 && game.dealer.score > 21)) {
    // Player 1 Beats Dealer
    console.log('Player 1 Beats Dealer');
    if (game.player1.resolved == false) {
      game.player1.cash = game.player1.cash + (game.player1.bet * 2)
      game.player1.resolved = true
      $('.resultP1').addClass('resultWin')
      document.querySelector('.resultP1').innerHTML = 'WIN!'
    }
  } else if (((game.dealer.score > game.player1.score) && game.dealer.score <= 21) || (game.dealer.score <= 21 && game.player1.score > 21) || game.player1.score > 21) {
    // Dealer Beats Player 1 (Player 1 Bust)
    console.log('Dealer Beats Player 1');
    if (game.player1.resolved == false) {
      game.player1.resolved = true
      $('.resultP1').addClass('resultLose')
      document.querySelector('.resultP1').innerHTML = 'LOSE!'
    }
  } else if (game.player1.score == game.dealer.score) {
    // Dealer and Player 1 Tie
    console.log('Dealer and Player 1 Tie');
    if (game.player1.resolved == false) {
      game.player1.cash = game.player1.cash + game.player1.bet
      game.player1.resolved = true
      $('.resultP1').addClass('resultTie')
      document.querySelector('.resultP1').innerHTML = 'TIE!'
    }
  }
  // Player 2 //
  if (((game.player2.score > game.dealer.score) && game.player2.score <= 21) || (game.player2.score <= 21 && game.dealer.score > 21)) {
    // Player 2 Beats Dealer
    console.log('Player 2 Beats Dealer');
    if (game.player2.resolved == false) {
      game.player2.cash = game.player2.cash + (game.player2.bet * 2)
      game.player2.resolved = true
      $('.resultP2').addClass('resultWin')
      document.querySelector('.resultP2').innerHTML = 'WIN!'
    }
  } else if (((game.dealer.score > game.player2.score) && game.dealer.score <= 21) || (game.dealer.score <= 21 && game.player2.score > 21) || game.player2.score > 21) {
    // Dealer Beats Player 2 (Player 2 Bust)
    console.log('Dealer Beats Player 2');
    if (game.player2.resolved == false) {
      game.player2.resolved = true
      $('.resultP2').addClass('resultLose')
      document.querySelector('.resultP2').innerHTML = 'LOSE!'
    }
  } else if (game.player2.score == game.dealer.score) {
    // Dealer and Player 2 Tie
    console.log('Dealer and Player 2 Tie');
    if (game.player2.resolved == false) {
      game.player2.resolved = true
      game.player2.cash = game.player2.cash + game.player2.bet
      $('.resultP2').addClass('resultTie')
      document.querySelector('.resultP2').innerHTML = 'TIE!'
    }
  }
  displayScore()
  playerBankrupt()
}


// Function that checks if a player is out of cash
function playerBankrupt() {
  if (game.player1.cash <= 0) {
    notify("Player 1 is out of cash! Press RESTART to reset each player's cash.")
    $('.restart').removeClass('restartOff')
    $('.restart').one('click', function() {
      game.player1.cash = 100
      game.player2.cash = 100
      displayScore()
      $('.restart').addClass('restartOff')
      notify('Press NEW GAME to play again!')
    })
  } else if (game.player2.cash <= 0) {
    notify("Player 2 is out of cash! Press RESTART to reset each player's cash.")
    $('.restart').removeClass('restartOff')
    $('.restart').one('click', function() {
      game.player1.cash = 100
      game.player2.cash = 100
      displayScore()
      $('.restart').addClass('restartOff')
      notify('Press NEW GAME to play again!')
    })
  } else {
    notify('Press NEW GAME to play again!')
  }
}

// Function that places the cards back into the deck
function resetCardsToDeck() {
  var dealerHandSize = game.dealer.hand.length
  var player1HandSize = game.player1.hand.length
  var player2HandSize = game.player2.hand.length
  $('.cardImage').remove()
  for (var i = 0; i < dealerHandSize; i++) {
    game.deck.push(game.dealer.hand.pop())
  }
  console.log('reshuffled dealers cards to deck');
  for (var i = 0; i < player1HandSize; i++) {
    game.deck.push(game.player1.hand.pop())
  }
  console.log('reshuffled player 1 cards to deck');
  for (var i = 0; i < player2HandSize; i++) {
    game.deck.push(game.player2.hand.pop())
  }
  console.log('reshuffled player 2 cards to deck');
  console.log(game.deck.length);
}

// Function that resets each player's score and ace value
function resetValues() {
  game.dealer.score = 0
  game.player1.score = 0
  game.player2.score = 0
  game.dealer.aces = 0
  game.player1.aces = 0
  game.player2.aces = 0
  game.player1.bet = 0
  game.player2.bet = 0
  game.player1.resolved = false
  game.player2.resolved = false

  document.querySelector('.score1').innerHTML = ''
  document.querySelector('.score2').innerHTML = ''
  document.querySelector('.scoreDealer').innerHTML = ''
  document.querySelector('.betValueP1').innerHTML = 'Player 1 Bet: $'
  document.querySelector('.betValueP2').innerHTML = 'Player 2 Bet: $'
  document.querySelector('.cashP1').innerHTML = 'Player 1 Cash: $' + game.player1.cash
  document.querySelector('.cashP2').innerHTML = 'Player 2 Cash: $' + game.player2.cash
  document.querySelector('.resultP1').innerHTML = ''
  document.querySelector('.resultP2').innerHTML = ''

  $('.result').removeClass('resultWin resultLose resultTie')
}

// Function that accepts string inputs and displays on the screen
function notify(string) {
  document.querySelector('h2').innerHTML = string
}

// Function that displays each player's score
function displayScore() {
  if (game.player1.score == 21) {
    document.querySelector('.score1').innerHTML = 'SCORE: ' + game.player1.score
  } else if (game.player1.score > 21) {
    document.querySelector('.score1').innerHTML = 'SCORE: ' + game.player1.score + ' - BUST!'
  } else {
    document.querySelector('.score1').innerHTML = 'SCORE: ' + game.player1.score
  }

  if (game.player2.score == 21) {
    document.querySelector('.score2').innerHTML = 'SCORE: ' + game.player2.score
  } else if (game.player2.score > 21) {
    document.querySelector('.score2').innerHTML = 'SCORE: ' + game.player2.score + ' - BUST!'
  } else {
    document.querySelector('.score2').innerHTML = 'SCORE: ' + game.player2.score
  }

  if (game.dealer.score == 21) {
    document.querySelector('.scoreDealer').innerHTML = 'DEALER HAS ' + game.dealer.score
  } else if (currentPlayer.name != 'Dealer') {
    document.querySelector('.scoreDealer').innerHTML = 'DEALER SHOWS ' + game.dealer.hand[0].value
  } else {
    if (game.dealer.score > 21) {
      document.querySelector('.scoreDealer').innerHTML = 'DEALER HAS ' + game.dealer.score + ' - BUST!'
    } else {
      document.querySelector('.scoreDealer').innerHTML = 'DEALER HAS ' + game.dealer.score
    }
  }
  document.querySelector('.cashP1').innerHTML = 'Player 1 Cash: $' + game.player1.cash
  document.querySelector('.cashP2').innerHTML = 'Player 2 Cash: $' + game.player2.cash
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
