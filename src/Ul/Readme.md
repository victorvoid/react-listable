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

### No Objects

```jsx 
initialState = { 
  users: ['Victor', 'Joao'] 
};

<Ul each={state.users} render={({ item }) => <p>{ item }</p>} />
```

### Getting index

```jsx 
initialState = { 
  users: [
    { name: 'Victor 😎', age: 18 },
    { name: 'Carlos 😎', age: 19 },
    { name: 'Tesk 😎', age: 20 },
    { name: 'Spike 😎', age: 21 }
  ] 
};

<Ul each={state.users} render={({ index }) => <p>{ index }</p>} />
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
  setActive={({ name }) => name === 'Maria 🙍'}
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```
