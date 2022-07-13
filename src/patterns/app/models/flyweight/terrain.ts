export class Terrain {
    readonly movement: number;
    readonly isWater: boolean;
    readonly texture: string;
    readonly size: number;

    constructor(
        movement: number,
        isWater: boolean,
        texture: string,
        size: number
    ) {
        this.movement = movement;
        this.isWater = isWater;
        this.texture = texture;
        this.size = size;
    }
}
