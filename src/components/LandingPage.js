import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: 'url(/assets/images/background.png)',
      }}
    >
      <h1>Cửa Hàng Cây Cảnh</h1>
      <p>
        Chào mừng bạn đến với Cửa Hàng Cây Cảnh, nơi cung cấp những loại cây cảnh đẹp nhất để làm
        xanh không gian sống của bạn. Khám phá bộ sưu tập của chúng tôi ngay hôm nay!
      </p>
      <Link to="/products">
        <button>Bắt Đầu</button>
      </Link>
    </div>
  );
}

export default LandingPage;