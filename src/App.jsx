
import './App.css'
import { Link, Routes, Route } from "react-router-dom"
import Home from './Home'
import Products from './Products'
import ProductDetail from './ProductDetail'

function App() {

  return (
    <div className="App">
      <h1>React-router</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
      </Routes>

    </div>
  )
}

export default App
