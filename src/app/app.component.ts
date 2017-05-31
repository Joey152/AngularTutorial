import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/form" routerLinkActive="active">Form</a>
            <a routerLink="/directive-test" routerLinkActive="active">Directive Test</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: [ './app.component.css' ]
})

export class AppComponent {
    title = 'Tour of Heroes';
}
