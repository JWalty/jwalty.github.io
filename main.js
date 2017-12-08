var rockPoints = 0;

var cheater = 0;

var robotRock = 0;

var branches = 0;

var robotRockCost = 200;

function increase(number){
    rockPoints = rockPoints + number;
	cheater = cheater + 1;
    document.getElementById("rockPoints").innerHTML = rockPoints;
};

function shakeTree() {
	branches = branches + 1;
	cheater = cheater + 1;
    document.getElementById("branches").innerHTML = branches;
}

function buyRobotRock(){
	if (branches > robotRockCost) {
		branches = branches - robotRockCost;
		robotRock = robotRock + 1;
		document.getElementById("robotRock").innerHTML = robotRock;	
		document.getElementById("branches").innerHTML = branches;	
}		
}

function autoRock(){
	rockPoints = rockPoints + robotRock;
    document.getElementById("rockPoints").innerHTML = rockPoints;
}	
	
	
function antiCheat(){
	if (cheater > 15) {
		rockPoints = -999999999999999;
		cheater = 0;
	}
	else {
		cheater = 0;
	}
}
		
window.setInterval(function(){
	antiCheat();
	autoRock();
}, 1000);
