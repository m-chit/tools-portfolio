'use strict';

const hapiJwt = require('hapi-auth-jwt2');
const JWT_SECRET_KEY = require('./secret');

const register = function register(server, options, next) {
  server.register(hapiJwt);
  server.auth.strategy('jwt', 'jwt',
    {key: JWT_SECRET_KEY,
      validateFunc: (decoded, request, callback) => callback(null, true), // This should be replaced with a more robust function
      verifyOptions: {algorithms: ['HS256']}
    });

  server.auth.default('jwt');
  next();
};

register.attributes = {
  name: 'auth-wrapper',
  version: '0.0.1'
};

module.exports = register;
