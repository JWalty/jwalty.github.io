var rockPoints = 0;

var robotRock = 0;

var branches = 0;

var robotRockCost = 200;

var rockSize = 1;

var rockUpgradeCost = 100;

var sharpRock = 0;

function disable(){
		document.getElementById("upgradeRock").disabled = true;
		document.getElementById("buyRobotRock").disabled = true;		
}	

function upgradeRock(){
	if (rockPoints >= rockUpgradeCost){
		rockPoints = rockPoints - rockUpgradeCost;
		rockUpgradeCost = rockUpgradeCost + 100;
		rockSize = rockSize + 1;
    document.getElementById("rockSize").innerHTML = rockSize;	
    document.getElementById("rockPoints").innerHTML = rockPoints;	
    document.getElementById("rockUpgradeCost").innerHTML = rockUpgradeCost;	
			if (rockPoints < rockUpgradeCost) {
		document.getElementById("upgradeRock").disabled = true;
		}
	}
}

function wrangleRock(){
    rockPoints = rockPoints + rockSize;
    document.getElementById("rockPoints").innerHTML = rockPoints;
	
	if (rockPoints >= rockUpgradeCost) {
		document.getElementById("upgradeRock").disabled = false;
	}
	
	var x = Math.floor((Math.random() * 100) + 1);
    if (x <= rockSize) {
    sharpRock = sharpRock + 1;
    document.getElementById("sharpRock").innerHTML = sharpRock;	  
    }
}

function set(){
		document.getElementById("upgradeRock").disabled = true;	
}

function shakeTree() {
	branches = branches + 1;
    document.getElementById("branches").innerHTML = branches;
	if (branches >= robotRockCost) {
		document.getElementById("buyRobotRock").disabled = false;
	}	
}

function buyRobotRock(){
	if (branches > robotRockCost) {
		branches = branches - robotRockCost;
		robotRock = robotRock + 1;
		robotRockCost = Math.floor(200* Math.pow(1.1,robotRock));
		document.getElementById("robotRockCost").innerHTML = robotRockCost;			
		document.getElementById("robotRock").innerHTML = robotRock;	
		document.getElementById("branches").innerHTML = branches;
				if (branches < robotRockCost) {
		document.getElementById("buyRobotRock").disabled = true;
		}
}
}

function autoRock(){
	rockPoints = rockPoints + robotRock;
    document.getElementById("rockPoints").innerHTML = rockPoints;
}	

window.setInterval(function(){
	autoRock();
}, 1000);
