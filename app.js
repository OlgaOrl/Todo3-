const express = require('express');
const app = express();
const PORT = 3000;

// Обслуживание статических файлов (например, index.html, style.css, app.js)
app.use(express.static(__dirname));

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${3000}`);
});

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
