import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

declare function fbq(command: string, ...args: any[]): void;

/**
 * Loads Meta Pixel (fbevents.js), initializes with environment.facebookPixelId,
 * and exposes helpers for PageView and custom events.
 * facebookAppId (environment) is for fb:app_id / native SDK; web pixel init uses facebookPixelId only.
 *
 * Cordova: Pixel uses https://connect.facebook.net (TLS); no cleartext entry needed in
 * network_security_config. iOS WKWebView: default ATS allows these HTTPS hosts unless
 * you have restrictive Info.plist overrides—add exceptions only if the script fails to load.
 */
@Injectable({
	providedIn: 'root'
})
export class MetaPixelService {
	private bootstrapped = false;
	/** One custom "app opened" event per JS session (cold start / full reload). */
	private appOpenTracked = false;

	isEnabled(): boolean {
		return !!(environment as any).facebookPixelEnabled && !!(environment as any).facebookPixelId;
	}

	private logHit(action: string, detail?: unknown): void {
		if (detail !== undefined) {
			console.log('[Meta Pixel]', action, detail);
		} else {
			console.log('[Meta Pixel]', action);
		}
	}

	/**
	 * Injects the Meta base snippet once: queues fbq until fbevents.js loads, then runs fbq('init', pixelId).
	 * Safe to call early (e.g. start of initializeApp); matches Meta's recommended synchronous init pattern.
	 */
	bootstrap(): void {
		if (!this.isEnabled() || this.bootstrapped) {
			return;
		}
		this.bootstrapped = true;

		const pixelId = (environment as any).facebookPixelId as string;
		const testCode = ((environment as any).facebookMetaTestEventCode || '').trim();
		const initPixel = () => {
			if (testCode) {
				(fbq as any)('init', pixelId, { test_event_code: testCode });
			} else {
				fbq('init', pixelId);
			}
		};
		const w = window as any;
		if (w.fbq) {
			try {
				initPixel();
				this.logHit('init (existing fbq)', { pixelId, testCode: testCode || null });
			} catch (e) {
				// ignore
			}
			return;
		}

		const f = w;
		const b = document;
		const e = 'script';
		const v = 'https://connect.facebook.net/en_US/fbevents.js';
		const n: any = f.fbq = function () {
			n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
		};
		if (!f._fbq) {
			f._fbq = n;
		}
		n.push = n;
		n.loaded = true;
		n.version = '2.0';
		n.queue = [];
		const t = b.createElement(e);
		t.async = true;
		t.src = v;
		const s = b.getElementsByTagName(e)[0];
		if (s && s.parentNode) {
			s.parentNode.insertBefore(t, s);
		}
		try {
			initPixel();
			this.logHit('init', { pixelId, testCode: testCode || null });
		} catch (e) {
			// ignore
		}
	}

	trackPageView(url: string): void {
		if (!this.isEnabled() || typeof fbq !== 'function') {
			return;
		}
		try {
			fbq('track', 'PageView', { content_name: url });
			this.logHit('track PageView', url);
		} catch (e) {
			try {
				fbq('track', 'PageView');
				this.logHit('track PageView (fallback)', url);
			} catch (e2) {
				// ignore
			}
		}
	}

	track(eventName: string, params?: Record<string, any>): void {
		if (!this.isEnabled() || typeof fbq !== 'function') {
			return;
		}
		try {
			if (params) {
				fbq('track', eventName, params);
				this.logHit(`track ${eventName}`, params);
			} else {
				fbq('track', eventName);
				this.logHit(`track ${eventName}`);
			}
		} catch (e) {
			// ignore
		}
	}

	/**
	 * Call when the Ionic/Cordova app has finished opening (e.g. inside platform.ready()).
	 * Fires a custom Meta event once per session with your Facebook App ID for attribution.
	 */
	trackAppOpen(): void {
		if (!this.isEnabled() || this.appOpenTracked || typeof fbq !== 'function') {
			return;
		}
		this.appOpenTracked = true;
		const appId = (environment as any).facebookAppId as string;
		const w = window as any;
		const isCordova = !!(w.cordova || w.Cordova);
		const payload: Record<string, string> = { content_name: 'app_launch' };
		if (appId) {
			payload.facebook_app_id = appId;
		}
		payload.platform = isCordova ? 'cordova' : 'browser';
		if (!(environment as any).production) {
			payload.build = 'dev';
		}
		try {
			(fbq as any)('trackCustom', 'AppOpened', payload);
			this.logHit('trackCustom AppOpened', payload);
		} catch (e) {
			try {
				(fbq as any)('trackCustom', 'AppOpened');
				this.logHit('trackCustom AppOpened (fallback)');
			} catch (e2) {
				// ignore
			}
		}
	}

	/** Meta Facebook App ID (not the Pixel ID). */
	getAppId(): string {
		return (environment as any).facebookAppId || '';
	}
}
