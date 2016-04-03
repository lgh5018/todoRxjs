(function(){
    "use strict";

    class TodoSubject extends Rx.BehaviorSubject {
        add(newTodo) {
            var todoList = this.getValue();
            todoList.push(newTodo);
            this.onNext(todoList);
        }

        update(updatedTodo) {
            var todoList = this.getValue()
                .map(todo => todo.id === updatedTodo.id ? updatedTodo : todo);
            this.onNext(todoList);
        }
    }

    var todoSubject = new TodoSubject([
        new TodoModel("Taste Javascript", true),
        new TodoModel("Buy a unicorn")
    ]);

    window.todoSubject = todoSubject;
})();