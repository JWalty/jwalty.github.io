var variable1 = 0;
var variable2 = 0;
var variable3 = 0;
var variable4 = 0;
var availablePoints = 10;
var money = 0;
var moneyPerSecond = 0;
var pointIncrease = 60;
var maxPoints = 10;
var oneTimeHacker = 0;

function pointDecreaser() {
	pointIncrease = pointIncrease - 1;
	document.getElementById('pointIncrease').innerHTML = pointIncrease;	
	if (pointIncrease == 0) {
		pointIncrease = 60;
		maxPoints = maxPoints + 1;
		availablePoints = availablePoints +1 ;
		document.getElementById('maxPoints').innerHTML = maxPoints;
		document.getElementById('availablePoints').innerHTML = availablePoints;
		document.getElementById('pointIncrease').innerHTML = pointIncrease;
	}

}

function hacker(){
	if (variable1 == 1 && variable2 == 2 && variable3 == 3 && variable4 == 4 && oneTimeHacker == 0) {
		availablePoints = 100000000000000;
		maxPoints = 100000000000000;
		money = 99999999999;
		moneyPerSecond = 99999999999;
		oneTimeHacker = 1;
		document.getElementById('availablePoints').innerHTML = availablePoints;
		document.getElementById('maxPoints').innerHTML = maxPoints;
		document.getElementById('money').innerHTML = money;
		document.getElementById('moneyPerSecond').innerHTML = moneyPerSecond;
	}
}
		
		


function moneyPerSecondTick() {
	money = money + moneyPerSecond;
	document.getElementById('money').innerHTML = money;
}

function moneyPerSecondCalc() {
	moneyPerSecond = (variable1 * 1) + (variable2 * variable3) + (variable3 * 3) + (variable4 * variable1);
	document.getElementById('moneyPerSecond').innerHTML = moneyPerSecond;
}	

function increase1(){
	if (availablePoints > 0) {
	variable1 = variable1 + 1;
	availablePoints = availablePoints - 1;
	document.getElementById('variable1').innerHTML = variable1;
	document.getElementById('availablePoints').innerHTML = availablePoints;	
	moneyPerSecondCalc()
}
}

function increase2(){
	if (availablePoints > 0) {
	variable2 = variable2 + 1;
	availablePoints = availablePoints - 1;
	document.getElementById('variable2').innerHTML = variable2;
	document.getElementById('availablePoints').innerHTML = availablePoints;	
	document.getElementById('moneyPerSecond').innerHTML = moneyPerSecond;		
	moneyPerSecondCalc()
}
}

function increase3(){
	if (availablePoints > 0) {
	variable3 = variable3 + 1;
	availablePoints = availablePoints - 1;
	document.getElementById('variable3').innerHTML = variable3;
	document.getElementById('availablePoints').innerHTML = availablePoints;
	moneyPerSecondCalc()
}
}

function increase4(){
	if (availablePoints > 0) {
	variable4 = variable4 + 1;
	availablePoints = availablePoints - 1;
	document.getElementById('variable4').innerHTML = variable4;
	document.getElementById('availablePoints').innerHTML = availablePoints;	
	moneyPerSecondCalc()
}
}

//decrease

function decrease1(){
	if (variable1 >= 1) {
		variable1 = variable1 - 1;
		availablePoints = availablePoints + 1;
		document.getElementById('variable1').innerHTML = variable1;
		document.getElementById('availablePoints').innerHTML = availablePoints;
		moneyPerSecondCalc()		
	}
}

function decrease2(){
	if (variable2 >= 1) {
		variable2 = variable2 - 1;
		availablePoints = availablePoints + 1;
		document.getElementById('variable2').innerHTML = variable2;
		document.getElementById('availablePoints').innerHTML = availablePoints;	
		moneyPerSecondCalc()
	}
}

function decrease3(){
	if (variable3 >= 1) {
		variable3 = variable3 - 1;
		availablePoints = availablePoints + 1;
		document.getElementById('variable3').innerHTML = variable3;
		document.getElementById('availablePoints').innerHTML = availablePoints;	
		moneyPerSecondCalc()
	}
}

function decrease4(){
	if (variable4 >= 1) {
		variable4 = variable4 - 1;
		availablePoints = availablePoints + 1;
		document.getElementById('variable4').innerHTML = variable4;
		document.getElementById('availablePoints').innerHTML = availablePoints;
		moneyPerSecondCalc()
	}
}



window.setInterval(function(){
moneyPerSecondTick();
pointDecreaser();
hacker();
}, 1000);
