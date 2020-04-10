let choice = ['rock', 'paper', 'scissors']
len = choice.length

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => { 
    button.addEventListener('click', function(e) {playgif(e.target.id)} )
})

function playgif(path) {

    let compselect = computerPlay()
    const div = document.querySelector(".gif")

    div.innerHTML = ""  //to clear everytime

    const playerimg = document.createElement("img")
    const compimg = document.createElement("img")

    playerimg.src = `./images/${path}.gif`
    playerimg.style.transform = "scaleX(-1)"
    compimg.src = `./images/${compselect}.gif`
    
    div.appendChild(playerimg)
    div.appendChild(compimg)
}

function delayresult(){

}

function getRandomInt() {
    return Math.floor(Math.random() * len);
}
function computerPlay() {
    return choice[getRandomInt()];
}
let cscore = 0
let pscore = 0

function playRound(playerSelection, computerSelection) {
    let compare = choice[(choice.indexOf(playerSelection) + 1) % len]
    if (computerSelection === playerSelection) {
        console.log("It's a draw!.")
    }
    else if (computerSelection === compare) {
        console.log(`You loose.Computer choose ${playerSelection} which beats ${computerSelection} choosen by player.Better luck next time.`)
        cscore += 1
    }
    else {
        console.log(`You win.Player choose ${playerSelection} which beats ${computerSelection} choosen by computer.Hurray!!`)
        pscore += 1
    }
    return [pscore,cscore]

}

function game(rounds) {
    for (i = 0; i < rounds; i++) {
        //let playerSelection = prompt("What's your choice? Valid choices are rock, paper and scissors").toLowerCase()
        if (choice.includes(playerSelection)) {
            computerSelection = computerPlay()
            playRound(playerSelection, computerSelection)
        }
        else {
            i -= 1
            console.log("Hey it's a Rock Paper Scissors game. Please input a valid choice.")
        }
    }
    if (pscore > cscore) {
        console.log(`You are the winner.You won ${pscore} whereas computer won ${cscore} out of 5 games`)
    }
    else if (cscore > pscore) {
        console.log(`You lost.You won only ${pscore} whereas computer won ${cscore} out of 5 games`)
    }
    else {
        console.log("This game is a draw.")
    }
}

game(5)
