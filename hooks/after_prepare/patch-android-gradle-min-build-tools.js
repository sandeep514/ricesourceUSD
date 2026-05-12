#!/usr/bin/env node
/**
 * - Cordova does not map MIN_BUILD_TOOLS_VERSION from config.xml; prepare leaves
 *   defaults at 32.x. compileSdk 35 needs build-tools 35+.
 * - `cordova prepare` does not update gradle-wrapper.properties; `cordova build` does.
 *   Sync wrapper URL to GRADLE_VERSION so `./gradlew` works after prepare.
 */
module.exports = function (context) {
  const fs = require('fs');
  const path = require('path');
  const projectRoot = context.opts.projectRoot || path.resolve(__dirname, '../..');
  const gradleConfigPath = path.join(projectRoot, 'platforms', 'android', 'cdv-gradle-config.json');
  if (!fs.existsSync(gradleConfigPath)) {
    return;
  }
  try {
    const raw = fs.readFileSync(gradleConfigPath, 'utf8');
    const cfg = JSON.parse(raw);
    cfg.MIN_BUILD_TOOLS_VERSION = '35.0.0';
    fs.writeFileSync(gradleConfigPath, JSON.stringify(cfg, null, 2) + '\n');

    const gv = cfg.GRADLE_VERSION || '8.7';
    const wrapperPath = path.join(projectRoot, 'platforms', 'android', 'gradle', 'wrapper', 'gradle-wrapper.properties');
    if (fs.existsSync(wrapperPath)) {
      let props = fs.readFileSync(wrapperPath, 'utf8');
      const url = `https://services.gradle.org/distributions/gradle-${gv}-all.zip`;
      props = props.replace(
        /^distributionUrl=.*$/m,
        `distributionUrl=${url}`
      );
      fs.writeFileSync(wrapperPath, props);
    }
  } catch (e) {
    console.warn('patch-android-gradle-min-build-tools:', e.message);
  }

  // cordova-plugin-file + cordova-plugin-camera both add WRITE_EXTERNAL_STORAGE; merger fails on duplicate.
  // Keep the camera variant (maxSdkVersion="32") and drop the plain file-plugin line.
  const manifestPath = path.join(projectRoot, 'platforms', 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
  if (!fs.existsSync(manifestPath)) {
    return;
  }
  try {
    let man = fs.readFileSync(manifestPath, 'utf8');
    if (
      /WRITE_EXTERNAL_STORAGE/.test(man) &&
      /maxSdkVersion="32"[^>]*WRITE_EXTERNAL_STORAGE|WRITE_EXTERNAL_STORAGE[^>]*maxSdkVersion="32"/.test(man)
    ) {
      const next = man.replace(
        /\n[ \t]*<uses-permission\s+android:name="android\.permission\.WRITE_EXTERNAL_STORAGE"\s*\/>\s*/,
        '\n'
      );
      if (next !== man) {
        fs.writeFileSync(manifestPath, next);
      }
    }
  } catch (e) {
    console.warn('patch-android-gradle-min-build-tools (manifest dedupe):', e.message);
  }
};
