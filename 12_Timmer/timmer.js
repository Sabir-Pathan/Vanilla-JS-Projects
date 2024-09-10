// variable for buttons

let startStopBtn = document.getElementById('startStopBtn')
let resetBtn = document.getElementById('resetBtn')

// variable for timmer

let second = 0;
let minutes = 0;
let hourse = 0;

// variable for leading timmer

let leadingSecond = 0;
let leadingMinutes = 0;
let leadingHourse = 0;


// variable for stop clearInterval

let clInterval;

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
    leadingHourse = hourse;

}


    let displayTimmer = document.getElementById('timmer').innerText = hourse + ':' + minutes + ':' + leadingSecond ;

}

// setInterval(stopWatch , 100)

startStopBtn.addEventListener('click', ()=>
    {
        console.log('startStopbtn click huva');
        clInterval= setInterval(stopWatch , 100)
        
        
    });


resetBtn.addEventListener('click', ()=>{
    // console.log('reset click huva');
   clearInterval(clInterval)


    
    
})