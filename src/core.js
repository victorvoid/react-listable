import React from 'react'
import isNil from 'ramda/src/isNil'

const noop = () => null

export const Listable = (Component) => ({
  loader: Loader,
  setActive = noop,
  ...props
}) => {
  const isActived = item => setActive(item) ? 'active' : ''

  if (!isNil(props.each)) {
    return <Component {...props} isActived={isActived} />
  }

  if (Loader) {
    return <Loader />
  }

  return null
}
