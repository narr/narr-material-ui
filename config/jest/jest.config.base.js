const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = ({ htmlReporterOutputPath } = {}) => {
  const config = {
    rootDir: '../../',
    setupTestFrameworkScriptFile: 'jest-enzyme',
    testEnvironment: 'enzyme',
    testRegex: '(/__tests__/.*|src/.*?(\\.|/)(test|spec))\\.tsx?$',
    transform: {
      ...tsjPreset.transform,
    },
    moduleFileExtensions: [...tsjPreset.moduleFileExtensions],
    testURL: 'http://localhost/',
    collectCoverageFrom: [
      'packages/**/src/**/*.{ts,tsx}',
      '!**/*.stories.{ts,tsx}',
    ],
    coverageThreshold: {
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: -10,
      },
    },
    coverageDirectory: './static/coverage',
  };
  if (htmlReporterOutputPath) {
    config.reporters = [
      'default',
      [
        './node_modules/jest-html-reporter',
        {
          pageTitle: 'Test Report',
          outputPath: htmlReporterOutputPath,
        },
      ],
    ];
  }
  return config;
};
