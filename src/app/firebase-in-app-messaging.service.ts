import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

/**
 * Wraps cordova-plugin-firebase-inappmessaging (native iOS/Android only).
 * Campaigns are created in Firebase Console → Engage → In-app messaging.
 * Requires cordova-plugin-firebase-analytics and google-services / GoogleService-Info.plist.
 */
@Injectable({
	providedIn: 'root'
})
export class FirebaseInAppMessagingService {
	constructor(private platform: Platform) {}

	private getApi(): {
		setAutomaticDataCollectionEnabled: (v: boolean) => Promise<void>;
		setMessagesSuppressed: (v: boolean) => Promise<void>;
	} | null {
		const w = window as any;
		const c = w.cordova;
		if (!c || !c.plugins || !c.plugins.firebase || !c.plugins.firebase.inappmessaging) {
			return null;
		}
		return c.plugins.firebase.inappmessaging;
	}

	isNativePluginAvailable(): boolean {
		return !!this.getApi();
	}

	/**
	 * Call after Platform.ready(). Enables the native Firebase In-App Messaging SDK so
	 * console campaigns can display. No-op in browser (ionic serve).
	 */
	async init(): Promise<void> {
		if (!this.platform.is('cordova')) {
			console.log('[Firebase In-App Messaging] skipped (browser / ionic serve — native plugin only)');
			return;
		}
		const api = this.getApi();
		if (!api) {
			console.warn('[Firebase In-App Messaging] plugin not available. Run: cordova plugin add cordova-plugin-firebase-inappmessaging && cordova prepare');
			return;
		}
		try {
			await api.setAutomaticDataCollectionEnabled(true);
			console.log('[Firebase In-App Messaging] initialized (automatic data collection on)');
		} catch (e) {
			console.warn('[Firebase In-App Messaging] init error', e);
		}
	}

	setAutomaticDataCollectionEnabled(enabled: boolean): Promise<void> {
		const api = this.getApi();
		if (!api) {
			return Promise.resolve();
		}
		return api.setAutomaticDataCollectionEnabled(enabled);
	}

	setMessagesSuppressed(suppressed: boolean): Promise<void> {
		const api = this.getApi();
		if (!api) {
			return Promise.resolve();
		}
		return api.setMessagesSuppressed(suppressed);
	}
}
