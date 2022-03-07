
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

import About from './ReactRouterDom/pages/About';
import Home from './ReactRouterDom/pages/Home';


function App() {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>

  );
}

export default App;
