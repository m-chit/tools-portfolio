'use strict';

const ToolSeed = require('./tools');
const Config = require('../config/config');

module.exports = () => {
  if (!Config.seed) {
    return Promise.resolve();
  }
  const seeds = [
    ToolSeed()
  ];

  return Promise.all(seeds).then(() => {
    console.info('Finished populating data!');
  });
};
