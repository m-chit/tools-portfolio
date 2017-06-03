'use strict';

const bcrypt = require('bcryptjs');
const User = require('./users.model');
const Joi = require('joi');
const Boom = require('boom');
const createUserSchema = require('./utils/validators').createUserSchema;
const authenticateUserSchema = require('./utils/validators').authenticateUserSchema;
const verifyUniqueUser = require('./utils/verify').verifyUniqueUser;
const verifyCredentials = require('./utils/verify').verifyCredentials;
const createToken = require('./utils/token');

const hashPassword = function (password, cb) {
    // Generate a salt at level 10 strength
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      return cb(err, hash);
    });
  });
};

const create = {
  method: 'POST',
  path: '/api/users',
  config: {
    auth: false,
    pre: [
            {method: verifyUniqueUser}
    ],
    handler: (req, res) => {
      const user = new User();
      user.email = req.payload.email;
      user.username = req.payload.username;
      user.admin = false;
      user.favorites = [];
      hashPassword(req.payload.password, (err, hash) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        user.password = hash;
        user.save((err, user) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          res({id_token: createToken(user)}).code(201);
        });
      });

    },
    validate: {
      payload: createUserSchema
    }
  }
};

const auth = {
  method: 'POST',
  path: '/api/users/authenticateUser',
  config: {
    auth: false,
    pre: [
            {method: verifyCredentials, assign: 'user'}
    ],
    handler: (req, res) => {
      console.log(req.payload);
      res({id_token: createToken(req.payload)}).code(201);
    },
    validate: {
      payload: authenticateUserSchema
    }
  }
};


module.exports = [
  create,
  auth
];
