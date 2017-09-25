//Q1: Timer counting down from 30 seconds, question, 4 choice buttons
// Upon clicking an answer, display correct or incorrect with image for 5 secs
// Also move forward after 30 secs up
// When done with questions, show total of correct and incorrect answers
// Start over resets the game

var questions = [
{	question: "What color is the sky?",
	answer: "Ansdfa",
	option1: "Ansdfa",
	option2: "Bdsafagdad",
	option3: "asdfsd",
	option4: "agdgrhtrD"
},
{	question: "What color does the sun appear?",
	option1: "A",
	option2: "B",
	option3: "C",
	option4: "D",
	answer: "C"
}
];
var totalCorrect = 0;
var totalIncorrect = 0;
var clockRunning = false;
var stopwatch = {

  time: 0,

  reset: function() {
    stopwatch.time = 0;
    $("#display").html("00:00");
  },
  start: function() {
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
    }
  },
  stop: function() {
    clearInterval(intervalId);
    clockRunning = false;
  },
  timeConverter: function(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};

function gamePlay() {
	$( '.startGame' ).hide();
	stopwatch.start();
	$( '.question' ).html(questions[0].question);
//Revisit: tried to do a for loop here but wasn't working
	$( '.answers' ).append("<button>" + questions[0].option1 + "</button> <br><br>");
	$( '.answers' ).append("<button>" + questions[0].option2 + "</button> <br><br>");
	$( '.answers' ).append("<button>" + questions[0].option3 + "</button> <br><br>");
	$( '.answers' ).append("<button>" + questions[0].option4 + "</button> <br><br>");
	clockRunning = true;
}

$( '#startButton' ).on("click", function() {
	gamePlay();
})





