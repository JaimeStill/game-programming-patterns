export interface Command {
  label: string;
  description: string;
  execute: (val: string) => void;
}
