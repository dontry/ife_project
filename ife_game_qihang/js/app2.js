var choice_array = ["shitou","jiandao","bu"];
var streak_value = 0;

window.onload = function(){
	var user = document.getElementById("user");
	var pc = document.getElementById("pc");
	var result = document.getElementById("result");
	var streak = document.getElementById("streak");
	// var choice = [];
	var getChoice = function(i){
		var choice =  document.getElementById(choice_array[i]);
		choice.onclick = function(){
			playGame.apply(choice);
		}
	}
	for (var i = 0; i < choice_array.length; i++) {
		getChoice(i);
	}
}

function playGame(){
	var user_result = userResult(this.alt);
	var pc_result = Math.random();
	if (pc_result < .33) {
		pc_result = 1;	
	}else if(pc_result < .66){
		pc_result = 2;
	}else{
		pc_result = 3;
	};

	user.style.visibility = "visible";
	pc.style.visibility = "visible";
	user.src = this.src;
	user.alt = this.alt;
	pc.src = choice_array[pc_result-1] + ".png";
	pc.alt = choice_array[pc_result-1];

	var game_result = getResult(user_result, pc_result);

	result.innerHTML = "You " + game_result + ".";		
	streak.innerHTML = streak_value;	
}

function userResult(name){
		switch(name){
			case "shitou": return 1;
			case "jiandao": return 2;
			case "bu": return 3;
		}
	};

function getResult(user_result,pc_result){
	// var streak = 0;
		if(user_result == pc_result){
			streak_value = 0;
			return "tie";
		}
		if((user_result == 3 && pc_result == 1) || (user_result == 2 && pc_result == 3) || ( user_result == 1 && pc_result == 2)){
			++streak_value;
			return "win";
		}else{
			streak_value = 0;
			return "lose";}
	}