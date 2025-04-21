export const addToCart = plant => ({ type: 'ADD_TO_CART', payload: plant });
export const incrementItem = id => ({ type: 'INCREMENT_ITEM', payload: id });
export const decrementItem = id => ({ type: 'DECREMENT_ITEM', payload: id });
export const removeItem = item => ({ type: 'REMOVE_ITEM', payload: item });