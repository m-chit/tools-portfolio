'use strict';

const Tool = require('./tools.model.js');

const index = {
  method: 'GET',
  path: '/api/tools',
  handler: (request, reply) => {
    Tool.find({}).then((result) => {
      reply(result);
    });
  }
};

module.exports = [
  index
];
