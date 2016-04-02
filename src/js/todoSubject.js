(function(){
    "use strict";

    var todoSubject = new Rx.BehaviorSubject([{
        title: "Taste Javascript",
        completed: true
    }, {
        title: "Buy a unicorn",
        completed: false
    }]);

    window.todoSubject = todoSubject;
})();