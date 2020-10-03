function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(argMoveId){
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

function displayResult(argComputerMove, argPlayerMove){
	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
	  printMessage('Ty wygrywasz!');
	} else {
	  printMessage('Tym razem przegrywasz :(');
	}
}

// if(randomNumber == 1){
//   computerMove = 'kamień';
// } else if (randomNumber == '2') {
// 	computerMove = 'papier'
// } else if (randomNumber == '3') {
// 	computerMove = 'nożyce'
// }

printMessage('Mój ruch to: ' + argComputerMove);

let argPlayerMove = getMoveName(prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'));


console.log('Gracz wpisał: ' + argPlayerMove);

let playerMove = 'nieznany ruch';

// if(playerInput == '1'){
//   playerMove = 'kamień';
// } else if (playerInput == '2') {
// 	playerMove = 'papier'
// } else if (playerInput == '3') {
// 	playerMove = 'nożyce'
// } else {
// 	playerMove = 'wrongInput'
// }

printMessage('Twój ruch to: ' + argPlayerMove);

if( argComputerMove == 'kamień' && argPlayerMove == 'papier' || argComputerMove == 'papier' && argPlayerMove == 'nożyce' || argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
	printMessage('Ty wygrywasz!');
  } else if ( argComputerMove == 'papier' && argPlayerMove == 'kamień' || argComputerMove == 'nożyce' && argPlayerMove == 'papier' || argComputerMove == 'kamień' && argPlayerMove == 'nożyce' ) {
	printMessage('przegrałeś :(')
  } else if ( argComputerMove == argPlayerMove) {
	  printMessage('Remis') };
//   } else if (playerMove == 'wrongInput') {
// 	  alert('niepoprawy input')
//   }
