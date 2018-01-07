var red = 0;
var yellow = 0;
var blue = 0;
var purple = 0;
var green = 0;
var orange = 0;
var redGenerators = 0;
var redGeneratorCost = 10;

function buyRedGenerator(){
	if (red >= redGeneratorCost) {
		red = red - redGeneratorCost;
		redGenerators = redGenerators + 1;
		document.getElementById("red").innerHTML = red;
		document.getElementById("redGenerators").innerHTML = redGenerators;
	}
}

function increaseBlue(){
	blue = blue + 1;
	document.getElementById("blue").innerHTML = blue;
	unlock();		
}	

function increasePurple(){
	if (red > 0 && blue > 0) {
		red = red - 1;
		blue = blue - 1;
		purple = purple + 1;
	document.getElementById("red").innerHTML = red;		
	document.getElementById("blue").innerHTML = blue;
	document.getElementById("purple").innerHTML = purple;	
	}
}	

function increaseOrange(){
	if (red > 0 && yellow > 0) {
		red = red - 1;
		yellow = yellow - 1;
		orange = orange + 1;
	document.getElementById("red").innerHTML = red;		
	document.getElementById("yellow").innerHTML = yellow;
	document.getElementById("orange").innerHTML = orange;	
	}	
}	

function increaseGreen(){
	if (yellow > 0 && blue > 0) {
		yellow = yellow - 1;
		blue = blue - 1;
		green = green + 1;
	document.getElementById("yellow").innerHTML = yellow;		
	document.getElementById("blue").innerHTML = blue;
	document.getElementById("green").innerHTML = green;	
	}	
}	

function increaseYellow(){
	yellow = yellow + 1;
	document.getElementById("yellow").innerHTML = yellow;
	unlock();	
}	


function increaseRed(){
	red = red + 1;
	document.getElementById("red").innerHTML = red;
	unlock();
}

function redGenerator(){
	red = red + redGenerators;
	document.getElementById("red").innerHTML = red;	
	unlock();
}

function unlock(){
        if (red >= 10 && blue >= 10) {
			purpleButton.style.display = "block";
		}
        if (red >= 10 && yellow >= 10) {
			orangeButton.style.display = "block";
		}
        if (yellow >= 10 && blue >= 10) {
			greenButton.style.display = "block";
		}		
		
}


window.setInterval(function(){
redGenerator();
}, 1000);
