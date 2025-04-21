import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector(state => state.cartCount);

  return (
    <header>
      <h1>Cửa Hàng Cây Cảnh</h1>
      <nav>
        <Link to="/products">Sản Phẩm</Link>
        <Link to="/cart">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style={{ display: 'inline', marginRight: '0.5rem' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;