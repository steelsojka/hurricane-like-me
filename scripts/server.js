var browserSync = require('browser-sync');

var server = browserSync.create();

server.init({
  port: 8080,
  server: {
    baseDir: 'src',
    index: 'index.html'
  },
  files: ['./src/**/*']
});
