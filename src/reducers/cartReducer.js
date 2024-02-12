const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('Item added to cart:', action.payload, state);
      const items = state.items ?? [];
      return {
        ...state,
        items: [...items, action.payload],
      };

export default cartReducer;
