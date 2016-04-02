(function() {
    "use strict";

    var todoSubject = window.todoSubject;

    var ENTER_KEY = 13;

    var $newTodoInput = $("#new-todo-input");
    var newTodoSource = Rx.Observable.fromEvent($newTodoInput, "keydown")
        .filter(e => e.keyCode === ENTER_KEY)
        .map(e => e.target.value.trim())
        .filter(title => title.length > 0)
        .map(title => ({
            title: title,
            completed: false
        }));

    newTodoSource.subscribe(newTodo => {
        var todoList = todoSubject.getValue();
        todoList.push(newTodo);
        todoSubject.onNext(todoList);
    });
    newTodoSource.subscribe(todo => $newTodoInput.val(""));

    window.newTodoSource = newTodoSource;
})();