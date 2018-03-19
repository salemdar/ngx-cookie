const globals = {
  '@angular/common': 'ng.common',
  '@angular/core': 'ng.core',
};

export default {
  entry: 'dist/index.js',
  external: Object.keys(globals),
  output: {
    file: 'bundles/ngx-cookie.js',
    format: 'es',
    globals: globals,
    sourcemap: true,
  }
}
