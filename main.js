let humanScore = 0, computerScore = 0;

let pScore = document.querySelector('.score')
pScore.innerText = `Gon score: ${humanScore} 
Enemy score: ${computerScore} `  

function score() {
    pScore.innerText = `Gon score: ${humanScore} 
Enemy score: ${computerScore} `
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

function playRound(choice) {
    let p = document.querySelector('.result')

    let computerChoice = getComputerChoice()
    let humanChoice = choice 

    console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}`)
    if(computerChoice == 'rock') {
        if(humanChoice =='paper') {
            humanScore++
            p.innerText = 'You win! paper beats rock!'
            
            score()
        } else if ( humanChoice == 'scissors') {
            computerScore++
            p.innerText ='You lose! rock beats scissors'
            score()
        } else {
            p.innerText ='rock vs rock is a draw!'
        }
    } else if (computerChoice == 'paper') {
        if(humanChoice =='scissors') {
            humanScore++
            p.innerText ='You win! scissors beat paper!'
            score()
        } else if ( humanChoice == 'rock') {
            computerScore++
            p.innerText ='You lose! paper beats rock'
            score()
        } else {
            p.innerText ='paper vs paper is a draw!'
        }
    } else {
        if(humanChoice =='rock') {
            humanScore++
            p.innerText ='You win! rock beats scissors!'
            score()
        } else if ( humanChoice == 'paper') {
            computerScore++
            p.innerText ='You lose! scissors beat paper'
            score()
        } else {
            p.innerText ='scissors vs scissors is a draw!'
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



//UI Interface implementation

let imgs = [...document.querySelectorAll('img')]
imgs.forEach(img => img.addEventListener('click', (e) => {
    
    playRound(e.target.id)
}))


let resetBtn = document.querySelector('.reset')
resetBtn.addEventListener('click', () => {
    console.log('hello')
    humanScore = 0;
    computerScore = 0
    score()
})