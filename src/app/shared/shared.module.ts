import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ZoomDirective } from './directives/zoom.directive';

@NgModule({
    declarations: [
        TruncatePipe,
        HighlightDirective,
        ZoomDirective,
    ],
    imports: [
      CommonModule,
      // если директивы, компоненты, пайпы текущего модуля не используют
      // этот модуль, то его можно не импортировать, а только экспортировать
        MaterialModule,
    ],
    exports: [
        MaterialModule,
        TruncatePipe,
        HighlightDirective,
        ZoomDirective,
    ]
})
export class SharedModule { }
