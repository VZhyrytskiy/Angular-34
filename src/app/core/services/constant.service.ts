import { Injectable, InjectionToken } from '@angular/core';

import { ConstantToken } from '../models/config.model';

@Injectable({
    providedIn: 'root'
})
export class ConstantService { }

export const CONSTANT_TOKEN = new InjectionToken<ConstantToken>('ConstantService');

export const constantToken: ConstantToken = {
    App: 'SHOP',
    Ver: '1.0',
    API_URL: 'https://google.com',
}
