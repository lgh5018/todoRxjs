(function() {
    "use strict";

    var todoSubject = window.todoSubject;

    const isEnterKey = e => e.which === 13;
    const valueIsNotEmpty = e => e.target.value.trim().length > 0;

    var $newTodoInput = $("#new-todo-input");
    var newTodoSource = Rx.Observable.fromEvent($newTodoInput, "keydown")
        .filter(isEnterKey)
        .filter(valueIsNotEmpty)
        .map(e => new TodoModel(e.target.value.trim()));

    newTodoSource.subscribe(todo => todoSubject.add(todo));
    newTodoSource.subscribe(todo => $newTodoInput.val(""));
})();