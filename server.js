const RestProxy = require('sp-rest-proxy');

const settings = {
  configPath: './config/private.json',
  hostname: '0.0.0.0',
  port: 8080,
  strictRelativeUrls:true
};

const restProxy = new RestProxy(settings);
restProxy.serve();
