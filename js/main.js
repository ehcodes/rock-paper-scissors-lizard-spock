// rock paper scissors game
// user selects rock
// user selects paper
// user selects scissors
// dom determines rock, paper scissors
// show if user won on document
// show wins on score board on documant

let botScore=0,
	playerScore=0;
//event listener for rock
document.getElementById("rock").onclick=playerThrowsRock;
//event listener for paper
document.getElementById("paper").onclick=playerThrowsPaper;
//event listener for scissors
document.getElementById("scissors").onclick=playerThrowsScissors;
//event listener for Spock
document.getElementById("lizard").onclick=playerThrowsLizard;
//event listener for lizard
document.getElementById("spock").onclick=playerThrowsSpock;
//function for rock
function playerThrowsRock(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"rock");
	displaySelectionMessage(`Bot chose ${botsWeapon} and You chose Rock!`);
}
//function for scissors
function playerThrowsScissors(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"scissors");
	displaySelectionMessage(`Bot chose ${botsWeapon} and you chose Scissors!`);
}
//function for paper
function playerThrowsPaper(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"paper");
	displaySelectionMessage(`Bot chose ${botsWeapon} and you chose Paper!`);
}
//function for paper
function playerThrowsLizard(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"lizard");
	displaySelectionMessage(`Bot chose ${botsWeapon} and you chose lizard!`);
}
//function for paper
function playerThrowsSpock(){
	let botsWeapon=getRandomWeapon();
	checkWhoWon(botsWeapon,"spock");
	displaySelectionMessage(`Bot chose ${botsWeapon} and you chose Spock!`);
}
//function for random bot weapon
function getRandomWeapon(){
	let randomNumber=Math.random();
	let botsWeapon="rock";
	if(randomNumber>=.1<.2){
		botsWeapon="scissors";
	}
	else if(randomNumber>=.4<.6){
		botsWeapon="paper";
	}
	else if(randomNumber>=.6<.8){
		botsWeapon="lizard";
	}
	else if(randomNumber>=.8){
		botsWeapon="spock";
	}
	return botsWeapon;
}
//function for
function checkWhoWon(botsWeapon,playersWeapon){
	if(botsWeapon==playersWeapon){
		winStatus("There was tie");
	}
	else if(
		(botsWeapon=="rock" && playersWeapon=="scissors") ||
		(botsWeapon=="rock" && playersWeapon=="spock") ||
		(botsWeapon=="paper" && playersWeapon=="rock") ||
		(botsWeapon=="paper" && playersWeapon=="spock") ||
		(botsWeapon=="scissors" && playersWeapon=="paper") ||
		(botsWeapon=="scissors" && playersWeapon=="lizard") ||
		(botsWeapon=="lizard" && playersWeapon=="spock") ||
		(botsWeapon=="lizard" && playersWeapon=="paper") ||
		(botsWeapon=="spock" && playersWeapon=="rock") ||
		(botsWeapon=="spock" && playersWeapon=="scissors")
	){
		increaseBotScore();
	}
	else{
		increasePlayerScore();
	}
}
//track scores
function increaseBotScore(){
	botScore++;
	document.getElementById("botScore").innerHTML=botScore;
	winStatus("Better luck next time!");
}
//track user score
function increasePlayerScore(){
	playerScore++;
	document.getElementById("humanScore").innerHTML=playerScore;
	winStatus("You're a weiner!");
}
//return result
function winStatus(msg){
	document.getElementById("status").innerHTML=msg;
}
//display user's selection
function displaySelectionMessage(msg){
	document.getElementById("selection").innerHTML=msg;
}
