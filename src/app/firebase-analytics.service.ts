import { Injectable } from "@angular/core";
import { Platform } from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class FirebaseAnalyticsService {
	constructor(private platform: Platform) {}

	private getApi(): { logEvent: (name: string, params?: any) => Promise<any> } | null {
		const w = window as any;
		const c = w.cordova;
		if (!c || !c.plugins || !c.plugins.firebase || !c.plugins.firebase.analytics) {
			return null;
		}
		return c.plugins.firebase.analytics;
	}

	async logEvent(name: string, params?: any): Promise<void> {
		if (!this.platform.is("cordova")) {
			console.log("[Firebase Analytics] skipped (browser) event:", name, params || {});
			return;
		}

		const api = this.getApi();
		if (!api) {
			console.warn("[Firebase Analytics] plugin not available");
			return;
		}

		try {
			await api.logEvent(name, params || {});
			console.log("[Firebase Analytics] event sent:", name, params || {});
		} catch (e) {
			console.warn("[Firebase Analytics] logEvent error", e);
		}
	}
}
