import { useState } from 'react'

import './App.css'

import Nineteen from './Nineteen';

function App() {
  const [count, setCount] = useState(0)

  return (
   <Nineteen/>
  )
}

export default App
