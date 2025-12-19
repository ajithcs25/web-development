import React from "react";

const ProductCard = React.memo(({ product, onSelect }) => {
  console.log("Rendering:", product.title);

  return (
    <div className="card" onClick={() => onSelect(product.title)}>
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="category">{product.category}</p>
      <p className="price">₹ {product.price}</p>
    </div>
  );
});

export default ProductCard;
