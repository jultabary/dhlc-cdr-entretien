import { provideRouter, RouterConfig }  from '@angular/router';
import { CustomComponent } from './piscine/custom/custom.component';
import { PoolComponent } from './piscine/pool/pool.component';
import { ShedComponent } from './piscine/shed/shed.component';
import { HomeComponent } from './home/home.component';

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
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];