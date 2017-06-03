'use strict';

const Config = require('./config');

module.exports = {
  server: {},
  connections: [{
    port: Config.application.port
  }],
  registrations: [{
    plugin: {
      register: 'good',
      options: {
        ops: {
          interval: 60000
        },
        reporters: {
          console: [{
            module: 'good-squeeze',
            name: 'Squeeze',
            args: [{
              error: '*',
              response: '*'
            }]
          }, {
            module: 'good-console'
          },
            'stdout'
          ]
        }
      }
    }
  },
  {
    plugin: {
      register: './authWrapper'
    }
  }]
};
