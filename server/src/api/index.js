'use strict';

const Tools = require('./tools/tools');
const Users = require('./users/users');

module.exports = [
  ...Tools,
  ...Users
];
