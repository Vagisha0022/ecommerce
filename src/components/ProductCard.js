import React, { useState } from "react";

const ProductCard = ({ product, addToCart, setView, setSelectedProduct }) => {

  const [isHover, setIsHover] = useState(false);
const handleAddToCart = (e, product) => {
  const img = e.target.closest(".card").querySelector("img");
  const rect = img.getBoundingClientRect();

  const clone = img.cloneNode(true);
  clone.style.position = "absolute";
  clone.style.left = rect.left + "px";
  clone.style.top = rect.top + "px";
  clone.style.width = rect.width + "px";
  clone.style.height = rect.height + "px";
  clone.style.transition = "all 1s ease";
  clone.style.zIndex = 9999;

  document.body.appendChild(clone);

  setTimeout(() => {
    clone.style.left = window.innerWidth - 80 + "px";
    clone.style.top = "20px";
    clone.style.width = "30px";
    clone.style.height = "30px";
    clone.style.opacity = "0.2";
  }, 50);

  setTimeout(() => clone.remove(), 1000);

  addToCart(product);
};

  return (
    <div
  className="card"
  style={{ ...styles.card, ...(isHover ? styles.cardHover : {}) }}
  onMouseEnter={() => setIsHover(true)}
  onMouseLeave={() => setIsHover(false)}
  onClick={() => setView("details") || setSelectedProduct(product)}
>


      <img src={product.image} alt={product.name} style={styles.img} />

      <div style={styles.body}>
        <h3 style={styles.title}>{product.name}</h3>

        {/* ⭐ Rating stars */}
        <div style={styles.rating}>
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
        </div>

        {/* ⭐ Prime badge */}
        {product.prime && (
          <img
            src="https://i.imgur.com/3cXnZ9i.png"
            alt="Prime"
            style={{ width: "60px", marginBottom: "10px" }}
          />
        )}

        <p style={styles.price}>₹{product.price}</p>

        <button 
  style={styles.btn}
  onClick={(e) => handleAddToCart(e, product)}
>
  Add to Cart
</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "250px",
    background: "#fff",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
    transition: "0.2s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "scale(1.05)",
    boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
  },
  img: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  body: { marginTop: "10px", textAlign: "left" },
  title: { fontSize: "18px", margin: "5px 0" },
  rating: { color: "#ffa41c", fontSize: "16px", marginBottom: "5px" },
  price: { fontWeight: "bold", color: "#B12704" },
  btn: {
    background: "#ffd814",
    border: "1px solid #fcd200",
    padding: "10px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "100%",
    marginTop: "10px",
  },
};

export default ProductCard;
