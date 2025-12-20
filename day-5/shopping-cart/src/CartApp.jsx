import { useState } from "react";
import "./App.css";

function CartApp() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(item =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      <h3>Products</h3>
      {products.map(product => (
        <div key={product.id} className="product">
          <span>{product.name} - ₹{product.price}</span>
          <button onClick={() => addToCart(product)}>Add</button>
        </div>
      ))}

      <hr />

      <h3>Cart Summary</h3>
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <span>
            {item.name} × {item.qty}
          </span>
          <button onClick={() => decreaseQty(item.id)}>-</button>
        </div>
      ))}

      <h3>Total: ₹{totalAmount}</h3>
    </div>
  );
}

export default CartApp;
