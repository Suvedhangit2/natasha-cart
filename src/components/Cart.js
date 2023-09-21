import React from 'react';
import CartItem from './CartItem';

function Cart({ cart, increaseQuantity, decreaseQuantity, removeItem }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
        />
      ))}
      <div className="cart-total">
        <h3>Total Price: ₹{total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;
