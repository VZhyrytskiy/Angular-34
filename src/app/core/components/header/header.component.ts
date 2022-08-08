import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @ViewChild('appTitle') appTitleElement!: ElementRef<HTMLHeadingElement>;
    @Input() title: string = '';

    ngAfterViewInit() {
        this.appTitleElement.nativeElement.innerText = this.title;
    }
}
