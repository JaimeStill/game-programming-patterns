import { ICommand } from './icommand';

export class AlertCommand implements ICommand {
    readonly name: string = 'Alert Command';
    readonly description: string = 'Trigger a window alert';

    execute = (val: string) => window.alert(val ? val : this.description);
}
