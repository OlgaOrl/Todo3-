// HTML структура (можно добавить в index.html):
// <div id="app">
//     <h1>To-Do Rakendus</h1>
//     <input id="taskInput" type="text" placeholder="Lisa uus ülesanne">
//     <button onclick="addTask()">Lisa</button>
//     <ul id="taskList"></ul>
// </div>

// JavaScript:

// Функция для добавления новой задачи
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Palun sisesta ülesanne!');
        return;
    }

    // Создаем новый элемент списка
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    // Добавляем текст задачи
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;
    taskContent.className = 'task-content';
    taskItem.appendChild(taskContent);

    // Кнопка "Отметить как выполнено"
    const doneButton = document.createElement('button');
    doneButton.textContent = 'Tehtud';
    doneButton.onclick = () => markAsDone(taskItem);
    taskItem.appendChild(doneButton);

    // Кнопка "Удалить"
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Kustuta';
    deleteButton.onclick = () => deleteTask(taskItem);
    taskItem.appendChild(deleteButton);

    // Добавляем элемент в список
    const taskList = document.getElementById('taskList');
    taskList.appendChild(taskItem);

    // Очищаем поле ввода
    taskInput.value = '';
}

// Функция для удаления задачи
function deleteTask(taskItem) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskItem);
}

// Функция для отметки задачи как выполненной
function markAsDone(taskItem) {
    const taskContent = taskItem.querySelector('.task-content');
    taskContent.style.textDecoration = 'line-through'; // Зачеркивание текста
    taskContent.style.color = 'green';

    // Деактивируем кнопки
    const buttons = taskItem.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
}

// Стили CSS (можно добавить в style.css):
/*
#app {
    font-family: Arial, sans-serif;
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}

#taskInput {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
}

button {
    margin-left: 10px;
    padding: 5px 10px;
    cursor: pointer;
}

button:disabled {
    cursor: not-allowed;
    background-color: #ccc;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    margin-bottom: 5px;
}

.task-content {
    flex-grow: 1;
}
*/
