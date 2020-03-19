import { Command } from './command';
import { SnackerService } from '../../services';

export class SnackerCommand implements Command {
  constructor(
    public snacker: SnackerService
  ) { }

  label = 'Snacker Command';
  description = 'Push a message via the Snacker service';

  execute = (val: string) => this.snacker.sendColorMessage(
    val ? val : this.label,
    ['snacker-indigo']
  );
}
