let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function convertToWord(word){
	if(word === 'r')return "Rock"
	if(word === 'p')return "Paper"
	if(word === 's')return "Scissors"
}

function win(user, comp){
	userScore++;
	userScore_span.innerHTML = userScore;
	result_div.innerHTML = convertToWord(user) + " beats " + convertToWord(comp) + ", you win!"
}

function lose(user, comp){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = convertToWord(user) + " loses to " + convertToWord(comp) + ", you lose."
}

function draw(user, comp){
	result_div.innerHTML = convertToWord(user) + " is the same as " + convertToWord(comp) + ", draw."
}

function main(){
	rock_div.addEventListener('click', function(){
		game("r");
	})
		paper_div.addEventListener('click', function(){
		game("p");
	})
		scissors_div.addEventListener('click', function(){
		game("s");
	})
}

main();