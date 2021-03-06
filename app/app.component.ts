import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { CustomComponent } from './piscine/custom/custom.component';
import { PoolComponent } from './piscine/pool/pool.component';
import { ShedComponent } from './piscine/shed/shed.component';
import { HomeComponent } from './home/home.component';
import { GardenComponent } from './jardin/jardin.component';

@Component({
    selector: 'cdr-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css','app/menu.css'],
    directives: [ROUTER_DIRECTIVES],
    precompile: [PoolComponent, ShedComponent, CustomComponent, HomeComponent, GardenComponent]
})

export class AppComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title='Carnet d\'entretien du Clos de Rhynes';
    }

}