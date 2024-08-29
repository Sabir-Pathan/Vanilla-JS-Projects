const button = document.querySelector('#changeQuote')
const p = document.querySelector('p')
const author = document.querySelector('#author')

let quotes = [{quote:'"The only way to do great work is to love what you do."',  person:'Steve Jobs'},
    {quote:'"Success is not final, failure is not fatal: It is the courage to continue that counts."', person:'Winston Churchill'},
    {quote:'"In the end, we will remember not the words of our enemies, but the silence of our friends."',  person:'Martin Luther King Jr.'},
    {quote:'"Life is what happens when you re busy making other plans."' ,  person:'John Lennon'},
    {quote:'"The best way to predict your future is to create it."', person:'Peter Drucker'}
];




button.addEventListener('click' , ()=>{

    let random = Math.floor(Math.random()*quotes.length);
    // console.log(random) // array ka index milenga


    p.innerHTML = quotes[random].quote;
    author.innerHTML=quotes[random].person

    
    
});
