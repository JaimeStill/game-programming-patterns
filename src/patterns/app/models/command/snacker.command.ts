import { ICommand } from './icommand';
import { SnackerService } from '../../services';

export class SnackerCommand implements ICommand {
    constructor(
        public snacker: SnackerService
    ) { }

    readonly name: string = 'Snacker Command';
    readonly description: string = 'Push a message via the Snacker service';

    execute = (val: string) => this.snacker.sendColorMessage(
        val ? val : this.description,
        ['snacker-indigo']
    )
}
