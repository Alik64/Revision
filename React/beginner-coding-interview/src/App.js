
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './ReactRouterDom/components/Navbar';
import About from './ReactRouterDom/pages/About';
import Home from './ReactRouterDom/pages/Home';


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>

  );
}

export default App;
