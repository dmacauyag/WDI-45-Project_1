class GameHelpers {
  // Function that shuffles the cards in the deck using the Fisher Yates Shuffle
  static shuffle (array) {
    const arrayCopy = [...array]
    let m = arrayCopy.length, t, i
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--)
      // And swap it with the current element.
      t = arrayCopy[m]
      arrayCopy[m] = arrayCopy[i]
      arrayCopy[i] = t
    }
    return arrayCopy
  }

  static displayNotification (string) {
    document.getElementById("game-notifications").innerHTML = string
  }

  static isBetValid (betValue, playerCash) {
    let result = false
    if (betValue > playerCash) {
      alert('Player does not have enough cash to place that bet!')
    } else if (betValue < 10) {
      alert('Player, please enter a minimum bet of $10!')
    } else if (isNaN(betValue)) {
      alert('Player, please enter a valid bet!')
    } else {
      result = true
    }

    return result
  }

  static processBet (playerBet, playerObject, audio) {
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

  static createCardElement (imageSource, className) {
    const cardElement = document.createElement('img')
    cardElement.classList.add(className)
    cardElement.setAttribute('src', imageSource)
    return cardElement
  }

  static getPlayerScore (playerHand) {
    return playerHand.reduce((acc, cardObject) => {
      return acc + cardObject.value
    }, 0)
  }
}
