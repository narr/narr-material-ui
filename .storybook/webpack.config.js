const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../packages'),
    use: [
      require.resolve('ts-loader'),
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  return defaultConfig;
};
