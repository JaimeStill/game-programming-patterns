import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'pattern-link',
    templateUrl: 'pattern-link.component.html'
})
export class PatternLinkComponent {
    @Input() label: string = 'Pattern';
    @Input() link: string = '/';
    @Input() width: number = 320;
    @Input() height: number = 72;
    @Input() style: string = 'background-card glow-accent m4 rounded card-outline-accent cursor-pointer';
}
