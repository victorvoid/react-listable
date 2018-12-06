import React from 'react'
import PropTypes from 'prop-types'
import { Listable, getItem } from '../core'

const For = ({
  each,
  render: Render,
  isActived,
  ...props
}) => {
  return each.map((item, index) => (
    <Render key={index} index={index} isActive={isActived(item)} {...getItem(item)} {...props} />
  ))
}

For.propTypes = {
  each: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  loader: PropTypes.func,
  setActive: PropTypes.func
}

export default Listable(For)
