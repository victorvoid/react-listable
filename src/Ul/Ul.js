import React from 'react'
import PropTypes from 'prop-types'
import { Listable } from '../core'

const Ul = ({
  each,
  render: Render,
  liAttrs: { className, ...liProps } = {},
  isActived,
  ...props
}) => {
  return (
    <ul {...props}>
      { each.map((item, index) => (
        <li
          key={index}
          className={`list-item ${className || ''} ${isActived(item)}`}
          {...liProps}>
          <Render key={item} {...item} />
        </li>))
      }
    </ul>
  )
}

Ul.propTypes = {
  each: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  loader: PropTypes.func,
  itemActive: PropTypes.func
}

export default Listable(Ul)
