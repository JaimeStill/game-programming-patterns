export class Weapon {
  name: string;
  range: number;
  damage: number;

  constructor(
    name: string,
    range: number,
    damage: number
  ) {
    this.name = name;
    this.range = range;
    this.damage = damage
  }

  fire = () => `${this.name} fired a distance of ${this.range} for ${this.damage} damage`;
}
