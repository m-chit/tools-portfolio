'use strict';

const jwt = require('jsonwebtoken');
const secret = require('../../../secret');

const createToken = function (user) {
  let scopes;
  if (user.admin) {
    scopes = 'admin';
  }
    // Sign the JWT
  return jwt.sign({id: user._id, username: user.username, scope: scopes}, secret, {algorithm: 'HS256', expiresIn: '1h'} );
};

module.exports = createToken;
