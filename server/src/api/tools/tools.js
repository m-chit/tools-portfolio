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

const create = {
  method: 'POST',
  path: '/api/tools',
  handler: (request, reply) => {
    const tool = request.payload;
    Tool.create(tool).then((result) => {
      reply(result).code(201);
    });
  }
};

module.exports = [
  index,
  create
];
