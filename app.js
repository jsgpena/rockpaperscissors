let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userBox_div = document.getElementById("userbox");
const compBox_div = document.getElementById("compbox");

function getComputerChoice(){
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	const word1 = convertToWord(userChoice).toLowerCase();
	const word2 = convertToWord(computerChoice).toLowerCase();
	compBox_div.src = word2 + ".png"
	userBox_div.src = word1 + ".png"
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
	document.getElementById(user).classList.add('greenglow');
	setTimeout(function(){document.getElementById(user).classList.remove('greenglow')}, 300)
}

function lose(user, comp){
	computerScore++;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = convertToWord(user) + " loses to " + convertToWord(comp) + ", you lose."
	document.getElementById(user).classList.add('redglow');
	setTimeout(function(){document.getElementById(user).classList.remove('redglow')}, 300)	
}

function draw(user, comp){
	result_div.innerHTML = convertToWord(user) + " is the same as " + convertToWord(comp) + ", draw."
	document.getElementById(user).classList.add('grayglow');
	setTimeout(function(){document.getElementById(user).classList.remove('grayglow')}, 300)
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