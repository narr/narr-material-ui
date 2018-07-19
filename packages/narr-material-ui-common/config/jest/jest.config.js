module.exports = ({
  rootDir = '../../',
  testRootDir = 'src',
  collectCoverageFromRootDir,
  tsConfigFile = './node_modules/narr-material-ui-common/config/tsconfig.json',
  coverageDirectory = './tmp/coverage',
  htmlReporterOutputPath,
} = {}) => {
  const config = {
    rootDir,
    testRegex: `(/__tests__/.*|${testRootDir}/.*?(\\.|/)(test|spec))\\.tsx?$`,
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['<rootDir>/tmp'],
    watchPathIgnorePatterns: ['.*?\\.jsx?$'],
    globals: {
      'ts-jest': {
        tsConfigFile,
      },
    },
    coverageDirectory,
    coverageThreshold: {
      global: {
        statements: 100,
        branches: 100,
        functions: 100,
        lines: 100,
      },
    },
    setupTestFrameworkScriptFile: 'jest-enzyme',
    testEnvironment: 'enzyme',
  };

  if (collectCoverageFromRootDir) {
    config.collectCoverageFrom = [
      `${collectCoverageFromRootDir}/**/*.{ts,tsx}`,
      '!**/index.{ts,tsx}',
      '!**/*.stories.{ts,tsx}',
    ];
  }

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
