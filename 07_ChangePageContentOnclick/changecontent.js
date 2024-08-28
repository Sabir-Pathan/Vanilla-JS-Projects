let buttons = document.querySelector('.button-main')
let texts = document.querySelectorAll('.content-text')
let h3 = document.querySelector('h3')

let hometext = document.querySelector('#home-text')
let abouttext = document.querySelector('#about-text')
let moretext = document.querySelector('#more-text')
hometext.style.display = 'block' ;

let displayNone =()=>{

    texts.forEach(elem => {
        
        elem.style.display = 'none'
        console.log(elem);
        
    });
} 
buttons.addEventListener ('click',(event)=>{
    let id = event.target.id;
    
    if(id === 'home')
        {
            displayNone()
            hometext.style.display = 'block' ;
}
else if(id === 'about')
    {
        displayNone()
        abouttext.style.display = 'block' ;
}
else
    {
        displayNone()
        moretext.style.display = 'block' ;
}
});



