import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { constantToken, CONSTANT_TOKEN } from './core/services/constant.service';
import { GeneratorFactory } from './core/services/generator.factory';
import { GeneratorService, GENERATOR_TOKEN } from './core/services/generator.service';
import { localStorageService, LOCAL_STORAGE_TOKEN } from './core/services/local-storage.service';
import { ProductsModule } from './features/products/products.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        ProductsModule,
        CoreModule,
        BrowserModule,
    ],
    providers: [
        { provide: CONSTANT_TOKEN, useValue: constantToken },
        { provide: GENERATOR_TOKEN, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
        { provide: LOCAL_STORAGE_TOKEN, useValue: localStorageService },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
