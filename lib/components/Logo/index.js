const React = require('react')
const { name, version } = require('../../../package.json')

const Logo = () => React.createElement(
  'a',
  {
    className: 'rsg-logo',
    href: 'https://github.com/victorvoid/react-listable',
    target: '_blank'
  },
  React.createElement('span', { className: 'rsg-logo-name' }, name),

  React.createElement('em', { className: 'rsg-logo-version' }, version)
)

export default Logo
