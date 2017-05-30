'use strict';

const Mongoose = require('mongoose');
const Config = require('./config/config');

const db = Config.databases.mongodb;
const protocol = 'mongodb://';
const url = `${protocol}${db.host}:${db.port}/${db.name}`;

module.exports = () => {
  Mongoose.Promise = global.Promise;
  return Mongoose.connect(url).catch(() => {
    console.error('Cannot connect to MongoDB!');
    process.exit();
  });
};
