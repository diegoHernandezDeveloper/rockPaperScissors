let humanScore = 0, computerScore = 0;
function score() {
    console.log(`computer ${computerScore}, human: ${humanScore}`)
}

let getComputerChoice = () => {
    let choice = Math.floor((Math.random() * 3) + 1)
    if(choice === 1 ) {
        return 'rock'
    } else if (choice === 2 ) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

let getHumanChoice = () => {
    return prompt('Choose rock, paper or scissors!').toLowerCase()
}

function playRound() {
    let computerChoice = getComputerChoice()
    let humanChoice =getHumanChoice()

    console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}`)
    if(computerChoice == 'rock') {
        if(humanChoice =='paper') {
            humanScore++
            console.log('You win! paper beats rock!')
            score()
        } else if ( humanChoice == 'scissors') {
            computerScore++
            console.log('You lose! rock beats scissors')
            score()
        } else {
            console.log('rock vs rock is a draw!')
        }
    } else if (computerChoice == 'paper') {
        if(humanChoice =='scissors') {
            humanScore++
            console.log('You win! scissors beat paper!')
            score()
        } else if ( humanChoice == 'rock') {
            computerScore++
            console.log('You lose! paper beats rock')
            score()
        } else {
            console.log('paper vs paper is a draw!')
        }
    } else {
        if(humanChoice =='rock') {
            humanScore++
            console.log('You win! rock beats scissors!')
            score()
        } else if ( humanChoice == 'paper') {
            computerScore++
            console.log('You lose! scissors beat paper')
            score()
        } else {
            console.log('scissors vs scissors is a draw!')
        }
    }
}

function playGame() {
    computerScore = 0
    humanScore = 0
    while(computerScore < 3 && humanScore < 3 ) {
        playRound()

    }
    return computerScore == 3 ? 'you lose the game' : 'you win the game!'
}

