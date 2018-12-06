### Basic

```jsx 
initialState = { 
  users: [{ name: 'Victor 😎', age: 10 }] 
};

<For each={state.users} render={
  ({ name, age }) => <p>{ name }, { age }</p>
}/>
```

### No Objects

```jsx 
initialState = { 
  users: ['Victor', 'Joao'] 
};

<For each={state.users} render={({ item }) => <p>{ item }</p>} />
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

<For each={state.users} render={({ index }) => <p>{ index }</p>} />
```

### Adding Loader
You can add a loader to a list `null/undefined`


```jsx 
initialState = { 
  users: null
};

<For 
  each={state.users} 
  loader={() => <div>loading</div>}
  render={
    ({ name, age }) => <p>{ name }, { age }</p>
  }/>
```

### Set active item (active class)

```jsx 
initialState = { 
  users: [{ 
    name: 'Victor 😎', age: 10 
  }, { 
    name: 'Joana', age: 2
  }] 
};

<For 
  each={state.users} 
  loader={() => <div>loading</div>}
  setActive={({ name }) => name === 'Victor 😎'}
  render={
    ({ name, age, isActive }) => <p>{ name }, { age } -> { isActive }</p>
  }/>

```
