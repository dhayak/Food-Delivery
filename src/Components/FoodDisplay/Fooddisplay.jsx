import React, { useContext } from 'react'
import './Fooddisplay.css'
import { Storecontext } from '../../Context/Storecontext'
import FoodItem from '../FoodItem/FoodItem'

const Fooddisplay = ({category}) => {

  const {food_list} =useContext(Storecontext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near You</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          {console.log(category,item.category);}
          if (category==="All" || category===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
          
        })}
      </div>
    </div>
  )
}

export default Fooddisplay
