var rockPoints = 0;

var cheater = 0;

function increase(number){
    rockPoints = rockPoints + number;
	cheater = cheater + 1;
    document.getElementById("rockPoints").innerHTML = rockPoints;
};

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
	antiCheat()
}, 1000);
