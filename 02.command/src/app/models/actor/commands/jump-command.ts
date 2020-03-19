import { Actor } from '../actor';
import { ActorCommand } from './actor-command';

export class JumpCommand implements ActorCommand {
  label = 'Jump';
  description = 'Causes the actor to jump';
  execute = (actor: Actor) => actor.jump();
}
