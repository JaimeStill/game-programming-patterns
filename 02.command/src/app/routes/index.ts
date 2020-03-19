import { Route } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { CommandComponent } from './command/command.component';
import { UndoComponent } from './undo/undo.component';

export const RouteComponents = [
  ActorComponent,
  CommandComponent,
  UndoComponent
];

export const Routes: Route[] = [
  { path: 'actor', component: ActorComponent },
  { path: 'command', component: CommandComponent },
  { path: 'undo', component: UndoComponent },
  { path: '', redirectTo: 'command', pathMatch: 'full' },
  { path: '**', redirectTo: 'command', pathMatch: 'full' }
];
