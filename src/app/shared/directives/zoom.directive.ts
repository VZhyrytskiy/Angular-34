import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appZoom]'
})
export class ZoomDirective implements OnInit {
    @Input('appZoom') times = 1.5;

    @HostListener('click', ['$event.target'])
    onMouseClick(): void {
        if (this.isZoomed) {
            Object.keys(this.styles).forEach(property => {
                this.renderer.setStyle(
                    this.parentElement.nativeElement,
                    property,
                    this.styles[property],
                );
            });
        } else {
            Object.keys(this.defaultStyles).forEach(property => {
                this.renderer.setStyle(
                    this.parentElement.nativeElement,
                    property,
                    this.defaultStyles[property],
                );
            });
        }

        this.isZoomed = !this.isZoomed;
    }

    private styles: { [key: string]: string } = {};
    private defaultStyles: { [key: string]: string } = {};
    private isZoomed = false;

    constructor(
        private parentElement: ElementRef,
        private renderer: Renderer2,
    ) { }

    ngOnInit(): void {
        this.styles = this.getRuleSet();

        Object.keys(this.styles).forEach((property: string) => {
            this.defaultStyles[property] = getComputedStyle(this.renderer.selectRootElement(this.parentElement).nativeElement)
                .getPropertyValue(property);
        });
    }

    private getRuleSet(): { [key: string]: string } {
        return {
            'position': 'absolute',
            'width': '100px',
            'top': '50%',
            'left': '50%',
            'transform': `translate(-50%, -50%) scale(${this.times})`,
            'box-shadow': '0 0 10px black',
            'z-index': '99999',
        };
    }
}
