import React from 'react'
import PropTypes from 'prop-types'
import { Listable, getItem } from '../core'

const Ol = ({
  each,
  render: Render,
  liAttrs: { className, ...liProps } = {},
  isActived,
  ...props
}) => {
  return (
    <ol {...props}>
      { each.map((item, index) => (
        <li
          key={index}
          className={`list-item ${className || ''} ${isActived(item)}`}
          {...liProps}>
          <Render key={item} {...getItem(item)} />
        </li>))
      }
    </ol>
  )
}

Ol.propTypes = {
  each: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  loader: PropTypes.func,
  setActive: PropTypes.func
}

export default Listable(Ol)
