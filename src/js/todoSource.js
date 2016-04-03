(function() {
    "use strict";

    var todoSubject = window.todoSubject;

    var todoItemTemplate = Handlebars.compile($("#todo-item-template").html());

    class TodoSource {
        constructor(todo) {
            var todoViewModel = {
                id: todo.id,
                title: todo.title,
                className: todo.completed ? "completed" : "",
                completed: todo.completed
            };
            this.$todoItem = $(todoItemTemplate(todoViewModel));

            var $todoToggleInput = this.$todoItem.find(`#todo-toggle-input-${todo.id}`);
            var todoToggleSource = Rx.Observable.fromEvent($todoToggleInput, "change")
                .map(() => {
                    todo.toggle();
                    return todo;
                });
            todoToggleSource.subscribe(todo => todoSubject.update(todo));
        }
    }

    window.TodoSource = TodoSource;
})();