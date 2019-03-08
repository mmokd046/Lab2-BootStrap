 
 $(document).ready(function(){

 	$(".alert").alert('close');
 	$( "#HomePageForm" ).submit(function( event ) {
  	var emailDiv = document.getElementById("emailDiv");
  	var passWordDiv = document.getElementById("passwordDiv");
  	var emailValue = document.getElementById("email").value;
  	var passWordValue = document.getElementById("password").value;
  	var i = 0;
  	var hasNumber = false;
  	var UpperCase = false;
  	while (i <= passWordDiv.length){
	    character = passWordDiv.charAt(i);
	    if (!isNaN(character * 1)){
	        hasNumber = true;
	    }else{
	        if (character === character.toUpperCase()) {
	           UpperCase = true
	        }
	    }
	    i++;
	}
	// set up the text according to the case
	if (emailValue === 0) {
		emailDiv = "block";
	}
	if (passWordValue === 0) {
		passWordDiv = "block";
	} else if (passWordValue < 8) {
		passWordDiv = "block";
	} else if (!hasNumber) {
		passWordDiv = "block";
	} else if (!UpperCase) {
		passWordDiv = "block";
	}
	 else {
		x.style.display = "none";
	}    
});