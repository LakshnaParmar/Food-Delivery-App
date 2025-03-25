import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

const Card = ({food_name, food_image, food_price, food_type}) => {
  return (
    <div class='bg-white w-[300px] h-[400px] p-3 mt-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-2 border-rose-800 cursor-pointer'>
      <div class='w-[100%] h-[60%] overflow-hidden rounded-lg'>
       <img src={food_image} alt="" class='object-cover'/>
      </div>
      <div class='text-xl font-semibold'>
       {food_name}
      </div>
      <div class='w-full flex justify-between items-center'>
        <div class='text-rose-800 font-bold'>{food_price}</div>
        <div class='flex justify-center items-center gap-2 text-rose-800 font-bold'>{food_type==='veg'?<LuLeafyGreen /> : <GiChickenOven />} <span>{food_type}</span></div>
      </div>
      
      <button class='w-full p-3 rounded-lg bg-rose-800 text-white font-semibold hover:bg-rose-600 transition-all cursor-pointer'>Add to card</button>
    </div>
  )
}

export default Card
