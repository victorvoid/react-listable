const path = require('path')
const { version } = require('./package')

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
  theme: {
    color: {
      link: '#f86c6f',
      linkHover: '#e15356'
    },

    fontFamily: {
      base: '"Roboto", sans-serif'
    }
  },
  sections: [
    {
      name: 'Introduction',
      description: 'react-listable is a component that iterates over the each prop and renders the render prop.'
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
  version,
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
