import { Injectable, OnInit } from '@angular/core';
import { GARDENVALVES } from './entity/mock-garden.entity';

@Injectable()
export class JardinService {

    getGardenValves() {
        return Promise.resolve(GARDENVALVES);
    }

}