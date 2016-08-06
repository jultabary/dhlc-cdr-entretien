import { Component, OnInit } from '@angular/core';
import { PiscineService } from '../piscine.service';
import { Valve } from './valve.entity';
import { ShedComposant } from '../entity/composant.entity';
import { ObjectPool } from '../entity/object.entity';
import { ObjectPoolDetail } from './objectpool-detail.component'

@Component({
    selector: 'shed',
    templateUrl: 'app/piscine/shed/shed.component.html',
    styleUrls: ['app/piscine/shed/shed.component.css'],
    providers:[PiscineService],
    directives:[ObjectPoolDetail]
})

export class ShedComponent implements OnInit {
    public title: string;
    public valves: Valve[];
    public shedComposants: ShedComposant[];
    public selectedObject: ObjectPool;

    constructor(private piscineService: PiscineService){}

    public ngOnInit(){
        this.title='Présentation du cabanon';
        this.piscineService.getValves().then(valves => this.valves = valves);
        this.piscineService.getShedComposants().then(shedComposants => this.shedComposants = shedComposants);
    }

    public onSelect(pool: ObjectPool){
        this.selectedObject = pool;
    }

}