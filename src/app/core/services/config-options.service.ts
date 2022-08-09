import { Injectable } from '@angular/core';

import { ConfigModel } from '../models/config.model';

@Injectable({
    providedIn: 'root'
})
export class ConfigOptionsService {
    private config!: ConfigModel;

    setConfig(options: ConfigModel): void {
        this.config = { ...this.config, ...options };
    }

    getConfig(): ConfigModel | null {
        return this.config || null;
    }

    setConfigProperty(key: keyof ConfigModel, value: any): void {
        this.config[key] = value;
    }
}
