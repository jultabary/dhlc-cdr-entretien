import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'custom',
    templateUrl: 'app/piscine/custom/custom.component.html',
    styleUrls: ['app/piscine/custom/custom.component.css']
})

export class CustomComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title='Mode de configuration de la Piscine';
    }

}