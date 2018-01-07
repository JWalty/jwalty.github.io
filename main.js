var red = 0;
var green = 0;
var orange = 0;
var purple = 0;

function increasePurple(){
	purple = purple + 1;
	document.getElementById("purple").innerHTML = purple;
}	

function increaseOrange(){
	orange = orange + 1;
	document.getElementById("orange").innerHTML = orange;
	unlockPurple();	
}	


function increaseGreen(){
	green = green + 1;
	document.getElementById("green").innerHTML = green;
	unlockPurple();	
}	

function increaseRed(){
	red = red + 1;
	document.getElementById("red").innerHTML = red;
	unlockPurple();
}

function unlockPurple(){
        if (red === 10) {
			if (orange === 10) {
				if (green === 10) {
					myDIV.style.display = "block";
				}
			}
		}
}


window.setInterval(function(){

}, 1000);
