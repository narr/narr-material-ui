const path = require('path');

module.exports = ({ htmlReporterOutputPath } = {}) => {
  const config = {
    collectCoverageFrom: [
      '**/src/**/*.{ts,tsx}',
      '!**/*.d.ts',
      '!**/*.stories.{ts,tsx}',
      '!**/shared/storybook/**',
    ],
    coverageDirectory: path.join(__dirname, '../../docs/coverage'),
    moduleNameMapper: {
      // https://jestjs.io/docs/en/webpack#handling-static-assets
      '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/../scripts/jest/mocks/fileMock.js',
      '\\.(css|less|sass|scss)$':
        '<rootDir>/../scripts/jest/mocks/styleMock.js',
      '^project-root(.*?)$': '<rootDir>/../$s1',
    },
    rootDir: path.join(__dirname, '../../packages'),
    setupFilesAfterEnv: [
      '@testing-library/react/cleanup-after-each',
      '@testing-library/jest-dom/extend-expect',
    ],
    // need to transform lodash-es
    // https://medium.com/@martin_hotell/tree-shake-lodash-with-webpack-jest-and-typescript-2734fa13b5cd
    // https://jestjs.io/docs/en/tutorial-react-native#transformignorepatterns-customization
    transformIgnorePatterns: ['node_modules/(?!(lodash-es)/)'],
  };

  if (htmlReporterOutputPath) {
    config.reporters = [
      'default',
      [
        'jest-html-reporter',
        {
          pageTitle: 'Test Report',
          outputPath: htmlReporterOutputPath,
        },
      ],
    ];
  }
  return config;
};
