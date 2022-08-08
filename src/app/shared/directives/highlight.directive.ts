import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    hover: boolean = false;

    @HostListener('mouseenter', ['$event.target'])
    onMouseover(target: HTMLElement) {
        if (this.parentElement.nativeElement !== target) return;

        this.hover = true;
    }

    @HostListener('mouseleave', ['$event.target'])
    onMouseout(target: HTMLElement) {
        if (this.parentElement.nativeElement !== target) return;

        this.hover = false;
    }

    @HostBinding('class.highlighted') get highlightClass() {
        return this.hover;
    }

    constructor(private parentElement: ElementRef) { }
}
