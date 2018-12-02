const path = require('path')
const { styles, theme } = require('./styleguide.styles')

module.exports = {
  title: 'react-listable',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  },
  styles,
  theme,
  styleguideComponents: {
    Logo: path.join(__dirname, 'lib/components/Logo')
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Installation',
      content: 'docs/installation.md',
      description: 'You can use npm/yarn to install'
    },
    {
      name: 'Components',
      components: 'src/**/[A-Z]*.js'
    }
  ],
  showCode: true,
  moduleAliases: {
    'react-listable': path.resolve(__dirname, 'src')
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
  }
}
