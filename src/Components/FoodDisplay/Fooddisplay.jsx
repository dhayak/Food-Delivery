import React, { useContext } from 'react';
import './Fooddisplay.css';
import { Storecontext } from '../../Context/Storecontext';
import FoodItem from '../FoodItem/FoodItem';

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);

  const filteredFoodList = food_list.filter(
    item => category === "All" || category === item.category
  );

  return (
    <div className="food-display" id="food-display">
      <h2>Top Dishes near You</h2>
      <div className="food-display-list">
        {filteredFoodList.length > 0 ? (
          filteredFoodList.map(item => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <p className="no-items">No items available for this category.</p>
        )}
      </div>
    </div>
  );
};

Fooddisplay.defaultProps = {
  category: "All",
};

export default Fooddisplay;
