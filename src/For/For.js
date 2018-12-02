import React from 'react'
import PropTypes from 'prop-types'
import { Listable } from '../core'

const For = ({
  each,
  render: Render,
  ...props
}) => {
  return each.map((item, index) => (
    <Render key={item} {...item} {...props} />
  ))
}

For.propTypes = {
  each: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  loader: PropTypes.func,
  itemActive: PropTypes.func
}

export default Listable(For)
