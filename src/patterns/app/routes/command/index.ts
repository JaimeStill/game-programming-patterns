import { Route } from '@angular/router';
import { CommandRoute } from './command.route';

export const CommandComponents = [
    CommandRoute
];

export const CommandRoutes: Route[] = [
    { path: 'command', component: CommandRoute }
]
