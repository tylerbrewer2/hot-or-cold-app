
$(document).ready(function(){
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---Game Code---*/
  	var compNum = Math.floor(Math.random()* 101); // initial random number
  	var count = 0; // counts user guess amount
  	
  	var reset = function() { //function that resets game
  		count = 0; // resets count to 0
  		$("span#count").replaceWith("<span id = 'count'>0</span>"); // resets counter to 0
  		$("ul.guessBox li").remove(); // rests user inputs
  		compNum = Math.floor(Math.random() * 101); //generates new number
  	
  	}
  	var guess = function (input) { // function to show what needs to be logged
  			var distance = input - compNum; // checks difference between the user input and the computer generated number
  			if (distance < -1) { // checks to make sure difference is a positive number
  				distance *= -1 // if not, multiply by -1 to make the distance positive
	  		}
  			if (distance > 50) { // checks distance to decide what hint to show user
  			$(feedback).replaceWith("<h2 id='feedback'>Ice Cold</h2>");
  			}
	  		else if (distance > 30) { // checks distance to decide what hint to show user
  				$(feedback).replaceWith("<h2 id='feedback'>Cold</h2>");
  			}
  			else if (distance > 20) { // checks distance to decide what hint to show user
	  			$(feedback).replaceWith("<h2 id='feedback'>Warm</h2>");
  			}
  			else if (distance > 10) { // checks distance to decide what hint to show user
  				$(feedback).replaceWith("<h2 id='feedback'>Hot</h2>");
	  		}
  			else if (distance >= 1) { // checks distance to decide what hint to show user
  				$(feedback).replaceWith("<h2 id='feedback'>Very Hot</h2>");
  			}
	  		else { // checks to see if user won
  				$(feedback).replaceWith("<h2 id='feedback'>You got it!</h2>");
  			}
  	};
  	
  	$("a.new").mousedown(function() { // calls reset function if 'new game' is clicked
  		return reset();
  	});
	
	$("input#guessButton.button").mousedown(function() { // runs if submit button is clicked
		var userInput = $("input#userGuess.text").val(); // checks value of user input
  		var feedback = "h2#feedback"; // variable for faster input
 		if (userInput > 0 && userInput < 101) { // checks to make sure input is a number between 1 and 100
 			count += 1; // increases guess amount counter
 			$("span#count").replaceWith("<span id = 'count'>" + count + "</span>"); // shows the user their current guess count
 			$("ul#guessList").prepend("<li>" + userInput + "</li>"); // makes a new li element that shows user previous guesses
			return guess(userInput); // runs guess function
  		}
  		else { // if input is not a valid input, alert the user to submit a valid number
  			alert("Please enter a whole number between 1 and 100.");
  		}
	});
});


