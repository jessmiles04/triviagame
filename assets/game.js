$(document).ready(function(){
//variables
var correct = 0;
var wrong = 0;
var timeToGuess = 15;
    $('#A1, #A2, #A3, #A4').click(checkAnswers);
//questions
var trivia = [{
	question: "Doctor Strange's archenemy often uses what creatures to do his bidding?",
	answers: ["The Undying Ones", "The Monstrous Ones", "The Dark Ones", "The Mindless Ones"],
	correctAnswer: 3},
	{
	question: "Ronan the Accuser is a member of what alien race?",
	answers: ["Shi'ar", "Skrull", "Kree", "Human"],
	correctAnswer: 2
	},
	{
		question: "What is the nickname of Tony Stark's chauffeur and personal assistant Harold Hogan?",
		answers: ["Handy", "Happy", "Heavy", "Rhody"],
	correctAnswer: 1},
	{
	question: "By what name do the Asgardians refer to Earth?",
		answers: ["Midgard", "Earth", "Alfheim", "Terra"],
	correctAnswer: 0},
	{
	question: "Who becomes the director of S.H.I.E.L.D. in the aftermath of the Civil War?",
		answers: ["Hawkeye", "Black Widom", "Iron Man", "Phil Coulson"],
	correctAnswer: 2},
	{
	question: "Malekith is the leader of what race of beings?",
		answers: ["The Dark Elves", "The Terror Trolls", "Kree", "The Earth Dwarves"],
	correctAnswer: 0},
	{
	question: "What is the villainous name of crime lord Wilson Fisk?",
		answers: ["Godfather", "The Prince", "Macharian", "Kingpin"],
	correctAnswer: 2},
{
	question: "How is Doctor Strange related to his archenemy?",
		answers: ["Son", "In-Law", "Grandson", "No related"],
	correctAnswer: 1},
	{
	question: "The Infinity Gauntlet holds how many Infinity Gems?",
		answers: ["9", "8", "7", "6"],
	correctAnswer: 3},
	{
	question: "What is the nickname of Daredevil's friend and business partner, Franklin Nelson?",
		answers: ["Froggy", "Nelly", "Rhody", "Foggy"],
	correctAnswer: 3},


	]

var question1=0;

function triviaStart(){
	$("#answers").hide();
	$("#endScreen").hide();	
	$("#Start").on("click", function(){
	triviaQuestion(question1);

	});
}

function triviaQuestion(){
	    		if (trivia.length == question1) {
    			//game over
    			$("#question").hide();
    			$("#answers").hide();
    			$("#Start").hide();
	        	$("#endScreen").show();
		    }

		    else{
	$("#Start").hide();
	$("#endScreen").hide();
	$("#answers").show();
	resetTime();

		     //$("#question").html(trivia[question1].question)
	       // $("#answers").html(trivia[question1].answers)
    		}

	 //new question
	$("#question").html	(trivia[question1].question);
	$("#A1").html(trivia[question1].answers[0]);
	$("#A2").html(trivia[question1].answers[1]);
	$("#A3").html(trivia[question1].answers[2]);
	$("#A4").html(trivia[question1].answers[3]);
}

	
   function checkAnswers() {
        var userGuess = $(this).html();
            if (userGuess == trivia[question1].correctAnswer) {
            correct++;
            question1++;
            console.log("Got it");
            $("#correct").html("Correct Answers: " + correct);
            triviaQuestion();
	        }

         else {
            wrong++;
            question1++;
            $('#wrong').html("Wrong Answers: " + wrong);
            triviaQuestion();
        	}
    }

    function incrementTimer() {
        timer = setTimeout(function() {
            $("#timer").html(timeToGuess);
            if (timeToGuess == 0) {
             	wrong++;
                $("#wrong").html(wrong);
                return;
                triviaQuestion(); 
	            } 
            else {
                timeToGuess = timeToGuess - 1;
                incrementTimer();
            }
        }, 1000);
    }

    function resetTime() {
        clearTimeout(timer);
        timeToGuess = 15; // in seconds
        incrementTimer();
    }



//}  //Do code for showing the number of seconds here

triviaStart();

})







