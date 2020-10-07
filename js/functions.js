const playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function() { playGame(1) });

const playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', function() { playGame(2) });

const playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function() { playGame(3) });

const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
};

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
};


const getMoveName = function(argMoveId){
	if(argMoveId == 1){
	return 'kamień';
	} else if (argMoveId == 2) {
		return 'papier'
	} else if (argMoveId == 3) {
		return 'nożyce'
	};
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
};

function playGame(playerInput){
	clearMessages();

	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);
	const argComputerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + argComputerMove);
	
	const argPlayerMove = getMoveName(playerInput);

	console.log('Gracz wpisał: ' + argPlayerMove);

	printMessage('Twój ruch to: ' + argPlayerMove);

	if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz!');
	} else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce' ) {
		printMessage('przegrałeś :(')
	} else if ( argComputerMove == argPlayerMove) {
		printMessage('Remis') };
};
