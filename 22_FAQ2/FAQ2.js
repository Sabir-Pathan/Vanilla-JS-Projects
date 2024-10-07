// traversing DOM OPTION-1
// let QABtn = document.querySelectorAll('.hide-show-Btn');
// let answer = document.querySelectorAll('.answer');
// QABtn.forEach(btn => {
//     btn.addEventListener('click', ()=>{
//         let parent = btn.parentElement.parentElement.parentElement;
//         parent.classList.toggle('active');
        
        
//     })
// });

// Using Selector in DOM OP-2

let FAQ = document.querySelectorAll('.FAQ');

FAQ.forEach((quation)=>{
    
    let btn = quation.querySelector('.hide-show-Btn');
    btn.addEventListener('click',()=>{
        FAQ.forEach((item)=>{
            if(item !== quation){
                item.classList.remove('active')
            }
        })
        quation.classList.toggle('active')
    }); 
})