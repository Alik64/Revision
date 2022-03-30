
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import LifecycleA from './ComponentLifecycleMethods/LifecycleA';
import LifecycleB from './ComponentLifecycleMethods/LifecycleB';
import Admin from './ReactRouterDom/components/Admin';
import { AuthProvider } from './ReactRouterDom/components/auth';
import Featured from './ReactRouterDom/components/Featured';

import Navbar from './ReactRouterDom/components/Navbar';
import New from './ReactRouterDom/components/New';
import OrderSummury from './ReactRouterDom/components/OrderSummury';
import RequireAuth from './ReactRouterDom/components/RequireAuth';
import UserDetails from './ReactRouterDom/components/UserDetails';
import { Users } from './ReactRouterDom/components/Users';

import Home from './ReactRouterDom/pages/Home';
import { Login } from './ReactRouterDom/pages/Login';
import NotFound from './ReactRouterDom/pages/NotFound';
import Products from './ReactRouterDom/pages/Products';
import Profile from './ReactRouterDom/pages/Profile';
// import About from './ReactRouterDom/pages/About';

const LazyAbout = React.lazy(() => import('./ReactRouterDom/pages/About'))

// function App() {
//   return (
//     <AuthProvider>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='about' element={
//           <React.Suspense fallback='Loading...'>
//             <LazyAbout />
//           </React.Suspense>} />

//         <Route path='order-summary' element={<OrderSummury />} />

//         <Route path='products' element={<Products />}>
//           <Route index element={<Featured />} />
//           <Route path='featured' element={<Featured />} />
//           <Route path='new' element={<New />} />
//         </Route>
//         <Route path='users' element={<Users />} >
//           <Route path=':userId' element={<UserDetails />} />
//           <Route path='admin' element={<Admin />} />
//         </Route>
//         <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
//         <Route path='login' element={<Login />} />
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </AuthProvider>

//   );
// }
function App() {
  return (
    <>
      <LifecycleA />
      {/* <LifecycleB /> */}
    </>

  );
}

export default App;
