import React, { useContext } from 'react';
import { CartContext } from '../context/CartContex';
import '../pages/cart.css';

function Cart() {
  const { cartItems, removeFromCart, clearCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>

                  <div className="quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>

                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{totalPrice}</h3>
            <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
