const path = require('path');

module.exports = {
  stories: ['../imports/**/*.stories.jsx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-postcss'],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'resolve-url-loader',
          options: {
            root: path.resolve(__dirname, '../public'),
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
