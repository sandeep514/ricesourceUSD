cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-theme-detection.ThemeDetection",
      "file": "plugins/cordova-plugin-theme-detection/www/ThemeDetection.js",
      "pluginId": "cordova-plugin-theme-detection",
      "clobbers": [
        "cordova.plugins.ThemeDetection"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "com.razorpay.cordova.RazorpayCheckout",
      "file": "plugins/com.razorpay.cordova/www/RazorpayCheckout.js",
      "pluginId": "com.razorpay.cordova",
      "clobbers": [
        "RazorpayCheckout"
      ]
    },
    {
      "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
      "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
      "pluginId": "cordova-plugin-firebase-analytics",
      "merges": [
        "cordova.plugins.firebase.analytics"
      ]
    },
    {
      "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
      "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
      "pluginId": "cordova-plugin-firebase-messaging",
      "merges": [
        "cordova.plugins.firebase.messaging"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.5",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-device": "2.0.3",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-theme-detection": "1.3.0",
    "cordova-plugin-camera": "4.1.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "com.razorpay.cordova": "0.16.1",
    "cordova-support-android-plugin": "1.0.2",
    "cordova-plugin-firebase-analytics": "6.1.0",
    "cordova-plugin-firebase-messaging": "6.1.1"
  };
});