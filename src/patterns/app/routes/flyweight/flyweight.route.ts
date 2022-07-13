import { Component } from '@angular/core';
import { TerrainBuilder } from '../../models';

@Component({
    selector: 'flyweight-route',
    templateUrl: 'flyweight.route.html'
})
export class FlyweightRoute {
    builder: TerrainBuilder = new TerrainBuilder(20, 16, 20);

    refresh = () => this.builder = new TerrainBuilder(20, 16, 20);
}
