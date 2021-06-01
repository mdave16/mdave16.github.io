let score = { X: 0, O: 0 };
const players = Object.keys(score);
let player = players[0];
const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];
const gameOverlay = document.getElementById("game-overlay");
const cells = Array.from(document.getElementsByClassName("cell"));
const info = document.getElementById("info");
const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");

const winner = () => {
	const grid = cells.map(cell => cell.dataset.played)
	return winningCombos.some(
		combo =>
			grid[combo[0]] === grid[combo[1]] &&
			grid[combo[0]] === grid[combo[2]] &&
			grid[combo[0]] !== ""
	);
};
const over = () => cells.every(c => c.dataset.played !== "");
const reset = () => {
	cells.map(cell => (cell.dataset.played = ""));
	grid.dataset.turn = player;
	gameOverlay.classList.toggle("hidden");
};
const play = cell => {
	if (!gameOverlay.classList.contains("hidden")) {
		return null;
	}
	if (cell.dataset.played === "") {
		cell.dataset.played = player;
		if (winner()) {
			gameOverlay.classList.toggle("hidden");
			info.innerText = `Congratulations! The winner is: ${player}.`;
			score[player]++;
			scoreDisplay.innerText = `Current score: ${players[0]}: ${score[players[0]]} – ${players[1]}: ${score[players[1]]}`;
		} else if (over()) {
			gameOverlay.classList.toggle("hidden");
			info.innerText = `Game over. Try again.`;
		} else {
			player = player === players[0] ? players[1] : players[0];
			grid.dataset.turn = player;
		}
	}
};

reset();
