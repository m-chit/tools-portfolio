'use strict';

const Glue = require('glue');
const Config = require('./config/config');
const Manifest = require('./config/manifest');
const Routes = require('./api');
const ConnectMongo = require('./mongodb');
const Seed = require('./seed');

const start = (server) => {
  return () => {
    server.start((err) => {
      if (err) {
        throw err;
      }

      console.log(`Server running at: ${server.info.uri}, in ${Config.environment} mode`);
    });
  };
};

Glue.compose(Manifest, {
  relativeTo: __dirname
}, (err, server) => {
  if (err) {
    throw err;
  }
  server.route(Routes);

  ConnectMongo()
    .then(Seed)
    .then(start(server));
});
