let marker = -1;
let guessNumber = 0;
const guess = [null,null,null,null];
const solution = [null,null,null,null];
for (var i = 0; i < 4; i++) {
	solution[i] = Math.floor(Math.random() * 6);
}
console.log(solution);

function reset() {
	location.reload();
	marker = -1;
	guessNumber = 0;
	for (var i = 0; i < 4; i++) {
		guess[i] = null;
		solution[i] = Math.floor(Math.random() * 6);
	}
	console.log(solution);
}

function gameOver(winCon) {
	let colorGrid = document.getElementById("colorGrid").children;
	let colorButtons = document.getElementById("colorButtons").children;
	colorGrid[1].innerHTML = "YOU"
	if (winCon) {
		colorGrid[2].innerHTML = "WIN"
	}
	else {
		colorGrid[2].innerHTML = "LOSE"
	}
	for (let i = 0; i < 4; i++) {
		colorGrid[i].disabled = true;
	}
	for (let i = 0; i < 8; i++) {
		colorButtons[i].disabled = true;
	}
	colorButtons[marker].style.borderWidth = "0px";
	marker = -1;
}

function chooseColor(colorNumber) {
	let colorButtons = document.getElementById("colorButtons").children;
	if (marker !== colorNumber) {
		if (marker > -1) {
			colorButtons[marker].style.borderWidth = "0px";
		}
		switch(colorNumber) {
			case 0:
				marker = 0;
				colorButtons[0].style.borderWidth = "4px";
				break;
			case 1:
				marker = 1;
				colorButtons[1].style.borderWidth = "4px";
				break;
			case 2:
				marker = 2;
				colorButtons[2].style.borderWidth = "4px";
				break;
			case 3:
				marker = 3;
				colorButtons[3].style.borderWidth = "4px";
				break;
			case 4:
				marker = 4;
				colorButtons[4].style.borderWidth = "4px";
				break;
			case 5:
				marker = 5;
				colorButtons[5].style.borderWidth = "4px";
				break;
			case 6:
				marker = 6;
				colorButtons[6].style.borderWidth = "4px";
				break;
			default:
				console.log(colorNumber);
		}
	}
}

function placeColor(gridNumber) {
	if (marker > -1) {
		let colorGrid = document.getElementById("colorGrid").children;
		switch(marker) {
			case 0:
				colorGrid[gridNumber].style.backgroundColor = "#FF6D01";
				guess[gridNumber] = 0;
				break;
			case 1:
				colorGrid[gridNumber].style.backgroundColor = "#FFFB00";
				guess[gridNumber] = 1;
				break;
			case 2:
				colorGrid[gridNumber].style.backgroundColor = "#00E0FF";
				guess[gridNumber] = 2;
				break;
			case 3:
				colorGrid[gridNumber].style.backgroundColor = "#00A005";
				guess[gridNumber] = 3;
				break;
			case 4:
				colorGrid[gridNumber].style.backgroundColor = "#E80EDB";
				guess[gridNumber] = 4;
				break;
			case 5:
				colorGrid[gridNumber].style.backgroundColor = "#68168E";
				guess[gridNumber] = 5;
				break;
			case 6:
				colorGrid[gridNumber].style.backgroundColor = "white";
				guess[gridNumber] = null;
				break;
			default:
				console.log(gridNumber);
		}
	}
}

function submitGuess() {
	let reds = 0;
	let whites = 0;
	let solutionDupe = [];
	const wrongPlace = []
	for (var i = 0; i < 4; i++) {
		solutionDupe.push(solution[i]);
		if (guess[i] === null) {
			return
		}
		else if (guess[i] === solutionDupe[i]) {
			solutionDupe[i] = null;
			reds++;
		}
		else {
			wrongPlace.push(guess[i])
		}
	}
	for (var j = 0; j < wrongPlace.length; j++) {
		for (var k = 0; k < 4; k++) {
			if (wrongPlace[j] === solutionDupe[k]) {
				solutionDupe[k] = null;
				whites++;
				break;
			}
		}
	}
	let hintGrid = document.getElementById("hintGrid").children[guessNumber].children;
	let colorGrid = document.getElementById("colorGrid").children;
	let hintGridColor = hintGrid[0].children;
	for (var l = 0; l < 4; l++) {
		switch(guess[l]) {
			case 0:
				hintGridColor[l].style.backgroundColor = "#FF6D01";
				break;
			case 1:
				hintGridColor[l].style.backgroundColor = "#FFFB00";
				break;
			case 2:
				hintGridColor[l].style.backgroundColor = "#00E0FF";
				break;
			case 3:
				hintGridColor[l].style.backgroundColor = "#00A005";
				break;
			case 4:
				hintGridColor[l].style.backgroundColor = "#E80EDB";
				break;
			case 5:
				hintGridColor[l].style.backgroundColor = "#68168E";
				break;
		}
		guess[l] = null;
		colorGrid[l].style.backgroundColor = "white";
	}
	hintGrid[1].innerHTML = whites;
	hintGrid[2].innerHTML = reds;
	if (reds === 4) {
		gameOver(true);
	}
	else if (guessNumber >= 7) {
		gameOver(false);
	}
	else {
		guessNumber++;
	}
}

