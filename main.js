let humanScore = 0, computerScore = 0;

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
        } else if ( humanChoice == 'scissors') {
            computerScore++
            console.log('You lose! rock beats scissors')
        } else {
            console.log('rock vs rock is a draw!')
        }
    } else if (computerChoice == 'paper') {
        if(humanChoice =='scissors') {
            humanScore++
            console.log('You win! scissors beat paper!')
        } else if ( humanChoice == 'rock') {
            computerScore++
            console.log('You lose! paper beats rock')
        } else {
            console.log('paper vs paper is a draw!')
        }
    } else {
        if(humanChoice =='rock') {
            humanScore++
            console.log('You win! rock beats scissors!')
        } else if ( humanChoice == 'paper') {
            computerScore++
            console.log('You lose! scissors beat paper')
        } else {
            console.log('scissors vs scissors is a draw!')
        }
    }
}



