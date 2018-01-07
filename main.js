var red = 0;
var green = 0;
var orange = 0;
var purple = 0;
var blue = 0;

function increaseBlue(){
	blue = blue + 1;
	document.getElementById("blue").innerHTML = blue;
}	

function increasePurple(){
	purple = purple + 1;
	document.getElementById("purple").innerHTML = purple;
}	

function increaseOrange(){
	orange = orange + 1;
	document.getElementById("orange").innerHTML = orange;
	unlock();	
}	


function increaseGreen(){
	green = green + 1;
	document.getElementById("green").innerHTML = green;
	unlock();	
}	

function increaseRed(){
	red = red + 1;
	document.getElementById("red").innerHTML = red;
	unlock();
}

function unlock(){
        if (red === 10 && green === 10 && orange === 10) {
			purpleButton.style.display = "block";
		}
        if (red === 1 && green === 1 && orange === 1) {
			blueButton.style.display = "block";
		}
}


window.setInterval(function(){

}, 1000);
