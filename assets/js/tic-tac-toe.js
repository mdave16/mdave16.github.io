let player = "X";
let score = { X: 0, O: 0 };
const winningCombos = [
	// horizontal
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	// vertical
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	//diagonal
	[0, 4, 8],
	[2, 4, 6],
];
const gameOverlay = document.getElementById("game-overlay");
const cells = Array.from(document.getElementsByClassName("cell"));
const info = document.getElementById("info");
const scoreDisplay = document.getElementById("score");

const winner = () => {
	const grid = cells.map(cell => cell.dataset.played);
	const combo = winningCombos.filter(
		combo =>
			grid[combo[0]] === grid[combo[1]] &&
			grid[combo[0]] === grid[combo[2]] &&
			grid[combo[0]] !== ""
	);
	return combo.length > 0;
};
const over = () => cells.map(c => c.dataset.played).every(c => c !== "");
const reset = () => {
	cells.map(cell => (cell.dataset.played = ""));
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
			scoreDisplay.innerText = `Current score: X: ${score["X"]} – O: ${score["O"]}`;
		} else if (over()) {
			gameOverlay.classList.toggle("hidden");
			info.innerText = `Game over. Try again.`;
		} else {
			player = player === "X" ? "O" : "X";
		}
	}
};
