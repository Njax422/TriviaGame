//Q1: Timer counting down from 30 seconds, question, 4 choice buttons
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
var clockRunning = false;
var q = 0;
var index;

// On page load
$( document ).ready(function() {
    console.log( "ready!" );
    $( '.question, .answers, .score, .timer').hide();

});

$( '#startButton' ).on("click", function() {
	gamePlay();
})

//Play game
function gamePlay() {
	$( '.display' ).empty();
	index = 0;
	console.log("On question #" + q);
	$( '.startGame, .score' ).hide();
	$( '.question, .answers, .timer' ).show();
	$( '.question' ).html(questions[q].question);
		// Creates a button for all four answer options
		for (var i = 0; i < questions[q].options.length; i++) {
			$( '.answers' ).append("<button class='option'>" + questions[q].options[i] + "</button> <br><br>");
		}
		//Log answer selected
	$( '.option' ).on("click", function() {
		console.log("Option clicked!");
		var index = $( ".option" ).index( this );
		console.log("That was div index #" + index );
		console.log(questions[q].answer);
		//Winning condition
		if (index = questions[q].answer) {
					console.log("Correct");
					$( '.display' ).html("Correct!");
					totalCorrect++;
					$( '.question, .answers, .score, .timer').empty();
					q++;
					setTimeout(gamePlay,2000);
		};
	});
}














/*
var timer = new (function() {

    var $countdown;
    var $form;
    var incrementTime = 70;
    var currentTime = 30000; // 
    
    $(function() {
        $countdown = $('#countdown');
        exTimer = $.timer(updateTimer, incrementTime, true);

        // Setup form
        $form = $('#example2form');
        $form.bind('submit', function() {
            Example2.resetCountdown();
            return false;
        });

    });

    function updateTimer() {

        // Output timer position
        var timeString = formatTime(currentTime);
        $countdown.html(timeString);

        // If timer is complete, trigger alert
        if (currentTime == 0) {
            Example2.Timer.stop();
            alert('Example 2: Countdown timer complete!');
            Example2.resetCountdown();
            return;
        }

        // Increment timer position
        currentTime -= incrementTime;
        if (currentTime < 0) currentTime = 0;

    }

    this.resetCountdown = function() {

        // Get time from form
        var newTime = parseInt($form.find('input[type=text]').val()) * 1000;
        if (newTime > 0) {currentTime = newTime;}

        // Stop and reset timer
        Example2.Timer.stop().once();

    };

});
*/