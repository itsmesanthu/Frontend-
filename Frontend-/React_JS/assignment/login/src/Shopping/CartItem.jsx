function CartItem({
  productName,
  price,
  quantity = 1,
}) {
  const total = price * quantity;
  return (
    <div className="app-card">
      <div className="app-card__content">
        <h3 className="app-card__title">{productName}</h3>
        <div className="app-card__meta">
          <p className="app-card__text">Price: ₹{price}</p>
          <p className="app-card__text">Quantity: {quantity}</p>
          <p className="app-card__text"><strong>Total: ₹{total}</strong></p>
        </div>
      </div>
      <div className="app-card__footer">
        <span className="app-badge">In Cart</span>
        <button className="btn btn-primary">Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;