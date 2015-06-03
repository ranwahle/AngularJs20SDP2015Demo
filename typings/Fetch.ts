/**
 * Created by ranwahle on 5/30/15.
 */

    module Fetch {
    export class Fetch {


        getAllTodos = function () {
            //   console.log('something');
            var promise = fetch('/SDPToDo-Server/api/todo');
            //.then(function (response) {
            //    if (response.ok) {
            //        response.json().then(function (json) {
            //          return json;
            //        });
            //    }
            //});

            return promise;

        };
        addToDo = function(todo)
        {
            var promise = fetch('/SDPToDo-Server/api/todo',{
                method: 'post',

                //body: todo,
                headers: {
                    "Content-type": "application/json"
                    //"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                },
                body: JSON.stringify(todo)

            });

            return promise;
        }


    }

}

