# react-listable

A collection of react component that iterates over the each prop and renders the render prop.
[Demo](https://victorvoid.me/react-listable)

## Overview

```jsx 

const users = [{ name: 'Victor 😎', age: 10 }]
<For each={users} render={
  ({ name, age }) => <p>{ name }, { age }</p>
}/>

```

## Installation

You can use npm/yarn to install

```bash
npm install react-listable
```

## Documentation

See the full documentation and live examples at https://victorvoid.me/react-listable

License
-------

The code is available under the [MIT License](LICENSE.md).
