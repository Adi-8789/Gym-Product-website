// src/pages/ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/Products';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // ⬅️ Get the product ID from the URL
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="product-details"><h2>Product not found.</h2></div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
