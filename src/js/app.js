(function() {
    "use strict";

    var todoSubject = window.todoSubject;
    var TodoSource = window.TodoSource;

    var $todoList = $("#todo-list");

    todoSubject.subscribe(todoList => {
        $todoList.empty();
        todoList
            .map(todo => new TodoSource(todo))
            .forEach(todoSource => $todoList.append(todoSource.$todoItem));
    });
})();