import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class HightlightDirective {
    @Input('myHighlight') highlightColor: string;
    @Input() defaultColor: string;

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter(): void {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }


    @HostListener('mouseleave') onMouseLeave(): void {
        this.highlight(null);
    }

    private highlight(color: string): void {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
