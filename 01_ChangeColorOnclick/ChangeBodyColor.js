const selectBody = document.querySelector('body');
const buttons = document.querySelectorAll ('button');

// console.log(buttons); //receive button node list

buttons.forEach(function (btn){
//   console.log(btn); // received button tag
  
btn.addEventListener('click', function (event) {

    // console.log(event); //on button click received event all details
    // console.log(event.target); // on button click received button tag
    // console.log(event.target.id); // on button click received button id

    if(event.target.id === "gray"){
        selectBody.style.backgroundColor = "gray";
    }
    if(event.target.id === "green"){
        selectBody.style.backgroundColor = "darkgreen";
    }
    if(event.target.id === "black"){
        selectBody.style.backgroundColor = "black";
    }
    if(event.target.id === "red"){
        selectBody.style.backgroundColor = "darkred";
    }
    if(event.target.id === "orange"){
        selectBody.style.backgroundColor = "darkorange";
    }
    
  }); //
  
})
