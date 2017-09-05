var baseConfig = require('../../../jenkins-scripts/e2e/baseConfig.js');
var config = baseConfig.config;

config.multiCapabilities = [{
  'browserName': 'chrome'
}];

config.specs.push('features/grouping.feature');

exports.config = config;