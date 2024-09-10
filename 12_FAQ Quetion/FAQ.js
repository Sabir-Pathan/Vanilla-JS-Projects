

let quationCont = document.querySelectorAll ('.FAQcontaint')

// console.log(quationCont); // sabhi class list ki node list milengi


for(let i =0 ; i<quationCont.length; i++){
    // console.log(quationCont[i]); // sabhi element milenge jis me ye class available hongi.

    quationCont[i].addEventListener('click', function(){
        
        // console.log(quationCont[i]); // jisi bhi element pe click honga o element milenga. 
       
        this.classList.toggle('active')// this key word ki help se konse element pe click huva o element ko grab karege. classList hai oos ki class toggle karenge css me.
    })


    
};


