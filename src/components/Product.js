import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      {/* <Image source={require('./my-icon.png')} /> */}
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <div className="quantity">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
