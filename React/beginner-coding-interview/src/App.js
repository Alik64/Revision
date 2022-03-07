
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './ReactRouterDom/components/Navbar';
import OrderSummury from './ReactRouterDom/components/OrderSummury';
import About from './ReactRouterDom/pages/About';
import Home from './ReactRouterDom/pages/Home';
import NotFound from './ReactRouterDom/pages/NotFound';


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummury />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
