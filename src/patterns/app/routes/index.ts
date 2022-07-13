import { Route } from '@angular/router';
import { HomeRoute } from './home';

import {
    CommandComponents,
    CommandRoutes
} from './command';

import {
    FlyweightComponents,
    FlyweightRoutes
} from './flyweight';

export const RouteComponents = [
    HomeRoute,
    ...CommandComponents,
    ...FlyweightComponents
]

export const Routes: Route[] = [
    ...CommandRoutes,
    ...FlyweightRoutes,
    { path: '', component: HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
]
