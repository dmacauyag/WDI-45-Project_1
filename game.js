// Declare global variables
var game = {
  player1: {name: 'Player 1', class: '.player1', aces: 0, hand: [], score: 0, cash: 100},
  player2: {name: 'Player 2', class: '.player2', aces: 0, hand: [], score: 0, cash: 100},
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

// Event listener to start a new game
$newGame.on('click', function() {
  console.log('new game clicked');
  currentPlayer = game.player1
  resetScore()
  resetCardsToDeck()
  deal()
})

// Function that shuffles the deck and deals a new hand to the dealer and both players
function deal() {
  $deal.one('click', function() {
    console.log('deal clicked');
    game.deck = shuffle(game.deck)
    console.log('deck shuffled');
    dealCards()
    console.log('cards distributed');
    setTimeout(checkInitialCardValues, 3500)
    $hitP1.on('click', hit)
    $standP1.on('click', switchTurns)
  })
}

// Function that visually deals cards to each player
function dealCards() {
  game.dealer.hand = [game.deck.pop(), game.deck.pop()]
  game.player1.hand = [game.deck.pop(), game.deck.pop()]
  game.player2.hand = [game.deck.pop(), game.deck.pop()]

  $('<img class="cardImage" src=' + game.dealer.hand[0].img + '>').appendTo('.dealer')
  setTimeout(function() {
    $('<img class="cardImage cardBack" src="images/card_back.jpg">').appendTo('.dealer')
  }, 1500)

  setTimeout(function(){
    $('<img class="cardImage" src=' + game.player1.hand[0].img + '>').appendTo('.player1')
  }, 500)
  setTimeout(function(){
    $('<img class="cardImage" src=' + game.player1.hand[1].img + '>').appendTo('.player1')
  }, 2000)

  setTimeout(function(){
    $('<img class="cardImage" src=' + game.player2.hand[0].img + '>').appendTo('.player2')
  }, 1000)
  setTimeout(function(){
    $('<img class="cardImage" src=' + game.player2.hand[1].img + '>').appendTo('.player2')
  }, 2500)
}

// Function for the hit button
function hit() {
  console.log('hit')
  currentPlayer.hand.push(game.deck.pop())
  $('<img class="cardImage" src=' + currentPlayer.hand[currentPlayer.hand.length - 1].img + '>').appendTo(currentPlayer.class)
  console.log('new card added to ' + currentPlayer.name + ' hand');
  checkCardValue()
}

// Function that switches turns
function switchTurns() {
  if (currentPlayer == game.player1) {
    $hitP1.off()
    $standP1.off()
    console.log('turn off ' + currentPlayer.name + ' buttons');
    $hitP2.on('click', hit)
    $standP2.on('click', switchTurns)
    currentPlayer = game.player2
    console.log('turn on ' + currentPlayer.name + ' buttons');
    console.log('switch to ' + currentPlayer.name);
  } else if (currentPlayer == game.player2){
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
    alert('Dealer Wins!')
  } else if (currentPlayer.score < 17) {
    console.log('dealer must hit');
    hit()
  } else {
    checkForWinner()
  }
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
  checkforInitialWinner()
}

// Function that checks for the cards values between turns
function checkCardValue() {
  console.log('checking card value');
  currentPlayer.score = 0
  currentPlayer.aces = 0
  for (var i = 0; i < currentPlayer.hand.length; i++) {
    currentPlayer.score += currentPlayer.hand[i].value
  }
  console.log(currentPlayer.name + ' has ' + currentPlayer.score);
  if (currentPlayer.score == 21) {
    alert(currentPlayer.name + ' has BLACKJACK!')
    switchTurns()
  }
  if (currentPlayer.score > 21) {
    if (isAce()) {
      console.log('player has aces');
      checkAce()
    } else {
      alert(currentPlayer.name + ' BUST!')
      switchTurns()
    }
  }
  if (currentPlayer.name == 'Dealer') {
    if (currentPlayer.score < 17) {
      console.log('dealer must hit');
      hit()
    } else {
      checkForWinner()
    }
  }
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
    alert(currentPlayer.name + ' BUST!')
    switchTurns()
  }
}

// Function that checks if there is a winner at the beginning of the game
// =================== Need to correct for DOUBLE ACES! =================== //
function checkforInitialWinner() {
  console.log('checking for initial blackack');
  if (game.player1.score == 21) {
    alert('Player 1 has 21!')
  }
  if (game.player2.score == 21) {
    alert('Player 2 has 21!')
  }
  if (game.dealer.score == 21) {
    checkForWinner()
  }
}

// Function checks for winner at the END of the game
function checkForWinner() {
  console.log('checking for the game winner');
  if (((game.player1.score > game.dealer.score) && game.player1.score <= 21) || (game.player1.score <= 21 && game.dealer.score > 21)) {
    alert('Player 1 Beats The Dealer!')
  } else if (((game.dealer.score > game.player1.score) && game.dealer.score <= 21) || (game.dealer.score <= 21 && game.player1.score > 21)) {
    alert('Dealer Beats Player 1!')
  } else if (game.player1.score == game.dealer.score) {
    alert('Dealer and Player 1 Tie!')
  }
  if (((game.player2.score > game.dealer.score) && game.player2.score <= 21) || (game.player2.score <= 21 && game.dealer.score > 21)) {
    alert('Player 2 Beats The Dealer!')
  } else if (((game.dealer.score > game.player2.score) && game.dealer.score <= 21) || (game.dealer.score <= 21 && game.player2.score > 21)) {
    alert('Dealer Beats Player 2!')
  } else if (game.player2.score == game.dealer.score) {
    alert('Dealer and Player 2 Tie!')
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
function resetScore() {
  game.dealer.score = 0
  game.player1.score = 0
  game.player2.score = 0
  game.dealer.aces = 0
  game.player1.aces = 0
  game.player2.aces = 0
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
