import { Command } from './command';

export class AlertCommand implements Command {
  label = 'Alert Command';
  description = 'Trigger a window alert';

  execute = (val: string) => window.alert(val ? val : this.label);
}
