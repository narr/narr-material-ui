module.exports = ({
  rootDir = '../../',
  testRootDir = './src',
  collectCoverageFromRootDir = './src',
  tsConfigFile = './node_modules/narr-material-ui-common/config/tsconfig.json',
} = {}) => {
  const config = {
    rootDir,
    testRegex: `(/__tests__/.*|${testRootDir}/.*?(\\.|/)(test|spec))\\.tsx?$`,
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['<rootDir>/tmp'],
    globals: {
      'ts-jest': {
        tsConfigFile,
        babelConfig: {
          presets: ['env'],
        },
      },
    },
    collectCoverageFrom: [
      `${collectCoverageFromRootDir}/**/*.{ts,tsx}`,
      '!**/*.stories.{ts,tsx}',
    ],
    coverageDirectory: './tmp/coverage',
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
  return config;
};
