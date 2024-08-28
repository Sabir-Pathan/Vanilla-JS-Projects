let btn = document.querySelector('button');
let resetbtn = document.querySelector('#reset');
let h1 = document.querySelector('h1');

let count =1;
let stopTimer;


let start = ()=>{
    btn.value = 'Stop';
    btn.innerHTML = 'Stop';
   stopTimer = setInterval(()=>{
        h1.textContent = count;
        count++;
    },1000)
}
let stop = ()=>{
    btn.value = 'Start';
    btn.innerHTML = 'Start';
h1.innerHTML = `${count}`;
    
    clearInterval(stopTimer);
}

let reset = ()=>{
    count = 1;
    stop();

}
btn.addEventListener('click',()=>{

    if(btn.value === 'Start'){
        start();
    }
    else {
        stop();
    }
});

resetbtn.addEventListener('click',()=>{
    reset();
    start();
});