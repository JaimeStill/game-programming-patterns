import {
    Component,
    Input
} from '@angular/core';

import { ThemeService } from '../../services';

@Component({
    selector: 'theme-toggle',
    templateUrl: 'theme-toggle.component.html'
})
export class ThemeToggleComponent {
    @Input() lightColor: string = 'color-amber';
    @Input() lightIcon: string = 'brightness_5';
    @Input() darkColor: string = 'color-text';
    @Input() darkIcon: string = 'brightness_3';

    constructor(
        public themer: ThemeService
    ) { }
}
