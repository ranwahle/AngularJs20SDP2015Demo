import {Component, View, bootstrap, For, If} from 'angular2/angular2';


@Component({
    selector: 'my-element'
})
@View({
    template: '<h1>Hello {{ name }}</h1>' +
        '<input type="text" [value]="name" #nameinput ' +
    '(change)="name = nameinput.value" />'

})
// Component controller
class MyAppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2.0';


    }


}

bootstrap(MyAppComponent);