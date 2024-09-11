// variable for buttons

let startStopBtn = document.getElementById('startStopBtn')
let resetBtn = document.getElementById('resetBtn')


// variable for timmer

let second = 0;
let minutes = 0;
let hourse = 0;

// variable for leading timer

let leadingSecond = 0;
let leadingMinutes = 0;
let leadingHourse = 0;


// variable for stop clearInterval & timer status

let clInterval=null;
let timerStatus = 'started'

// stop watch function

function stopWatch(){
    second ++; // jaise hi fnc call honga second pluse hona shuru honga

    if(second / 60 === 1){
            second = 0;
            minutes ++;
        }
            if(minutes / 60 === 1){


            minutes = 0;
            hourse ++;
            }

    // adding "0"  before vakue until value not become 10

if(second < 10){
    leadingSecond = '0' + second;
}
else{
    leadingSecond = second;

}

if(minutes < 10){
    leadingMinutes = '0' + minutes;
}

else{
    leadingMinutes = minutes;

}

if(hourse < 10){
    leadingHourse = '0' + hourse;
}

else{
    leadingHourse = hourse;

}

    let displayTimmer = document.getElementById('timer').innerText = leadingHourse + ':' + leadingMinutes + ':' + leadingSecond ;

}
 
startStopBtn.addEventListener('click', ()=>
    {
if(timerStatus === 'started')
{
    console.log('hello')
    clInterval= setInterval(stopWatch , 1);
startStopBtn.innerHTML =`<i class="fa-solid fa-pause" id='pause'></i>`
    timerStatus = 'stop'
}
else {

    clearInterval(clInterval)
    timerStatus = 'started';
    
}
});


resetBtn.addEventListener('click', ()=>{
    
    
    clearInterval(clInterval)
    
    second =0;
    minutes=0;
    hourse=0;
    
    
    document.getElementById('timer').innerText = '00:00:00' ;
    startStopBtn.innerHTML=`<i class="fa-solid fa-play" id="play"></i>`

    
    
})