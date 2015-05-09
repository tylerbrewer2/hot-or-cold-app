
$(document).ready(function(){
	var feedback = "h2#feedback";
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*---Game Code---*/
  	var compNum = Math.floor(Math.random()* 101);
  	var guess = function (input) {
  		var distance = input - compNum;
  		if (distance < -1) {
  			distance *= -1
  		}
  		if (distance > 50) {
  			$(feedback).replaceWith("<h2 id='feedback'>Ice Cold</h2>");
  		}
  		else if (distance > 30) {
  			$(feedback).replaceWith("<h2 id='feedback'>Cold</h2>");
  		}
  		else if (distance > 20) {
  			$(feedback).replaceWith("<h2 id='feedback'>Warm</h2>");
  		}
  		else if (distance > 10) {
  			$(feedback).replaceWith("<h2 id='feedback'>Hot/h2>");
  		}
  		else if (distance >= 1) {
  			$(feedback).replaceWith("<h2 id='feedback'>Very Hot</h2>");
  		}
  		else {
  			$(feedback).replaceWith("<h2 id='feedback'>You got it!</h2>");
  		}
  	}

});


