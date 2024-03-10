let boxNewTask = document.getElementById('form-task-new')
let boxCompletedTask = document.getElementById('form-task-completed')
let textNewTask = document.getElementById('new-task')
let buttonNewTask = document.getElementById('button-task')

buttonNewTask.addEventListener('click', newTask)

function newTask(){
    let newTask = document.createElement('div')
        newTask.className = 'oneTask'
    let newTaskCheck = document.createElement('input')
        newTaskCheck.type = 'checkbox'
        newTaskCheck.className = 'checkOneTask'
        // newTaskCheck.addEventListener('change', moveTask)

    let newLabelTask = document.createElement('label')
        newLabelTask.innerText = 'textNewTask'

    boxNewTask.appendChild(newTask)
    newTask.appendChild(newLabelTask)
    newTask.appendChild(newTaskCheck)
}
