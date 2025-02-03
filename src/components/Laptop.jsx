import React from "react";

const Laptop = ({ brandName, model, price }) => {
  return (
    <div
      style={{
        backgroundColor: "gray",
        padding: "10px",
        margin: "20px",
        color: "wheat",
        borderRadius: "5px",
        width: "500px",
      }}
    >
      <h3>BrandName - {brandName}</h3>
      <h3>Model - {model}</h3>
      <h3>Price - {price}</h3>
    </div>
  );
};

export default Laptop;
