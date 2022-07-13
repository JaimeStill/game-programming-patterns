import { Terrain } from './terrain';

export class TerrainBuilder {
    readonly width: number;
    readonly height: number;
    readonly blockSize: number;

    private readonly grass: Terrain;
    private readonly hill: Terrain;
    private readonly water: Terrain;

    readonly terrain: Array<Terrain[]> = new Array<Terrain[]>();

    constructor(
        width: number,
        height: number,
        blockSize: number
    ) {
        this.width = width;
        this.height = height;
        this.blockSize = blockSize;

        this.grass = new Terrain(1, false, '#00bc50', blockSize);
        this.hill = new Terrain(3, false, '#704906', blockSize);
        this.water = new Terrain(2, true, '#0ac9c9', blockSize);

        this.generate();
    }

    private seedTile = (): Terrain => {
        const seed = Math.floor(Math.random() * 3);

        switch (seed) {
            case 2:
                return this.water;
            case 1:
                return this.hill;
            default:
                return this.grass;
        }
    }

    private generate = () => {
        for (let x = 0; x < this.width; x++) {
            const column = new Array<Terrain>();

            for (let y = 0; y < this.height; y++) {
                column[y] = this.seedTile();
            }

            this.terrain.push(column);
        }
    }

    getTile = (x: number, y: number) => this.terrain[x][y];
}
