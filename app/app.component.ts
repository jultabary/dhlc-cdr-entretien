import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'cdr-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class AppComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title='Carnet d\'entretien du Clos de Rhynes';
    }

}