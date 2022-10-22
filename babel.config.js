module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json', '.svg', '.jpg'],
          alias: {
            '@assets': './assets',
            '@application': './src/application',
            '@infrastructure': './src/infrastructure',
            '@presentation': './src/presentation',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
