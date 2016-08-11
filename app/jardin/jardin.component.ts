import { Component, OnInit } from '@angular/core';
import { GardenComposant } from './entity/composant.entity';
import { JardinService } from './jardin.service';
import { ObjectGardenDetail } from './objectgarden-detail.component';

@Component({
    selector: 'garden',
    templateUrl: 'app/jardin/jardin.component.html',
    styleUrls: ['app/jardin/jardin.component.css'],
    providers: [JardinService],
    directives:[ObjectGardenDetail]
})

export class GardenComponent implements OnInit {
    public title: string;
    public valves: GardenComposant[];
    public selectedVanne: GardenComposant;

    public constructor(private gardenService:JardinService){

    }

    public ngOnInit(){
        this.title="Arrivées d'eau dans le jardin";
        this.gardenService.getGardenValves().then(valves => this.valves = valves);
    }

    public onSelect(valve:GardenComposant){
        this.selectedVanne = valve;
    }

}