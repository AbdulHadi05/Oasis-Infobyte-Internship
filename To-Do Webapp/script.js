function addTask() {
    const taskInput = document.getElementById('newTask');
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const pendingTasks = document.getElementById('pendingTasks');
    const taskItem = createTaskItem(taskText);

    pendingTasks.appendChild(taskItem);
    taskInput.value = '';
}

function handleFileSelect(event) {
    const fileInput = event.target;
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = '';

    Array.from(fileInput.files).forEach(file => {
        const fileItem = document.createElement('div');
        fileItem.innerText = file.name;
        fileList.appendChild(fileItem);
    });
}

function createTaskItem(text) {
    const li = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.innerText = text;

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.onclick = () => completeTask(li);

    const editButton = document.createElement('button');
    editButton.innerText = 'Edit';
    editButton.onclick = () => editTask(li);

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => deleteTask(li);

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('task-buttons');
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);

    li.appendChild(taskSpan);
    li.appendChild(buttonContainer);

    return li;
}

function completeTask(taskItem) {
    const completedTasks = document.getElementById('completedTasks');
    taskItem.classList.add('completed');
    taskItem.querySelector('button').remove(); // Remove the complete button
    completedTasks.appendChild(taskItem);
}

function editTask(taskItem) {
    const newTaskText = prompt('Edit your task', taskItem.firstChild.innerText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.firstChild.innerText = newTaskText;
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}

