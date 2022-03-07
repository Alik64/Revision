
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './ReactRouterDom/components/Admin';
import Featured from './ReactRouterDom/components/Featured';

import Navbar from './ReactRouterDom/components/Navbar';
import New from './ReactRouterDom/components/New';
import OrderSummury from './ReactRouterDom/components/OrderSummury';
import UserDetails from './ReactRouterDom/components/UserDetails';
import { Users } from './ReactRouterDom/components/Users';
import About from './ReactRouterDom/pages/About';
import Home from './ReactRouterDom/pages/Home';
import NotFound from './ReactRouterDom/pages/NotFound';
import Products from './ReactRouterDom/pages/Products';


function App() {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OrderSummury />} />

        <Route path='products' element={<Products />}>
          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path='users' element={<Users />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  );
}

export default App;
