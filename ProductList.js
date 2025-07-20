// ProductList.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../productlist.css'; // CSS imported

const ProductList = () => {
  const { subcategoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/categories/subcategories/${subcategoryId}/products`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [subcategoryId]);

  return (
    <div className="container my-5">

      {/* Banner Image */}
      <div className="d-flex justify-content-center mb-5">
        <img
          src="/images/banner.jpg"
          alt="Furniture Banner"
          className="banner-image"
        />
      </div>

      {/* Tagline */}
      <h2 className="text-center stylish-tagline mb-5">
        Discover Elegant Furniture Online For Your Dream Home
      </h2>

      {/* Product Grid */}
      <div className="row justify-content-center g-4">
        {products.map(product => (
          <div className="col-12 col-md-6" key={product.id}>
            <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
              <div className="product-card d-flex align-items-center p-3 h-100">
                <div className="product-image-container me-3">
                  {product.image ? (
                    <img
                      src={`/images/${product.image}`}
                      className="img-fluid product-image"
                      alt={product.name}
                    />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                </div>
                <div className="product-details">
                  <h5 className="product-name mb-2">{product.name}</h5>
                  <p className="product-description mb-2">
                    {product.description.slice(0, 80)}...
                  </p>
                  <p className="product-price fw-bold">$ {product.price.toLocaleString()}</p>
                  <button className="btn btn-dark btn-sm mt-2">Buy Now</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductList;
