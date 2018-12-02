import React from 'react'
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

export default Listable(For)
