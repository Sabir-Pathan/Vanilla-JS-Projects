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
    if(gameStatus===false){

        btnStartGame.innerText='Exit Game'
        gameStatus=true;
        levelUp()
    }
    else{

    }
});

function levelUp(){
    userSeq=[];
    level++;
    score.innerText=`Level : ${level}`;
    let randomNumber = Math.floor(Math.random()*4);
    let randomClassIndex = btnColorClassName[randomNumber];
    let flashBtn = document.querySelector(`.${randomClassIndex}`);
    gameSeq.push(randomClassIndex);
    console.log(gameSeq);
    

    GameFlashBtn(flashBtn)
};

function GameFlashBtn(flashBtn){
    flashBtn.classList.add('btnflash');
    setTimeout(()=>{
        flashBtn.classList.remove('btnflash')
    },350)
 
}
btns.addEventListener('click',(btn)=>{
let userFlashBtn = btn.target;
// console.log(userFlashBtn);

userFlashBtn.classList.add('user_Flash_Btn');
setTimeout(()=>{
    userFlashBtn.classList.remove('user_Flash_Btn');
},450);
let userclass = userFlashBtn.id;
userSeq.push(userclass)
console.log(userSeq);


checkAns(userSeq.length-1);
});

function checkAns (indx){
    if (gameSeq[indx] === userSeq[indx]) {
        console.log('index match');
        
        if(gameSeq.length == userSeq.length){

            console.log('you are correct level up');
            setTimeout(levelUp,1000)
        }
        
    }
    else{
        console.log('wrong');
        
    }
}