let personInfo = [
    {Sr_No:1,
        img:'https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
        name:'Zishan Sayyed',
        Designation:'Student',
        Review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam deleniti facilis eaque accusamus! At expedita eveniet, ipsam voluptatem, reiciendis harum officiis illum shdyrf jsdasd cumque ducimus nesciunt deserunt facere velit delectus!'

    },
    {Sr_No:2,
        img:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
        name:'Izan Shaikh',
        Designation:'Student',
        Review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam deleniti facilis eaque accusamus! At expedita eveniet, ipsam voluptatem, reiciendis harum officiis illum cumque ducimus nesciunt deserunt facere velit delectus! akajddh khadh lajsd lajd'

    },
    {Sr_No:3,
        img:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8',
        name:'Furkhan Khan',
        Designation:'Student',
        Review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam deleniti facilis eaque accusamus! At expedita  dhfgh mabdhsd eveniet, ipsam voluptatem, reiciendis harum officiis illum cumque ducimus nesciunt deserunt facere velit delectus!'

    },
    {Sr_No:4,
        img:'https://images.unsplash.com/photo-1615109398623-88346a601842?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4OXx8fGVufDB8fHx8fA%3D%3D',
        name:'Muaaz Pathan',
        Designation:'Student',
        Review:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste totam deleniti facilis eaque accusamus! At expedita eveniet, ipsam voluptatem, reiciendis harum officiis illum cumque ducimus nesciunt deserunt facere velit delectus!'

    },
];
// btn selection
let randomReviewBtn = document.getElementById('random-review');
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

//dom element selection
let img = document.querySelector('#person-img');
let name = document.querySelector('#name');
let designation = document.getElementById('designation');
let text = document.querySelector('#review-txt');


// global variable declaration
let currentIndx = 0;

// DOM load Event Added
window.document.addEventListener('DOMContentLoaded',()=>{
showPerson(currentIndx);
});

// fnc declaration for display person
function showPerson (indx){
let person = personInfo[indx];
 img.src = person.img;
name.textContent = person.name;
designation.textContent = person.Designation;
text.textContent = person.Review;
};

// next person
nextBtn.addEventListener('click',()=>{

    currentIndx++;
    if(currentIndx>personInfo.length -1){
        currentIndx = 0;
    }
    showPerson(currentIndx);
});

// previous person
prevBtn.addEventListener('click',()=>{

    currentIndx--;
    if(currentIndx<0){
        currentIndx = personInfo.length-1;
    }
    showPerson(currentIndx);
});

randomReviewBtn.addEventListener('click',()=>{
    let randomIndx = Math.floor(Math.random()*personInfo.length);
    showPerson(randomIndx);
    
});











