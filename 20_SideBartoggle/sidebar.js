let toggleBtn = document.querySelector('.nav-btn');
let aside = document.querySelector('aside');

toggleBtn.addEventListener('click',(e)=>{
    aside.classList.toggle('toggle');
    e.stopPropagation();

});


// aside me ke event bubbling ko rokne keliye use kiya gaya
aside.addEventListener('click',(e)=>{
    e.stopPropagation();
})
document.body.addEventListener('click',()=>{
    if(aside && aside.classList.contains('toggle')){

        aside.classList.remove('toggle');
    }
});