import { Component, OnInit } from '@angular/core';
import { PiscineService } from '../piscine.service';
import { Valve } from './valve.entity';

@Component({
    selector: 'shed',
    templateUrl: 'app/piscine/shed/shed.component.html',
    styleUrls: ['app/piscine/shed/shed.component.css'],
    providers:[PiscineService]
})

export class ShedComponent implements OnInit {
    public title: string;
    public valves: Valve[];
    public selectedValve: Valve;

    constructor(private piscineService: PiscineService){}

    public ngOnInit(){
        this.title='Présentation du cabanon';
        this.piscineService.getValves().then(valves => this.valves = valves);
    }

    public onSelect(valve: Valve){
        this.selectedValve = valve;
    }

}