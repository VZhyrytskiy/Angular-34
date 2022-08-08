import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { TruncatePipe } from './pipes/truncate.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
    declarations: [
        TruncatePipe,
        HighlightDirective
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        MaterialModule,
        TruncatePipe,
        HighlightDirective,
    ]
})
export class SharedModule { }
