const form = document.querySelector('form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent default form submission
    // console.log("Form submission");

    const height =parseInt(document.querySelector("#Height").value)
    
    const weight = parseInt(document.querySelector("#Weight").value)

    const result = document.querySelector("#result");
    
    if(height <= 0 || height   === '' || isNaN(height)){

        result.innerHTML = `height is  ${height} please enter valid number`
    }else if(weight <= 0 || weight   === '' || isNaN(weight)){

        result.innerHTML = `weight is  ${weight} please enter valid number`
    }
    else {
        const BMI = weight / (height * height);
        result.innerHTML = `Your BMI is ${BMI.toFixed(2)}`;
        
    }
})