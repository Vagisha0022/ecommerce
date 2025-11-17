import React, { useState } from "react";
import products from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import SearchSort from "./components/SearchSort";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";  // ⭐ NEW

function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("products"); // products | cart | details
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // ⭐ Product selected for details page
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ⭐ DARK MODE
  const [theme, setTheme] = useState("dark");

  // SEARCH + SORT FUNCTION
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );

  const decreaseQty = (id) =>
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );

  const removeItem = (id) => setCart((prev) => prev.filter((i) => i.id !== id));

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>

      {/* NAVBAR */}
      <Navbar 
        cartCount={cart.length} 
        setView={setView}
        theme={theme}
        setTheme={setTheme}
      />

      <div style={{ padding: "20px" }}>
        
        {/* ⭐ PRODUCTS PAGE */}
        {view === "products" && (
          <>
            {/* AMAZON STYLE BANNER */}
            <img
              src="/banner.jpg"
              alt="banner"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            />

            {/* SEARCH + SORT */}
            <SearchSort
              search={search}
              setSearch={setSearch}
              sort={sort}
              setSort={setSort}
            />

            {/* PRODUCT GRID */}
            <ProductList 
              products={filteredProducts} 
              addToCart={addToCart}
              setView={setView}
              setSelectedProduct={setSelectedProduct}
            />
          </>
        )}

        {/* ⭐ CART PAGE */}
        {view === "cart" && (
          <Cart
            cart={cart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeItem={removeItem}
          />
        )}

        {/* ⭐ PRODUCT DETAILS PAGE */}
        {view === "details" && selectedProduct && (
          <ProductDetails 
            product={selectedProduct}
            addToCart={addToCart}
            setView={setView}
          />
        )}

      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
