'use strict';

const User = require('../api/users/users.model');
const bcrypt = require('bcryptjs');

module.exports = () => {
  return User.find({}).remove({}).then(() => {
    return User.create(
      {
        email: 'test@test',
        username: 'test',
        password: bcrypt.hashSync('test', bcrypt.genSaltSync(10)),
        admin: false,
        favorites: []
      }, {
        email: 'admin@admin',
        username: 'admin',
        password: bcrypt.hashSync('admin', bcrypt.genSaltSync(10)),
        admin: true,
        favorites: []
      });
  });
};
