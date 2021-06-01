const link = [
	//Add more to these in the same format
	"http://adarkroom.doublespeakgames.com/",
	"https://cardgames.io/",
	"http://davidsd.org/theorem/",
	"http://hackertyper.com/",
	"http://isthisprime.com/game/",
	"http://play.typeracer.com/",
	"http://slither.io/",
	"http://stars.chromeexperiments.com/",
	"http://vectorpark.com/head/",
	"http://windosill.com/online/",
	"http://www.2000clicks.com/MathHelp/PuzzleUnsolved.aspx",
	"http://www.boredbutton.com/",
	"http://www.drawastickman.com/",
	"http://www.findtheinvisiblecow.com/",
	"http://www.googlefeud.com/",
	"http://www.incredibox.com/",
	"http://www.kongregate.com/",
	"http://www.openproblemgarden.org/",
	"http://www.pythonchallenge.com/",
	"http://www.theuselessweb.com/",
	"http://www.theproofistrivial.com/",
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
