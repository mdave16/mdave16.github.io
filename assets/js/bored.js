const link = [
	//Add more to these in the same format
	"https://adarkroom.doublespeakgames.com/",
	"https://cardgames.io/",
	"https://davidsd.org/theorem/",
	"https://hackertyper.com/",
	"https://isthisprime.com/game/",
	"https://play.typeracer.com/",
	"https://slither.io/",
	"https://stars.chromeexperiments.com/",
	"https://vectorpark.com/head/",
	"https://windosill.com/online/",
	"https://www.2000clicks.com/MathHelp/PuzzleUnsolved.aspx",
	"https://www.boredbutton.com/",
	"https://www.drawastickman.com/",
	"https://www.findtheinvisiblecow.com/",
	"https://www.googlefeud.com/",
	"https://www.incredibox.com/",
	"https://www.kongregate.com/",
	"https://www.openproblemgarden.org/",
	"https://www.pythonchallenge.com/",
	"https://www.theuselessweb.com/",
	"https://www.theproofistrivial.com/",
	"https://smartypins.withgoogle.com/",
]

const text = [
	//These are texts that go in the button
	"Let's go Gandalf!",
	"Go boldly where no man has gone before!",
	"To infinity and beyond...",
	"One small step for man, one giant leap for mankind...",
	"I'm going on an adventure!",
]

function randomElement(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function randomNot(array, value) {
	return randomElement(array.filter(x => x !== value))
}

function bored() {
	document
		.getElementById("tree")
		.setAttribute(
			"href",
			randomNot(link, document.getElementById("tree").getAttribute("href"))
		)
	document.getElementById("but").innerHTML = randomNot(
		text,
		document.getElementById("but").innerHTML.trim()
	)
}
