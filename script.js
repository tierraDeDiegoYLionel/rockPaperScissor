let totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice() {
  let rpsChoice = ['Sten', 'Påse', 'Sax']
  let computerChoice = rpsChoice[Math.floor(Math.random() * 3)]
  return computerChoice
  
}

function getResult(playerChoice, computerChoice) {
 
let score;
  
  if (playerChoice === computerChoice) {
    score = 0
    
  } else if (playerChoice === 'Sten' && computerChoice === 'Sax') {
    score = 1
  }
    else if (playerChoice === 'Påse' && computerChoice === 'Sten') {
      score = 1 
  }
    else if (playerChoice === 'Sax' && computerChoice === 'Påse') {
      score = 1 
      
  } else {
      score = -1
  }

  return score

}

  
function showResult(score, playerChoice, computerChoice) {
   let result = document.getElementById('result')
  let hands = document.getElementById('hands')
let playerScoreD = document.getElementById('player-score')
  switch (score) {
    case -1:
      result.innerText = `TOSSKA Killa Blaackos!`
      break;
    case 0:
      result.innerText = `Lika Killla Boy!`
      break;
    case 1:
      result.innerText = `Mhmm, Glaaadbaaackkk!`
      break;
  }
  hands.innerText = `👨🏾 ${playerChoice} vs 💻 ${computerChoice}`
   playerScoreD.innerText = `Total resultat: ${totalScore['playerScore']}`
  
}

function onClickRPS(playerChoice) {
  console.log({playerChoice})
let computerChoice = getComputerChoice()
  console.log({computerChoice})
let score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  console.log({score})
  console.log(totalScore)
  showResult(score, playerChoice, computerChoice)
  


}


function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })
  
  
  let endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0


let result = document.getElementById('result')
let hands = document.getElementById('hands')
let playerScoreD = document.getElementById('player-score')

  result.innerText = ``
  hands.innerText = ``
  playerScoreD.innerText = ``
  
}

playGame()