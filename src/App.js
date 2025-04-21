import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/products"
          element={
            <>
              <Header />
              <ProductListing />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <ShoppingCart />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;