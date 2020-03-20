const quotes = []
quotes.push(
    {
        q:
            "Hmmm... thinking required [after a bit] Hmmm.... much much thinking required",
        p: "Mark Pollicott",
        t: 2014
    },
    {
        s: "In response to 'What's your website?'",
        q: "I'm not sure, I just google my name when I want to find it.",
        p: "Damiano Testa",
        t: 2014
    },
    {
        q: "I think it's just so they can write ASS in big capital letters.",
        p: "Damiano Testa",
        t: 2014
    },
    { q: "Accounting is easy!", p: "Alex Holmes", t: 2015 },
    { q: "Somehow...", p: "Roman Kotecky", t: 2015 },
    {
        s: "Clock just goes crazy",
        q: "What an amazing clock! They must teach relativity in here.",
        p: "Charudatta Hajaravis",
        t: 2015
    },
    {
        q: "...And these are some pictures I stole from Germany.",
        p: "David Rand",
        t: 2015
    },
    {
        q:
            "Can anybody help me? With the screen? [After continued lack of help] Nobody helps, no lecture.",
        p: "Vladim Lozin",
        t: 2015
    },
    {
        q: "Sorry for the advertisement of Air France, please ignore it.",
        p: "Vladim Lozin",
        t: 2015
    },
    { q: "Brace yourself and work hard.", p: "Inna Capdeboscq", t: 2015 },
    {
        q: "I only called him a friend because I'm an affectionate person.",
        p: "Ben Madley",
        t: 2015
    },
    {
        s: "After writing Mearf",
        q: "That says 'Nearly'",
        p: "Roman Kotecky",
        t: 2015
    },
    {
        s: "Unsarcastically to me",
        q: "You're very funny!",
        p: "Ben Madley",
        t: 2015
    },
    { q: "450 ejaculations, to be optimistic.", p: "Dylan Davies", t: 2016 },
    { q: "R2 - reminds me of star wars.", p: "Xue Mei Li", t: 2016 },
    {
        q:
            "It's helpful when you ask questions, it's also helpful when you don't - because I can just get on with my business.",
        p: "Xue Mei Li",
        t: 2016
    },
    {
        s: "After being asked about my stories",
        q: "Some people are real, and some are not.",
        p: "Mayur Dave",
        t: 2016
    },
    {
        s: "After writing a large line using about 13 different symbols",
        q: "This is terrible, but you all know what I mean. Right?",
        p: "Haluk Sengun",
        t: 2016
    },
    {
        q:
            "Tables were around but not published, like secret societies. You could only get them if you had the right contacts.",
        p: "Ariel Pacetti",
        t: 2016
    },
    {
        q:
            "You might think that this looks very easy, and it is! That's why I was able to solve it.",
        p: "Denis Simon",
        t: 2016
    },
    { q: "Hatcher is like a bad filmmaker!", p: "David Mond", t: 2016 },
    { q: "Proof or Dare!", p: "Ed Pearce", t: 2016 },
    {
        q: "Keep death off the road, drive on the pavement!",
        p: "Phil Beckett",
        t: 2016
    },
    {
        q:
            "It was given many very humble names... for instance 'the heaven', 'Atlas', 'God'...",
        p: "Michalis Sialaros",
        t: 2016
    },
    {
        q: "I'll just skip a few examples, and about 6 centuries of history.",
        p: "Michalis Sialaros",
        t: 2016
    },
    {
        q: "Diophantus didn't know how to go past the 6th power.",
        p: "Michalis Sialaros",
        t: 2016
    },
    {
        s:
            "In response to 'Author of a very good combinatorics book, available at all good book stores.'",
        q: "If it doesn't have it, it's not a good book shop",
        p: "Robin Wilson",
        t: 2016
    },
    {
        q: "You could carry on by induction, or just write 'and so on'...",
        p: "Robin Wilson",
        t: 2016
    },
    {
        q:
            "History went literally out of the window! Well not literally, because we were in a basement and we didn't have windows.",
        p: "Simon Singh",
        t: 2016
    },
    {
        q: "I am a great addition to your country.",
        p: "Konstantin Shvydkyy",
        t: 2016
    },
    { q: "Brevity is the shit.", p: "James Kohout", t: 2016 },
    { q: "My equations are puppy rapists.", p: "Dylan Davies", t: 2016 },
    {
        q: "Only if you care about things like funding!",
        p: "Oliver Masters",
        t: 2016
    },
    {
        q:
            "I don't care about 4th years... Actually, I probably should... I don't care about 2nd years.",
        p: "Dave Wood",
        t: 2016
    },
    {
        q: "I added super because it sounded sexy, like what the physicists do!",
        p: "Andre de Carvalho",
        t: 2016
    },
    {
        q: "Write this down, and stare at it. It's difficult but so trivial.",
        p: "Gavin Brown",
        t: 2016
    },
    {
        q: "You may want to think about this in dimension 7, just to feel sick.",
        p: "Gavin Brown",
        t: 2016
    },
    {
        q: "Whenever you have a problem, just exclude it from your definitions.",
        p: "Charudatta Hajarnavis",
        t: 2016
    },
    {
        s: "Towards end of module",
        q: "So we've finally finished the preliminaries for the course.",
        p: "Charudatta Hajarnavis",
        t: 2016
    },
    {
        q: "There is something wrong... with the board, or the chalk.",
        p: "Guhan Harikumar",
        t: 2016
    },
    {
        q:
            "The proof is obvious, more or less. In fact, it's so obvious that I'll risk writing it down.",
        p: "Mark Pollicott",
        t: 2016
    },
    {
        q: "Any questions? We still have 30 seconds.",
        p: "Guhan Harikumar",
        t: 2016
    },
    {
        q: "p(n) grows out of control, just like the incredible Hulk",
        p: "Guhan Harikumar",
        t: 2016
    },
    {
        q: "If you forget, you'll never forget.",
        p: "Charudatta Hajarnavis",
        t: 2016
    },
    { q: "I can earn more money than the van!", p: "David Ray", t: 2016 },
    {
        q: "Would you rather have 2 normal friends or 12 small friends?",
        p: "Matt Rumble",
        t: 2015
    },
    {
        q: "If you could end the life in 10 seconds, you are in the life.",
        p: "David Ray",
        t: 2016
    },
    {
        q: "You may have also met the person who will write your obituary.",
        p: "Ben Fairburn",
        t: 2015
    },
    {
        s: "About factorisation in Dedekind domains",
        q: "Probably the most important theorem in the whole world.",
        p: "Nicolas Mascot",
        t: 2015
    },
    {
        q:
            "I'm going to go for the German tradition. Don't worry, I'm not German. I shouldn't say that, Germans are adorable people. I do like them.",
        p: "Nicolas Mascot",
        t: 2015
    },
    {
        q:
            "It's a bit tedious, I won't go through the details. Please believe me.",
        p: "Nicolas Mascot",
        t: 2015
    },
    {
        q: "And if you don't know what it means, it doesn't matter.",
        p: "Aurel Page",
        t: 2015
    },
    {
        q: "Now, you could do this, but I won't because it's boring.",
        p: "Daniel Kral",
        t: 2015
    },
    {
        q: "This is outside your course, but it's for your 'culture'.",
        p: "Aurel Page",
        t: 2015
    },
    {
        q:
            "Strictly speaking, you are correct. But strictly speaking, I am correct.",
        p: "Xue Mei Li",
        t: 2015
    },
    {
        q: "When marking, I will take p marks off!",
        p: "Nicolas Mascot",
        t: 2015
    },
    {
        s: "About Farkas' lemma",
        q: "I think I will give up on this proof. It is a curse for me!",
        p: "Daniel Kral",
        t: 2015
    },
    {
        q: "Too early for the dolphins to start coming.",
        p: "Samir Siksek",
        t: 2015
    },
    {
        q:
            "I'm surprised you came back, know what this means? The other lectureres are doing an even worse job.",
        p: "Samir Siksek",
        t: 2015
    },
    {
        q: "Let's keep the lecture unclear, better than gross.",
        p: "Samir Siksek",
        t: 2015
    },
    {
        q:
            "Has it been boring so far? [Us: no] Damn! I was going to say we're getting to the interesting stuff, but I see you have a low standard of lectures.",
        p: "Samir Siksek",
        t: 2015
    },
    {
        s: "On moving assignment deadlines back",
        q:
            "Shall we share this information [Laugh] You don't know what I was going to say! ...share with the supervisors?",
        p: "Samir Siksek",
        t: 2015
    },
    {
        q:
            "I think some of you are the type of people who will cheer on when the robots take over the world.",
        p: "Samir Siksek",
        t: 2015
    },
    {
        s: "On the FT of Galois Theory",
        q: "You were meant to scream!",
        p: "Samir Siksek",
        t: 2015
    },
    {
        q: "Is that ok? Well it's too late, I've rubbed it out.",
        p: "Samir Siksek",
        t: 2015
    },
    {
        s: "To me",
        q: "Do you really like maths? or really hate your friends?",
        p: "Samir Siksek",
        t: 2015
    },
    {
        q:
            "Now I'm going to do what one should never do during a lecture, but before that, any questions?",
        p: "Daniel Kral",
        t: 2016
    },
    {
        s: "Upon hitting a contradiction",
        q: "And this is kinda impossible!",
        p: "Daniel Kral",
        t: 2016
    },
    {
        q: "Before I violate the lecturing rules again... an example!",
        p: "Daniel Kral",
        t: 2016
    },
    { q: "What else can I say? Happy exams?", p: "Daniel Kral", t: 2016 },
    {
        q: "No no officer. I swear it's just icing sugar.",
        p: "Dylan Davies",
        t: 2016
    },
    {
        q: "I didn't realise it was inbreeding when we did it in class.",
        p: "Alex Holmes",
        t: 2016
    },
    { q: "My teeth are so musical!", p: "Alex Holmes", t: 2017 },
    {
        q: "I'm in middle of a rant, don't make jokes!",
        p: "Mayur Dave",
        t: 2017
    },
    { q: "So far, so trivial", p: "Miles Ried", t: 2017 },
    { q: "And it is only going to get worse.", p: "Miles Ried", t: 2017 },
    {
        q:
            "If you don't like what I said, then pretend I never said it...\nAnd then I'll spend 5 minutes apologising.",
        p: "Miles Ried",
        t: 2017
    },
    { q: "Proof by concensus.", p: "Vadim Lozin", t: 2017 },
    {
        q: "If there was a real fire, we were all going to burn here.",
        p: "Inna Capdeboscq",
        t: 2017
    },
    {
        q: "On a scale of 0 to Lie Algebras, wait that's not how it work",
        p: "Konstantin Shvydkyy",
        t: 2017
    },
    {
        s: "Mid-explanation of a proof",
        q: "These are *really* good blackboards",
        p: "Trevor Wooley",
        t: 2016
    },
    {
        s:
            "Asher: The Arctic is melting, which is obviously really bad for the Netherlands.",
        q:
            "Well, can't they move to belgium, and noone would know the difference.",
        p: "Dan Jovic",
        t: 2017
    },
    {
        q: "In retrospect, I don't know why I thought you'd be juggling.",
        p: "Tom Hanna",
        t: 2016
    },
    {
        q: "A little bit sloppy with all the terminology.",
        p: "Tom Hanna",
        t: 2016
    },
    {
        q: "Maybe I deserve to be murdered, but please don't kill me.",
        p: "Tom Hanna",
        t: 2016
    },
    {
        q:
            "It's nice to be a mathematician, computers don't generally hurt you much",
        p: "Louise Dyson",
        t: 2016
    },
    { q: "Define 'define'.", p: "Jun Bo Lau", t: 2016 },
    {
        s: "Marie: Your maths is gone.",
        q: "Oh I didn't need it.",
        p: "Oliver Masters",
        t: 2017
    },
    {
        q: "If anything, I'll be in prison, so it'll be great!",
        p: "Chris Hickey",
        t: 2017
    },
    {
        q:
            "Dave wood is the most human man in the department, wait no Samir! Actually Samir isn't human, he's a magical pixie.",
        p: "Asher Pearl",
        t: 2017
    },
    {
        q:
            "Take these equations, and then by a miracle, everything works! - Proof by miracle!",
        p: "Daniel Coutand",
        t: 2015
    },
    {
        s: "I still don't understand why this is funny.",
        q: "Oh no! I've just spilled Proseco down my shirt!",
        p: "Asher Peal",
        t: 2017
    }
    //  {s: "", q: "", p: "", t: 2017},
)

document.getElementById("list-all-button").innerHTML =
    "List all (" + quotes.length + ")"

function talk() {
    const content = document.getElementById("content")
    const updated = content.cloneNode(false)
    const quote = quotes[Math.floor(quotes.length * Math.random())]
    const title = document.createElement("h1")
    title.innerText = quote.hasOwnProperty("s")
        ? "[" + quote.s + "] — " + quote.q
        : quote.q
    const person = document.createElement("p")
    person.innerText = quote.p + " - " + quote.t

    updated.appendChild(title)
    updated.appendChild(person)

    content.parentNode.replaceChild(updated, content)
}

function listAll() {
    const content = document.getElementById("content")
    const updated = content.cloneNode(false)
    const ul = document.createElement("ul")

    for (let quote of quotes) {
        const item = document.createElement("li")
        item.innerText =
            (quote.hasOwnProperty("s")
                ? "[" + quote.s + "] — " + quote.q
                : quote.q) +
            " - " +
            quote.p +
            " - " +
            quote.t
        ul.appendChild(item)
    }

    updated.appendChild(ul)

    content.parentNode.replaceChild(updated, content)
}
