import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions';
import { plants } from '../data/plants';

function ProductListing() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const categories = ['Foliage', 'Vines', 'Hanging', 'Flowering'];

  return (
    <div className="product-listing">
      <h2>Danh Sách Cây Cảnh</h2>
      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {plants
              .filter(plant => plant.category === category)
              .map(plant => {
                const isInCart = cart.some(item => item.id === plant.id);
                return (
                  <div key={plant.id} className="product-card">
                    <img src={plant.thumbnail} alt={plant.name} />
                    <h4>{plant.name}</h4>
                    <p>${plant.price.toFixed(2)}</p>
                    <button
                      onClick={() => dispatch(addToCart(plant))}
                      disabled={isInCart}
                    >
                      Thêm vào Giỏ
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;