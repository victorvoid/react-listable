### Basic

```jsx 
initialState = { 
  users: [
    { name: 'Victor 👴', age: 10 }, 
    { name: 'Maria 🙍', age: 20 }
  ] 
};

<Ul each={state.users} render={
  ({ name, age }) => <p>{ name }, { age }</p>
} />
```


### Adding Loader
You can add a loader to a list `null/undefined`


```jsx 
initialState = { 
  users: null
};

<Ul
  loader={() => <div>loading...</div>}
  each={state.users} 
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```

### Add attributes to ul


```jsx 
initialState = { 
  users: [
    { name: 'Victor 👴', age: 10 }, 
    { name: 'Maria 🙍', age: 20 }
  ] 
};

<Ul 
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

<Ul 
  className="list"
  each={state.users} 
  liAttrs={{ className: 'user' }}
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```



### Set active item (active class)


```jsx 
initialState = { 
  users: [
    { name: 'Victor 👴', age: 10 }, 
    { name: 'Maria 🙍', age: 20 }
  ] 
};

<Ul 
  className="list"
  each={state.users} 
  itemActive={({ name }) => name === 'Maria 🙍'}
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```
