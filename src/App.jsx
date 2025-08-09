import './App.css'
import Header from './components/header/header'
import ProductPage from './components/ProductPage/ProductPage'
import CartPage from './components/CartPage/CartPage'
import SuccessPage from './components/SuccessPage/SuccessPage'
import FailPage from './components/FailPage/FailPage'
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [ currentPage, setCurrentPage ] = useState(true)
  const [ cartItems, setCartItems ] = useState([])

  return (
    <Router>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <Routes>
        <Route path="/" element={currentPage ? <ProductPage setCartItems={setCartItems} cartItems={cartItems} /> : <CartPage cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/fail" element={<FailPage />}/>
      </Routes>
    </Router>
  )
}

export default App
