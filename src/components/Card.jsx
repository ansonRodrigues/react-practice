import React from 'react'

const Card = () => {
  return (
    <div className="product-card">
      
      {/* Image Section */}
      <div className="product-image">
        <img 
          src="" 
          alt="Nike NK Court Vision Shoes"
        />

        {/* Top Labels */}
        <span className="badge">Best Seller</span>

        <img 
          src="" 
          alt="Nike Logo" 
          className="brand-logo"
        />
      </div>

      {/* Product Info */}
      <div className="product-details">
        <h2 className="product-title">Nike NK Court Vision</h2>
        <p className="product-subtitle">Own the Court</p>
        <p className="product-description">
          Step back into classic hoops style with a durable leather.
        </p>
      </div>

      {/* Footer */}
      <div className="product-footer">
        <span className="price">$156</span>
        <button className="buy-btn">
          Buy Now <span className="arrow">↗</span>
        </button>
      </div>

    </div>
  )
}

export default Card
