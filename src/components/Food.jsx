import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { data } from "../data/data";
import { addItem } from "../actions/cartActions";

const Food = () => {
  const [filteredFoods, setFilteredFoods] = useState(data);

  const foods = useSelector(state => state.foods);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
    console.log("Item added to cart:", item);
  };

  const filterType = (category) => {
    setFilteredFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFilteredFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Filter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFilteredFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              Burgers
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              Salads
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              Chicken
            </button>
            <button
              onClick={() => filterType("fish")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              Fish
            </button>
            <button
              onClick={() => filterType("pasta")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              Pasta
            </button>
            <button
              onClick={() => filterType("roasted beef")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              Beef
            </button>
            <button
              onClick={() => filterType("others")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              Others
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full px-[-7]">
            <button
              onClick={() => setFilteredFoods(data)}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterPrice("$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white focus-within:bg-orange-600 focus-within:text-white"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
  {filteredFoods.map((item, index) => (
    <div
      key={index}
      className="border shadow-lg rounded-lg hover:scale-105 duration-300 flex flex-col justify-between" // Added flex and justify-between
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex flex-col justify-between px-2 py-4 flex-grow"> {/* Added flex and justify-between */}
        <div className="flex justify-between"> {/* Added flex and justify-between */}
          <p className="font-bold max-w-[300px]">{item.name}</p>
          <span className="bg-orange-500 text-white p-1 rounded max-w-10 max-h-10">
            {item.price}
          </span>
        </div>
      </div>
      <div className="flex justify-center"> {/* Added flex and justify-center */}
        <button
          className="bg-orange-500 text-white p-1 rounded max-w-30 md:max-w-30 lg:max-w-40 mb-4 sm:max-w-26  border-none focus-within:bg-white-600 focus-within:text-orange-600"
          onClick={() => addToCart(item)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Food;
