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
            '@components': './app/components',
            '@navigation': './app/navigation',
            '@screens': './app/screens',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
