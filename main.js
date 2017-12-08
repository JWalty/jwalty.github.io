var rockPoints = 0;

var robotRock = 0;

var branches = 0;

var robotRockCost = 200;

var rockSize = 1;

var rockUpgradeCost = 100;

function upgradeRock(){
	if (rockPoints >= rockUpgradeCost){
		rockPoints = rockPoints - rockUpgradeCost;
		rockUpgradeCost = rockUpgradeCost + 100;
		rockSize = rockSize + 1;
    document.getElementById("rockSize").innerHTML = rockSize;	
    document.getElementById("rockPoints").innerHTML = rockPoints;	
    document.getElementById("rockUpgradeCost").innerHTML = rockUpgradeCost;		
	}
}

function wrangleRock(){
    rockPoints = rockPoints + rockSize;
    document.getElementById("rockPoints").innerHTML = rockPoints;
};

function shakeTree() {
	branches = branches + 1;
    document.getElementById("branches").innerHTML = branches;
}

function buyRobotRock(){
	if (branches > robotRockCost) {
		branches = branches - robotRockCost;
		robotRock = robotRock + 1;
		robotRockCost = Math.floor(200* Math.pow(1.1,robotRock));
		document.getElementById("robotRockCost").innerHTML = robotRockCost;			
		document.getElementById("robotRock").innerHTML = robotRock;	
		document.getElementById("branches").innerHTML = branches;	
}		
}

function autoRock(){
	rockPoints = rockPoints + robotRock;
    document.getElementById("rockPoints").innerHTML = rockPoints;
}	
	
	
window.setInterval(function(){
	autoRock();
}, 1000);
