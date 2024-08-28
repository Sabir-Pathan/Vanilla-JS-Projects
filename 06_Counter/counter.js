let btn = document.querySelector('button');
let resetbtn = document.querySelector('#reset');
let h1 = document.querySelector('h1');

let count =1;
let stopTimer; // global variable declaration for timer function


let start = ()=>{
    btn.value = 'Stop';
    btn.innerHTML = 'Stop';
   stopTimer = setInterval(()=>{
        h1.textContent = count;
        count++;
    },1000)
} // function for start counting and change button value start to stop and set interval

let stop = ()=>{
    btn.value = 'Start';
    btn.innerHTML = 'Start';
h1.innerHTML = `${count}`;
    
    clearInterval(stopTimer);
}// creat function for stop counting and change button value and clear interval

let reset = ()=>{
    count = 1;
    stop();

} // create function for reset button and call stop function
btn.addEventListener('click',()=>{

    if(btn.value === 'Start'){
        start();
    }
    else {
        stop();
    }
}); //start and stop button code call start and stop functions 

resetbtn.addEventListener('click',()=>{
    reset();
    start();
}); // reset button code call reset and then start function