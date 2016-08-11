import { Component, OnInit } from '@angular/core';
import { Customs } from '../entity/customs.entity';
import { PiscineService } from '../piscine.service';


@Component({
    selector: 'custom',
    templateUrl: 'app/piscine/custom/custom.component.html',
    styleUrls: ['app/piscine/custom/custom.component.css'],
    providers: [PiscineService]
})

export class CustomComponent implements OnInit {
    public title: string;
    public selects: Customs[];

    public constructor(private service:PiscineService){

    }

    public ngOnInit(){
        this.title='Mode de configuration de la Piscine';
        this.service.getCustomsSelect().then(customs => this.selects = customs);
    }

}