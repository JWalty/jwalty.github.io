
var i = 0;
var character1;
var possibleCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

function cycleCharacter1(){
	character1 = possibleCharacters[Math.round(Math.random() * 25)];
    document.getElementById("character1").innerHTML = character1;	
}

window.setInterval(function(){
	cycleCharacter1()
}, 200);
