$(document).ready(function () {
    // Получаем элементы DOM с помощью jQuery
    const taskInput = $('#task');
    const addButton = $('#add-button');
    const taskList = $('#todo-list');
    // Обработчик клика на кнопке добавления дела
    addButton.on('click', addTask);
    // Обработчик нажатия клавиши Enter в поле ввода
    taskInput.on('keyup', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Функция для добавления дела в список
    function addTask() {
        const taskText = taskInput.val().trim();
        if (taskText === '') {
            return;
        }
        // Создаем новый элемент списка с помощью jQuery
        const listItem = $('<li></li>');
        listItem.html(`
    <span>${taskText}</span>
    <button class="remove-button" id="remove">Удалить</button>
    `);
        // Находим кнопку удаления внутри элемента списка и добавляем обработчиксобытия
        listItem.find('.remove-button').on('click', function () {
            $("#window").modal("show");
            $("#delete").on("click", function () {
                listItem.remove();
                $("#window").modal("hide");
            });
        });
        // Добавляем элемент в список и очищаем поле ввода
        taskList.append(listItem);
        taskInput.val('');
    }

});