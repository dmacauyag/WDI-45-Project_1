# **BLACKJACK**
A web based version of one of the world's most popular casino games. Also known as "twenty-one", two players take turns playing against the dealer trying to score 21 without going over.

CLICK HERE to play Blackjack!

## How to play:
At the beginning of the game, the dealer and each player are each dealt two cards. The dealer keeps one card face up and keeps the other card face down. 

The object of the game is for each player to beat the dealer in one of three ways:

* Obtain a score of 21 without the dealer scoring 21
* Obtain a higher score than the dealer without going over 21
* Force the dealer to draw cards until they get a score over 21

The point value for each card is as follows:

* Face cards are worth 10 points
* Numeric cards are worth the same amount of points as shown on the card
* Aces can be counted as either 1 or 11

During each player's turn, the player is given two options, hit or stand. If the player chooses to hit, they receive an additional card from the top of the deck. If they choose to stand, then the turn passes to the next player. 

During the dealer's turn the face down card is revealed. If both player have a score over 21, the dealer will stand and both players lose. Otherwise, if the dealer has a score total less than 17, then the dealer must continue to hit until the dealer's score is over 17. 


## Development and Technologies
Blackjack was built using HTML, CSS, Javascript and the jQuery Library. 

## User Stories

## MVP
* At the beginning of the game, the dealer and each player each receive two cards. 
* Implement logic that checks for the value of the cards in hand while also accounting for an ace having a value of either 1 or 11. 
* Each game starts with player 1 and progresses to player 2 and lastly the dealer. 
* Each player has the option to either hit or stand during their turn. Unless they already have 21, in which case their turn skips. 
* There is text that displays the dealer and each player's score.
* The final results are shown at the end of the game. 

## Features For the Future 
* Implement option for players to double down.
* Implement option for players to split if their first two cards have the same value. 
* Implement option for player to take insurance if the dealer's face up card is an ace. 
* Add graphics and animation for chips that players can click and drag to place bets.

## Credit
The graphics for the face up cards was found on the <a href="https://code.google.com/archive/p/vector-playing-cards/">Google Code Archive</a>

The background image was found <a href="https://mxg.cdnbf.net/mexchangeblackjack/turbo/assets/gameView/tableBackground.png">here</a> via Google search.

The function for shuffling the deck array containing the card objects was done via the Fisher Yates Shuffle.

