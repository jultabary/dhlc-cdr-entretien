import { Injectable, OnInit } from '@angular/core';
import { Valve } from './shed/valve.entity';
import { VALVES } from './shed/mock-valves';
import { COMPOSANTS } from './entity/mock-composant.entity';
import { POOL_COMPOSANTS } from './entity/mock-composant.entity'; 

@Injectable()
export class PiscineService {

    getValves() {
        return Promise.resolve(VALVES);
    }

    getShedComposants() {
        return Promise.resolve(COMPOSANTS);
    }

    getObjectsPool() {
        return Promise.resolve(POOL_COMPOSANTS);
    }

}