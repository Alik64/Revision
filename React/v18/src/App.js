import logo from './logo.svg';
import './App.css';
import List from './List';
import { useState } from 'react';

const source = new Array(12000).fill('').map((_, i) => ({ id: i, name: `Item ${i + 1}` }))

const filterItems = (filter) => {

  return filter
    ? source.filter(i => i.name.includes(filter))
    : source
}


function App() {
  const [filter, setFilter] = useState('')

  const items = filterItems(filter)

  const changeHandler = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div className="App">
      <input type='text' onChange={changeHandler} />
      <List items={items} />
    </div>
  );
}

export default App;
