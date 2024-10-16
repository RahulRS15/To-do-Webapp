function addTask() {
    const taskInput = document.getElementById('taskInput').value;
    if (taskInput === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskInput;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.onClick = () => completeTask(taskItem);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => deleteTask(taskItem);

    taskItem.appendChild(completeBtn);

    taskItem.appendChild(deleteBtn);

    document.getElementById('pendingTasks').appendChild(taskItem);

    document.getElementById('taskInput').value = '';
}

function completeTask(taskItem){
    taskItem.querySelector('.complete-btn').remove();

    document.getElementById("completedTasks").appendChild(taskItem);
}

function deleteTask(taskItem){
    taskItem.remove();
}