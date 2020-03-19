import { Actor } from '../actor';
import { ActorCommand } from './actor-command';

export class MeleeCommand implements ActorCommand {
  label = 'Melee';
  description = 'Causes the actor to punch';
  execute = (actor: Actor) => actor.melee();
}
