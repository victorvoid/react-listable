import React from 'react'
import { Listable } from '../core'

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
          <Render key={item} {...item} />
        </li>))
      }
    </ol>
  )
}

export default Listable(Ol)
