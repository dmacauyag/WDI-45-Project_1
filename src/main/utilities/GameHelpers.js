class GameHelpers {
  // Function that shuffles the cards in the deck using the Fisher Yates Shuffle
  static shuffle (array) {
    var m = array.length, t, i
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--)
      // And swap it with the current element.
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }
    return array
  }

  static displayNotification (string) {
    document.getElementById("game-notifications").innerHTML = string
  }

  static isBetValid (betValue, playerCash) {
    let result = true
    if (betValue > playerCash) {
      alert('Player does not have enough cash to place that bet!')
      result = false
    } else if (betValue < 10) {
      alert('Player, please enter a minimum bet of $10!')
      result = false
    } else if (isNaN(betValue)) {
      alert('Player, please enter a valid bet!')
      result = false
    }

    return result
  }

  static processBet (playerBet, playerObject, audio) {
    const playerCash = playerObject.cash
    let playerBetDisplay
    let playerCashDisplay

    audio.play()
    playerObject.bet = playerBet
    playerObject.cash = playerObject.cash - playerBet

    switch (playerObject.name) {
      case 'Player 1':
        playerBetDisplay = document.querySelector('.bet-value-player1')
        playerCashDisplay = document.querySelector('.cash-player1')
        document.querySelector('.player1-container button.place-bet').classList.remove('place-bet-on')
        break;
      case 'Player 2':
        playerBetDisplay = document.querySelector('.bet-value-player2')
        playerCashDisplay = document.querySelector('.cash-player2')
        document.querySelector('.player2-container button.place-bet').classList.remove('place-bet-on')
        break;
      default:
        break;
    }
    playerBetDisplay.innerHTML = `${playerObject.name} Bet: $${playerBet}`
    playerCashDisplay.innerHTML = `${playerObject.name} Cash: $${playerObject.cash}`
  }
}
