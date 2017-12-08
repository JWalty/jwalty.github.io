var rockPoints = 0;

var rockCheater = 0;

var treeCheater = 0;

var robotRock = 0;

var branches = 0;

var robotRockCost = 200;

function increase(number){
    rockPoints = rockPoints + number;
	rockCheater = rockCheater + 1;
    document.getElementById("rockPoints").innerHTML = rockPoints;
};

function shakeTree() {
	branches = branches + 1;
	treeCheater = treeCheater + 1;
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
	
	
function treeAntiCheat(){
	if (treeCheater > 15) {
		branches = -999999999999999;
		treeCheater = 0;
		document.getElementById("branches").innerHTML = branches;		
	}
	else {
		treeCheater = 0;
	}
}

function rockAntiCheat(){
	if (rockCheater > 15) {
		rockPoints = -999999999999999;
		rockCheater = 0;
		document.getElementById("rockPoints").innerHTML = rockPoints;
	}
	else {
		rockCheater = 0;
	}
}
		
window.setInterval(function(){
	rockAntiCheat();
	treeAntiCheat();
	autoRock();
}, 1000);
