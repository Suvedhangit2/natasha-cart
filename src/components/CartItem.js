import React from 'react';

function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>Price: ₹{item.price}</p>
        <div className="quantity">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
        <p>Total: ₹{item.price * item.quantity}</p>
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;
