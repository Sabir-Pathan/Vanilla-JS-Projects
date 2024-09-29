let score = document.getElementById('score');
let btns = document.getElementById('btns');
let gameLevel =0;
let userSeq = [];
let gameSeq = [];
let gameStatus = false;





btns.addEventListener('click',(elem)=>{

    if(gameStatus === false){

        gameLevel ++;
        score.innerText =`Level : ${gameLevel}`;
        gameStatus=true;   
    }
    else{
        console.log('game already started');
        
    }

    // console.log(elem.target);
    
});
function flashBtn(){

} 
