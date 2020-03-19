import { Component } from '@angular/core';

import {
  AlertCommand,
  Command,
  LogCommand,
  SnackerCommand
} from '../../models';

import { MatSelectChange } from '@angular/material/select';
import { SnackerService } from '../../services';

@Component({
  selector: 'command-route',
  templateUrl: './command.component.html',
})
export class CommandComponent {
  commands = new Array<Command>(
    new AlertCommand(),
    new LogCommand(),
    new SnackerCommand(this.snacker)
  );

  command: Command = new SnackerCommand(this.snacker);

  constructor(
    public snacker: SnackerService
  ) { }

  setCommand = (event: MatSelectChange) => this.command = event.value;

  compareCommands = (c1: Command, c2: Command) => c1 && c2 && c1.label === c2.label;
}
