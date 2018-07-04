module.exports = ({
  testRootDir = 'src',
  collectCoverageFromRootDir = 'src',
} = {}) => {
  const config = {
    rootDir: '../../',
    testRegex: `(/__tests__/.*|${testRootDir}/.*?(\\.|/)(test|spec))\\.tsx?$`,
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    modulePathIgnorePatterns: ['<rootDir>/tmp'],
    globals: {
      'ts-jest': {
        tsConfigFile: './tsconfig.json',
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
