import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementItem, decrementItem, removeItem } from '../redux/actions';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const cartCount = useSelector(state => state.cartCount);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Giỏ Hàng</h2>
      <p>Tổng Số Lượng: {cartCount}</p>
      <p>Tổng Chi Phí: ${totalCost.toFixed(2)}</p>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <div style={{ flex: 1 }}>
              <h4>{item.name}</h4>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
            </div>
            <div>
              <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
              <button className="decrement" onClick={() => dispatch(decrementItem(item.id))}>-</button>
              <button className="remove" onClick={() => dispatch(removeItem(item))}>Xóa</button>
            </div>
          </div>
        ))
      )}
      <div className="cart-buttons">
        <Link to="/products">
          <button>Tiếp Tục Mua Sắm</button>
        </Link>
        <button onClick={() => alert('Chức năng thanh toán đang phát triển!')}>
          Thanh Toán
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
