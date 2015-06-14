import {Component, View, bootstrap, NgFor, NgIf} from 'angular2/angular2';

import  {Fetch} from './Fetch'

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
class Todo{
    Title: string;
    Description: string;
}

@Component({
    selector: 'display',
    bind: {Todos : 'Todos'}

})
@View({
    templateUrl: 'partials/todo.html',

   directives: [NgFor, NgIf]
})


class DisplayComponent {
    myName: string;
    todos: Array<Todo>;
    fetch: any;

    constructor() {
        var self = this;
        this.myName = "Ran";
        this.fetch = new Fetch();
        this.todos =[];

        Object.defineProperty(this, 'ToDos',{
            get: function()
            {
                return this.todos;
            },
            set: function(value)
            {
                this.todos = value;


            },
            enumerable: true

        } );

        this.getAllTasks();



    }

    getAllTasks = function()
    {
        var self = this, promise = this.fetch.getAllTodos();


        promise.then(function(response)
        {
            if (response.ok)
            {
                response.json().then(function(todos)
                {

                    self.ToDos = todos;

                });
            }
        });

    }

    addTodo = function(todoTitleInput, todoDescriptionInput, todoDuedateInput){
        var self = this,
            todoItem = {Title: todoTitleInput.value,
                          Description: todoDescriptionInput.value,
                DueDate:todoDuedateInput.value };
        this.ToDos.push(todoItem);
        var promise =  this.fetch.addToDo(todoItem);

        promise.then(function(response)
        {
            todoTitleInput.value = '';
            todoDescriptionInput.value = '';
            todoDuedateInput.value = '';
            self.getAllTasks();
        });

    }
}


//bootstrap(MyAppComponent);
bootstrap(DisplayComponent);