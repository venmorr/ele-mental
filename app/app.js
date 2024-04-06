console.log('insanity check')

/*------------------------Constants---------------------------*/

const choices = ['fire', 'ice', 'wind', 'rock', 'shock']
console.log(choices)

/*------------------------Variables---------------------------*/

let p1Choice, p2Choice, msg
console.log('Player 1: ', p1Choice, 'Player 2: ', p2Choice, msg)


/*------------------------CacEleRef---------------------------*/

const resultDisplayEl = document.getElementById('result-display') 
console.log(resultDisplayEl)

/*------------------------Listeners---------------------------*/

document.getElementById('fire').addEventListener('click', play)
document.getElementById('ice').addEventListener('click', play)
document.getElementById('wind').addEventListener('click', play)
document.getElementById('rock').addEventListener('click', play)
document.getElementById('shock').addEventListener('click', play)

/*------------------------Functions---------------------------*/

function getP1Choice(event) {
  playerChoice = event.target.id
  console.log('getp1Choice', event)
}

function getP2Choice(event) {
  playerChoice = event.target.id
  console.log('getp2Choice', event)
}

function play(event) {
  console.log(event.target.id)
  getP1Choice(event)
  getP2Choice(event)
  compare()
  render()
}