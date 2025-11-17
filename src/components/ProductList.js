import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart, setView, setSelectedProduct }) => {

  return (
    <div style={styles.grid}>
      {products.map((p) => (
        <ProductCard 
  key={p.id} 
  product={p} 
  addToCart={addToCart} 
  setView={setView}
  setSelectedProduct={setSelectedProduct}
/>

      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  },
};


export default ProductList;
