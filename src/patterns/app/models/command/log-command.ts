import { ICommand } from './icommand';

export class LogCommand implements ICommand {
    readonly name: string = 'Log Command';
    readonly description: string = 'Log a command to the console';

    execute = (val: string) => console.log(val ? val : this.description);
}
