import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [products] = useState([
    {
      id: 1,
      name: 'Sandisk 64GB Pendrive',
      price: 1000,
      image: "/asserts/images/sandisk64gb.jpeg",
    },
    {
      id: 2,
      name: 'Oneplus Nord 11 Pro 5G',
      price: 15000,
      image: '/asserts/images/oneplus11.jpeg',
    },
    {
      id: 3,
      name: 'HP 16GB Memory Card',
      price: 500,
      image: '/asserts/images/hp16gbmcard.jpeg',
    },
    {
      id: 4,
      name: 'JBL True wireless 2 Buds',
      price: 3000,
      image: '/asserts/images/jblbuds.jpeg',
    },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (productToAdd) => {
    const existingItem = cart.find((item) => item.id === productToAdd.id);

    if (existingItem) {
      existingItem.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const increaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cart.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Natasha E-Commerce</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart
        cart={cart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
      />
    </div>
  );
}

export default App;
