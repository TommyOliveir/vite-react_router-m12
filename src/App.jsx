
import React from 'react'
import './App.css'
import { NavLink, Routes, Route } from "react-router-dom"
import Home from './Home'
import Products from './Products'
import ProductDetail from './ProductDetail'
import ProductNew from './ProductNew'
import Order from './Order'
import NoMatch from './Nomatch'
import NestedRoute from './NestedRoute'
import FeaturedProducts from './FeaturedProducts'
import SearchParams from './SearchParams'
import Profile from './Profile'
import Login from './Login'
import { useAuth } from './auth'
import RequireAuth from './RequireAuth'
import { useLocation } from 'react-router-dom'
//design active link - check css 
function App() {

  const auth = useAuth()
  const location = useLocation()

  const redirectPath = location.state?.path || '/'
console.log('path app',redirectPath )

  return (
    <div className="App">


      <h1>React-router Version 6 </h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/nestedroute">Nested route</NavLink>
        <NavLink to="/searchparams">Search params</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        {
          !auth.user && (
            <NavLink to='/login'>Login</NavLink>
          )
        }
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/searchparams" element={<SearchParams />} />

        {/* protected route */}

        <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />

        <Route path="/login" element={<Login />} />

        {/* nested route*/}
        <Route path='/nestedroute' element={<NestedRoute />}>

          {/* index route */}
          <Route index element={<FeaturedProducts />} />
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<ProductNew />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>


    </div>
  )
}

export default App
