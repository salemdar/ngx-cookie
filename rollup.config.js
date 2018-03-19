const globals = {
  '@angular/common': 'ng.common',
  '@angular/core': 'ng.core',
};

export default {
  input: 'dist/ngx-cookie.js',
  external: Object.keys(globals),
  output: {
    file: 'bundles/ngx-cookie.js',
    format: 'es',
    globals: globals,
    sourcemap: true,
  }
}
