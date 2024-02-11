import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const CartPage = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <div>
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Your Cart Items
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg hover:scale-105 duration-300 flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex flex-col justify-between px-2 py-4 flex-grow">
              <div className="flex justify-between">
                <p className="font-bold">{item.name}</p>
                <span className="bg-orange-500 text-white p-1 rounded max-w-10">
                  {item.price}
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-orange-500 text-white p-1 rounded max-w-30 md:max-w-30 lg:max-w-40 mb-4 sm:max-w-26  border-none focus-within:bg-white-600 focus-within:text-orange-600"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove From Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
