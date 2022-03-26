'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var ThemeDetection = /** @class */ (function (_super) {
    tslib.__extends(ThemeDetection, _super);
    function ThemeDetection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetection.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    ThemeDetection.prototype.isDarkModeEnabled = function () { return core.cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetection.pluginName = "ThemeDetection";
    ThemeDetection.plugin = "cordova-plugin-theme-detection";
    ThemeDetection.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetection.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetection.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetection.installVariables = [];
    ThemeDetection.platforms = ["iOS", "Android"];
    ThemeDetection.decorators = [
        { type: core$1.Injectable }
    ];
    return ThemeDetection;
}(core.IonicNativePlugin));

exports.ThemeDetection = ThemeDetection;
