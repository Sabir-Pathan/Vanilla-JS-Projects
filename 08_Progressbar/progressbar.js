let prog = document.querySelector('.progressbar')
let h4 = document.querySelector('h4')

let count = 0;

let stopIntr = setInterval (()=>{
    if(count === 100){
clearInterval (stopIntr)
h4.style.opacity = '1';
    }
    count++;
    prog.style.width = count+ '%';

    
},50)