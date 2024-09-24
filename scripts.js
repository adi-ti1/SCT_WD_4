const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskDateTime = document.getElementById('taskDateTime');
const taskList = document.getElementById('taskList');

taskForm.addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();
    const taskDate = taskDateTime.value;

    if (taskText === '' || taskDate === '') {
        alert('Please fill out both fields');
        return;
    }

    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span>${taskText} (due: ${new Date(taskDate).toLocaleString()})</span>
        <button class="completeBtn">Complete</button>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
    taskDateTime.value = '';

    const completeBtn = taskItem.querySelector('.completeBtn');
    const editBtn = taskItem.querySelector('.editBtn');
    const deleteBtn = taskItem.querySelector('.deleteBtn');

    completeBtn.addEventListener('click', () => taskItem.classList.toggle('completed'));
    editBtn.addEventListener('click', () => editTask(taskItem, taskText, taskDate));
    deleteBtn.addEventListener('click', () => taskList.removeChild(taskItem));
}

function editTask(taskItem, taskText, taskDate) {
    const newTaskText = prompt('Edit task', taskText);
    const newTaskDate = prompt('Edit date and time', taskDate);

    if (newTaskText !== null && newTaskText.trim() !== '' && newTaskDate !== null && newTaskDate.trim() !== '') {
        taskItem.querySelector('span').textContent = `${newTaskText.trim()} (due: ${new Date(newTaskDate).toLocaleString()})`;
    } else {
        alert('Invalid input');
    }
}