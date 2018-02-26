var BpositionTR = {'x':200,'y':200}; // position en temps réel de la bille
var BpositionTP = {'x':201,'y':200}; // position d'avant la position 
var Bvitesse = 1;
var Billbool = false;
console.log("BposTR"+BpositionTR);
console.log("BposTP"+BpositionTP);
console.log("BposTR"+BpositionTR['x']);
console.log("BposTP"+BpositionTP['x']);
var bille = {	
				'BposTR':BpositionTR,
				'BposTP':BpositionTP,
				'Bvit':Bvitesse,
				'Bbool':Billbool
			};
console.log("TestposTR"+bille.BposTP['y']);


var tabP1 = [];
var tabP2 = [];
var positonX = 50;
var hauteurBarre = 10;
posStarty = 150;


function remplirTABplayer(positionX,hauteurBarre,tabaremplir,posStarty){
	for (var i = 0; i < hauteurBarre; i++) {
		var tx = positionX;
		var ty = i+posStarty;
		var nouveaupointTR = {'x':tx,'y':ty};
		tabaremplir[i] = nouveaupointTR;
		console.log("tableauP "+tabaremplir[i]['y']+" valeur i"+i);
		
	}
}

remplirTABplayer(positonX,hauteurBarre,tabP1,posStarty);

