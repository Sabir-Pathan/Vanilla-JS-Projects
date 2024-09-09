let h1 = document.querySelector('h1')
let btn = document.querySelector('#btn')
let colorBox = document.querySelector('.displaycolor')
let RGBColor;

let colorChanger = ()=>{
let colorR = Math.floor(Math.random()*255);
let colorG = Math.floor(Math.random()*255);
let colorB = Math.floor(Math.random()*255);
 RGBColor = `rgb(${colorR},${colorG},${colorB})`
// console.log(RGBColor);

return RGBColor;

}


btn.addEventListener('click',()=>{
    colorBox.style.backgroundColor = colorChanger();
    // colorBox = colorChanger;
    // console.log('hello');
    h1.innerHTML =`${RGBColor}`
    
})