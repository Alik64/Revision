import logo from './logo.svg';
import './App.css';
import List from './List';
import { useState, useTransition } from 'react';
import Batching from './Batching';

const source = new Array(12000).fill('').map((_, i) => ({ id: i, name: `Item ${i + 1}` }))

const filterItems = (filter) => {

  return filter
    ? source.filter(i => i.name.includes(filter))
    : source
}


function App() {
  const [filter, setFilter] = useState('')
  const [isPending, startTransition] = useTransition()

  const items = filterItems(filter)

  // const changeHandler = (e) => {
  //   startTransition(() => {
  //     setFilter(e.target.value)
  //   })
  // }
  const changeHandler = (e) => {

    setFilter(e.target.value)

  }
  return (
    <div className="App">
      <input type='text' onChange={changeHandler} />
      <h2>{isPending && 'is Pending...'}</h2>
      <List items={items} />
      <Batching />
    </div>
  );
}

export default App;
