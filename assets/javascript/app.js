// Upon clicking an answer, display correct or incorrect with image for 5 secs
// Also move forward after 30 secs up
// When done with questions, show total of correct and incorrect answers
// Start over resets the game

var questions = [
{	question: "What did Ted get a tattoo of on his lower back?",
	answer: 3,
	options: ["Red boots", "An Iguana", "The McLaren's Logo", "A Butterfly"]
},
{	question: "What type of animal was on the tie Barney had to wear when he lost a bet?",
	answer: 0,
	options: ["Ducks", "Bunnies", "Hedgehogs", "Bears"]
},
{	question: "What's the name of Robin's rockstar alter ego",
	answer: 1,
	options: ["Princess Penelope", "Robin Sparkles", "Robin Speckles", "Just Robin"]
},
{	question: "What did Marshal write a funeral song for?",
	answer: 2,
	options: ["His favorite band", "Robot Wrestling", "A cat", "The bird that flew into their window"]
},
{	question: "Who annoys Robin the most at work?",
	answer: 1,
	options: ["Daphne", "Patrice", "Sandy Rivers", "Loretta Stinson"]
},
{	question: "What is Ted &quot;totally pulling off&quot;?",
	answer: 0,
	options: ["Red boots", "A women's sweater", "A V Neck", "A lower back tattoo"]
},
{	question: "Who loves boats, boats, boats!!!?",
	answer: 3,
	options: ["Betty", "Bonnie", "Beatrice", "Becky"]
},
{	question: "Which of Robin's boyfriends did the gang compare to a dog?",
	answer: 1,
	options: ["Spot", "Scooby", "Ted", "Nick"]
},
{	question: "What is Marshall's mothers' name?",
	answer: 2,
	options: ["Janet", "Susan", "Judy", "Stella"]
},
{	question: "Which up and coming neighborhood did Lily and Marshall move to?",
	answer: 2,
	options: ["RoBaLiMa", "McLaStNo", "DoWiSeTrePla", "GreenPoint"]
},
];
var totalCorrect = 0;
var totalIncorrect = 0;
var unAnswered = 0;
var clockRunning = false;
var q = 0;
var timeLimit = 10;
var timer;

$( document ).ready(function() {
    console.log( "ready!" );
    $( '.question, .answers, .score, .timer').hide();
});

$( '#startButton' ).on("click", function() {
	gamePlay();
})

function startTimer()
{
	timeLimit--;
	$( '.timer' ).html(timeLimit + " seconds left");
	if (timeLimit === 0) {
		clearInterval(timer);
		timeLimit = 10;
		q++;
		unAnswered++;
		gamePlay();
	}
}

function gamePlay() {
	if (q > 9) {
		endGame();
	} else {
		$( '.timer' ).html(timeLimit + " seconds left");
		timer = setInterval (startTimer, 1000 );
		$( '.display, .answers' ).empty();
		$( '.startGame, .score' ).hide();
		$( '.question, .answers, .timer' ).show();
		$( '.question' ).html(questions[q].question);
		// Creates a button for all four answer options
		for (var i = 0; i < questions[q].options.length; i++) {
			$( '.answers' ).append("<button class='option btn btn-default'>" + questions[q].options[i] + "</button> <br><br>");
		}
		console.log("Q:" + q);
	}
}

function endGame() {
	console.log("endGame started");
	$( '.startGame, .answers, .question, .timer' ).hide();
	$( '.display, .score' ).show();
	$( '.display' ).html("GAME OVER");
	$( '.score' ).html("<b>Total Correct: </b>" + totalCorrect + "<br><b>Total Incorrect: </b>" + totalIncorrect + "<br><b>Unanswered: </b>" + unAnswered);
}

//Log index of answer selected
$( '.answers' ).on("click",".option", function() {
	var index = $( ".option" ).index(this);
	//Winning/Losing conditions
	if (index === questions[q].answer) {
		$( '.display' ).html("Correct!");
		totalCorrect++;
	} else {
		$( '.display' ).html("Eh. Wrong!");
		totalIncorrect++;
	}
	$( '.question, .answers, .timer').empty();
	q++;
	setTimeout(gamePlay,1000);
	clearInterval(timer);
	timeLimit = 10;
});
