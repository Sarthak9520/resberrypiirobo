
var attempt = 3;

//Variable to count number of attempts

//below function executes on click of login button.

function validate() {
	var user = document.getElementById('username').value;


	var pass = document.getElementById('password').value;

	if (user == 'Tiwari' && pass == '123456' ){


		alert("Login successfully");

		window.location = "control.html";

		//redirecting to other webpage.

		return false;
	}


	else{
		attempt --;//decrementing by one.

		alert("you have left "+attempt+" attempt;");

		//disabling field after three incorrect attempts.

		if(attempt==0){

         document.getElementById("username").disabled = true;
         document.getElementById("password").disabled = true;
         document.getElementById("submit").disabled = true;

			return false;


		}
	}
}
