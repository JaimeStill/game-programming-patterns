import { Component } from '@angular/core';
import { SnackerService } from '../../services';

import {
    AlertCommand,
    ICommand,
    LogCommand,
    SnackerCommand
} from '../../models';

@Component({
    selector: 'command-route',
    templateUrl: 'command.route.html'
})
export class CommandRoute {
    commands = new Array<ICommand>(
        new AlertCommand(),
        new LogCommand(),
        new SnackerCommand(this.snacker)
    )

    command: ICommand = this.commands[0];

    constructor(
        public snacker: SnackerService
    ) { }

    setCommand = (command: ICommand) => this.command = command;

    compare = (c1: ICommand, c2: ICommand) => c1?.name === c2?.name;
}
