'use strict';

const Tool = require('./tools.model.js');
const Joi = require('joi');
const Boom = require('boom');

const index = {
  method: 'GET',
  path: '/api/tools',
  handler: (request, reply) => {
    Tool.find({}).then((result) => {
      reply(result);
    });
  }
};

const show = {
  method: 'GET',
  path: '/api/tools/{id}',
  handler: (request, reply) => {
    const {id} = request.params;
    Tool.findById(id).then((result) => {
      if (!result) {
        return reply(Boom.notFound('Object doesn\'t exist'));
      }
      reply(result);
    });
  },
  config: {
    validate: {
      params: {
        id: Joi.string().required().hex().length(24)
      }
    }
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

const destroy = {
  method: 'DELETE',
  path: '/api/tools/{id}',
  handler: (request, reply) => {
    const {id} = request.params;
    Tool.findById(id).then((result) => {
      if (!result) {
        return reply(Boom.notFound('Object doesn\'t exist'));
      }

      result.remove().then(() => {
        reply().code(204);
      });
    });
  },
  config: {
    validate: {
      params: {
        id: Joi.string().required().hex().length(24)
      }
    }
  }
};

const update = {
  method: 'PUT',
  path: '/api/tools/{id}',
  handler: (request, reply) => {
    const {id} = request.params;
    const {payload} = request;
    Tool.findById(id).then((result) => {
      if (!result) {
        return reply(Boom.notFound('Object doesn\'t exist'));
      }
      const newObject = Object.assign(result, payload);

      newObject.save().then((updatedObject) => {
        reply(updatedObject);
      });
    });
  },
  config: {
    validate: {
      params: {
        id: Joi.string().required().hex().length(24)
      }
    }
  }
};

module.exports = [
  index,
  show,
  create,
  destroy,
  update
];
