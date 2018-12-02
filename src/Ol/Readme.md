### Basic

```jsx 
initialState = { 
  users: [
    { name: 'Victor 👴', age: 10 }, 
    { name: 'Maria 🙍', age: 20 }
  ] 
};

<Ol each={state.users} render={
  ({ name, age }) => <p>{ name }, { age }</p>
} />
```


### Adding Loader
You can add a loader to a list `null/undefined`


```jsx 
initialState = { 
  users: null
};

<Ol
  loader={() => <div>loading...</div>}
  each={state.users} 
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```

### Add attributes to ol


```jsx 
initialState = { 
  users: [
    { name: 'Victor 👴', age: 10 }, 
    { name: 'Maria 🙍', age: 20 }
  ] 
};

<Ol 
  className="list"
  data-name="users"
  each={state.users} 
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```


### Add attributes to li


```jsx 
initialState = { 
  users: [
    { name: 'Victor 👴', age: 10 }, 
    { name: 'Maria 🙍', age: 20 }
  ] 
};

<Ol 
  className="list"
  each={state.users} 
  liAttrs={{ className: 'user' }}
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```
