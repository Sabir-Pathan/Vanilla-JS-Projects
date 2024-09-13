// variable declaration

let addBtn = document.getElementById('add-Btn');

let taskInput = document.getElementById('task-name');

let taskContainer = document.getElementById('task-Container');

addBtn.addEventListener('click',()=>{

    let task = document.createElement('div')
    task.classList.add('task');

    taskContainer.appendChild(task);  

    let li = document.createElement ('li');
    li.innerText = `${taskInput.value}`; 
    task.append(li);

    let chkBtn = document.createElement('button')  
    chkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
    chkBtn.classList.add('chkTask');
    task.appendChild(chkBtn);

    let trashBtn = document.createElement('button');
    trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`
    trashBtn.classList.add('trash');
    task.appendChild(trashBtn);
    
    taskInput.value = '';


    chkBtn.addEventListener('click',()=>{
        chkBtn.parentElement.style.textDecoration='line-through';
    })

    trashBtn.addEventListener ('click',(e)=>{
        
        console.log(e.target.parentElement.parentElement);
        let target = e.target;
        target.parentElement.parentElement.remove();

        
    })
    
    
})