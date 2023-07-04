import { Injectable } from '@angular/core';
declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class GoogleTagManagerProvider {

  constructor() { }

  public initGTM(containerId: string) {
    window['tagmanager'].startup(containerId);
  }

  public trackView(screenName: string) {
    window['tagmanager'].trackView(screenName);
  }

  public trackEvent(category: string, action: string, label: string, value: number) {
    window['tagmanager'].trackEvent(category, action, label, value);
  }
}