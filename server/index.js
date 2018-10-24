
const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
let cookieParser = require('cookie-parser');
let proxy = require('http-proxy-middleware');


app.set('port', port);
app.use(cookieParser())

// app.use('/api', proxy({
//       target: process.env.API_ENDPOINT || 'https://api.werobot.fr',
//       changeOrigin: true,
//     pathRewrite: {
//         '^/api' : '/',
//     }
// }));

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start();
