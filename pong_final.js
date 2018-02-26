function gameOn ()
{
			///////////  COOKIES  ////////////
		var user=getCookie("username");
	    if (user != "") {
	        alert("Bon retour parmis nous !!! " + user);
	    } else {
	       user = prompt("Votre pseudo :","");
	       if (user != "" && user != null) {
	           setCookie("username", user, 30);
	          }
	    }

	    function getCookie(cname) {
	    var name = cname + "=";
	    var decodedCookie = decodeURIComponent(document.cookie);
	    var ca = decodedCookie.split(';');
	    for(var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') {
	            c = c.substring(1);
	        }
	        if (c.indexOf(name) == 0) {
	            return c.substring(name.length, c.length);
	        }
	    }
	    return "";
		}

		function setCookie(cname,cvalue,exdays) {
			var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires=" + d.toGMTString();
		    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
			}
		///////////////////////////////////////




		document.onkeydown = checkKey;

		var BposTR = {'x':200,'y':200}; // position en temps réel de la bille
		var BposTP = {'x':199,'y':199}; // position d'avant la position 
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
		var hauteurBarre = 20;
		var posStarty = 190;
		var posStarty1 = 190;

		var winnerball = 'noone';




		function remplirTABplayer(positionX,hauteurBarre,tabaremplir,posStarty){
			for (var i = 0; i < hauteurBarre; i++) {
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


		var hitBp1 = 57;
		var hitBp2 = 349;
		var hitBtop = 3;
		var hitBbott = 397;


		function billeADV(objbille,tabP1,tabP2){
			//console.log(objbille.BpositionTR['x']);
			//console.log(objbille.BpositionTR['y']);

			var win = 'noone';
			var result = false;

			if (objbille.BpositionTR['x'] == hitBp1) {
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
			else if (objbille.BpositionTR['y'] == hitBtop) {
					RebondTOP(objbille);
				}
				else if (objbille.BpositionTR['x'] == hitBp2) {
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
					else if (objbille.BpositionTR['y'] == hitBbott){
							RebondBOTT(objbille);
						}
						else{
							movebille(objbille);
							//console.log(objbille.BpositionTR['x']);
						}
			return win;
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
			var win = true;
			for (var point in tabP1){
				//console.log('point '+point);
				if (tabP1[point]['y'] == objbille.BpositionTR['y']) {
					win = false;
				}
			}
			return win;	
		}



		// screen game
		    var timer = setInterval(ballanimate, 500/30);
    
    function ballanimate()
    {
    	
    	context.clearRect(0,0,canvas.width,canvas.height);
        //context.clearRect(posX-50,posY-50,80,80);
		context.beginPath();
        var img = new Image();
        img.src = 'img/ball.png';
        img.onload = function(){
        	context.drawImage(img, posX-8, posY-8);
        }
        

        //Tracé de la balle
        
        //context.arc(posX, posY, diametreBalle/2, 0, Math.PI*2);
        
        //console.log("in");
        //context.fillStyle="#ffffff";
        context.fillStyle="#00AAFE";
        context.fill();
        affichP1(tabP1);
        

        context.fillStyle="#CB00FE";
        context.fill();

        affichP2(tabP2);

        radialball = context.createRadialGradient(0,0,180,20,1,100);
        radialball.addColorStop(0,"yellow");
        radialball.addColorStop(1,"#44FE00");

        context.fillStyle=radialball;
        //context.fillRect(0,0,canvas.width,canvas.height);
        context.fill();

        var winner = billeADV(bille,tabP1,tabP2);


        if (winner == 'P1') {
        	scorePlayer1+=1;
        	//context.fillRect(0,0,canvas.width,canvas.height);
        	afficher_score();
        	if (scorePlayer1==10) {
        		var page = "testSon.html";
        		window.location.href= "endgame1.html";
        	}
        	clearInterval(timer);
        	//gameOn();
        }

        if (winner == 'P2') {
        	scorePlayer2+=1;
        	//context.fillRect(0,0,canvas.width,canvas.height);
        	afficher_score();
        	if (scorePlayer2==10) {
        		var page = "testSon.html";
        		//window.open(page.href,"_self");
        		window.location.href= "endgame2.html";
        	}

        	clearInterval(timer);
        	//gameOn();
        }

        /*var couleur = context.createLinearGradient(0,0,400,100);//Délimitation du début et de la fin de la couleur.

        couleur.addColorStop(0,"#895a00");//Ajout d'une première couleur.
        couleur.addColorStop(1,"#FAF111");//Ajout de la seconde couleur.
        context.fillStyle = couleur;*/
        
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

    	var x=tabP1[0]['x'];
    	var y=tabP1[0]['y'];

    	//context.clearRect(x-50,y-50,80,200);

    	//context.fillRect(tabP1[0]['x'], tabP1[0]['y'], 7, hauteurBarre);
    	
    	var imgp1 = new Image();
        imgp1.src = 'img/p1b.png';
        imgp1.onload = function(){
        	context.drawImage(imgp1, x, y-23);
        }




    }

    function affichP2(tabP2){
    	
		var x=tabP2[0]['x'];
    	var y=tabP2[0]['y'];

    	//context.clearRect(x-50,y-50,80,200);

    	//context.fillRect(tabP2[0]['x'], tabP2[0]['y'], 7, hauteurBarre);
     	

        var imgp2 = new Image();
        imgp2.src = 'img/p2b.png';
        imgp2.onload = function(){
        	context.drawImage(imgp2, x, y-20);
        }   


    }

	function checkKey(e) {

	    var e = e || window.event;

	    if (e.keyCode == '90') { // touche Z
	        movUpP1dix(tabP1);
	    }
	    else if (e.keyCode == '83') { // touche S
	        movDownP1dix(tabP1);
	    }
	    else if (e.keyCode == '38') { // touche UP
	       	movUpP2dix(tabP2);
	    }
	    else if (e.keyCode == '40') { // touche Down
	        movDownP2dix(tabP2);
	    }

	}

function movUpP1dix(tabP1){
	for (var i = 0; i < 13; i++) {
		movUpP1(tabP1);
	}
}


	function movUpP1(tabP1){

		var tpx = tabP1[0]['x'];  
		var tpy = tabP1[0]['y'];
		console.log(tpy);
		tpy--;
		/*var tabtp = [];
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
		var lgtab = hauteurBarre;//tabP1.lenght;
		console.log("longueur "+lgtab);
		tabP1.splice(lgtab,1);*/
		remplirTABplayer(positionX,hauteurBarre,tabP1,tpy);
	}

function movDownP1dix(tabP1){
	for (var i = 0; i < 13; i++) {
		movDownP1(tabP1);
	}
}

	function movDownP1(tabP1){
		console.log("downp1");
		var tpx = tabP1[0]['x'];  
		var tpy = tabP1[0]['y'];
		tpy++;
		/*var tabtp = [];
		tabtp[0] = {
						'x':tpx,
						'y':tpy
					}  

		console.log(tabtp[0]);
		//console.log(tabtp[0]['x']);
		//console.log(tabtp[0]['y']);
		tabP1.push(tabtp[0]);
		tabP1.shift();*/
		remplirTABplayer(positionX,hauteurBarre,tabP1,tpy);
	}

function movUpP2dix(tabP2){
	for (var i = 0; i < 13; i++) {
		movUpP2(tabP2);
	}
}

	function movUpP2(tabP2){
		var tpx = tabP2[0]['x'];  
		var tpy = tabP2[0]['y'];
		console.log(tpy);
		tpy--;
		/*var tabtp = [];
		tabtp[0] = {
						'x':tpx,
						'y':tpy
					}  
		console.log("1y"+tabP2[1]['y']);			
		console.log("tableau temporaire "+tabtp[0]['y']);
		//console.log(tabtp[0]['x']);
		//console.log(tabtp[0]['y']);
		tabP2.unshift(tabtp[0]);
		console.log(tabP2[0]['y']+"nouveau first");
		var lgtab = hauteurBarre;//tabP1.lenght;
		console.log("longueur "+lgtab);
		tabP2.splice(lgtab,1);*/
		remplirTABplayer(positionXp2,hauteurBarre,tabP2,tpy);
		
	}

function movDownP2dix(tabP2){
	for (var i = 0; i < 13; i++) {
		movDownP2(tabP2);
	}
}

	function movDownP2(tabP2){
		console.log("downp2");
		var tpx = tabP2[0]['x'];  
		var tpy = tabP2[0]['y'];
		tpy++;
		/*var tabtp = [];
		tabtp = {
						'x':tpx,
						'y':tpy
					}  
		tabP2.push(tabtp[0]);
		tabP2.shift();*/
		remplirTABplayer(positionXp2,hauteurBarre,tabP2,tpy);		
	}


console.log("qui a gagné la bille "+winnerball);
    
}