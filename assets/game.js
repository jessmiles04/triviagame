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
	correctAnswer: "The Mindless Ones"},
	{
	question: "Ronan the Accuser is a member of what alien race?",
	answers: ["Shi'ar", "Skrull", "Kree", "Human"],
	correctAnswer: "Kree"
	},
	{
		question: "What is the nickname of Tony Stark's chauffeur and personal assistant Harold Hogan?",
		answers: ["Handy", "Happy", "Heavy", "Rhody"],
	correctAnswer: "Happy"},
	{
	question: "By what name do the Asgardians refer to Earth?",
		answers: ["Midgard", "Earth", "Alfheim", "Terra"],
	correctAnswer: "Midgard"},
	{
	question: "Who becomes the director of S.H.I.E.L.D. in the aftermath of the Civil War?",
		answers: ["Hawkeye", "Black Widow", "Iron Man", "Phil Coulson"],
	correctAnswer: "Iron Man"},
	{
	question: "Malekith is the leader of what race of beings?",
		answers: ["The Dark Elves", "The Terror Trolls", "Kree", "The Earth Dwarves"],
	correctAnswer: "The Dark Elves"},
	{
	question: "What is the villainous name of crime lord Wilson Fisk?",
		answers: ["Godfather", "The Prince", "Macharian", "Kingpin"],
	correctAnswer: "Kingpin"},
{
	question: "How is Doctor Strange related to his archenemy?",
		answers: ["Son", "In-Law", "Grandson", "Not related"],
	correctAnswer: "In-Law"},
	{
	question: "The Infinity Gauntlet holds how many Infinity Gems?",
		answers: ["9", "8", "7", "6"],
	correctAnswer: "6"},
	{
	question: "What is the nickname of Daredevil's friend and business partner, Franklin Nelson?",
		answers: ["Froggy", "Nelly", "Rhody", "Foggy"],
	correctAnswer: "Foggy"},


	]

var question1=0;

function triviaStart(){
	$("#answers").hide();
	$("#endScreen").hide();	
	$("#loki").hide()
	$("#deadpool").hide()
	$("#Start").on("click", function(){
	triviaQuestion(question1);

	});
}

function triviaQuestion(){
	    		if (trivia.length == question1) {
    			$("#question").hide();
    			$("#answers").hide();
    			$("#Start").hide();
				$("#loki").hide();
				$("#deadpool").hide();
	        	$("#endScreen").show();
		    }

		    else{
	$("#Start").hide();
	$("#endScreen").hide();
	$("#answers").show();
	$("#loki").hide()
	$("#deadpool").hide();
	resetTime();
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
            	$("#loki").show(3000).hide(0);
            correct++;
            question1++;
            console.log("Got it");
            $("#correct").html("Correct Answers: " + correct);
            triviaQuestion();
	        }

         else {
         	$("#deadpool").show(3000).hide(0);
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
             	question1++;
                $("#wrong").html(wrong);
                    triviaQuestion(); 
                   	return;
	            } 
            else {
                timeToGuess = timeToGuess - 1;
                incrementTimer();
            }
        }, 1000);
    }

    function resetTime() {
        clearTimeout(timer);
        timeToGuess = 15; 
        incrementTimer();
    }

triviaStart();

})







