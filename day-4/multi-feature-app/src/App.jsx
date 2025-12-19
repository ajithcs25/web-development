import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import ProductCard from "./ProductCard";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [search, setSearch] = useState("");
  const [seconds, setSeconds] = useState(0);
  const [loading, setLoading] = useState(false);

  const loaderRef = useRef(null);
  const LIMIT = 10;

  // 🕒 TIMER (setInterval)
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 📦 FETCH PRODUCTS (useCallback = stable function)
  const fetchProducts = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    const res = await fetch(
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
    );
    const data = await res.json();

    setProducts((prev) => {
      const existingIds = new Set(prev.map((p) => p.id));
      const uniqueNew = data.products.filter(
        (p) => !existingIds.has(p.id)
      );
      return [...prev, ...uniqueNew];
    });

    setSkip((prev) => prev + LIMIT);
    setLoading(false);
  }, [skip, loading]);

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  // 🔭 INFINITE SCROLL (Intersection Observer)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchProducts();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [fetchProducts]);

  // 🔍 SEARCH OPTIMIZATION (useMemo)
  const filteredProducts = useMemo(() => {
    return products.filter(
      (p) =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, products]);

  // 🧠 Stable handler (useCallback)
  const handleSelect = useCallback((title) => {
    alert(`Selected: ${title}`);
  }, []);

  return (
    <div className="container">
      <h1>Product Listing</h1>

      <p className="timer">App running for {seconds}s</p>

      {/* 🔍 Search */}
      <input
        className="search"
        type="text"
        placeholder="Search (eg: men)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🛒 Product Grid */}
      <div className="grid">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}   // ✅ FIXED UNIQUE KEY
            product={product}
            onSelect={handleSelect}
          />
        ))}
      </div>

      {loading && <p className="loading">Loading...</p>}

      {/* 👀 Observer Target */}
      <div ref={loaderRef} className="loader">
        Load more products
      </div>
    </div>
  );
}
