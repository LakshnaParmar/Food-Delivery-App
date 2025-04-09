import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQty, incrementQty, RemoveItem } from '../redux/cartSlice';

const ShoppingCard2 = ({id, name, image, price, qty}) => {
let items = useSelector(state=>state.cart)
console.log('data',items);

let dispatch = useDispatch()
  return (
    <div class='w-full h-[120px] p-2 shadow-lg flex justify-between'>
     <div class='w-[60%] h-full flex gap-5'>
        <div class='w-[60%] h-full overflow-hidden rounded-lg'>
            <img src={image} class='object-cover' />
        </div>
        <div class='w-[40%] h-full flex flex-col gap-3'>
            <div class='text-lg text-gray-600 font-semibold'>{name}</div>
            <div class='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg text-red-800 border-2 border-rose-800 font-semibold text-xl'>
                <button class='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200' onClick={()=>{qty>1?dispatch(decrementQty(id)):1}}> - </button>
                <span class='w-[40%] h-full bg-slate-200 flex justify-center items-center'> {qty} </span>
                <button class='w-[30%] h-full bg-white flex justify-center items-center hover:bg-gray-200' onClick={()=>{dispatch(incrementQty(id))}}> + </button>
            </div>
        </div>
    </div>

     <div class='flex flex-col justify-start items-end gap-6'>
        <span class='text-xl text-rose-800 font-semibold'>{price}</span>
        <RiDeleteBin6Line class='w-[30px] h-[30px] text-gray-600 cursor-pointer' onClick={()=>dispatch(RemoveItem(id))}/>
     </div>
    </div>
  )
}

export default ShoppingCard2
