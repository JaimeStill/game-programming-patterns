import { Route } from '@angular/router';
import { FlyweightRoute } from './flyweight.route';

export const FlyweightComponents = [
    FlyweightRoute
]

export const FlyweightRoutes: Route[] = [
    { path: 'flyweight', component: FlyweightRoute }
]
