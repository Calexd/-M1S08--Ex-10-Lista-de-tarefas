let buttonNewTask = document.getElementById('button-task')
let buttonRemoveTask = document.getElementById('button-remove-task')

buttonNewTask.addEventListener('click', newTask)
buttonNewTask.addEventListener('click', () => {
    let textNewTask = document.getElementById('new-task')
    textNewTask.value = ''
})

buttonRemoveTask.addEventListener('click', () => {
    let boxCompletedTask = document.getElementById('form-task-completed')
    let elements = boxCompletedTask.querySelectorAll('input[type="checkbox"]:checked')
    elements.forEach(elements =>{
        elements.parentElement.remove()
    })
})

function newTask(){
    let boxNewTask = document.getElementById('form-task-new')
    let textNewTask = document.getElementById('new-task').value
    let newTask = document.createElement('div')
    newTask.className = 'oneTask'
    
    let newTaskCheck = document.createElement('input')
    newTaskCheck.type = 'checkbox'
    newTaskCheck.className = 'checkOneTask'
    newTaskCheck.addEventListener('change', moveTask)
    
    let newLabelTask = document.createElement('label')
    newLabelTask.innerText= textNewTask
    
    boxNewTask.appendChild(newTask)
    newTask.appendChild(newTaskCheck)
    newTask.appendChild(newLabelTask)
    
}

function moveTask(){
    let boxCompletedTask = document.getElementById('form-task-completed')
    let boxNewTask = document.getElementById('form-task-new')
    let task = this.parentElement

    if (this.checked){
        boxCompletedTask.appendChild(task)
    } else {
        boxNewTask.appendChild(task)
    }
}









