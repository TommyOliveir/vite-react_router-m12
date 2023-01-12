
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
//design active link - check css 
function App() {

  return (
    <div className="App">
      <h1>React-router Version 6</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/nestedroute">Nested route</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/Order" element={<Order/>}/>
        {/* nested route*/}
        <Route path='/nestedroute' element={<NestedRoute/>}>
          {/* index route */}
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<ProductNew/>}/>
        </Route>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>

    </div>
  )
}

export default App
