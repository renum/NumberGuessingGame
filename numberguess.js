
  

	let game = { "min":1, 
  							"max":10 }; 

  
  document.addEventListener("DOMContentLoaded", 
  														function(){

                                game.output = document.querySelector(".output");
                                game.message = document.querySelector(".message");
                                game.input =  document.querySelector("input");
                                game.btn = document.querySelector("button");
                                game.btn.addEventListener("click",guessValue); 
                                init();
                              }
                            );



function init(){
	game.guesses=0;
	game.num=ranNumber(game.min,game.max);
	let tempmsg=`Guess a number from ${game.min} to ${game.max}`;
  message(tempmsg,"purple");
}


/*Generate random number*/
function ranNumber(min,max){

 	let mathRan=Math.random();  
  mathRan=mathRan*(max-min+1)+min;
  return	Math.floor(mathRan);
}


/*send a message*/
function message(mess,clr){
	game.message.innerText = mess;
  game.message.style.color = clr||"black";
  game.input.style.borderColor=clr||"black";
  game.btn.style.backgroundColor=clr||"black";
  game.btn.style.borderColor=clr||"black";
  game.btn.style.color="white";
 

}


/*onclick function*/

function guessValue(){
	if (game.btn.classList.contains("replay")){
    init();
    game.btn.innerHTML="Guess";
  	game.input.style.display="inline-block";
    game.btn.classList.remove('replay');

  }
  else{
    game.guesses++;
    let tempGuess= game.input.value;
    game.input.value="";
    tempGuess=parseInt(tempGuess);
    if(isNaN(tempGuess)){
      message("Please enter only digits","red");
    }
    else if(tempGuess < game.min || tempGuess > game.max ){
      message("Please enter only a number 1-10", "red");
    }
    else if(tempGuess == game.num){
      message(`You guessed it right  ${game.num}  in  ${game.guesses} guesses.`, "green");
      gameOver();
    }
    else{
      let holder=tempGuess > game.num?{"c":"blue",
      																	"m":"Your guess is higher."}:
                                       {"c":"brown",
                                       	"m":"Your guess is lower. "};
      message(holder.m  , holder.c);

    }
   }
}

function gameOver(){
	game.btn.innerHTML="Restart Game";
  game.input.style.display="none";
  game.btn.classList.add("replay");
  game.max+=5;
	
}
