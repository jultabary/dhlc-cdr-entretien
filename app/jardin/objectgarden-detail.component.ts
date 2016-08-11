import { Component, OnInit, Input } from '@angular/core';
import { JardinService } from './jardin.service';
import { GardenComposant } from './entity/composant.entity';

@Component({
    selector: 'detail-objectgarden',
    templateUrl: 'app/jardin/objectgarden-detail.component.html',
    styleUrls: ['app/jardin/objectgarden-detail.component.css'],
    providers:[JardinService]
})

export class ObjectGardenDetail implements OnInit {

    public title: string;
    
    @Input()
    public selected: GardenComposant;

    public ngOnInit(){

    }

    public setSelected(object: GardenComposant){
        this.selected = object;
    }
}