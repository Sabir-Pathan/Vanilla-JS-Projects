// variable declaration

let addBtn = document.getElementById('add-Btn');

let taskInput = document.getElementById('task-name');

let todoList = document.getElementsByClassName('todolist');

addBtn.addEventListener('click',()=>{
    let task = document.createElement('div')
    let li = document.createElement ('li');
    li.innerText = taskInput.value;
    task.appendChild(li);
    todoList.appendChild(task)
    
    
})