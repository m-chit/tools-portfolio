'use strict';

const jwt = require('jsonwebtoken');
const secret = require('../../../secret');

const createToken = function (user) {
  let scopes;
  if (user.admin) {
    scopes = 'admin';
  }
  return jwt.sign({id: user._id, scope: scopes}, secret, {algorithm: 'HS256', expiresIn: '4h'} );
};

module.exports = createToken;
