link = [
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
];

text = [
	//These are texts that go in the button
	"Let's go Gandalf!",
	"Go boldly where no man has gone before!",
	"To infinity and beyond...",
	"One small step for man, one giant leap for mankind...",
	"I'm going on an adventure!",
];

ln = -1;
tn = 0;

function bored() {
	/*want text and link to change*/

	let ln2 = Math.floor(Math.random() * link.length);
	while (ln === ln2) {
		ln2 = Math.floor(Math.random() * link.length);
	}

	let tn2 = Math.floor(Math.random() * text.length);
	while (tn === tn2) {
		tn2 = Math.floor(Math.random() * text.length);
	}

	let ln = ln2;
	let tn = tn2;

	let lnk = link[ln];
	let txt = text[tn];

	console.log(txt + " **-** " + lnk);
	document.getElementById("tree").setAttribute("href", lnk);
	document.getElementById("but").innerHTML = txt;
}