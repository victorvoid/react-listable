import React from 'react'

const isNil = value => value === null || value == undefined

const noop = () => null

export const getItem = (item) => {
  if(typeof(item) === 'object'){
    return item
  }

  return { item }
}

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
