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
    case 'REMOVE_ITEM':
      const updatedItems = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state;
  }
};

export default cartReducer;
