(function() {
    "use strict";

    var todoSubject = window.todoSubject;

    var todoItemTemplate = Handlebars.compile($("#todo-item-template").html());
    var $todoList = $("#todo-list");

    todoSubject.subscribe(todoList => {
        $todoList.empty();
        todoList
            .map(todo => ({
                title: todo.title,
                className: todo.completed ? "completed" : ""
            }))
            .forEach(todo => $todoList.append(todoItemTemplate(todo))); 
    });
})();