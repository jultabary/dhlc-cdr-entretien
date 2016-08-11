import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'house-water',
    templateUrl: 'app/house/water/water.component.html',
    styleUrls: ['app/house/water/water.component.css']
})

export class WaterComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title="Vanne d'arrivée d'eau";
    }

}