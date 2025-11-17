import React from "react";

const ProductDetails = ({ product, addToCart, setView }) => {
  if (!product) return null;

  return (
    <div style={styles.container}>
      {/* Left side - big image */}
      <img 
        src={product.image} 
        alt={product.name} 
        style={styles.image}
      />

      {/* Right side */}
      <div style={styles.info}>
        <h1>{product.name}</h1>

        {/* Rating */}
        <div style={styles.rating}>
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
        </div>

        {/* Prime badge */}
        {product.prime && (
          <img 
            src="https://i.imgur.com/3cXnZ9i.png"
            alt="Prime"
            style={{ width: "80px", margin: "10px 0" }}
          />
        )}

        {/* Price */}
        <h2 style={styles.price}>₹{product.price}</h2>

        {/* Add to Cart */}
        <button
          style={styles.btn}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        {/* Go Back */}
        <button
          style={styles.back}
          onClick={() => setView("products")}
        >
          ← Back to Products
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "30px",
    padding: "20px",
  },
  image: {
    width: "400px",
    height: "400px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  info: {
    flex: 1,
  },
  rating: {
    fontSize: "20px",
    color: "#ffa41c",
  },
  price: {
    color: "#B12704",
    margin: "10px 0",
  },
  btn: {
    background: "#ffd814",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "1px solid #fcd200",
    cursor: "pointer",
    width: "200px",
    fontSize: "16px",
    marginTop: "10px",
  },
  back: {
    background: "#ddd",
    padding: "10px 15px",
    borderRadius: "6px",
    marginTop: "15px",
    cursor: "pointer",
    border: "none",
  },
};

export default ProductDetails;
