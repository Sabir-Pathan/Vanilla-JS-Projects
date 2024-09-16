let search = document.getElementById('search');
let persons = document.getElementById('peaple');

// console.log(search.value);

let data = [{name:'sameer' , src:'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D'},
    {name:'sajeed' , src:'https://plus.unsplash.com/premium_photo-1675130119373-61ada6685d63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnN8ZW58MHx8MHx8fDA%3D'},
    {name:'sameera' , src:'https://media.istockphoto.com/id/1345109800/photo/young-beautiful-woman-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=DnF2brjcUICp7eFnToacsNDzWHsw0efE1u0txPqGwaE='},
    {name:'sacha',src:'https://media.istockphoto.com/id/1740247084/photo/closeup-shot-of-a-woman-painting-tiranga-on-her-face-with-a-wide-smile-patriotism-cricket-fan.jpg?s=612x612&w=0&k=20&c=a5p5TtqSzB4X6wOb_HKAHWSIE8tV3EloKlnW2nMelTQ='}
]
let pers = '';
data.forEach(e=>{
    console.log(`${e.name} ,${e.src}`);

pers += `<div id="person">
            <div id='img'>
                <img src="${e.src}">
                </div>
            <h3>${e.name}</h3>
        </div>`
        
    
});
persons.innerHTML = pers ;


let matching;
search.addEventListener('input', ()=>{
    // console.log(search.value);

  matching = data.filter((e)=>{
        return e.name.startsWith(search.value);
        
    })
    let newUser = '';
    matching.forEach(elem=>{
        // console.log(`${e.name} ,${e.src}`);
    
    newUser += `<div id="person">
                <div id='img'>
                    <img src="${elem.src}">
                    </div>
                <h3>${elem.name}</h3>
            </div>`
            
        
    });
    
    persons.innerHTML = newUser ;
})