import { Component, OnInit, Input } from '@angular/core';
import { PiscineService } from '../piscine.service';
import { Valve } from './valve.entity';
import { ObjectPool } from '../entity/object.entity';

@Component({
    selector: 'detail-objectpool',
    templateUrl: 'app/piscine/shed/objectpool-detail.component.html',
    styleUrls: ['app/piscine/shed/objectpool-detail.component.css'],
    providers:[PiscineService]
})

export class ObjectPoolDetail implements OnInit {

    public title: string;
    
    @Input()
    public selected: ObjectPool;

    public ngOnInit(){

    }

    public setSelected(object: ObjectPool){
        this.selected = object;
    }
}