const path = require('path');

exports.publicPath = '/advertisement-template/';
exports.src = path.resolve(__dirname, 'src');
exports.assets = path.resolve(__dirname, 'assets');
exports.docs = path.resolve(__dirname, 'docs');
exports.app = path.join(exports.src, 'app');
exports.main = path.join(exports.src, 'main.ts');
exports.polyfills = path.join(exports.src, 'polyfills.ts');
exports.index = path.join(exports.src, 'index.html');
exports.entryModule = path.join(exports.app, 'app.module') + '#AppModule';
exports.tsConfig = path.resolve(__dirname, 'tsconfig.json');
exports.favicon = path.join(exports.assets, 'favicon.svg');
