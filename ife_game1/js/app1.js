
window.onload = function(){
		var choice_array = ["shitou", "jiandao", "bu"];
		var user = document.getElementById("user");
		var pc = document.getElementById("pc");
		var result = document.getElementById("result");
		var streak = document.getElementById("streak");
		var streak_value = 0;
		var gameResult = getResult();
		addHandlers(choice_array);
}		


function addHandlers(array)s{
	var getChoice = function(i){
		var c = new choice(document.getElementById(array[i]));
		c.addEvent('click', playGame.bind(c), false);
	}

	for (var i = 0; i < array.length; i++) {
		getChoice(i);
	};
} 

function choice(ele){
	this.el = ele;
	this.src = ele.src;
	this.alt = ele.alt;
	this.result = userResult(this.alt);

	this.addEvent = (function(){
		if(window.addEventListener){
			return function(sType, fn, capture){
				this.el.addEventListener(sType,function(e){
					fn.call(this.el, e);
				},(capture));
			};
		}else if(window.attachEvent){
			return function(sType, fn,capture){
				this.el.addEventListener(sType, function(e){
					fn.call(this.el,e);
				});
			};
		}
	})();
}

function playGame(){
	var pc_result = Math.random();
	if(pc_result < .33){
		pc_result = 1;
	}else if(pc_result < .66){
		pc_result = 2;
	}else{
		pc_result = 3;
	}
	user.style.display = "inline";
	pc.style.display = "inline";
	user.src = this.src;
	user.alt = this.alt;
	pc.src = choice_array[pc_result-1] + ".png";
	pc.alt = choice_array[pc_result-1];

	var game_result = gameResult(this.result, pc_result);

	result.innerHTML = "You " + game_result + ".";		
	streak.innerHTML = streak_value;	
};


function userResult(name){
		switch(name){
			case "shitou": return 1;
			case "jiandao": return 2;
			case "bu": return 3;
		}
	};

function getResult(){
	// var streak = 0;

	return function(_user_result, _pc_result){
		if(_user_result == _pc_result){
			streak_value = 0;
			return "tie";
		}
		if((_user_result == 3 && _pc_result == 1) || (_user_result == 2 && _pc_result == 3) || ( _user_result == 1 && _pc_result == 2)){
			++streak_value;
			return "win";
		}else{
			streak_value = 0;
			return "lose";}
		}
	}