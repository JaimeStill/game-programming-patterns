import { Route } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { CommandComponent } from './command/command.component';

export const RouteComponents = [
  ActorComponent,
  CommandComponent
];

export const Routes: Route[] = [
  { path: 'actor', component: ActorComponent },
  { path: 'command', component: CommandComponent },
  { path: '', redirectTo: 'command', pathMatch: 'full' },
  { path: '**', redirectTo: 'command', pathMatch: 'full' }
];
