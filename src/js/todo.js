(function() {
    "use strict";

    var todos = [{
        title: "Taste Javascript",
        completed: true
    }, {
        title: "Buy a unicorn",
        completed: false
    }];

    var todoItemTemplate = Handlebars.compile($("#todo-item-template").html());
    var $todoList = $("#todo-list");

    todos
        .map(todo => ({
            title: todo.title,
            className: todo.completed ? "completed" : ""
        }))
        .forEach(todo => $todoList.append(todoItemTemplate(todo)));
})();