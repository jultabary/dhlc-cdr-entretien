import { provideRouter, RouterConfig }  from '@angular/router';
import { CustomComponent } from './piscine/custom/custom.component';
import { PoolComponent } from './piscine/pool/pool.component';
import { ShedComponent } from './piscine/shed/shed.component';
import { HomeComponent } from './home/home.component';
import { GardenComponent } from './jardin/jardin.component';
import { CumulusComponent } from './house/cumulus/cumulus.component';
import { WaterComponent } from './house/water/water.component';
import { ElectricityComponent } from './house/electricity/electricity.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'shed',
        component: ShedComponent
    }, {
        path: 'pool',
        component: PoolComponent
    }, {
        path: 'custom',
        component: CustomComponent
    }, {
        path: 'garden',
        component: GardenComponent
    },
    {
        path: 'cumulus',
        component: CumulusComponent
    },
    {
        path: 'house_water',
        component: WaterComponent
    },
    {
        path: 'electricity',
        component: ElectricityComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];