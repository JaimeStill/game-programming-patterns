import { Component } from '@angular/core';

import {
  Actor,
  ActorCommand,
  FireCommand,
  JumpCommand,
  MeleeCommand,
  SwapCommand,
  Weapon
} from '../../models';

import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'actor-route',
  templateUrl: './actor.component.html',
})
export class ActorComponent {
  actorOne: Actor;
  actorTwo: Actor;

  actorCommands = new Array<ActorCommand>(
    new FireCommand(),
    new JumpCommand(),
    new MeleeCommand(),
    new SwapCommand()
  );

  aCommand: ActorCommand = new JumpCommand();
  bCommand: ActorCommand = new MeleeCommand();
  xCommand: ActorCommand = new FireCommand();
  yCommand: ActorCommand = new SwapCommand();

  oneWeapons = new Array<Weapon>(
    new Weapon('Rifle', 100, 30),
    new Weapon('Shotgun', 30, 60),
    new Weapon('Pistol', 50, 40)
  );

  twoWeapons = new Array<Weapon>(
    new Weapon('Carbine', 80, 35),
    new Weapon('SMG', 40, 20),
    new Weapon('Sniper', 300, 80)
  );

  oneActions = new Array<string>();
  twoActions = new Array<string>();

  constructor() {
    this.actorOne = new Actor('Soldier', 60, this.oneWeapons);
    this.actorTwo = new Actor('Ranger', 80, this.twoWeapons);
  }

  setActorCommand(event: MatSelectChange, command: string) {
    switch (command) {
      case 'b':
        this.bCommand = event.value;
        return;
      case 'a':
        this.aCommand = event.value;
        return;
      case 'x':
        this.xCommand = event.value;
        return;
      case 'y':
        this.yCommand = event.value;
        return;
    }
  }

  compareActorCommands = (c1: ActorCommand, c2: ActorCommand) => c1 && c2 && c1.label === c2.label;

  execute = (command: ActorCommand, actor: Actor, actions: string[]) => {
    if (actions.length >= 4) actions.pop();

    actions.unshift(command.execute(actor));
  }
}
