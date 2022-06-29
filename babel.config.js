module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.tsx', '.ts', '.json', '.svg', '.jpg'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@atoms': './src/components/atoms',
            '@molecules': './src/components/molecules',
            '@organisms': './src/components/organisms',
            '@screens': './src/screens',
            '@services': './src/services',
            '@utils': './src/utils',
            '@routes': './src/routes',
            // '@interfaces': './src/interfaces',
            // '@routes': './src/routes',
            // '@stores': './src/stores',
            // '@styles': './src/styles',
          },
        },
      ],
    ]
  };
};
