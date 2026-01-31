import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Cart = () => {
  const { cartItems, all_product, removeFromCart } = useContext(ShopContext);

  // Convert object-based cart to array of products with qty > 0
  const itemsInCart = all_product
    .filter(product => cartItems[product.id] > 0)
    .map(product => ({ ...product, qty: cartItems[product.id] }));

  // Calculate total price
  const totalPrice = itemsInCart.reduce(
    (total, item) => total + item.new_price * item.qty,
    0
  );

  return (
    <div style={{ padding: "1rem", maxWidth: "800px", margin: "0 auto" }}>
      <h2>My Cart</h2>

      {itemsInCart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {itemsInCart.map(item => (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid #ddd"
                }}
              >
                <div>
                  <strong>{item.name}</strong> - ${item.new_price} x {item.qty}
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    backgroundColor: "red",
                    color: "#fff",
                    border: "none",
                    padding: "0.3rem 0.6rem",
                    cursor: "pointer",
                    borderRadius: "4px"
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <h3 style={{ textAlign: "right", marginTop: "1rem" }}>
            Total: ${totalPrice.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
