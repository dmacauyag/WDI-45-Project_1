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
}
