import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import axios from 'axios';
import { useCart } from './CartContext';  // Import the Cart context
import '@google/model-viewer';
import '../pagedetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart(); // Get the addToCart function from context

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
      });
  }, [id]);

  if (!product) {
    return <div className="container mt-5">Loading product details...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Add product to the cart
    alert('Item added to cart!');
  };

  return (
    <div className="container mt-5 product-detail-wrapper">
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/category/${product.category_id}`}>Category</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/subcategory/${product.subcategory_id}`}>Subcategory</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="row">
        <div className="col-md-6">
          {/* 3D Model Viewer */}
          <model-viewer
            src={product.model_url}
            alt={product.name}
            auto-rotate
            camera-controls
            environment-image="legacy"
            shadow-intensity="1"
            exposure="1"
            style={{ width: '100%', height: '500px', backgroundColor: '#f4f4f4', borderRadius: '12px' }}
          ></model-viewer>
        </div>

        <div className="col-md-6">
          <h1>{product.name}</h1>
          <h4 className="text-muted">${product.price.toLocaleString()}</h4>
          <p className="mt-4">{product.description}</p>

          <div className="rating mb-3">★★★☆☆</div>
          <button className="btn btn-dark" onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
