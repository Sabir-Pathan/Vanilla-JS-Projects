const btn = document.getElementById('btn');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');



let image1 = img1.src;
let image2 = img2.src;

btn.addEventListener('click', () =>{

    if(img1.src != image2 && img2.src != image1){
        img1.src = image2;
        img2.src = image1; 

    }
    else {
       
        img1.src = image1;
        img2.src = image2; 
    }
    
    
});