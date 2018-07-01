const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../../packages'),
    use: [
      {
        loader: 'ts-loader',
        options: {
          configFile: path.resolve(__dirname, '../../tsconfig.json'),
        },
      },
      require.resolve('react-docgen-typescript-loader'),
    ],
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  return defaultConfig;
};
