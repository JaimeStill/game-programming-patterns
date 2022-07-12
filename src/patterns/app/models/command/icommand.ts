export interface ICommand {
    name: string;
    description: string;
    execute: (val: string) => void;
}
