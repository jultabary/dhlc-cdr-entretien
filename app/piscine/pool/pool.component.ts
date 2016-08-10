import { Component, OnInit } from '@angular/core';
import { ObjectPool } from '../entity/object.entity';
import { PiscineService } from '../piscine.service';
import { ObjectPoolDetail } from '../shed/objectpool-detail.component'

@Component({
    selector: 'pool',
    templateUrl: 'app/piscine/pool/pool.component.html',
    styleUrls: ['app/piscine/pool/pool.component.css'],
    providers:[PiscineService],
    directives:[ObjectPoolDetail]
})

export class PoolComponent implements OnInit {
    public title: string;
    public objectspool: ObjectPool[];
    public selectedObject: ObjectPool;

    constructor(private piscineService: PiscineService){}

    public ngOnInit(){
        this.title = 'Présentation du bassin';
        this.piscineService.getObjectsPool().then(objects => this.objectspool = objects);
    }

    public onSelect(pool: ObjectPool){
        this.selectedObject = pool;
    }

}