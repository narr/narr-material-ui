module.exports = {
  rootDir: '../../',
  testRegex: '(/__tests__/.*|packages/.*?(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json',
      babelConfig: {
        presets: ['env'],
      },
    },
  },
  collectCoverageFrom: [
    'packages/**/src/**/*.{ts,tsx}',
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
