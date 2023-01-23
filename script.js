
//Game logic and functions

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
  }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      roundWinner = 'tie'
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      playerScore++
      roundWinner = 'player'
    }
    if (
      (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
      (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
      (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
      computerScore++
      roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
  }

  function isGameOver() {
    return playerScore === 5 || computerScore === 5
  }
  
 //UI, getElement and addEventListener. Basically playing with the DOM

 const scoreInfo = document.getElementById('scoreInfo');
 const playerScoreCont = document.getElementById('playerScore');
 const computerScoreCont = document.getElementById('computerScore');
 const playerSign = document.getElementById('playerSign');
 const computerSign = document.getElementById('computerSign');
 const rockBtn = document.getElementById('rockBtn');
 const paperBtn = document.getElementById('paperBtn');
 const scissorsBtn = document.getElementById('scissorsBtn');
 const endgameModal = document.getElementById('endgameModal');
 const endgameMsg = document.getElementById('endgameMsg');
 const overlay = document.getElementById('overlay');
 const restartBtn = document.getElementById('restartBtn');









rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)


function handleClick(playerSelection) {
    if (isGameOver()) {
      openEndgameModal()
      return
    }
  
    const computerSelection = getRandomChoice()
    playRound(playerSelection, computerSelection)
    updateChoices(playerSelection, computerSelection)
    updateScore()
  
    if (isGameOver()) {
      openEndgameModal()
      setFinalMessage()
    }
  }


function updateChoices(playerSelection, computerSelection) {
    switch (playerSelection) {
      case 'ROCK':
        playerSign.src="img/rock.svg"
        break
      case 'PAPER':
        playerSign.src="img/paper.svg"
        break
      case 'SCISSORS':
        playerSign.src="img/scissors.svg"
        break
    }
  
    switch (computerSelection) {
      case 'ROCK':
        computerSign.src="img/rock.svg"
        break
      case 'PAPER':
        computerSign.src="img/paper.svg"
        break
      case 'SCISSORS':
        computerSign.src="img/scissors.svg"
        break
    }
  }
  
  function updateScore() {
    playerScoreCont.textContent = `Player: ${playerScore}`
    computerScoreCont.textContent = `Computer: ${computerScore}`
  }


  function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
      scoreInfo.textContent = `You won! ${capitalizeFirstLetter(
          playerSelection
      )} beats ${computerSelection.toLowerCase()}`
      return
    }
    if (winner === 'computer') {
      scoreInfo.textContent = `You lost! ${capitalizeFirstLetter(
        playerSelection
      )} is beaten by ${computerSelection.toLowerCase()}`
      return
    }
  
    scoreInfo.textContent = `It's a draw! ${capitalizeFirstLetter(
      playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  }

  function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeEndgameModal() {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

  function setFinalMessage() {
    return playerScore > computerScore
      ? (endgameMsg.textContent = 'You won!')
      : (endgameMsg.textContent = 'You lost...')
  }

  function restartGame(){
    playerScore = 0;
    computerScore = 0;
    playerScoreCont.textContent = "Player: 0"
    computerScoreCont.textContent = "Computer: 0"
    scoreInfo.textContent = "Choose one"
    playerSign.src="img/questionmark.svg"
    computerSign.src="img/questionmark.svg"
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
  }

  