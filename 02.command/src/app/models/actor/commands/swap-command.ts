import { Actor } from '../actor';
import { ActorCommand } from './actor-command';

export class SwapCommand implements ActorCommand {
  label = 'Swap';
  description = 'Causes the actor to swap the equipped weapon';
  execute = (actor: Actor) => actor.swap();
}
