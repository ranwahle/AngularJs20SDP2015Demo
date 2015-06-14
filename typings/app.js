if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var Fetch_1 = require('./Fetch');
//// Annotation section
//Component({
//    selector: 'my-app'
//})
//View({
//    template: '<h1>Hello {{ name }}</h1>' +
//        '<input type="text" (value)="name"/>'
//})
//// Component controller
//class MyAppComponent {
//    name: string;
//
//    constructor() {
//        this.name = 'Angular';
//
//
//    }
//
//
//}
var Todo = (function () {
    function Todo() {
    }
    return Todo;
})();
var DisplayComponent = (function () {
    function DisplayComponent() {
        this.getAllTasks = function () {
            var self = this, promise = this.fetch.getAllTodos();
            promise.then(function (response) {
                if (response.ok) {
                    response.json().then(function (todos) {
                        self.ToDos = todos;
                    });
                }
            });
        };
        this.addTodo = function (todoTitleInput, todoDescriptionInput, todoDuedateInput) {
            var self = this, todoItem = { Title: todoTitleInput.value,
                Description: todoDescriptionInput.value,
                DueDate: todoDuedateInput.value };
            this.ToDos.push(todoItem);
            var promise = this.fetch.addToDo(todoItem);
            promise.then(function (response) {
                todoTitleInput.value = '';
                todoDescriptionInput.value = '';
                todoDuedateInput.value = '';
                self.getAllTasks();
            });
        };
        var self = this;
        this.myName = "Ran";
        this.fetch = new Fetch_1.Fetch();
        this.todos = [];
        Object.defineProperty(this, 'ToDos', {
            get: function () {
                return this.todos;
            },
            set: function (value) {
                this.todos = value;
            },
            enumerable: true
        });
        this.getAllTasks();
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display',
            bind: { Todos: 'Todos' }
        }),
        angular2_1.View({
            templateUrl: 'partials/todo.html',
            directives: [angular2_1.NgFor, angular2_1.NgIf]
        }), 
        __metadata('design:paramtypes', [])
    ], DisplayComponent);
    return DisplayComponent;
})();
//bootstrap(MyAppComponent);
angular2_1.bootstrap(DisplayComponent);
