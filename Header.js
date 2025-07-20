import React, { useEffect, useState } from 'react';
import '../Header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './CartContext';  // Import useCart from CartContext
import CartSlider from './CartSlider';   // ✅ Cart slider

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // ✅ control cart toggle

  const { cartItems } = useCart(); // ✅ cart items from context

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then(response => {
        const categoriesData = response.data;

        const subcategoryPromises = categoriesData.map(category =>
          axios.get(`http://localhost:5000/api/categories/${category.id}/subcategories`)
            .then(subResponse => {
              category.subcategories = subResponse.data;
              return category;
            })
            .catch(error => {
              console.error(`Error fetching subcategories for category ${category.id}:`, error);
              return category;
            })
        );

        Promise.all(subcategoryPromises).then(updatedCategories => {
          setCategories(updatedCategories);
        });
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  return (
    <header className="bg-white border-bottom position-relative">
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="/">
              <img src="/images/photo1.jpeg" alt="Empire Design Logo" className="logo" />
            </Link>
          </div>

          <h1 className="text-center flex-grow-1 fs-4 mb-0">
            Discover the Best in Home Decor
          </h1>

          <div className="d-flex align-items-center">
            <div className="input-group search-bar">
              <input
                type="text"
                className="form-control"
                placeholder="Search for furniture..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <span className="input-group-text">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>

          <div className="d-flex gap-3 align-items-center">
            <Link to="/login" className="text-dark text-decoration-none">Login</Link>
            <Link to="/register" className="text-dark text-decoration-none">Register</Link>

            {/* ✅ Cart Icon with count */}
            <div className="position-relative" style={{ cursor: 'pointer' }} onClick={toggleCart}>
  <i className="fas fa-shopping-cart fs-5 text-dark"></i>
  {cartItems && cartItems.length > 0 && (
    <span
      className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
      style={{ fontSize: '0.7rem' }}
    >
      {cartItems.length}
    </span>
  )}
</div>

          </div>
        </div>

        <nav className="mt-3">
          <ul className="nav justify-content-center">
            {categories.map((category, index) => (
              <li className="nav-item dropdown" key={index}>
                <button
                  className="nav-link dropdown-toggle text-dark bg-transparent border-0"
                  id={`categoryDropdown${index}`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                >
                  {category.name}
                </button>

                <ul className="dropdown-menu" aria-labelledby={`categoryDropdown${index}`}>
                  {category.subcategories && category.subcategories.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link className="dropdown-item" to={`/subcategory/${sub.id}/products`}>
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="nav-item">
              <Link to="/aboutus" className="nav-link text-dark">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/contactus" className="nav-link text-dark">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* ✅ Cart Slider Component */}
      <CartSlider isOpen={isCartOpen} onClose={toggleCart} />
    </header>
  );
};

export default Header;
