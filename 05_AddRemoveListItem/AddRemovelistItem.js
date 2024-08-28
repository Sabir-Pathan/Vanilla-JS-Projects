let add = document.getElementById('add');
let remove = document.getElementById('remove');
let inp = document.querySelector('input');
let ul = document.querySelector('ul');

let li;


add.addEventListener('click', () => {
    
if(inp.value.trim() === ''){}
    else{
        li = document.createElement('li');
        li.textContent = inp.value;
       
        ul.appendChild(li);
        inp.value = '';   
}
})

remove.addEventListener('click', () => {
ul.removeChild(ul.lastChild);

 
})