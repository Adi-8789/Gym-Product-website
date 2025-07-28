import React, { useContext } from "react";
import { CartContext } from "../context/CartContex";
import products from "../data/Products";
import "../pages/product.css";
import {Link} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {toast}from"react-hot-toast";
function Products() {
  const { addToCart, cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // toast ("iteam added")
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`); // ✅ show toast
  };
  return (
    <div className="product-container">
        {/* {this is for cart icon} */}
        <div className="cart-icon">
        <Link to ="/cart">
          <FaShoppingCart size={20} />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
