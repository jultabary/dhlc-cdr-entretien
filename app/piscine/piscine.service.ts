import { Injectable, OnInit } from '@angular/core';
import { Valve } from './shed/valve.entity';
import { VALVES } from './shed/mock-valves';

@Injectable()
export class PiscineService {

    getValves() {
        return Promise.resolve(VALVES);
    }

}