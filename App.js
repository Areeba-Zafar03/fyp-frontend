import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './component/home';
import Login from './component/Login';
import Forgetpass from './component/Forgetpass';
import Contactus from './component/Contactus';
import Register from './component/Register';
import Aboutus from './component/Aboutus';
import Header from './component/Header';
import Footer from './component/Footer';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import CartIcon from './component/CartIcon'; // Import the CartIcon component
import CartSlider from './component/CartSlider'; // Make sure you have the CartSlider component

// 🔥 Import CartProvider
import { CartProvider } from './component/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false); // State to control the cart slider visibility

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState); // Toggle cart visibility
  };

  return (
    <Router>
      {/* ✅ Wrap entire app inside CartProvider */}
      <CartProvider>
        <div className="app-container">
          {/* Cart Icon - Position it in the top-right corner */}
          <CartIcon onClick={toggleCart} />

          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/Contactus" element={<Contactus />} />
              <Route path="/forgetpass" element={<Forgetpass />} />
              <Route path="/subcategory/:subcategoryId/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>

        {/* CartSlider component - Pass isOpen state and toggle function */}
        <CartSlider isOpen={isCartOpen} toggleCart={toggleCart} />
      </CartProvider>
    </Router>
  );
}

export default App;
