/**
 * Angular 8 @angular-devkit/build-angular uses source-map@0.7.x with WASM.
 * Some Node/tooling setups throw unless SourceMapConsumer.initialize() is called
 * with the path to lib/mappings.wasm. Patch process-bundle.js once after install.
 */
const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');
const processBundlePath = path.join(
  projectRoot,
  'node_modules',
  '@angular-devkit',
  'build-angular',
  'src',
  'utils',
  'process-bundle.js'
);

const MARKER = '/* patched: source-map wasm init */';

function patch() {
  if (!fs.existsSync(processBundlePath)) {
    console.warn('[patch-source-map] skip: process-bundle.js not found');
    return;
  }
  let src = fs.readFileSync(processBundlePath, 'utf8');
  if (src.includes(MARKER)) {
    return;
  }

  const needle = 'const source_map_1 = require("source-map");';
  const idx = src.indexOf(needle);
  if (idx === -1) {
    console.warn('[patch-source-map] skip: unexpected process-bundle.js format');
    return;
  }

  const inject = `${needle}
${MARKER}
try {
    if (typeof source_map_1.SourceMapConsumer.initialize === "function") {
        source_map_1.SourceMapConsumer.initialize({
            "lib/mappings.wasm": "https://unpkg.com/source-map@0.7.3/lib/mappings.wasm"
        });
    }
} catch (e) {
    console.warn("[patch-source-map] SourceMapConsumer.initialize failed:", e && e.message);
}
`;

  src = src.slice(0, idx) + inject + src.slice(idx + needle.length);
  fs.writeFileSync(processBundlePath, src, 'utf8');
  console.log('[patch-source-map] patched', path.relative(projectRoot, processBundlePath));
}

patch();
