import { Injectable, InjectionToken } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    private key = 'app_storage';

    getData(key: string = this.key) {
        return JSON.parse(window.localStorage.getItem(key) || '');
    }

    setData(key: string = this.key, data: any) {
        window.localStorage.setItem(key, JSON.stringify(data));
    }
}

export const LOCAL_STORAGE_TOKEN = new InjectionToken<LocalStorageService>('LocalStorageService');

export const localStorageService = new LocalStorageService();