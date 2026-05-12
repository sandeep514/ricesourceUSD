// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  /** `ionic serve` / dev: send Meta Pixel events (same pixel as prod). Set false to disable locally. */
  facebookPixelEnabled: true,
  /** Meta Pixel ID (Events Manager → Pixel) */
  facebookPixelId: '1386223478792415',
  /** Meta / Facebook App ID (developers.facebook.com app; sharing, native SDK, Events Manager app link) */
  facebookAppId: '1460974571532915',
  /**
   * Optional: Events Manager → your Pixel → Test events → copy a test browser code.
   * When non-empty, init uses test_event_code so events show under “Test events” only.
   * Leave '' to send normal dev traffic to the live pixel stream.
   */
  facebookMetaTestEventCode: '' as string
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
