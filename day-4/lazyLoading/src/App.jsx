// import { useState , useEffect , useRef } from 'react'

// import './App.css'

// function App() {
//   const [items , setitems] = useState([]);
//   const loaderRef = useRef(null);


  
//   // load more data

//   const loadMoreItems = () => {
//     setitems((prev) => [
//       ...prev,
// ...Array.from(
//   { length: 10 },
//   (_, i) => `Item ${prev.length + i + 1}`)
//     ]);
//   };
//     // load initial data
//   useEffect(() => {
//     loadMoreItems();
//   },[]);
//     // intersection observer setup

//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         (entries) => {
//           if(entries[0].isIntersecting){
//             loadMoreItems();
//           }
//         },
//         {threshold: 1}
//       );

//       if(loaderRef.current){
//         observer.observe(loaderRef.current);
//       }

//       return () => observer.disconnect();
//     },[]);
  

//   return (
//     <div className='container'>
//       <h1>Infinite Scrol</h1>
//       <ul>
//         {items.map((item , index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//       <div ref={loaderRef} className='card'>
//         Loading more....
//       </div>
//     </div>
    
//   )
// }

// export default App


import React, { useState, useEffect, useRef } from "react";
import "./App.css"

export default function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sentinel = useRef(null);

  const fetchPosts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?limit=10`
      );
      const newPosts = await response.json();

      if (newPosts.length < 10) {
        setHasMore(false);
      }

      setPosts((prev) => [...prev, ...newPosts]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          fetchPosts();
        }
      },
      { threshold: 0.1 }
    );

    if (sentinel.current) {
      observer.observe(sentinel.current);
    }

    return () => observer.disconnect();
  }, [loading, hasMore]);

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Blog Posts (Infinite Scroll)</h1>

      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            padding: "20px",
            border: "1px solid #ddd",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}

      {loading && (
        <div style={{ textAlign: "center", padding: "20px" }}>
          Loading more posts...
        </div>
      )}

      {/* Observer target */}
      <div ref={sentinel} style={{ height: "1px" }} />

      {!hasMore && (
        <div style={{ textAlign: "center", padding: "20px", color: "#666" }}>
          No more posts
        </div>
      )}
    </div>
  );
}
