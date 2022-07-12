import { Route } from '@angular/router';
import { HomeRoute } from './home';

import {
    CommandComponents,
    CommandRoutes
} from './command';

export const RouteComponents = [
    HomeRoute,
    ...CommandComponents
]

export const Routes: Route[] = [
    ...CommandRoutes,
    { path: '', component: HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
]
