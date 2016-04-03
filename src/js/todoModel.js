(function(){
    "use strict";

    class TodoModel {
        constructor(title, completed = false) {
            this.id = _.uniqueId();
            this.title = title;
            this.completed = completed;
        }

        toggle() {
            this.completed = !this.completed;
        }
    }

    window.TodoModel = TodoModel;
})();