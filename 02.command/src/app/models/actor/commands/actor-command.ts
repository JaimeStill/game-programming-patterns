import { Actor } from '../actor';

export interface ActorCommand {
  label: string;
  description: string;
  execute: (actor: Actor) => string;
}
