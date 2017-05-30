'use strict';

const Program = require('commander');
const DevelopmentConfig = require('./environments/development');
const ProductionConfig = require('./environments/production');

Program
  .option('-e, --environment <development|production>', 'environment', 'development')
  .parse(process.argv);

const {environment} = Program;

module.exports = [
  DevelopmentConfig,
  ProductionConfig
].find((configuration) => configuration.environment === environment);
