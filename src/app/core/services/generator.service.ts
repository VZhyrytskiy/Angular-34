import { Injectable, InjectionToken } from '@angular/core';

import { GenId } from './gen-id.generator';

@Injectable({
    providedIn: 'root'
})
export class GeneratorService {
    private genId: GenId;

    constructor() {
        this.genId = new GenId();
    }

    generate(n: number): string {
        const symbols = [
            ...[...Array(10)].map((_, i) => String.fromCharCode(i + 48)),
            ...[...Array(26)].map((_, i) => String.fromCharCode(i + 65)),
            ...[...Array(26)].map((_, i) => String.fromCharCode(i + 97)),
        ];

        return new Array(n).fill(0).map(() => symbols[Math.floor(Math.random() * symbols.length)]).join('');
    }

    getNewID(): number {
        return this.genId.generate(); 
    }
}

export const GENERATOR_TOKEN = new InjectionToken<string>('generatedString');
