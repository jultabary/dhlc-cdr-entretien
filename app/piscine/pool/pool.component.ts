import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'pool',
    templateUrl: 'app/piscine/pool/pool.component.html',
    styleUrls: ['app/piscine/pool/pool.component.css']
})

export class PoolComponent implements OnInit {
    public title: string;

    public ngOnInit(){
        this.title='Présentation du bassin';
    }

}