import { Weapon } from '../weapon';

export class Actor {
  name: string;
  strength: number;
  equipped: Weapon;
  inventory: Weapon[];

  constructor(
    name: string,
    strength: number,
    inventory: Weapon[]
  ) {
    this.name = name;
    this.strength = strength;
    this.inventory = inventory;
    this.equipped = inventory[0];
  }

  fire = () => this.equipped
    ? this.equipped.fire()
    : `${this.name} is not holding a weapon`;

  jump = () => `${this.name} jumped a distance of ${Math.floor(this.strength / 2)}`;

  melee = () => `${this.name} punched for ${this.strength} damage`;

  swap = () => {
    if (this.equipped && this.inventory && this.inventory.length) {
      if (this.inventory.length === 1)
        return `${this.name} only has ${this.equipped.name} available`;

      const index = this.inventory.indexOf(this.equipped);

      this.equipped = index === this.inventory.length - 1
        ? this.inventory[0]
        : this.inventory[index + 1];

      return `${this.name} equipped ${this.equipped.name}`;
    } else
      return `${this.name} has an empty inventory`;
  }
}
