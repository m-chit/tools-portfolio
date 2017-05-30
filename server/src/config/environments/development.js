'use strict';

module.exports = {
  application: {
    host: 'localhost',
    name: 'server-tools-manager',
    port: 3000
  },
  environment: 'development',
  databases: {
    mongodb: {
      host: 'localhost',
      name: 'app-dev',
      port: 27017
    }
  },
  seed: true
};
