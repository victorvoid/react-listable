import React from 'react'
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

export default Listable(Ul)