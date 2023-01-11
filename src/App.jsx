
import './App.css'
import { NavLink, Routes, Route } from "react-router-dom"
import Home from './Home'
import Products from './Products'
import ProductDetail from './ProductDetail'
import ProductNew from './ProductNew'
//active link see css
function App() {

  return (
    <div className="App">
      <h1>React-router</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/products/new" element={<ProductNew/>}/>
      </Routes>

    </div>
  )
}

export default App
