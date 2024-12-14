import React from "react";

const ProductRating = ({ rating, maxRating = 5 }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {[...Array(maxRating)].map((_, index) => (
        <span
          key={index}
          style={{
            fontSize: "20px",
            color: index < rating ? "black" : "#ccc",
          }}
        >
          ★
        </span>
      ))}
      <span style={{ marginLeft: "8px", fontSize: "16px", color: "#555" }}>
        {rating}/{maxRating}
      </span>
    </div>
  );
};

export default ProductRating;
