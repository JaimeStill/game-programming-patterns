import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'app-bar',
    templateUrl: 'app-bar.component.html'
})
export class AppBarComponent {
    @Input() color = 'default';
    @Input() header = 'Game Programming Patterns';
    @Input() headerLink = '/';
    @Input() menuIcon = 'apps';
}
