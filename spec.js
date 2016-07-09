let testContext ;

require('lodash')
require('babel-polyfill');
require('angular');
require('angular-mocks');

testContext = require.context('./src', true, /.spec.js$/);
testContext.keys().forEach(testContext);
