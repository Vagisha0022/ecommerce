import React from "react";

const SearchSort = ({ search, setSearch, sort, setSort }) => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />

      <select value={sort} onChange={(e) => setSort(e.target.value)} style={styles.select}>
        <option value="">Sort By</option>
        <option value="low">Price: Low → High</option>
        <option value="high">Price: High → Low</option>
      </select>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "10px",
    margin: "20px 0",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default SearchSort;
