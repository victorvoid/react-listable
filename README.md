# react-listable

A collection of react components that iterates over the each prop and renders the render prop.
[Demo](https://victorvoid.me/react-listable)

![](https://github.com/victorvoid/react-listable/blob/master/lib/overview.png)

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

### For

```jsx 
<For 
  each={state.users} 
  loader={() => <div>loading</div>}
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```

## Ul

```jsx 
<Ul 
  className="list"
  each={state.users} 
  setActive={({ name }) => name === 'Maria 🙍'}
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```

## Ol

```jsx 
<Ol 
  className="list"
  each={state.users} 
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>

```

See the full documentation and live examples at https://victorvoid.me/react-listable

License
-------

The code is available under the [MIT License](LICENSE.md).
