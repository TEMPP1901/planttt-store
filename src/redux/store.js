import { createStore } from 'redux';

const initialState = {
  cart: [],
  cartCount: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          cartCount: state.cartCount + 1,
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        cartCount: state.cartCount + 1,
      };
    case 'INCREMENT_ITEM':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        cartCount: state.cartCount + 1,
      };
    case 'DECREMENT_ITEM':
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
        cartCount: state.cartCount - 1,
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
        cartCount: state.cartCount - action.payload.quantity,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);
export default store;