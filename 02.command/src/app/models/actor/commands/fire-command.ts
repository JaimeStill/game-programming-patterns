import { Actor } from '../actor';
import { ActorCommand } from './actor-command';

export class FireCommand implements ActorCommand {
  label = 'Fire';
  description = 'Causes the actor to fire the equipped weapon';
  execute = (actor: Actor) => actor.fire();
}
