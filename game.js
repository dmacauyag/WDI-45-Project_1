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


// Event listener to start a new game
$newGame.on('click', function() {
  console.log('new game clicked');
  dealCards()
})

// Need event listener for "deal" button
// When clicked, call functoin that shuffles the deck and distribute two cards to the
// dealer and each player.
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
  })
}

// Need event listener for "hit" button
// When clicked, pop values from the deck and store in the player's hand array
// Implement logic to calculate the player's hand

// Need event listener for "stand" button
// When clicked, call the function that switches between player's turn

// Need function that switches between turns
// Default first turn goes to player 1
// Implement logic to go to the dealer's turn


// Need a "play turn" function

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
