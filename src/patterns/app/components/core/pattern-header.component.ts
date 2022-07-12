import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'pattern-header',
    templateUrl: 'pattern-header.component.html'
})
export class PatternHeaderComponent {
    @Input() link: string = 'https://gameprogrammingpatterns.com';
    @Input() header: string = 'Pattern';
}
