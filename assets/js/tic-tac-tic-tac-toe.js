let player = "X";
let lastCellPlayed = null;

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

const winner = grid => {
	const combo = winningCombos.filter(
		combo =>
			grid[combo[0]] === grid[combo[1]] &&
			grid[combo[0]] === grid[combo[2]] &&
			grid[combo[0]]
	);
	return combo.length > 0;
};

const play = cell => {
	if (cell.innerText !== "" || !cell.classList.contains("cell")) {
		return null;
	}

	if (cell.parentElement.dataset.direction !== lastCellPlayed) {
		// not correct box
		if (
			lastCellPlayed &&
			Array.from(
				document.getElementsByClassName("box " + lastCellPlayed)[0].children
			)
				.map(c => c.innerText)
				.indexOf("") > -1
		) {
			//correct box is not full
			return null;
		}
	}
	// play
	cell.innerText = player;
	lastCellPlayed = cell.dataset.direction;

	const box = Array.from(cell.parentElement.children).map(
		cell => cell.innerText
	);
	if (winner(box) && !cell.parentElement.dataset.boxWinner) {
		cell.parentElement.dataset.boxWinner = player;
	}
	const grid = Array.from(document.getElementsByClassName("box")).map(
		box => box.dataset.boxWinner
	);
	if (winner(grid)) {
		alert(`Congratulations! The winner is: ${player}.`);
		Array.from(document.getElementsByClassName("cell")).map(
			cell => (cell.innerText = "")
		);
	}

	player = player === "X" ? "O" : "X";
};

const createGrid = () => {
	const createDiv = (size, direction) => {
		const div = document.createElement("div");
		div.classList.add(size);
		div.dataset.direction = direction;
		return div;
	};
	const directions = [
		"top-left",
		"top-middle",
		"top-right",
		"middle-left",
		"middle-middle",
		"middle-right",
		"bottom-left",
		"bottom-middle",
		"bottom-right",
	];
	const grid = document.createElement("div");
	grid.classList.add("grid");
	directions
		.map(x => createDiv("box", x))
		.map(box => {
			directions
				.map(y => createDiv("cell", y))
				.forEach(cell => box.appendChild(cell));
			return box;
		})
		.forEach(box => grid.appendChild(box));

	document.body.appendChild(grid);
};

createGrid();
document
	.getElementsByClassName("grid")[0]
	.addEventListener("click", e => play(e.target));