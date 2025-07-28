import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Product';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import Cart from './pages/Cart';
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <Router>
      <Navbar />
      <Toaster/>
      <main style={{ minHeight: 'calc(100vh - 200px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>

      {/* You can add <Footer /> later when it's ready */}
    </Router>
  );
}

export default App;
