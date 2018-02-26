window.onload = function()
{

		document.onkeydown = checkKey;

		var BposTR = {'x':200,'y':200}; // position en temps réel de la bille
		var BposTP = {'x':199,'y':201}; // position d'avant la position 
		var Bvitesse = 1;
		var Billbool = false;
		//console.log("BposTR"+BposTR);
		//console.log("BposTP"+BposTP);
		//console.log("BposTR"+BposTR['x']);
		//console.log("BposTP"+BposTP['x']);
		var bille = {	
						'BpositionTR':BposTR,
						'BpositionTP':BposTP,
						'Bvitesse':Bvitesse,
						'Billbool':Billbool
					};
		//console.log("TestposTR"+bille.BpositionTP['y']);


		var tabP1 = [];
		var tabP2 = [];
		var positionX = 50;
		var positionXp2 = 350;
		var hauteurBarre = 100;
		var posStarty = 25;
		var posStarty1 = 250;

		var winnerball = 'noone';




		function remplirTABplayer(positionX,hauteurBarre,tabaremplir,posStarty){
			for (var i = 0; i < hauteurBarre+1; i++) {
				var tx = positionX;
				var ty = i+posStarty;
				var nouveaupointTR = {'x':tx,'y':ty};
				tabaremplir[i] = nouveaupointTR;
				//console.log("tableauP "+tabaremplir[i]['y']+" valeur i"+i);
				
			}
		}

		remplirTABplayer(positionX,hauteurBarre,tabP1,posStarty1);
		remplirTABplayer(positionXp2,hauteurBarre,tabP2,posStarty);



		    var canvas = document.getElementById("canvas");
		    if(!canvas)
		    {
		        alert(" canvas erreur");
		        return;
		    }
		    
		    var context = canvas.getContext("2d");
		    if(!context)
		    {
		        alert("Impossible de récupérer le context");
		        return;
		    }
		        
		    var diametreBalle = 10;
		    
		    var posX = bille.BpositionTR['x']; //300+diametreBalle/2;
		    //console.log(posX);
		    var tp = 300+diametreBalle/2;
		    //console.log('val avant '+tp);
		    var posY = bille.BpositionTR['y'];  //200+diametreBalle/2;
		    //console.log(posY);
		    tp = 200+diametreBalle/2;
		    //console.log('val avant '+tp);
		    var vitesseX = 1;
		    var vitesseY = 1;
		    



		function movebille(objbille){

					var deplaceX = objbille.BpositionTR['x'] - objbille.BpositionTP['x'];
					var deplaceY = objbille.BpositionTR['y'] - objbille.BpositionTP['y'];
					//console.log(deplaceX);
					//console.log(deplaceY);
						tpx = objbille.BpositionTP['x'];
						tpy = objbille.BpositionTP['y'];

						objbille.BpositionTP['x']=objbille.BpositionTR['x'];
						objbille.BpositionTP['y']=objbille.BpositionTR['y'];	

						objbille.BpositionTR['x']=objbille.BpositionTR['x']+deplaceX;	
						objbille.BpositionTR['y']=objbille.BpositionTR['y']+deplaceY;
						//console.log(objbille.BpositionTR['x']);
		}

		function RebondP1(objbille){
			//if (objbille.BpositionTR['x'] == 50) {
					var deplaceY = objbille.BpositionTR['y'] - objbille.BpositionTP['y'];
						tpx = objbille.BpositionTP['x'];
						tpy = objbille.BpositionTP['y'];

						objbille.BpositionTP['x']=objbille.BpositionTR['x'];
						objbille.BpositionTP['y']=objbille.BpositionTR['y'];	

						objbille.BpositionTR['x']=tpx;	
						objbille.BpositionTR['y']=objbille.BpositionTR['y']+deplaceY;
			//}
		}

		function RebondTOP(objbille){
				//if (objbille.BpositionTR['y'] == 0) {
					var deplaceX = objbille.BpositionTR['x'] - objbille.BpositionTP['x'];
					
						tpx = objbille.BpositionTP['x'];
						tpy = objbille.BpositionTP['y'];

						objbille.BpositionTP['x']=objbille.BpositionTR['x'];
						objbille.BpositionTP['y']=objbille.BpositionTR['y'];	

						objbille.BpositionTR['x']=objbille.BpositionTR['x']+deplaceX;	
						objbille.BpositionTR['y']=tpy;

			//}

		}

		function RebondP2(objbille){
				//if (objbille.BpositionTR['x'] == 350) {
					var deplaceY = objbille.BpositionTR['y'] - objbille.BpositionTP['y'];
						tpx = objbille.BpositionTP['x'];
						tpy = objbille.BpositionTP['y'];

						objbille.BpositionTP['x']=objbille.BpositionTR['x'];
						objbille.BpositionTP['y']=objbille.BpositionTR['y'];	

						objbille.BpositionTR['x']=tpx;	
						objbille.BpositionTR['y']=objbille.BpositionTR['y']+deplaceY;
			//}
		}

		function RebondBOTT(objbille){
				//if (objbille.BpositionTR['y'] == 400) {
					var deplaceX = objbille.BpositionTR['x'] - objbille.BpositionTP['x'];
					
						tpx = objbille.BpositionTP['x'];
						tpy = objbille.BpositionTP['y'];

						objbille.BpositionTP['x']=objbille.BpositionTR['x'];
						objbille.BpositionTP['y']=objbille.BpositionTR['y'];	

						objbille.BpositionTR['x']=objbille.BpositionTR['x']+deplaceX;	
						objbille.BpositionTR['y']=tpy;

			//}
		}



		function billeADV(objbille,tabP1,tabP2){
			//console.log(objbille.BpositionTR['x']);
			//console.log(objbille.BpositionTR['y']);

			var win = 'noone';
			var result = false;

			if (objbille.BpositionTR['x'] == 50) {
				//if !tabP1
				//P2win ball
				// win = P2;
				result = P2winball(objbille,tabP1);
				if (!result) {
					RebondP1(objbille);
				}
				else
				{
					win = 'P2';
					
				}
			}
			else if (objbille.BpositionTR['y'] == 0) {
					RebondTOP(objbille);
				}
				else if (objbille.BpositionTR['x'] == 350) {
						//if !tabP2
						//P1win ball
						//win = P1;
						result = P2winball(objbille,tabP2);
						if (!result) {
							RebondP2(objbille);
						}
						else
						{
							win = 'P1';
							
						}
					}
					else if (objbille.BpositionTR['y'] == 400){
							RebondBOTT(objbille);
						}
						else{
							movebille(objbille);
							//console.log(objbille.BpositionTR['x']);
						}
			return win;

			conole.log(scorePlayer1)
		}

		//var winner = billeADV(bille,tabP1,tabP2);
		//console.log('winner '+winner);
		//console.log(bille.BpositionTR['x']);
		//console.log(bille.BpositionTR['y']);


		//P1 winBall
		function P1winball(objbille,tabP2){
			//console.log("p1win");
			var win = true;
			for (var point in tabP2){
				//console.log('point '+point);
				if (tabP2[point]['y'] == objbille.BpositionTR['y']) {
					win = false;
				}
			}
			return win;
		}

		//P2 winBall
		function P2winball(objbille,tabP1){
			//console.log("p2win");
			var win2 = true;
			for (var point in tabP1){
				//console.log('point '+point);
				if (tabP1[point]['y'] == objbille.BpositionTR['y']) {
					win2 = false;
				}
			}
			return win2;	
		}



		// screen game
		    var timer = setInterval(ballanimate, 500/75);
    
    function ballanimate()
    {
    	

        context.clearRect(0, 0, canvas.width, canvas.height); //refresh canvas

        //Tracé du filet
        context.fillRect(200, 0, 1, 400);

        

        //Tracé de la balle
        context.beginPath();
        context.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
        
        //console.log("in");
        affichP1(tabP1);
        affichP1(tabP2);
		context.fill();

        var winner = billeADV(bille,tabP1,tabP2);
        //console.log(winner);


        if (winner == 'P1') {
        	clearInterval(timer);
        function scoreP1(){
        		if (win == 'noone') {
        			scorePlayer1+=1;
        			console.log(scorePlayer1);

        		}
			 }
        }

        if (winner == 'P2') {
        	clearInterval(timer);
        	function scoreP2(){
        		if (win == 'P2') {
        			scorePlayer2+=1;
        			console.log(scorePlayer2);
        		}

        	}
        }

        var couleur = context.createLinearGradient(0,0,400,100);//Délimitation du début et de la fin de la couleur.

        couleur.addColorStop(0,"#FFFFFF");//Ajout d'une première couleur.
        couleur.addColorStop(1,"#FAF111");//Ajout de la seconde couleur.
        context.fillStyle = couleur;
        
 /*       //On va vérifier si la balle à toucher l'un des bords du canvas.
        if(posX+diametreBalle/2 >= canvas.width || posX <= 0+diametreBalle/2)//Si on touche le bord gauche ou droit
        {
            vitesseX *= -1;//On inverse la vitesse de déplacement sur l'axe horizontal.
        }

        if(posY+diametreBalle/2 >= canvas.height || posY <= 0+diametreBalle/2)//Si on touche le bord du bas ou du haut
        {
            vitesseY *= -1;//On inverse la vitesse de déplacement sur l'axe vertical.
        }
  */     
        //On additionne les vitesses de déplacement avec les positions
        posX = bille.BpositionTR['x'];
       
        posY = bille.BpositionTR['y'];
    }

    function affichP1(tabP1){
    	context.fillRect(tabP1[0]['x'], tabP1[0]['y'], 1, hauteurBarre);
    }

    function affichP2(tabP2){
    	context.fillRect(tabP2[0]['x'], tabP2[0]['y'], 1, hauteurBarre);
    }

	function checkKey(e) {

	    var e = e || window.event;

	    if (e.keyCode == '90') { // touche Z
	        movUpP1(tabP1);
	    }
	    else if (e.keyCode == '83') { // touche S
	        movDownP1(tabP1);
	    }
	    else if (e.keyCode == '38') { // touche UP
	       	movUpP2(tabP2);
	    }
	    else if (e.keyCode == '40') { // touche Down
	        movDownP2(tabP2);
	    }

	}


	function movUpP1(tabP1){

		var tpx = tabP1[0]['x'];  
		var tpy = tabP1[0]['y'];
		console.log(tpy);
		tpy--;
		var tabtp = [];
		tabtp[0] = {
						'x':tpx,
						'y':tpy
					}  
		console.log("1y"+tabP1[1]['y']);			
		console.log("tableau temporaire "+tabtp[0]['y']);
		//console.log(tabtp[0]['x']);
		//console.log(tabtp[0]['y']);
		tabP1.unshift(tabtp[0]);
		console.log(tabP1[0]['y']+"nouveau first");
		var lgtab = 100;//tabP1.lenght;
		console.log("longueur "+lgtab);
		tabP1.splice(lgtab,1);

		
		
		
	}

	function movDownP1(tabP1){
		console.log("downp1");
		var tpx = tabP1[0]['x'];  
		var tpy = tabP1[0]['y'];
		tpy++;
		var tabtp = [];
		tabtp[0] = {
						'x':tpx,
						'y':tpy
					}  

		console.log(tabtp[0]);
		//console.log(tabtp[0]['x']);
		//console.log(tabtp[0]['y']);
		tabP1.push(tabtp[0]);
		tabP1.shift();
	}

	function movUpP2(tabP2){
		var tpx = tabP1[0]['x'];  
		var tpy = tabP1[0]['y'];
		console.log(tpy);
		tpy--;
		var tabtp = [];
		tabtp[0] = {
						'x':tpx,
						'y':tpy
					}  
		console.log("1y"+tabP1[1]['y']);			
		console.log("tableau temporaire "+tabtp[0]['y']);
		//console.log(tabtp[0]['x']);
		//console.log(tabtp[0]['y']);
		tabP1.unshift(tabtp[0]);
		console.log(tabP1[0]['y']+"nouveau first");
		var lgtab = 100;//tabP1.lenght;
		console.log("longueur "+lgtab);
		tabP1.splice(lgtab,1);
		
	}

	function movDownP2(tabP2){
		console.log("downp2");
		var tpx = tabP2[0]['x'];  
		var tpy = tabP2[0]['y'];
		tpy++;
		var tabtp = [];
		tabtp = {
						'x':tpx,
						'y':tpy
					}  
		tabP2.push(tabtp[0]);
		tabP2.shift();			
	}


console.log("qui a gagné la bille "+winnerball);
    
}