import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'house-electricity',
    templateUrl: 'app/house/electricity/electricity.component.html',
    styleUrls: ['app/house/electricity/electricity.component.css']
})

export class ElectricityComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title="Tableau Electrique";
    }

}