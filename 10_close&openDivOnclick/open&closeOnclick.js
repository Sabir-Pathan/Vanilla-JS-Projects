const openBtn = document.getElementById('open-popun-btn')
let popup = document.querySelector('.popup')
const closeBtn = document.querySelector('#close-btn')
const container = document.querySelector('.container')

openBtn.addEventListener('click',()=>{
popup.style.visibility = 'visible';
// console.log(e.target.id);


console.log(popup);
})

closeBtn.addEventListener('click',()=>{
    popup.style.visibility='hidden';
})

window.addEventListener('click',(e)=>{
if(e.target === container){
    popup.style.visibility = 'hidden';
}
console.log(e.target);

});
