import React from 'react';
import products from '../data/Products';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Fuel Your Fitness</h1>
        <p>Top-quality gym gear & supplements</p>
        <a href="/products" className="hero-btn">Shop Now</a>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.slice(0, 3).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
