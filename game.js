// Declare global variables
var game = {
  player1: {hand: [], cash: 100},
  player2: {hand: [], cash: 100},
  dealer: {hand: []},
  deck: [
    {suit: 'Hearts', name: 'Ace', value: 1, altValue: 11, img: ''},
    {suit: 'Hearts', name: '2', value: 2, img: ''},
    {suit: 'Hearts', name: '3', value: 3, img: ''},
    {suit: 'Hearts', name: '4', value: 4, img: ''},
    {suit: 'Hearts', name: '5', value: 5, img: ''},
    {suit: 'Hearts', name: '6', value: 6, img: ''},
    {suit: 'Hearts', name: '7', value: 7, img: ''},
    {suit: 'Hearts', name: '8', value: 8, img: ''},
    {suit: 'Hearts', name: '9', value: 9, img: ''},
    {suit: 'Hearts', name: '10', value: 10, img: ''},
    {suit: 'Hearts', name: 'Jack', value: 10, img: ''},
    {suit: 'Hearts', name: 'Queen', value: 10, img: ''},
    {suit: 'Hearts', name: 'King', value: 10, img: ''},
    {suit: 'Diamonds', name: 'Ace', value: 1, altValue: 11, img: ''},
    {suit: 'Diamonds', name: '2', value: 2, img: ''},
    {suit: 'Diamonds', name: '3', value: 3, img: ''},
    {suit: 'Diamonds', name: '4', value: 4, img: ''},
    {suit: 'Diamonds', name: '5', value: 5, img: ''},
    {suit: 'Diamonds', name: '6', value: 6, img: ''},
    {suit: 'Diamonds', name: '7', value: 7, img: ''},
    {suit: 'Diamonds', name: '8', value: 8, img: ''},
    {suit: 'Diamonds', name: '9', value: 9, img: ''},
    {suit: 'Diamonds', name: '10', value: 10, img: ''},
    {suit: 'Diamonds', name: 'Jack', value: 10, img: ''},
    {suit: 'Diamonds', name: 'Queen', value: 10, img: ''},
    {suit: 'Diamonds', name: 'King', value: 10, img: ''},
    {suit: 'Spades', name: 'Ace', value: 1, altValue: 11, img: ''},
    {suit: 'Spades', name: '2', value: 2, img: ''},
    {suit: 'Spades', name: '3', value: 3, img: ''},
    {suit: 'Spades', name: '4', value: 4, img: ''},
    {suit: 'Spades', name: '5', value: 5, img: ''},
    {suit: 'Spades', name: '6', value: 6, img: ''},
    {suit: 'Spades', name: '7', value: 7, img: ''},
    {suit: 'Spades', name: '8', value: 8, img: ''},
    {suit: 'Spades', name: '9', value: 9, img: ''},
    {suit: 'Spades', name: '10', value: 10, img: ''},
    {suit: 'Spades', name: 'Jack', value: 10, img: ''},
    {suit: 'Spades', name: 'Queen', value: 10, img: ''},
    {suit: 'Spades', name: 'King', value: 10, img: ''},
    {suit: 'Clubs', name: 'Ace', value: 1, altValue: 11, img: ''},
    {suit: 'Clubs', name: '2', value: 2, img: ''},
    {suit: 'Clubs', name: '3', value: 3, img: ''},
    {suit: 'Clubs', name: '4', value: 4, img: ''},
    {suit: 'Clubs', name: '5', value: 5, img: ''},
    {suit: 'Clubs', name: '6', value: 6, img: ''},
    {suit: 'Clubs', name: '7', value: 7, img: ''},
    {suit: 'Clubs', name: '8', value: 8, img: ''},
    {suit: 'Clubs', name: '9', value: 9, img: ''},
    {suit: 'Clubs', name: '10', value: 10, img: ''},
    {suit: 'Clubs', name: 'Jack', value: 10, img: ''},
    {suit: 'Clubs', name: 'Queen', value: 10, img: ''},
    {suit: 'Clubs', name: 'King', value: 10, img: ''},
  ]
}
var currentPlayer = game.player1
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
  dealCards()
})

// Function that shuffles the deck and deals a new hand to the dealer and both players
function dealCards() {
  $deal.one('click', function() {
    console.log('deal clicked');
    game.deck = shuffle(game.deck)
    console.log('deck shuffled');
    game.dealer.hand = [game.deck.pop(), game.deck.pop()]
    game.player1.hand = [game.deck.pop(), game.deck.pop()]
    game.player2.hand = [game.deck.pop(), game.deck.pop()]
    console.log('cards distributed');
    console.log(game.dealer.hand);
    console.log(game.player1.hand);
    console.log(game.player2.hand);
    hit()
  })
}

// Need event listener for "hit" button
// When clicked, pop values from the deck and store in the player's hand array
// Implement logic to calculate the player's hand
$hit.on('click', function() {
  console.log('turn on hit click event');
  hit()
})

function hit() {
  console.log('hit clicked')
  currentPlayer.hand.push(game.deck.pop())
  console.log("new card added to current player's hand");
  checkCardValue()
}

// Need event listener for "stand" button
// When clicked, call the function that switches between player's turn
$stand.on('click', function() {
  console.log('turn on stand click event');
  stand()
})

function stand() {
  console.log('stand clicked');
  if (currentPlayer == game.player1) {
    $hitP1.off()
    $standP1.off()
    console.log('turn off player 1 buttons');
  } else {
    $hitP2.off()
    $standP2.off()
    console.log('turn off player 2 buttons');
  }
  switchTurns()
}

// Need function that switches between turns
// Default first turn goes to player 1
// Implement logic to go to the dealer's turn
function switchTurns() {
  if (currentPlayer == game.player1) {
    currentPlayer = game.player2
    console.log('switch to player 2');
  } else {
    currentPlayer = game.dealer
    console.log('switch to dealer');
  }
}

// Need a "play turn" function

// Function that checks the cards value
function checkCardValue() {
  console.log('checking card value');
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
