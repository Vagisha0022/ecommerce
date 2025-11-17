import React from "react";

const Cart = ({ cart, increaseQty, decreaseQty, removeItem }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} style={styles.item}>
              <img src={item.image} alt="" style={styles.img} />

              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div style={styles.qty}>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>
              </div>

              <button style={styles.remove} onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
};

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  img: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  qty: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginTop: "5px",
  },
  remove: {
    background: "red",
    color: "white",
    border: "none",
    padding: "6px 10px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Cart;
