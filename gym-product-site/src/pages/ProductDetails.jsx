import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import products from "../data/Products";
import { CartContext } from "../context/CartContex";
import toast from "react-hot-toast";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return (
      <div className="product-details">
        <h2>Product not found.</h2>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1, // ✅ Add quantity explicitly
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <div className="details-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>
        <p className="description">{product.description}</p>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
