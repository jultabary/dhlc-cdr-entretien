import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cumulus',
    templateUrl: 'app/house/cumulus/cumulus.component.html',
    styleUrls: ['app/house/cumulus/cumulus.component.css']
})

export class CumulusComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title='Cumulus';
    }

}