import { Command } from './command';

export class LogCommand implements Command {
  label = 'Log Command';
  description = 'Log a command to the console';

  execute = (val: string) => console.log(val ? val : this.label);
}
