/**
 * Created by ranwahle on 5/30/15.
 */
var Fetch;
(function (Fetch_1) {
    var Fetch = (function () {
        function Fetch() {
            this.getAllTodos = function () {
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
            this.addToDo = function (todo) {
                var promise = fetch('/SDPToDo-Server/api/todo', {
                    method: 'post',
                    //body: todo,
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(todo)
                });
                return promise;
            };
        }
        return Fetch;
    })();
    Fetch_1.Fetch = Fetch;
})(Fetch || (Fetch = {}));
