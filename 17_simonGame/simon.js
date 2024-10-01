// array for store user & game sequance
let userSeq = [];
let gameSeq = [];
// array for declaire all button class name
let btnColorClassName = ['red' , 'green' , 'blue' , 'yellow'];
// variable declaration for level count
let level = 0;
// variable for start game
let gameStatus = false;
// HTML element selector
let btns = document.getElementById('btns');
let score = document.getElementById('score');
let btnStartGame = document.getElementById('Start-Game');

// start Game

btnStartGame.addEventListener('click',()=>{
    //checking game status
    if(gameStatus===false){

        btnStartGame.innerText='End Game';
        gameStatus=true;

        // call fnc for game next level
        levelUp()
    }else{
    
        resetGame()
    }

});
// fnc for reset Game
function resetGame(){
    btnStartGame.innerText='Start Game';
        gameStatus=false;
        level=0;
        score.innerText='Click on Start Button to start Game';
        userSeq=[];
        gameSeq=[];
        document.body.style.backgroundColor='red';
        setTimeout(()=>{

            document.body.style.backgroundColor='white';
        },350);
}

//level Up fnc creation

function levelUp (){
    userSeq=[];
    level++;
    score.innerText=`Level : ${level}`;

    // random button selection for flash
    let randomNumber = Math.floor(Math.random()*4);
    let randomClassName = btnColorClassName[randomNumber];
    let randomBtn = document.querySelector(`.${randomClassName}`);
    // console.log(randomBtn);
    //adding random class name in game sequance
    gameSeq.push(randomClassName);
    console.log(gameSeq);
    // calling fnc for flash random button and passing random button as a argument
    gameFlashBtn(randomBtn)
};


// gameFlashBtn fnc Creation and accepting random button as a parameter

function gameFlashBtn (btn){
    // adding flash class dynamicaly     
    btn.classList.add('btnflash');

    // removing flash class
    setTimeout(()=>{
        btn.classList.remove('btnflash')
    },450);
};

// adding click event on buttons parent
btns.addEventListener('click',(btn)=>{
    // variable creation for save target button id
    let targetBtn = btn.target.id;
    //adding click id name in game user sequance
    userSeq.push(targetBtn);   
console.log(userSeq);

//creating fnc for compairing userSeq and gameSeq

checkAns(userSeq.length-1);

});

function checkAns(indx){
    // let indx = level;
    if(gameSeq[indx]===userSeq[indx]){
        if(gameSeq.length === userSeq.length){

            // console.log(`gameSeq Indx${gameSeq[indx]} , userSeq Indx${userSeq[indx]}`);
             
            // delay in levelup fnc call
            setTimeout(levelUp,450)
        
        }
    }
    else{
        score.innerText=`Game Over ! Your Final Score Is: ${level}`;
        document.body.style.backgroundColor='red';
        setTimeout(()=>{

            document.body.style.backgroundColor='white';
        },350);
        
    }
}
