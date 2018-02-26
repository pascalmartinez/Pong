var scorePlayer1 =0;
var scorePlayer2=0;
var ttabP1=[];
var ttabP2=[];





var Player1= {

		'scoreP1':scorePlayer1,
		'tabP2':ttabP1
};

var Player2={

		'scoreP2':scorePlayer2,
		'tabP1':ttabP2
	};


	function afficher_score(){

		document.getElementById("player1").innerHTML="<font color=#ff0000> Player 1: </font>" + scorePlayer1+" | "+ "<font color=#0015ff>Player 2: </font>"+ scorePlayer2;
					
		
		}
	

	function ResetFunction() {
        if(scorePlayer1 || scorePlayer2 <=15){
            if(win == 'P1'){
            //changer direction ball relancer
            }else if(win == 'P2'){
                //changer direction ball relancer
            }
        else{
            //match terminé 
            scorePlayer1=0;
            scorePlayer2=0;
        }
        afficher_score();
    }
    }


    

    	



    	

    






	//scorePlayer1.font = "16px Arial";
    //scorePlayer1.fillStyle = "##2e5eb2";
    //scorePlayer1.fillText("Score Player1: "+Player1);
      
    //scorePlayer2.font = "16px Arial";
    //scorePlayer2.fillStyle = "##2e5eb2";
    //scorePlayer2.fillText("Score Player2: "+Player2);
           












