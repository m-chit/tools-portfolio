'use strict';

const Boom = require('boom');
const User = require('../users.model');
const bcrypt = require('bcryptjs');

const verifyUniqueUser = function (req, res) {
  User.findOne({
    $or: [
            {email: req.payload.email},
            {username: req.payload.username}
    ]
  }, (err, user) => {
    if (user) {
      if (user.username === req.payload.username) {
        res(Boom.badRequest('Username taken'));
      }
      else if (user.email === req.payload.email) {
        res(Boom.badRequest('Email taken'));
      }
    }
    else {
      res(req.payload);
    }
  });
};

const verifyCredentials = function (req, res) {
  const password = req.payload.password;
  User.findOne({
    $or: [
            {email: req.payload.usernameOrEmail},
            {username: req.payload.usernameOrEmail}
    ]}, (err, user) => {
    if (user) {
      bcrypt.compare(password, user.password, (err, isValid) => {
        if (isValid) {
          res(user);
        }
        else {
          res(Boom.badRequest('Incorrect password!'));
        }
      });
    }
    else {
      res(Boom.badRequest('Incorrect username or email!'));
    }
  });
};


module.exports = {
  verifyUniqueUser,
  verifyCredentials
};
