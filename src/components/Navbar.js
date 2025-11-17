import React from "react";

const Navbar = ({ cartCount, setView, theme, setTheme }) => {

  return (
    <nav style={styles.nav}>
      <div style={styles.left} onClick={() => setView("products")}>
        <h2 style={styles.logo}>V-Shop TEST</h2>
      </div>

      <div style={styles.searchBox}>
        <input style={styles.searchInput} placeholder="Search Amazon products..." />
        <button style={styles.searchBtn}>🔍</button>
      </div>
      <button 
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  style={{
    background: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "20px"
  }}
>
  {theme === "light" ? "🌙" : "☀️"}
</button>


      <div style={styles.cart} onClick={() => setView("cart")}>
        🛒 Cart <span>({cartCount})</span>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#131921",
    padding: "10px 20px",
    color: "white",
  },
  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  searchBox: {
    display: "flex",
    flex: 1,
    maxWidth: "600px",
    marginLeft: "20px",
  },
  searchInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "4px 0 0 4px",
    border: "none",
  },
  searchBtn: {
    background: "#febd69",
    border: "none",
    padding: "10px 14px",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
  },
  cart: {
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default Navbar;
