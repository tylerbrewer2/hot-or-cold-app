
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
  	var compNum = Math.floor(Math.random()* 101);
  	var guess = function (input) {
  		var distance = input - compNum;
  		if (distance < -1) {
  			distance *= -1
  		}
  		if (distance > 50) {
  			console.log("Ice cold");
  		}
  		else if (distance > 30) {
  			console.log("Cold");
  		}
  		else if (distance > 20) {
  			console.log("Warm");
  		}
  		else if (distance > 10) {
  			console.log("Hot");
  		}
  		else if (distance >= 1) {
  			console.log("very hot");
  		}
  		else {
  			console.log("You got it!")
  		}
  	}
  	console.log(guess(1));

});


