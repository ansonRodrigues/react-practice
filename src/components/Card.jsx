import React from "react";

const Card = (props) => {
  return (
    <div className="product-card-container">
      <div className="product-card">
        {/* Image Section */}
        <div className="product-image">
          <img src={props.productImage} alt="Nike NK Court Vision Shoes" />

          <img src={props.brandLogo} alt="Nike Logo" className="brand-logo" />
        </div>

        {/* Product Info */}
        <div className="product-details">
          <h2 className="product-title">{props.title}</h2>
          <p className="product-description">{props.prodDesc}</p>
        </div>

        {/* Footer */}
        <div className="product-footer">
          <span className="price">{props.price}</span>
          <button className="buy-btn">
            Buy Now <span className="arrow">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
