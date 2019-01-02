const getJestConfig = require('./jest.config.base');
module.exports = getJestConfig({
  htmlReporterOutputPath: './static/test-result/index.html',
});
