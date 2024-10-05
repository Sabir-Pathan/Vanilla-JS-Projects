let openModelBtn = document.querySelector('#openModal-Btn');
let overlay = document.querySelector('.overlay');
let closeOverlyBtn=document.querySelector('.close-Btn');

openModelBtn.addEventListener('click',()=>{
overlay.classList.add('overlay-class');
console.log('clicked');
});

closeOverlyBtn.addEventListener('click',()=>{
    overlay.classList.remove('overlay-class');
});