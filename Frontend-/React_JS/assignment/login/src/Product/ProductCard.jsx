function ProductCard({ productName, price, discount = 0, inStock }) {
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">{productName}</h3>
        <div className="app-card__meta">
          <p className="app-card__text">Price: ₹{price}</p>
          <p className="app-card__text">Discount: {discount}%</p>
          <p className="app-card__text">Status: {inStock ? 'Available' : 'Out of Stock'}</p>
        </div>
      </div>
      <div className="app-card__footer">
        <span className={inStock ? 'app-badge app-badge--success' : 'app-badge app-badge--warning'}>
          {inStock ? 'In Stock' : 'Sold Out'}
        </span>
        <button className="btn btn-primary" disabled={!inStock}>
          {inStock ? 'Buy Now' : 'Notify Me'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
