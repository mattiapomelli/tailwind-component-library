module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // CSS Modules and PostCSS for Tailwind CSS
    const cssRuleIndex = config.module.rules.findIndex((rule) =>
      'test.css'.match(rule.test),
    )

    config.module.rules.splice(cssRuleIndex, 1)

    config.module.rules.push({
      test: /\.css$/i,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        'postcss-loader',
      ],
    })

    // SVG
    // Needed for SVG importing using svgr
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(
      (rule) => rule.test && rule.test.test('.svg'),
    )
    fileLoaderRule.exclude = /\.svg$/

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: false,
            icon: true,
          },
        },
      ],
    })

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
        },
      },
    }
  },
}
